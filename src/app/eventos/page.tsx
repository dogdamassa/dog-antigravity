'use client';

import { dogEvents } from "@/data";
import { useLanguage } from "@/components/Providers";
import { getTranslations } from "@/lib/translations";
import { Calendar, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";

export default function EventosPage() {
    const { language } = useLanguage();
    const tr = getTranslations(language);
    const t = tr.eventos;

    const upcomingEvents = dogEvents.filter((e) => e.status === "upcoming");
    const pastEvents = dogEvents.filter((e) => e.status === "past");

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

            {/* Featured — DOG Summit */}
            <div
                className="px-4 md:px-6 py-12 md:py-16"
                style={{ background: "var(--apple-section-alt)" }}
            >
                <div className="max-w-[980px] mx-auto">
                    <a
                        href="https://www.dogsummit.club/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-card block overflow-hidden group"
                        style={{ background: "linear-gradient(135deg, #F7931A 0%, #FFD700 100%)" }}
                    >
                        <div className="p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                            <div>
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em] mb-5"
                                    style={{ background: "rgba(29,29,31,0.12)", color: "#1D1D1F" }}
                                >
                                    {t.featured.badge}
                                </div>
                                <h2
                                    className="text-[42px] md:text-[56px] font-bold leading-[1.04] mb-4"
                                    style={{ letterSpacing: "-0.022em", color: "#1D1D1F" }}
                                >
                                    {t.featured.title}
                                </h2>
                                <div className="flex flex-wrap gap-5 text-[15px] font-medium" style={{ color: "rgba(29,29,31,0.7)" }}>
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        2025
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        São Paulo, BR
                                    </span>
                                </div>
                                <p
                                    className="text-[17px] mt-5 max-w-[500px] leading-[1.47]"
                                    style={{ color: "rgba(29,29,31,0.75)" }}
                                >
                                    {t.featured.description}
                                </p>
                            </div>
                            <div className="shrink-0">
                                <span
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[15px] font-semibold transition-opacity hover:opacity-80"
                                    style={{ background: "#1D1D1F", color: "#ffffff" }}
                                >
                                    {t.featured.cta}
                                    <ArrowUpRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            {/* Upcoming & Past Events */}
            <div className="max-w-[980px] mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Upcoming */}
                    <div>
                        <div
                            className="flex items-center gap-2 pb-3 mb-6 border-b"
                            style={{ borderColor: "var(--apple-separator)" }}
                        >
                            <Calendar className="w-4 h-4" style={{ color: "#F7931A" }} />
                            <h3
                                className="text-[19px] font-semibold"
                                style={{ letterSpacing: "-0.016em" }}
                            >
                                {t.upcoming.title}
                            </h3>
                        </div>

                        <div className="space-y-3">
                            {upcomingEvents.length === 0 && (
                                <p className="text-[15px]" style={{ color: "var(--apple-text-secondary)" }}>
                                    {t.upcoming.empty}
                                </p>
                            )}
                            {upcomingEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className="apple-card p-5 flex items-center justify-between gap-4"
                                    style={{ border: "0.5px solid var(--apple-separator)" }}
                                >
                                    <div>
                                        <h4 className="text-[15px] font-semibold mb-1">{event.title}</h4>
                                        <p
                                            className="text-[13px] flex items-center gap-2"
                                            style={{ color: "var(--apple-text-secondary)" }}
                                        >
                                            <span>{event.date}</span>
                                            <span style={{ color: "var(--apple-border)" }}>·</span>
                                            <span>{event.location}</span>
                                        </p>
                                    </div>
                                    {event.link && (
                                        <a
                                            href={event.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:opacity-70"
                                            style={{ background: "#F7931A" }}
                                        >
                                            <ExternalLink className="w-4 h-4 text-white" />
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Past */}
                    <div>
                        <div
                            className="flex items-center gap-2 pb-3 mb-6 border-b"
                            style={{ borderColor: "var(--apple-separator)" }}
                        >
                            <h3
                                className="text-[19px] font-semibold"
                                style={{ letterSpacing: "-0.016em", color: "var(--apple-text-secondary)" }}
                            >
                                {t.past.title}
                            </h3>
                        </div>

                        <div className="space-y-3 opacity-60">
                            {pastEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className="apple-card p-5"
                                    style={{ border: "0.5px solid var(--apple-separator)" }}
                                >
                                    <h4
                                        className="text-[15px] font-semibold mb-1"
                                        style={{ color: "var(--apple-text-secondary)" }}
                                    >
                                        {event.title}
                                    </h4>
                                    <p
                                        className="text-[13px] flex items-center gap-2"
                                        style={{ color: "var(--apple-text-tertiary)" }}
                                    >
                                        <span>{event.date}</span>
                                        <span>·</span>
                                        <span>{event.location}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-px mx-6" style={{ background: "var(--apple-separator)" }} />
        </div>
    );
}
