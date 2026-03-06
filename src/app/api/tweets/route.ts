import { NextResponse } from 'next/server';

export const revalidate = 300; // 5 minutes

export const TWEET_HANDLES = [
  'BitcoinMagazine', 'WatcherGuru', 'Cointelegraph', 'coinbureau',
  'whale_alert', 'AltcoinDailyio', 'DecryptMedia', 'TheBlock__',
  'lookonchain', 'CoinDesk',
];

// Public nitter instances — tried in parallel, first to respond wins
const NITTER_INSTANCES = [
  'https://nitter.privacydev.net',
  'https://nitter.poast.org',
  'https://xcancel.com',
  'https://nitter.1d4.us',
  'https://nitter.cz',
];

export interface TweetData {
  id: string;
  text: string;
  createdAt: string;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  metrics: {
    views: number;
    replies: number;
    retweets: number;
    likes: number;
  };
}

export interface TweetFeedItem {
  type: 'latest' | 'top';
  tweet: TweetData;
}

// ── RSS parsing ────────────────────────────────────────────────────────────

function parseNitterRSS(xml: string, handle: string): TweetData[] {
  // Avatar: channel image → convert nitter proxy to real Twitter CDN URL
  const imgMatch = xml.match(/<image>[\s\S]*?<url>([^<]+)<\/url>/);
  let authorAvatar = '';
  if (imgMatch) {
    const picPath = imgMatch[1].trim().replace(/^https?:\/\/[^/]+\/pic\//, '');
    authorAvatar = picPath ? 'https://' + decodeURIComponent(picPath) : '';
  }

  // Author display name from channel title "Display / @handle"
  const chanTitleMatch = xml.match(/<channel>[\s\S]*?<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>/);
  const authorName = chanTitleMatch ? chanTitleMatch[1].split(' / ')[0].trim() : handle;

  const items: TweetData[] = [];
  const itemRe = /<item>([\s\S]*?)<\/item>/g;
  let m;

  while ((m = itemRe.exec(xml)) !== null) {
    const item = m[1];

    // Tweet ID from guid
    const guidMatch = item.match(/<guid[^>]*>([^<]+)<\/guid>/);
    const idMatch = guidMatch?.[1]?.match(/\/status\/(\d+)/);
    if (!idMatch) continue;

    // Date
    const dateMatch = item.match(/<pubDate>([^<]+)<\/pubDate>/);
    const createdAt = dateMatch ? new Date(dateMatch[1].trim()).toISOString() : '';

    // Text: extract from description CDATA, skip retweets
    const descMatch = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/);
    if (!descMatch) continue;
    const rawHtml = descMatch[1];

    // Skip retweets
    const hasRT = /class=["']retweet["']/.test(rawHtml);
    if (hasRT) continue;

    // Extract text from first <p> (tweet body)
    const pMatch = rawHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/);
    const rawText = pMatch ? pMatch[1] : rawHtml;

    // Strip HTML tags and decode entities
    const text = rawText
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;|&apos;/g, "'")
      // Strip trailing t.co URLs (media attachment noise)
      .replace(/(\s*https?:\/\/t\.co\/\S+)+$/, '')
      .trim();

    if (!text || text.startsWith('RT @')) continue;

    items.push({
      id: idMatch[1],
      text,
      createdAt,
      authorName,
      authorHandle: handle,
      authorAvatar,
      metrics: { views: 0, replies: 0, retweets: 0, likes: 0 },
    });
  }

  return items.slice(0, 5);
}

async function fetchFromInstance(instance: string, handle: string): Promise<TweetData[]> {
  const res = await fetch(`${instance}/${handle}/rss`, {
    signal: AbortSignal.timeout(5000),
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; crypto-news-aggregator/1.0)' },
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const xml = await res.text();
  const tweets = parseNitterRSS(xml, handle);
  if (!tweets.length) throw new Error('empty');
  return tweets;
}

async function fetchHandle(handle: string): Promise<TweetData[]> {
  // Race all instances simultaneously — take whichever responds first
  try {
    return await Promise.any(NITTER_INSTANCES.map(inst => fetchFromInstance(inst, handle)));
  } catch {
    return [];
  }
}

// ── Twitter API v2 (when TWITTER_BEARER_TOKEN is set) ─────────────────────

async function fetchFromTwitterAPI(token: string): Promise<TweetFeedItem[]> {
  const query = TWEET_HANDLES.map(h => `from:${h}`).join(' OR ') + ' -is:retweet';
  const url = new URL('https://api.twitter.com/2/tweets/search/recent');
  url.searchParams.set('query', query);
  url.searchParams.set('max_results', '100');
  url.searchParams.set('tweet.fields', 'created_at,author_id,public_metrics');
  url.searchParams.set('expansions', 'author_id');
  url.searchParams.set('user.fields', 'name,username,profile_image_url');

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`Twitter API ${res.status}`);

  const data = await res.json();
  const rawTweets: {
    id: string; text: string; created_at?: string; author_id: string;
    public_metrics?: { reply_count?: number; retweet_count?: number; like_count?: number; impression_count?: number };
  }[] = data.data ?? [];
  const users: { id: string; name?: string; username?: string; profile_image_url?: string }[] =
    data.includes?.users ?? [];

  const emptyUser: { id: string; name?: string; username?: string; profile_image_url?: string } = { id: '' };
  const userMap = new Map(users.map(u => [u.id, u]));

  const tweets: TweetData[] = rawTweets.map(t => {
    const u = userMap.get(t.author_id) ?? emptyUser;
    return {
      id: t.id,
      text: t.text.replace(/(\s*https:\/\/t\.co\/\S+)+$/, '').trim(),
      createdAt: t.created_at ?? '',
      authorName: u.name ?? '',
      authorHandle: u.username ?? '',
      authorAvatar: (u.profile_image_url ?? '').replace('_normal', '_bigger'),
      metrics: {
        views: t.public_metrics?.impression_count ?? 0,
        replies: t.public_metrics?.reply_count ?? 0,
        retweets: t.public_metrics?.retweet_count ?? 0,
        likes: t.public_metrics?.like_count ?? 0,
      },
    };
  });

  const byAuthor = new Map<string, TweetData[]>();
  for (const tw of tweets) {
    const key = tw.authorHandle.toLowerCase();
    if (!byAuthor.has(key)) byAuthor.set(key, []);
    byAuthor.get(key)!.push(tw);
  }

  const items: TweetFeedItem[] = [];

  for (const handle of TWEET_HANDLES) {
    const group = byAuthor.get(handle.toLowerCase()) ?? [];
    if (!group.length) continue;
    const sorted = [...group].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    items.push({ type: 'latest', tweet: sorted[0] });
  }

  for (const handle of TWEET_HANDLES) {
    const group = byAuthor.get(handle.toLowerCase()) ?? [];
    if (group.length < 2) continue;
    const byDate = [...group].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const byEng = [...group].sort((a, b) => {
      const sA = a.metrics.retweets * 3 + a.metrics.likes + a.metrics.replies * 2;
      const sB = b.metrics.retweets * 3 + b.metrics.likes + b.metrics.replies * 2;
      return sB - sA;
    });
    if (byEng[0].id !== byDate[0].id) items.push({ type: 'top', tweet: byEng[0] });
  }

  return items;
}

// ── Main handler ───────────────────────────────────────────────────────────

export async function GET() {
  // Twitter API v2 takes priority when token is configured
  const token = process.env.TWITTER_BEARER_TOKEN;
  if (token) {
    try {
      const items = await fetchFromTwitterAPI(token);
      return NextResponse.json({ items, source: 'twitter_api' });
    } catch {
      // Fall through to nitter
    }
  }

  // Nitter RSS — no API key needed, all accounts fetched in parallel
  try {
    const results = await Promise.allSettled(
      TWEET_HANDLES.map(handle => fetchHandle(handle))
    );

    const items: TweetFeedItem[] = [];
    results.forEach((result, i) => {
      const tweets = result.status === 'fulfilled' ? result.value : [];
      if (tweets.length > 0) {
        items.push({ type: 'latest', tweet: tweets[0] });
      }
    });

    return NextResponse.json({ items, source: 'nitter' });
  } catch {
    return NextResponse.json({ items: [], source: 'error' });
  }
}
