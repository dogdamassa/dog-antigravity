import { NextResponse } from 'next/server';

export const revalidate = 300; // 5 minutes

export const TWEET_HANDLES = [
  'BitcoinMagazine', 'WatcherGuru', 'Cointelegraph', 'coinbureau',
  'whale_alert', 'AltcoinDailyio', 'DecryptMedia', 'TheBlock__',
  'lookonchain', 'CoinDesk',
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

export async function GET() {
  const token = process.env.TWITTER_BEARER_TOKEN;
  if (!token) {
    return NextResponse.json({ items: [], hasToken: false });
  }

  try {
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

    if (!res.ok) {
      return NextResponse.json({ items: [], hasToken: true, error: 'api_error' });
    }

    const data = await res.json();
    const rawTweets: {
      id: string;
      text: string;
      created_at?: string;
      author_id: string;
      public_metrics?: {
        reply_count?: number;
        retweet_count?: number;
        like_count?: number;
        impression_count?: number;
      };
    }[] = data.data ?? [];
    const users: { id: string; name?: string; username?: string; profile_image_url?: string }[] =
      data.includes?.users ?? [];

    const userMap = new Map(users.map(u => [u.id, u]));
    const emptyUser: { id: string; name?: string; username?: string; profile_image_url?: string } = { id: '' };

    const tweets: TweetData[] = rawTweets.map(t => {
      const u = userMap.get(t.author_id) ?? emptyUser;
      return {
        id: t.id,
        // Strip trailing t.co URLs (media attachment noise)
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

    // Group by author handle (case-insensitive)
    const byAuthor = new Map<string, TweetData[]>();
    for (const tw of tweets) {
      const key = tw.authorHandle.toLowerCase();
      if (!byAuthor.has(key)) byAuthor.set(key, []);
      byAuthor.get(key)!.push(tw);
    }

    const items: TweetFeedItem[] = [];

    // Pass 1: latest tweet per account
    for (const handle of TWEET_HANDLES) {
      const group = byAuthor.get(handle.toLowerCase()) ?? [];
      if (!group.length) continue;
      const sorted = [...group].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      items.push({ type: 'latest', tweet: sorted[0] });
    }

    // Pass 2: top engagement tweet per account (only if different from latest)
    for (const handle of TWEET_HANDLES) {
      const group = byAuthor.get(handle.toLowerCase()) ?? [];
      if (group.length < 2) continue;
      const byDate = [...group].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      const byEngagement = [...group].sort((a, b) => {
        const sA = a.metrics.retweets * 3 + a.metrics.likes + a.metrics.replies * 2;
        const sB = b.metrics.retweets * 3 + b.metrics.likes + b.metrics.replies * 2;
        return sB - sA;
      });
      if (byEngagement[0].id !== byDate[0].id) {
        items.push({ type: 'top', tweet: byEngagement[0] });
      }
    }

    return NextResponse.json({ items, hasToken: true });
  } catch {
    return NextResponse.json({ items: [], hasToken: true, error: 'fetch_error' });
  }
}
