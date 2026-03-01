import { NextResponse } from 'next/server';

export interface VideoItem {
    videoId: string;
    title: string;
    thumbnail: string;
    publishedAt: string;
}

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

export async function GET() {
    const channelId = 'UCyocm7zOzWBpk6Awpa2vzUw';
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey) {
        return NextResponse.json({
            videos: FALLBACK_VIDEOS,
            source: 'fallback',
        });
    }

    try {
        // 1. Get the uploads playlist ID
        const channelResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
        );
        const channelData = await channelResponse.json();
        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // 2. Get the latest 6 videos from that playlist
        const playlistResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=6&key=${apiKey}`
        );
        const playlistData = await playlistResponse.json();

        const videos: VideoItem[] = playlistData.items.map((item: any) => ({
            videoId: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumbnail:
                item.snippet.thumbnails?.medium?.url ||
                `https://img.youtube.com/vi/${item.snippet.resourceId.videoId}/mqdefault.jpg`,
            publishedAt: item.snippet.publishedAt,
        }));

        return NextResponse.json({ videos, source: 'api' });
    } catch {
        return NextResponse.json({
            videos: FALLBACK_VIDEOS,
            source: 'error_fallback',
        });
    }
}
