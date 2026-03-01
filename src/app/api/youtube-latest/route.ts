import { NextResponse } from 'next/server';

export interface VideoItem {
    videoId: string;
    title: string;
    thumbnail: string;
    publishedAt: string;
}

const CHANNEL_ID = 'UCyocm7zOzWBpk6Awpa2vzUw';

const FALLBACK_VIDEOS: VideoItem[] = [
    {
        videoId: 'Hm_z_a1pRw8',
        title: '$DOG Roadmap Update',
        thumbnail: 'https://img.youtube.com/vi/Hm_z_a1pRw8/mqdefault.jpg',
        publishedAt: '',
    },
    {
        videoId: 'emUX2SEoFHs',
        title: 'Why Ordinals are Scaling Bitcoin',
        thumbnail: 'https://img.youtube.com/vi/emUX2SEoFHs/mqdefault.jpg',
        publishedAt: '',
    },
    {
        videoId: 'L1SFCGPiy7M',
        title: 'Runes Launch Guide',
        thumbnail: 'https://img.youtube.com/vi/L1SFCGPiy7M/mqdefault.jpg',
        publishedAt: '',
    },
    {
        videoId: 'D0W8_NREmUA',
        title: '$DOG Analysis',
        thumbnail: 'https://img.youtube.com/vi/D0W8_NREmUA/mqdefault.jpg',
        publishedAt: '',
    },
    {
        videoId: 'bFXwPq-4YSo',
        title: 'Bitcoin Runes Explained',
        thumbnail: 'https://img.youtube.com/vi/bFXwPq-4YSo/mqdefault.jpg',
        publishedAt: '',
    },
];

/**
 * Parse YouTube RSS/Atom XML feed to extract video entries.
 * This approach does NOT require a YouTube API key.
 */
function parseVideosFromXml(xml: string): VideoItem[] {
    const videos: VideoItem[] = [];
    // Match each <entry> block
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let entryMatch;
    while ((entryMatch = entryRegex.exec(xml)) !== null) {
        const entry = entryMatch[1];
        const videoId = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] ?? '';
        const title = entry.match(/<title>(.*?)<\/title>/)?.[1] ?? '';
        const publishedAt = entry.match(/<published>(.*?)<\/published>/)?.[1] ?? '';
        const thumbnail =
            entry.match(/<media:thumbnail url="(.*?)"/)?.[1] ??
            `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

        if (videoId) {
            videos.push({ videoId, title, thumbnail, publishedAt });
        }
    }
    return videos;
}

export async function GET() {
    try {
        // Use YouTube RSS/Atom feed — free, no API key required
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
        const response = await fetch(rssUrl, { next: { revalidate: 600 } }); // cache for 10 min

        if (!response.ok) {
            throw new Error(`RSS feed returned ${response.status}`);
        }

        const xml = await response.text();
        const allVideos = parseVideosFromXml(xml);

        if (allVideos.length === 0) {
            throw new Error('No videos parsed from feed');
        }

        // Return the 6 most recent
        const videos = allVideos.slice(0, 6);
        return NextResponse.json({ videos, source: 'rss' });
    } catch {
        return NextResponse.json({
            videos: FALLBACK_VIDEOS,
            source: 'error_fallback',
        });
    }
}
