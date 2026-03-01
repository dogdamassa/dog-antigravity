'use client';

import { mockPosts } from "@/data";
import { useLanguage } from "@/components/Providers";
import { getTranslations } from "@/lib/translations";
import {
    Heart,
    MessageCircle,
    Repeat2,
    Share,
    MoreHorizontal,
    BadgeCheck,
} from "lucide-react";

export default function ComunidadePage() {
    const { language } = useLanguage();
    const tr = getTranslations(language);
    const t = tr.comunidade;

    const trends = [
        { tag: "#DOGArmy", posts: "125K", labelKey: "bitcoin" as const },
        { tag: "#Runes", posts: "85K", labelKey: "tech" as const },
        { tag: "#Ordinals", posts: "64K", labelKey: "culture" as const },
        { tag: "$BTC", posts: "1.2M", labelKey: "finance" as const },
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
                    {t.eyebrow}
                </p>
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

            {/* Content */}
            <div className="max-w-[980px] mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Feed */}
                    <div className="lg:col-span-2 space-y-3">
                        {mockPosts.map((post) => (
                            <div
                                key={post.id}
                                className="apple-card p-5 md:p-6"
                                style={{ border: "0.5px solid var(--apple-separator)" }}
                            >
                                <div className="flex gap-4">
                                    <div
                                        className="w-11 h-11 rounded-full flex items-center justify-center text-xl shrink-0"
                                        style={{ background: "var(--apple-section-alt)" }}
                                    >
                                        {post.avatar}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between mb-2 gap-2">
                                            <div className="flex items-center gap-1.5 min-w-0 flex-wrap">
                                                <span className="font-semibold text-[15px] truncate">
                                                    {post.author}
                                                </span>
                                                <BadgeCheck
                                                    className="w-4 h-4 shrink-0"
                                                    style={{ color: "#F7931A" }}
                                                />
                                                <span
                                                    className="text-[13px] truncate"
                                                    style={{ color: "var(--apple-text-secondary)" }}
                                                >
                                                    {post.handle}
                                                </span>
                                                <span
                                                    className="text-[13px]"
                                                    style={{ color: "var(--apple-text-tertiary)" }}
                                                >
                                                    · {post.date}
                                                </span>
                                            </div>
                                            <MoreHorizontal
                                                className="w-4 h-4 shrink-0"
                                                style={{ color: "var(--apple-text-tertiary)" }}
                                            />
                                        </div>

                                        <p
                                            className="text-[15px] leading-[1.55] mb-4 whitespace-pre-wrap"
                                            style={{ color: "var(--foreground)" }}
                                        >
                                            {post.content}
                                        </p>

                                        <div
                                            className="flex items-center gap-6 text-[13px]"
                                            style={{ color: "var(--apple-text-tertiary)" }}
                                        >
                                            <button className="flex items-center gap-1.5 hover:text-[#F7931A] transition-colors duration-150 group">
                                                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                <span>{post.replies}</span>
                                            </button>
                                            <button className="flex items-center gap-1.5 hover:text-green-500 transition-colors duration-150 group">
                                                <Repeat2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                <span>{post.reposts}</span>
                                            </button>
                                            <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors duration-150 group">
                                                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                <span>{post.likes}</span>
                                            </button>
                                            <button className="hover:text-[#F7931A] transition-colors duration-150">
                                                <Share className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-4">
                        <div
                            className="apple-card p-6"
                            style={{ border: "0.5px solid var(--apple-separator)" }}
                        >
                            <h3
                                className="text-[17px] font-semibold mb-5"
                                style={{ letterSpacing: "-0.016em" }}
                            >
                                {t.trending.title}
                            </h3>
                            <div className="space-y-5">
                                {trends.map((trend) => (
                                    <div key={trend.tag} className="cursor-pointer group">
                                        <p
                                            className="text-[11px] font-medium uppercase tracking-[0.06em]"
                                            style={{ color: "var(--apple-text-tertiary)" }}
                                        >
                                            {t.trending.labels[trend.labelKey]}
                                        </p>
                                        <p
                                            className="text-[15px] font-semibold group-hover:underline underline-offset-2 mt-0.5"
                                            style={{ color: "#F7931A" }}
                                        >
                                            {trend.tag}
                                        </p>
                                        <p
                                            className="text-[12px]"
                                            style={{ color: "var(--apple-text-tertiary)" }}
                                        >
                                            {trend.posts} posts
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="w-full mt-6 py-2.5 rounded-full text-[14px] font-semibold border transition-colors duration-150 hover:opacity-80"
                                style={{
                                    borderColor: "#F7931A",
                                    color: "#F7931A",
                                }}
                            >
                                {t.trending.showMore}
                            </button>
                        </div>

                        <div
                            className="apple-card p-5"
                            style={{ border: "0.5px solid var(--apple-separator)" }}
                        >
                            <p
                                className="text-[13px] leading-[1.55] mb-3"
                                style={{ color: "var(--apple-text-secondary)" }}
                            >
                                {t.sidebar.disclaimer}
                            </p>
                            <button
                                className="text-[13px] font-semibold hover:underline underline-offset-2"
                                style={{ color: "#F7931A" }}
                            >
                                {t.sidebar.policies}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer separator */}
            <div
                className="h-px mx-6"
                style={{ background: "var(--apple-separator)" }}
            />
        </div>
    );
}
