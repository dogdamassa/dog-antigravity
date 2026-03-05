'use client';

import { useLanguage } from "@/components/Providers";
import { getTranslations } from "@/lib/translations";
import { ExternalLink, ChevronRight, Code } from "lucide-react";

const sectionMeta = [
    {
        videoId: "rSS0O2KQpsI",
        image: "/ordinalpfp.png",
        iconBg: "#111111",
        iconColor: "#3B82F6",
        accentColor: "#3B82F6",
        link: "https://docs.ordinals.com/introduction.html",
        githubLink: "https://github.com/ordinals/ord",
    },
    {
        videoId: null,
        image: "/runepfp.png",
        iconBg: "#111111",
        iconColor: "#F7931A",
        accentColor: "#F7931A",
        link: "https://docs.ordinals.com/introduction.html",
        githubLink: null,
    },
    {
        videoId: null,
        image: "/dog-logo.jpg",
        iconBg: "#111111",
        iconColor: "#EAB308",
        accentColor: "#EAB308",
        link: null,
        githubLink: null,
    },
    {
        videoId: null,
        image: "/bitflow.png",
        iconBg: "#FFFFFF",
        iconColor: "#F7931A",
        accentColor: "#F7931A",
        link: "https://www.bff.army/bootcamp",
        githubLink: null,
    },
    {
        videoId: null,
        image: "/privacy.png",
        iconBg: "#111111",
        iconColor: "#3B82F6",
        accentColor: "#3B82F6",
        link: null,
        githubLink: null,
    },
    {
        videoId: null,
        image: "/ledger.png",
        iconBg: "#111111",
        iconColor: "#F7931A",
        accentColor: "#F7931A",
        link: null,
        githubLink: null,
    },
];

export default function EducacaoPage() {
    const { language } = useLanguage();
    const tr = getTranslations(language);
    const t = tr.educacao;

    const eduSections = t.sections.map((s, i) => ({ ...s, ...sectionMeta[i] }));

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
                    className="text-[19px] max-w-[500px] mx-auto text-foreground/70"
                >
                    {t.subtitle}
                </p>
            </div>

            {/* Education Cards */}
            <div className="max-w-[980px] mx-auto px-4 md:px-6 py-12 md:py-16 space-y-4">
                {eduSections.map((section) => {
                    return (
                        <div
                            key={section.title}
                            className="apple-card p-8 md:p-12 relative overflow-hidden group"
                            style={{
                                background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(20,20,22,1) 100%)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)"
                            }}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start relative z-10">
                                {/* Icon/Image */}
                                <div
                                    className="w-16 h-16 rounded-[18px] flex items-center justify-center shrink-0 p-1.5"
                                    style={{ background: section.iconBg, border: "0.5px solid rgba(255,255,255,0.08)", boxShadow: "0 4px 12px rgba(0,0,0,0.5) inset" }}
                                >
                                    <img src={section.image} alt={section.title} className="w-full h-full object-cover rounded-xl" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <h3
                                            className="text-[28px] md:text-[34px] font-bold leading-[1.07] mb-1 text-foreground"
                                            style={{ letterSpacing: "-0.018em" }}
                                        >
                                            {section.title}
                                        </h3>
                                        <p
                                            className="text-[15px] font-semibold tracking-wide"
                                            style={{ color: section.accentColor }}
                                        >
                                            {section.eyebrow}
                                        </p>
                                    </div>

                                    <p
                                        className="text-[17px] leading-[1.6] text-foreground/80"
                                    >
                                        {section.content}
                                    </p>

                                    {section.videoId && (
                                        <div className="w-full aspect-video rounded-xl overflow-hidden border my-6" style={{ borderColor: "var(--apple-separator)" }}>
                                            <iframe
                                                src={`https://www.youtube.com/embed/${section.videoId}`}
                                                title={`Video: ${section.title}`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full"
                                            />
                                        </div>
                                    )}

                                    {(section.link || section.githubLink) && (
                                        <div className="flex flex-wrap gap-5 pt-2">
                                            {section.link && (
                                                <a
                                                    href={section.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-[15px] font-semibold hover:underline underline-offset-2 transition-all"
                                                    style={{ color: section.accentColor }}
                                                >
                                                    {t.docLink}
                                                    <ChevronRight className="w-4 h-4" />
                                                </a>
                                            )}
                                            {section.githubLink && (
                                                <a
                                                    href={section.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-[15px] font-medium transition-colors hover:text-foreground text-foreground/60 hover:underline underline-offset-2"
                                                >
                                                    <Code className="w-4 h-4" />
                                                    GitHub ordinals/ord
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Philosophy Section */}
            <div
                className="px-4 md:px-6 py-16 md:py-24"
                style={{ background: "var(--apple-section-alt)" }}
            >
                <div className="max-w-[640px] mx-auto text-center">
                    <p
                        className="text-[12px] font-semibold uppercase tracking-[0.09em] mb-5"
                        style={{ color: "#F7931A" }}
                    >
                        {t.philosophy.eyebrow}
                    </p>
                    <h2
                        className="text-[34px] md:text-[48px] font-bold leading-[1.07] mb-4 text-foreground"
                        style={{ letterSpacing: "-0.022em" }}
                    >
                        {t.philosophy.title}
                    </h2>
                    <p
                        className="text-[17px] md:text-[19px] mb-10 leading-[1.6] text-foreground/70"
                    >
                        {t.philosophy.content}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {t.philosophy.badges.map((badge) => (
                            <span
                                key={badge}
                                className="px-6 py-3 rounded-2xl text-[14px] font-bold tracking-tight transition-all hover:scale-105"
                                style={{
                                    background: "rgba(247,147,26,0.1)",
                                    border: "1px solid rgba(247,147,26,0.2)",
                                    color: "#F7931A",
                                    boxShadow: "0 4px 20px -5px rgba(247,147,26,0.1)"
                                }}
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-px mx-6" style={{ background: "var(--apple-separator)" }} />
        </div>
    );
}
