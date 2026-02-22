import { NextResponse } from 'next/server';

export async function GET() {
    const channelId = 'UCyocm7zOzWBpk6Awpa2vzUw';
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey) {
        // Fallback to a hardcoded video ID if no API key is provided
        return NextResponse.json({
            videoId: 'Hm_z_a1pRw8', // Recent valid video from Cryptolution
            source: 'fallback'
        });
    }

    try {
        // 1. Get the uploads playlist ID
        const channelResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
        );
        const channelData = await channelResponse.json();
        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // 2. Get the latest video from that playlist
        const playlistResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${apiKey}`
        );
        const playlistData = await playlistResponse.json();
        const latestVideoId = playlistData.items[0].snippet.resourceId.videoId;

        return NextResponse.json({
            videoId: latestVideoId,
            source: 'api'
        });
    } catch (error) {
        return NextResponse.json({
            videoId: 'Hm_z_a1pRw8',
            source: 'error_fallback'
        });
    }
}
