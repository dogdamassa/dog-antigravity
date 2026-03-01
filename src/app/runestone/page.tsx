'use client';

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/Providers";
import { getTranslations } from "@/lib/translations";

function renderTextWithLinks(text: string) {
    if (!text) return null;
    const linkRegex = /\[([^\[\]]+)\]\(([^)]+)\)/g;
    const parts: (string | React.ReactElement)[] = [];
    let lastIndex = 0;
    let match;
    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) parts.push(text.substring(lastIndex, match.index));
        parts.push(
            <a key={match.index} href={match[2]} target="_blank" rel="noopener noreferrer"
                className="text-dog-orange hover:underline font-semibold">
                {match[1]}
            </a>
        );
        lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) parts.push(text.substring(lastIndex));
    return <>{parts.map((p, i) => <React.Fragment key={i}>{p}</React.Fragment>)}</>;
}

function Paragraph({ text }: { text: string }) {
    if (!text) return null;
    return (
        <>
            {text.split('\n\n').filter(Boolean).map((para, i) => (
                <p key={i} className="text-[17px] md:text-[18px] leading-[1.80] mb-5"
                    style={{ color: "var(--apple-text-secondary)" }}>
                    {renderTextWithLinks(para)}
                </p>
            ))}
        </>
    );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-[24px] md:text-[30px] font-bold mb-7"
            style={{ letterSpacing: "-0.02em", color: "var(--foreground)" }}>
            {children}
        </h2>
    );
}

function SectionDivider() {
    return <div className="mb-6 pb-4" style={{ borderBottom: "0.5px solid rgba(247,147,26,0.2)" }} />;
}

function ImageCaption({ children }: { children: React.ReactNode }) {
    return (
        <span className="text-[11px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: "rgba(255,255,255,0.45)" }}>
            {children}
        </span>
    );
}

export default function RunestoneHistoryPage() {
    const { language } = useLanguage();
    const tr = getTranslations(language);
    const t = tr.runestone;
    const b = t.body;

    return (
        <div style={{ background: "var(--background)" }}>

            {/* ═══════════════════════════════════
                HERO — parent-runestone-inscription
            ═══════════════════════════════════ */}
            <div className="relative w-full overflow-hidden" style={{ height: "75vh", minHeight: 480 }}>
                <img
                    src="/parent-runestone-inscription.jpg"
                    alt="Parent Runestone Inscription"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0" style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.70) 75%, rgba(0,0,0,0.97) 100%)",
                }} />
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: "radial-gradient(ellipse 90% 45% at 50% 110%, rgba(247,147,26,0.20) 0%, transparent 65%)",
                }} />

                <div className="absolute bottom-0 left-0 right-0 max-w-[860px] mx-auto px-6 pb-10 md:pb-14">
                    <Link href="/"
                        className="inline-flex items-center gap-1.5 mb-6 text-white/40 hover:text-white/80 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors">
                        <ArrowLeft className="w-3 h-3" />
                        {t.backLink}
                    </Link>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-4" style={{ color: "#F7931A" }}>
                        História · Ordinals · Bitcoin
                    </p>
                    <h1 className="text-[34px] md:text-[54px] lg:text-[62px] font-bold text-white leading-[1.07] mb-4"
                        style={{ letterSpacing: "-0.025em" }}>
                        {t.title}
                    </h1>
                    <p className="text-[16px] md:text-[18px] max-w-[560px] leading-[1.5]"
                        style={{ color: "rgba(255,255,255,0.55)" }}>
                        {t.subtitle}
                    </p>
                </div>
            </div>

            {/* ═══════════════════════════════════
                STATS BAR
            ═══════════════════════════════════ */}
            <div style={{ background: "#0A0A0A", borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}>
                <div className="max-w-[860px] mx-auto px-6">
                    <div className="grid grid-cols-3">
                        {[
                            { value: "3.97 MB", label: "On-Chain Bitcoin" },
                            { value: "112,383", label: "Inscrições distribuídas" },
                            { value: "Rune #3", label: "DOG•GO•TO•THE•MOON" },
                        ].map((s, i) => (
                            <div key={s.label} className="py-5 px-3 text-center"
                                style={{ borderRight: i < 2 ? "0.5px solid rgba(255,255,255,0.07)" : "none" }}>
                                <div className="text-[20px] md:text-[26px] font-bold"
                                    style={{ color: "#F7931A", letterSpacing: "-0.02em" }}>
                                    {s.value}
                                </div>
                                <div className="text-[9px] uppercase tracking-[0.08em] mt-0.5 hidden sm:block"
                                    style={{ color: "#6E6E73" }}>
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ═══════════════════════════════════
                ARTICLE
            ═══════════════════════════════════ */}
            <article className="max-w-[720px] mx-auto px-6 py-14 md:py-20">

                {/* ── INTRO ── */}
                <div className="mb-12">
                    <Paragraph text={b.intro} />
                </div>

                {/* ── LEONIDAS — foto completa, sem crop ── */}
                <figure className="mb-14">
                    <div className="relative rounded-2xl overflow-hidden"
                        style={{ background: "#111" }}>
                        {/* image at natural height — object-contain so he appears whole */}
                        <img
                            src="/leonidas.jpg"
                            alt="Leonidas — criador do projeto Runestone"
                            className="w-full"
                            style={{
                                display: "block",
                                objectFit: "contain",
                                maxHeight: "620px",
                            }}
                        />
                        {/* bottom overlay for name badge */}
                        <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-end justify-between"
                            style={{
                                background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 100%)",
                            }}>
                            <div>
                                <p className="text-white font-bold text-[17px]" style={{ letterSpacing: "-0.015em" }}>
                                    Leonidas
                                </p>
                                <p className="text-[11px] font-medium uppercase tracking-[0.08em]"
                                    style={{ color: "rgba(255,255,255,0.45)" }}>
                                    Criador · Ordinals Movement
                                </p>
                            </div>
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.08em] shrink-0"
                                style={{ background: "#F7931A", color: "#000" }}>
                                @leonidasnft
                            </span>
                        </div>
                    </div>
                </figure>

                {/* ═══ SECTION 1 — Inscrição Pai ═══ */}
                <section className="mb-14">
                    <SectionDivider />
                    <SectionTitle>{b.h2_1}</SectionTitle>

                    <Paragraph text={b.p1} />
                    <Paragraph text={b.p2} />
                    <Paragraph text={b.p3} />

                    <figure className="mt-8">
                        <div className="relative rounded-2xl overflow-hidden" style={{ background: "#111" }}>
                            <img
                                src="/runestonehistory1.JPG"
                                alt="Inscrição Runestone na blockchain"
                                className="w-full h-auto block"
                            />
                            <div className="absolute inset-0 pointer-events-none" style={{
                                background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 45%)",
                            }} />
                            <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                                <ImageCaption>Registro on-chain · #63140674</ImageCaption>
                            </div>
                        </div>
                    </figure>
                </section>

                {/* ═══ SECTION 2 — Airdrop ═══ */}
                <section className="mb-14">
                    <SectionDivider />
                    <SectionTitle>{b.h2_2}</SectionTitle>

                    <Paragraph text={b.p4} />

                    <figure className="my-10">
                        <div className="relative rounded-2xl overflow-hidden" style={{ background: "#111" }}>
                            <img
                                src="/runestone-airdrop.jpg"
                                alt="Runestone Airdrop"
                                className="w-full h-auto block"
                            />
                            <div className="absolute inset-0 pointer-events-none" style={{
                                background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 45%)",
                            }} />
                            <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                                <ImageCaption>Runestone Airdrop · 112,383 inscrições distribuídas</ImageCaption>
                            </div>
                        </div>
                    </figure>

                    <Paragraph text={b.p5} />

                    {/* runestonehistory3 + 4 side-by-side — mempool */}
                    <figure className="mt-8">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="relative rounded-l-2xl overflow-hidden" style={{ background: "#111" }}>
                                <img
                                    src="/runestonehistory3.JPG"
                                    alt="Mempool — processo do airdrop"
                                    className="w-full h-full object-cover block"
                                    style={{ aspectRatio: "4/3" }}
                                />
                            </div>
                            <div className="relative rounded-r-2xl overflow-hidden" style={{ background: "#111" }}>
                                <img
                                    src="/runestonehistory4.JPG"
                                    alt="Mempool — transações do airdrop"
                                    className="w-full h-full object-cover block"
                                    style={{ aspectRatio: "4/3" }}
                                />
                            </div>
                        </div>
                        <figcaption className="text-center mt-3 text-[11px] font-semibold uppercase tracking-[0.08em]"
                            style={{ color: "#6E6E73" }}>
                            Mempool do Bitcoin durante o airdrop — 112K inscrições simultâneas
                        </figcaption>
                    </figure>
                </section>

                {/* ═══ SECTION 3 — Nascimento $DOG ═══ */}
                <section className="mb-14">
                    <SectionDivider />
                    <SectionTitle>{b.h2_3}</SectionTitle>

                    <Paragraph text={b.p6} />

                    <blockquote className="my-9 pl-5 py-1" style={{ borderLeft: "3px solid #F7931A" }}>
                        <p className="text-[20px] md:text-[24px] font-bold leading-[1.4]"
                            style={{ color: "var(--foreground)", letterSpacing: "-0.018em" }}>
                            889.806 $DOG por Runestone.<br />
                            <span style={{ color: "#F7931A" }}>100% na rua. Livre e justo.</span>
                        </p>
                    </blockquote>

                    <Paragraph text={b.p7} />

                    <figure className="mt-8">
                        <div className="relative rounded-2xl overflow-hidden" style={{ background: "#111" }}>
                            <img
                                src="/runestonehistory5.jpg"
                                alt="$DOG — nascimento da memecoin nativa do Bitcoin"
                                className="w-full h-auto block"
                            />
                            <div className="absolute inset-0 pointer-events-none" style={{
                                background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 45%)",
                            }} />
                            <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                                <ImageCaption>$DOG · A primeira memecoin nativa do Bitcoin</ImageCaption>
                            </div>
                        </div>
                    </figure>
                </section>

                {/* ═══ SECTION 4 — Rune #3 ═══ */}
                <section className="mb-14">
                    <SectionDivider />
                    <SectionTitle>{b.h2_4}</SectionTitle>

                    <div className="rounded-2xl p-7 md:p-9 mb-8"
                        style={{ background: "linear-gradient(135deg, #F7931A 0%, #FFD700 100%)" }}>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] mb-2"
                            style={{ color: "rgba(0,0,0,0.45)" }}>
                            Protocolo Runes · Bitcoin Halving 2024
                        </p>
                        <p className="text-[28px] md:text-[38px] font-bold leading-[1.1] mb-1"
                            style={{ color: "#000", letterSpacing: "-0.02em" }}>
                            DOG•GO•TO•THE•MOON
                        </p>
                        <p className="text-[14px] font-semibold" style={{ color: "rgba(0,0,0,0.55)" }}>
                            Rune #3 — Gravada no halving mais simbólico do Bitcoin
                        </p>
                    </div>

                    <Paragraph text={b.p8} />
                    <Paragraph text={b.p9} />
                    <Paragraph text={b.p10} />
                </section>

                {/* ═══ SECTION 5 — Legado ═══ */}
                <section className="mb-14">
                    <SectionDivider />
                    <SectionTitle>{b.h2_5}</SectionTitle>
                    <Paragraph text={b.p11} />
                    <Paragraph text={b.p12} />
                    {b.p13 ? <Paragraph text={b.p13} /> : null}
                </section>

                {/* ═══ CLOSING ═══ */}
                <div className="rounded-2xl px-8 py-10 md:px-12 md:py-12 text-center"
                    style={{ background: "#111111", border: "0.5px solid rgba(255,255,255,0.07)" }}>
                    <p className="text-[26px] md:text-[32px] font-bold leading-[1.4]"
                        style={{ color: "#F7931A", letterSpacing: "-0.02em", whiteSpace: "pre-line" }}>
                        {b.closing}
                    </p>
                </div>

                {/* back link */}
                <div className="mt-12 pt-8" style={{ borderTop: "0.5px solid var(--apple-separator)" }}>
                    <Link href="/"
                        className="inline-flex items-center gap-2 text-[13px] font-semibold transition-opacity hover:opacity-60"
                        style={{ color: "#F7931A" }}>
                        <ArrowLeft className="w-3.5 h-3.5" />
                        {t.backLink}
                    </Link>
                </div>
            </article>
        </div>
    );
}
