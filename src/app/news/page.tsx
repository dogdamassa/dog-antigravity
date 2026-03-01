'use client';

import React, { useEffect, useState } from 'react';
import { Play, Youtube, Clock, ArrowUpRight } from "lucide-react";
import type { VideoItem } from '../api/youtube-latest/route';
import { useLanguage } from '@/components/Providers';
import { getTranslations } from '@/lib/translations';

function timeAgo(isoDate: string, tAgo: ReturnType<typeof getTranslations>['news']['timeAgo']): string {
    if (!isoDate) return '';
    const diff = Date.now() - new Date(isoDate).getTime();
    const days = Math.floor(diff / 86400000);
    if (days === 0) return tAgo.today;
    if (days === 1) return tAgo.oneDay;
    if (days < 7) return tAgo.days(days);
    const weeks = Math.floor(days / 7);
    if (weeks === 1) return tAgo.oneWeek;
    if (weeks < 5) return tAgo.weeks(weeks);
    const months = Math.floor(days / 30);
    if (months === 1) return tAgo.oneMonth;
    return tAgo.months(months);
}

// X (Twitter) icon as SVG
function XIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L1.254 2.25H8.08l4.264 5.633L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
    );
}

export default function NewsPage() {
    const [videos, setVideos] = useState<VideoItem[]>([]);
    const [loading, setLoading] = useState(true);
    const { language } = useLanguage();
    const tr = getTranslations(language);
    const t = tr.news;

    useEffect(() => {
        fetch('/api/youtube-latest')
            .then((res) => res.json())
            .then((data) => {
                setVideos(data.videos ?? []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const featuredVideo = videos[0] ?? null;
    const recentVideos = videos.slice(1, 5);

    return (
        <div>
            {/* Page Header */}
            <div
                className="py-12 md:py-16 px-6 text-center border-b"
                style={{ borderColor: "var(--apple-separator)" }}
            >
                <h1
                    className="text-[40px] md:text-[56px] font-bold leading-[1.07] mb-3"
                    style={{ letterSpacing: "-0.022em" }}
                >
                    {t.title}
                </h1>
                <p
                    className="text-[19px]"
                    style={{ color: "var(--apple-text-secondary)" }}
                >
                    {t.subtitle}
                </p>
            </div>

            <div className="max-w-[980px] mx-auto px-4 md:px-6 py-12 md:py-16 space-y-12 md:space-y-16">

                {/* Reporter Profile Card */}
                <section>
                    <div
                        className="apple-card p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-center gap-6 relative overflow-hidden"
                        style={{ background: "linear-gradient(135deg, rgba(29,29,31,0.4) 0%, rgba(17,17,17,0.8) 100%)", border: "0.5px solid rgba(255,255,255,0.08)" }}
                    >
                        {/* Decorative glow */}
                        <div
                            className="absolute top-0 left-0 w-full h-full pointer-events-none"
                            style={{ background: "radial-gradient(circle at 0% 0%, rgba(247,147,26,0.06) 0%, transparent 50%)" }}
                        />

                        {/* Avatar */}
                        <div
                            className="w-24 h-24 rounded-full flex items-center justify-center shrink-0 overflow-hidden relative z-10 shadow-2xl transition-transform hover:scale-105"
                            style={{ border: "2px solid rgba(247,147,26,0.3)" }}
                        >
                            <img
                                src="/vincentpfp.jpg"
                                alt="Vincent Cryptolution"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0 text-center sm:text-left relative z-10">
                            <span
                                className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-1.5 block"
                                style={{ color: "#F7931A" }}
                            >
                                {t.reporter.role}
                            </span>
                            <h2
                                className="text-[26px] font-bold leading-tight mb-2 text-white"
                                style={{ letterSpacing: "-0.018em" }}
                            >
                                Vincent (Cryptolution)
                            </h2>
                            <p
                                className="text-[15px] leading-[1.6]"
                                style={{ color: "#A1A1A6" }}
                            >
                                {t.reporter.bio}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
                            <a
                                href="https://www.youtube.com/@cryptolution"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold hover:opacity-85 transition-opacity shadow-lg"
                                style={{ background: "#DC2626", color: "#ffffff" }}
                            >
                                <Youtube className="w-4 h-4" />
                                {t.reporter.subscribe}
                            </a>
                            <a
                                href="https://x.com/Cryptolution"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold hover:opacity-85 transition-opacity shadow-lg"
                                style={{ background: "#ffffff", color: "#000000" }}
                            >
                                <XIcon className="w-3.5 h-3.5" />
                                {t.reporter.follow}
                            </a>
                        </div>
                    </div>
                </section>

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
                            {t.featured.label}
                        </span>
                    </div>

                    <div
                        className="apple-card overflow-hidden"
                        style={{ border: "0.5px solid var(--apple-separator)" }}
                    >
                        <div className="aspect-video w-full relative">
                            {featuredVideo ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${featuredVideo.videoId}`}
                                    title={featuredVideo.title || "YouTube video player"}
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
                {(loading || recentVideos.length > 0) && (
                    <section>
                        <h2
                            className="text-[28px] md:text-[34px] font-bold mb-8"
                            style={{ letterSpacing: "-0.018em" }}
                        >
                            {t.recent.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {loading
                                ? Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="animate-pulse">
                                        <div
                                            className="aspect-video rounded-[12px] mb-3"
                                            style={{ background: "#E5E5E7" }}
                                        />
                                        <div className="h-4 rounded mb-2" style={{ background: "#E5E5E7" }} />
                                        <div className="h-3 w-2/3 rounded" style={{ background: "#E5E5E7" }} />
                                    </div>
                                ))
                                : recentVideos.map((video) => (
                                    <a
                                        key={video.videoId}
                                        href={`https://youtube.com/watch?v=${video.videoId}`}
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
                                        </div>

                                        <h3
                                            className="text-[14px] font-semibold leading-[1.35] mb-2 group-hover:text-[#F7931A] transition-colors line-clamp-2"
                                            style={{ letterSpacing: "-0.01em", color: "#1D1D1F" }}
                                        >
                                            {video.title}
                                        </h3>
                                        {video.publishedAt && (
                                            <div
                                                className="flex items-center gap-1.5 text-[12px]"
                                                style={{ color: "var(--apple-text-tertiary)" }}
                                            >
                                                <Clock className="w-3 h-3" />
                                                {timeAgo(video.publishedAt, t.timeAgo)}
                                            </div>
                                        )}
                                    </a>
                                ))
                            }
                        </div>
                    </section>
                )}

                {/* Subscribe CTA */}
                <section>
                    <div
                        className="apple-card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
                        style={{ background: "#111111", border: "0.5px solid var(--apple-separator)" }}
                    >
                        <div>
                            <p
                                className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-2"
                                style={{ color: "#F7931A" }}
                            >
                                {t.cta.eyebrow}
                            </p>
                            <h3
                                className="text-[22px] font-bold mb-1 text-white"
                                style={{ letterSpacing: "-0.016em" }}
                            >
                                @cryptolution
                            </h3>
                            <p
                                className="text-[14px]"
                                style={{ color: "#6E6E73" }}
                            >
                                {t.cta.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                            <a
                                href="https://www.youtube.com/@cryptolution"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold hover:opacity-80 transition-opacity"
                                style={{ background: "#DC2626", color: "#ffffff" }}
                            >
                                <Youtube className="w-4 h-4" />
                                {t.cta.subscribeYt}
                            </a>
                            <a
                                href="https://x.com/Cryptolution"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold hover:opacity-80 transition-opacity"
                                style={{ background: "#ffffff", color: "#000000" }}
                            >
                                <XIcon className="w-3.5 h-3.5" />
                                {t.cta.followX}
                            </a>
                        </div>
                    </div>
                </section>

            </div>

            <div className="h-px mx-6" style={{ background: "var(--apple-separator)" }} />
        </div>
    );
}
