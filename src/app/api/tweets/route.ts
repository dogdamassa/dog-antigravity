import { NextResponse } from 'next/server';

export const revalidate = 300; // 5 minutes

// ── Sources: website RSS feeds (no API key needed) + Twitter fallback ──────
interface Source {
  name: string;
  handle: string;
  rss: string | null;
  domain: string;
}

const SOURCES: Source[] = [
  { name: 'Bitcoin Magazine', handle: 'BitcoinMagazine', rss: 'https://bitcoinmagazine.com/feed',                     domain: 'bitcoinmagazine.com' },
  { name: 'Watcher Guru',    handle: 'WatcherGuru',    rss: 'https://watcherguru.com/feed/',                         domain: 'watcherguru.com' },
  { name: 'CoinTelegraph',   handle: 'Cointelegraph',  rss: 'https://cointelegraph.com/rss',                         domain: 'cointelegraph.com' },
  { name: 'Coin Bureau',     handle: 'coinbureau',     rss: 'https://coinbureau.com/feed/',                          domain: 'coinbureau.com' },
  { name: 'Altcoin Daily',   handle: 'AltcoinDailyio', rss: 'https://altcoindaily.io/feed/',                         domain: 'altcoindaily.io' },
  { name: 'Decrypt',         handle: 'DecryptMedia',   rss: 'https://decrypt.co/feed',                               domain: 'decrypt.co' },
  { name: 'The Block',       handle: 'TheBlock__',     rss: 'https://www.theblock.co/rss.xml',                       domain: 'theblock.co' },
  { name: 'CoinDesk',        handle: 'CoinDesk',       rss: 'https://www.coindesk.com/arc/outboundfeeds/rss/',       domain: 'coindesk.com' },
  { name: 'Whale Alert',     handle: 'whale_alert',    rss: null,                                                    domain: 'whale-alert.io' },
  { name: 'Lookonchain',     handle: 'lookonchain',    rss: null,                                                    domain: 'lookonchain.com' },
];

export const TWEET_HANDLES = SOURCES.map(s => s.handle);

export interface TweetData {
  id: string;
  url?: string;       // Article link (overrides twitter URL in the card)
  text: string;
  createdAt: string;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  metrics: { views: number; replies: number; retweets: number; likes: number };
}

export interface TweetFeedItem {
  type: 'latest' | 'top';
  tweet: TweetData;
}

// ── Helpers ────────────────────────────────────────────────────────────────

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function stripHtml(s: string): string {
  return s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function extractTag(xml: string, tag: string): string {
  // Handles both CDATA and plain text versions
  const cdataRe = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`);
  const plainRe  = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`);
  const m = xml.match(cdataRe) || xml.match(plainRe);
  return m ? m[1].trim() : '';
}

// ── RSS feed parser ────────────────────────────────────────────────────────

function parseRSSFeed(xml: string, source: Source): TweetData[] {
  const items: TweetData[] = [];
  const itemRe = /<item>([\s\S]*?)<\/item>/g;
  let m;
  const avatar = `https://www.google.com/s2/favicons?domain=${source.domain}&sz=64`;

  while ((m = itemRe.exec(xml)) !== null) {
    const item = m[1];

    // Title
    const rawTitle = extractTag(item, 'title');
    if (!rawTitle) continue;
    const title = decodeEntities(stripHtml(rawTitle));
    if (!title) continue;

    // URL: prefer <link>, fallback to <guid>
    const linkMatch = item.match(/<link>([^<]+)<\/link>/) ||
                      item.match(/<guid[^>]*>([^<]+)<\/guid>/);
    const articleUrl = linkMatch ? linkMatch[1].trim() : '';

    // Stable ID: slug from URL or hash from title
    const slug = articleUrl.split('/').filter(Boolean).pop() ??
                 Math.abs([...title].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 0)).toString(36);

    // Date
    const dateStr = extractTag(item, 'pubDate') || extractTag(item, 'dc:date');
    const createdAt = dateStr ? new Date(dateStr).toISOString() : new Date().toISOString();

    items.push({
      id: slug,
      url: articleUrl || undefined,
      text: title,
      createdAt,
      authorName: source.name,
      authorHandle: source.handle,
      authorAvatar: avatar,
      metrics: { views: 0, replies: 0, retweets: 0, likes: 0 },
    });
  }

  return items.slice(0, 3); // up to 3 latest articles per source
}

async function fetchRSS(source: Source): Promise<TweetData[]> {
  if (!source.rss) return [];
  try {
    const res = await fetch(source.rss, {
      signal: AbortSignal.timeout(8000),
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; feed-reader/1.0)', 'Accept': 'application/rss+xml, application/xml, text/xml, */*' },
      cache: 'no-store',
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseRSSFeed(xml, source);
  } catch {
    return [];
  }
}

// ── Twitter API v2 (optional: set TWITTER_BEARER_TOKEN in Vercel) ──────────

async function fetchFromTwitterAPI(token: string): Promise<TweetFeedItem[]> {
  const handles = SOURCES.map(s => s.handle);
  const query = handles.map(h => `from:${h}`).join(' OR ') + ' -is:retweet';
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
  for (const handle of handles) {
    const group = byAuthor.get(handle.toLowerCase()) ?? [];
    if (!group.length) continue;
    const sorted = [...group].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    items.push({ type: 'latest', tweet: sorted[0] });
  }
  for (const handle of handles) {
    const group = byAuthor.get(handle.toLowerCase()) ?? [];
    if (group.length < 2) continue;
    const byDate = [...group].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    const byEng  = [...group].sort((a, b) => {
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
  // Twitter API v2: best quality, requires TWITTER_BEARER_TOKEN in env vars
  const token = process.env.TWITTER_BEARER_TOKEN;
  if (token) {
    try {
      const items = await fetchFromTwitterAPI(token);
      if (items.length > 0) return NextResponse.json({ items, source: 'twitter_api' });
    } catch { /* fall through */ }
  }

  // RSS feeds: reliable, no API key needed, works everywhere
  const results = await Promise.allSettled(SOURCES.map(source => fetchRSS(source)));

  const items: TweetFeedItem[] = [];
  results.forEach(result => {
    if (result.status !== 'fulfilled') return;
    const articles = result.value;
    if (articles.length > 0) {
      items.push({ type: 'latest', tweet: articles[0] });
    }
  });

  return NextResponse.json({ items, source: items.length > 0 ? 'rss' : 'empty' });
}
