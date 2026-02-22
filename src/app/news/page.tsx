'use client';

import React, { useEffect, useState } from 'react';
import { Play, Youtube, Clock, Eye, ArrowUpRight } from "lucide-react";

export default function NewsPage() {
    const [latestVideoId, setLatestVideoId] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/youtube-latest')
            .then((res) => res.json())
            .then((data) => setLatestVideoId(data.videoId))
            .catch(() => setLatestVideoId('D0W8_NREmUA'));
    }, []);

    const otherVideos = [
        {
            id: 'v1',
            title: '$DOG Roadmap Update',
            thumbnail: 'https://img.youtube.com/vi/Hm_z_a1pRw8/0.jpg',
            url: 'https://youtube.com/watch?v=Hm_z_a1pRw8',
            channel: '@cryptolution',
            date: '1 dia atrás',
            views: '12K',
            duration: '12:45',
        },
        {
            id: 'v2',
            title: 'Why Ordinals are Scaling Bitcoin',
            thumbnail: 'https://img.youtube.com/vi/emUX2SEoFHs/0.jpg',
            url: 'https://youtube.com/watch?v=emUX2SEoFHs',
            channel: '@soberanobtc',
            date: '3 dias atrás',
            views: '45K',
            duration: '24:10',
        },
        {
            id: 'v3',
            title: 'Runes Launch Guide',
            thumbnail: 'https://img.youtube.com/vi/L1SFCGPiy7M/0.jpg',
            url: 'https://youtube.com/watch?v=L1SFCGPiy7M',
            channel: '@dogarmy',
            date: '1 semana atrás',
            views: '28K',
            duration: '18:33',
        },
    ];

    return (
        <div>
            {/* Page Header */}
            <div
                className="py-12 md:py-16 px-6 text-center border-b"
                style={{ borderColor: "var(--apple-separator)" }}
            >
                <p
                    className="text-[12px] font-semibold uppercase tracking-[0.09em] mb-3"
                    style={{ color: "#F7931A" }}
                >
                    Ecossistema $DOG
                </p>
                <h1
                    className="text-[40px] md:text-[56px] font-bold leading-[1.07] mb-3"
                    style={{ letterSpacing: "-0.022em" }}
                >
                    DOG NEWS.
                </h1>
                <p
                    className="text-[19px]"
                    style={{ color: "var(--apple-text-secondary)" }}
                >
                    Acompanhe as últimas atualizações do ecossistema.
                </p>
            </div>

            <div className="max-w-[980px] mx-auto px-4 md:px-6 py-12 md:py-16 space-y-12 md:space-y-16">

                {/* Featured Video */}
                <section>
                    <div className="flex items-center gap-2 mb-5">
                        <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ background: "#EF4444" }}
                        />
                        <span
                            className="text-[12px] font-semibold uppercase tracking-[0.08em]"
                            style={{ color: "var(--apple-text-secondary)" }}
                        >
                            Destaque · Último Vídeo @cryptolution
                        </span>
                    </div>

                    <div
                        className="apple-card overflow-hidden"
                        style={{ border: "0.5px solid var(--apple-separator)" }}
                    >
                        <div className="aspect-video w-full relative">
                            {latestVideoId ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${latestVideoId}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                />
                            ) : (
                                <div
                                    className="absolute inset-0 flex items-center justify-center animate-pulse"
                                    style={{ background: "#1D1D1F" }}
                                >
                                    <Youtube className="w-12 h-12" style={{ color: "rgba(255,255,255,0.2)" }} />
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Recent Videos */}
                <section>
                    <h2
                        className="text-[28px] md:text-[34px] font-bold mb-8"
                        style={{ letterSpacing: "-0.018em" }}
                    >
                        Vídeos Recentes.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherVideos.map((video) => (
                            <a
                                key={video.id}
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block no-underline"
                            >
                                <div
                                    className="aspect-video rounded-[12px] overflow-hidden mb-3 relative"
                                    style={{ background: "#1D1D1F" }}
                                >
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <div
                                            className="w-11 h-11 rounded-full flex items-center justify-center shadow-xl"
                                            style={{ background: "#F7931A" }}
                                        >
                                            <Play className="w-5 h-5 text-white ml-0.5" />
                                        </div>
                                    </div>
                                    <span
                                        className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[11px] font-semibold"
                                        style={{ background: "rgba(0,0,0,0.75)", color: "#ffffff" }}
                                    >
                                        {video.duration}
                                    </span>
                                </div>

                                <h3
                                    className="text-[15px] font-semibold leading-[1.35] mb-2 group-hover:text-[#F7931A] transition-colors"
                                    style={{ letterSpacing: "-0.01em" }}
                                >
                                    {video.title}
                                </h3>
                                <div
                                    className="flex items-center gap-3 text-[12px]"
                                    style={{ color: "var(--apple-text-tertiary)" }}
                                >
                                    <span className="font-semibold" style={{ color: "var(--apple-text-secondary)" }}>
                                        {video.channel}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {video.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Eye className="w-3 h-3" />
                                        {video.views}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Subscribe CTA */}
                <section>
                    <div
                        className="apple-card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
                        style={{ background: "var(--apple-section-alt)", border: "0.5px solid var(--apple-separator)" }}
                    >
                        <div className="flex items-center gap-5">
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                                style={{ background: "#DC2626" }}
                            >
                                <Youtube className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3
                                    className="text-[19px] font-semibold mb-1"
                                    style={{ letterSpacing: "-0.016em" }}
                                >
                                    Siga o @cryptolution
                                </h3>
                                <p
                                    className="text-[14px]"
                                    style={{ color: "var(--apple-text-secondary)" }}
                                >
                                    Conteúdo diário sobre $DOG, Bitcoin e economia.
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://www.youtube.com/@cryptolution"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold hover:opacity-80 transition-opacity shrink-0"
                            style={{ background: "#DC2626", color: "#ffffff" }}
                        >
                            Inscrever-se
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </section>
            </div>

            <div className="h-px mx-6" style={{ background: "var(--apple-separator)" }} />
        </div>
    );
}
