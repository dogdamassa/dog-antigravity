'use client';
import { useState, useEffect, type FormEvent } from 'react';
import Link from 'next/link';
import { X as CloseIcon, ChevronDown, Youtube } from 'lucide-react';
import { useLanguage } from '@/components/Providers';
import { getTranslations } from '@/lib/translations';
import type { VideoItem } from './api/youtube-latest/route';

/* ─────────────────────────────────────────
   STATIC DATA (non-translated)
───────────────────────────────────────── */
const swapPlatformsMeta = [
  { url: "https://app.satsterminal.com/", xUrl: "https://x.com/SatsTerminal", xLabel: "@SatsTerminal", logo: "/satsterminalpfp.jpg" },
  { url: "https://swap.dogofbitcoin.com/", xUrl: "https://x.com/DogOfBitcoinOG", xLabel: "@DogOfBitcoinOG", logo: "/dog-logo.jpg" },
  { url: "https://www.satflow.com/runes", xUrl: "https://x.com/Satflow", xLabel: "@Satflow", logo: "/satflow.png" },
];

const noKycPlatformsMeta = [
  { url: "https://www.btcnopix.com/compre", xUrl: "https://x.com/btcnopix", xLabel: "@btcnopix", logo: "/btcnopix.png" },
  { url: "https://b2pix.org/", xUrl: "https://x.com/b2pixorg", xLabel: "@b2pixorg", logo: "/b2pix.png" },
];

const defiPlatformsMeta = [
  { url: "https://app.liquidium.wtf/welcome?invite=vc22OOR5nEdokrB8pybz", xUrl: "https://x.com/LiquidiumWTF", xLabel: "@LiquidiumWTF", logo: "/liquidiumpfp.jpg" },
  { url: "https://app.bitflow.finance/trade", xUrl: "https://x.com/bitflow", xLabel: "@bitflow", logo: "/bitflowpfp.jpg" },
  { url: "https://borrow.satsterminal.com/", xUrl: "https://x.com/SatsTerminal", xLabel: "@SatsTerminal", logo: "/satsterminalpfp.jpg" },
];

const ordinalsExplorers = [
  { label: "ord.io", url: "https://www.ord.io/", xUrl: null },
  { label: "ordinals.com", url: "https://ordinals.com/", xUrl: null },
  { label: "ord.net", url: "https://ord.net/", xUrl: null },
  { label: "Satflow — Ordinals", url: "https://www.satflow.com/ordinals", xUrl: "https://x.com/Satflow" },
];

const footerLinksMeta = {
  ecosystem: [
    { label: "DOG DATA", href: "https://www.dogdata.xyz/" },
    { label: "DOG Swap", href: "https://swap.dogofbitcoin.com/" },
    { label: "SatsTerminal", href: "https://app.satsterminal.com/" },
    { label: "Satflow", href: "https://www.satflow.com/" },
    { label: "Bitflow", href: "https://app.bitflow.finance/" },
  ],
  learn: [
    { label: "Ordinals", href: "/educacao" },
    { label: "Runes", href: "https://docs.ordinals.com/" },
    { label: "Runestone", href: "/runestone" },
    { label: "Education", href: "/educacao" },
  ],
  community: [
    { label: "X / Twitter", href: "https://x.com/DogOfBitcoinOG" },
    { label: "DOG Summit", href: "https://www.dogsummit.club/" },
    { label: "DOG NEWS", href: "/news" },
    { label: "Community", href: "/comunidade" },
  ],
  buy: [
    { label: "BTC no Pix", href: "https://www.btcnopix.com/compre" },
    { label: "B2Pix", href: "https://b2pix.org/" },
    { label: "No KYC ›", href: "#" },
  ],
};

/* ─────────────────────────────────────────
   KRAYSCAN SECTION
───────────────────────────────────────── */
function KrayScanSection({ language }: { language: string }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    const url = q
      ? `https://kray.space/krayscan.html?q=${encodeURIComponent(q)}`
      : 'https://kray.space/krayscan.html';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      style={{
        background: "#000000",
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-[980px] mx-auto px-4 md:px-6 py-16 md:py-24">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/kray-app.png" alt="KrayScan" className="w-7 h-7 rounded-lg" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                Powered by Kray Space
              </span>
            </div>
            <h2
              className="text-[40px] md:text-[52px] font-bold text-white leading-[1.06]"
              style={{ letterSpacing: "-0.025em" }}
            >
              KrayScan
            </h2>
            <p className="text-[15px] mt-2 leading-[1.5]" style={{ color: "#6E6E73" }}>
              {language === 'pt'
                ? 'Explorer do Bitcoin. Pesquise transações, endereços, Ordinals e Runes.'
                : 'Bitcoin explorer. Search transactions, addresses, Ordinals and Runes.'}
            </p>
          </div>
          <a
            href="https://kray.space/krayscan.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium hover:underline underline-offset-2 shrink-0 mb-1"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {language === 'pt' ? 'Abrir KrayScan ›' : 'Open KrayScan ›'}
          </a>
        </div>

        {/* Search box */}
        <form onSubmit={handleSearch}>
          <div
            className="flex items-center gap-0 rounded-[14px] overflow-hidden"
            style={{
              background: "#0A0A0A",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 0 0 0 rgba(255,255,255,0)"
            }}
          >
            {/* Magnifier icon */}
            <div className="pl-5 pr-3 shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </div>

            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={language === 'pt'
                ? 'TXID (64 hex) ou endereço Bitcoin (bc1...)'
                : 'TXID (64 hex) or Bitcoin address (bc1...)'}
              className="flex-1 bg-transparent py-4 text-[15px] text-white placeholder:text-white/25 outline-none font-mono"
            />

            <button
              type="submit"
              className="shrink-0 mx-2 my-2 px-5 py-2.5 rounded-[10px] text-[13px] font-semibold text-black transition-all hover:opacity-90 active:scale-95"
              style={{ background: "#FFFFFF" }}
            >
              {language === 'pt' ? 'Buscar' : 'Search'}
            </button>
          </div>
        </form>

        {/* Capability chips */}
        <div className="flex flex-wrap gap-2 mt-5">
          {['Transactions', 'Addresses', 'Ordinals', 'Runes', 'UTXOs', 'Taproot'].map(chip => (
            <span
              key={chip}
              className="text-[11px] font-medium px-3 py-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.35)" }}
            >
              {chip}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [latestVideo, setLatestVideo] = useState<VideoItem | null>(null);
  const { language } = useLanguage();
  const tr = getTranslations(language);
  const t = tr.home;

  useEffect(() => {
    fetch('/api/youtube-latest')
      .then(res => res.json())
      .then(data => { if (data.videos?.[0]) setLatestVideo(data.videos[0]); })
      .catch(() => { });
  }, []);

  const bentoCards = [
    {
      id: "tokenomics",
      eyebrow: t.bentoCards.tokenomics.eyebrow,
      headline: t.bentoCards.tokenomics.headline,
      tagline: t.bentoCards.tokenomics.tagline,
      url: "#",
      linkLabel: t.bentoCards.tokenomics.linkLabel,
      linkColor: "#F7931A",
      bgStyle: { background: "#111111" },
      headlineClass: "text-white text-3xl md:text-5xl",
      taglineClass: "text-white/50 font-medium",
      eyebrowClass: "text-[#F7931A]",
      gridClass: "lg:col-span-6",
      minH: "min-h-[220px]",
      wide: true,
    },
    {
      id: "dca",
      eyebrow: t.bentoCards.dca.eyebrow,
      headline: t.bentoCards.dca.headline,
      tagline: t.bentoCards.dca.tagline,
      url: "https://app.bitflow.finance/trade?tab=dca",
      linkLabel: t.bentoCards.dca.linkLabel,
      linkColor: "#F7931A",
      bgStyle: { background: "#ffffff" },
      headlineClass: "text-[#1D1D1F]",
      taglineClass: "text-[#6E6E73]",
      eyebrowClass: "text-[#F7931A]",
      gridClass: "lg:col-span-3",
      minH: "min-h-[380px] lg:min-h-[420px]",
      wide: false,
      image: "/Bitflowpfp.png",
      imageClass: "object-contain p-6 transition-transform hover:scale-105 duration-500",
    },
    {
      id: "data",
      eyebrow: t.bentoCards.data.eyebrow,
      headline: t.bentoCards.data.headline,
      tagline: t.bentoCards.data.tagline,
      url: "https://www.dogdata.xyz/",
      linkLabel: t.bentoCards.data.linkLabel,
      linkColor: "#F7931A",
      bgStyle: { background: "#ffffff" },
      headlineClass: "text-[#1D1D1F]",
      taglineClass: "text-[#6E6E73]",
      eyebrowClass: "text-[#F7931A]",
      gridClass: "lg:col-span-3",
      minH: "min-h-[380px] lg:min-h-[420px]",
      wide: false,
      image: "/dogdata2.png",
      imageClass: "object-contain p-8 transition-transform hover:scale-105 duration-500",
    },
    {
      id: "summit",
      eyebrow: t.bentoCards.summit.eyebrow,
      headline: t.bentoCards.summit.headline,
      tagline: t.bentoCards.summit.tagline,
      url: "https://www.dogsummit.club/",
      linkLabel: t.bentoCards.summit.linkLabel,
      linkColor: "#1D1D1F",
      bgStyle: { background: "linear-gradient(135deg, #F7931A 0%, #FFD700 100%)" },
      headlineClass: "text-[#1D1D1F]",
      taglineClass: "text-[#1D1D1F]/70",
      eyebrowClass: "text-[#1D1D1F]/60",
      gridClass: "lg:col-span-6",
      minH: "min-h-[220px]",
      wide: true,
    },
    {
      id: "swap-trade",
      eyebrow: t.bentoCards.swapTrade.eyebrow,
      headline: t.bentoCards.swapTrade.headline,
      tagline: t.bentoCards.swapTrade.tagline,
      url: "#",
      linkLabel: t.bentoCards.swapTrade.linkLabel,
      linkColor: "#F7931A",
      bgStyle: { background: "#ffffff" },
      headlineClass: "text-[#1D1D1F]",
      taglineClass: "text-[#6E6E73]",
      eyebrowClass: "text-[#F7931A]",
      gridClass: "lg:col-span-2",
      minH: "min-h-[300px]",
      wide: false,
      modalId: "swap-trade",
    },
    {
      id: "no-kyc",
      eyebrow: t.bentoCards.noKyc.eyebrow,
      headline: t.bentoCards.noKyc.headline,
      tagline: t.bentoCards.noKyc.tagline,
      url: "#",
      linkLabel: t.bentoCards.noKyc.linkLabel,
      linkColor: "#F7931A",
      bgStyle: { background: "#ffffff" },
      headlineClass: "text-[#1D1D1F]",
      taglineClass: "text-[#6E6E73]",
      eyebrowClass: "text-[#F7931A]",
      gridClass: "lg:col-span-2",
      minH: "min-h-[300px]",
      wide: false,
      modalId: "no-kyc",
    },
    {
      id: "defi",
      eyebrow: t.bentoCards.defi.eyebrow,
      headline: t.bentoCards.defi.headline,
      tagline: t.bentoCards.defi.tagline,
      url: "#",
      linkLabel: t.bentoCards.defi.linkLabel,
      linkColor: "#F7931A",
      bgStyle: { background: "#ffffff" },
      headlineClass: "text-[#1D1D1F]",
      taglineClass: "text-[#6E6E73]",
      eyebrowClass: "text-[#F7931A]",
      gridClass: "lg:col-span-2",
      minH: "min-h-[300px]",
      wide: false,
      modalId: "bitcoin-defi",
    },
    {
      id: "runestone",
      eyebrow: t.bentoCards.runestone.eyebrow,
      headline: t.bentoCards.runestone.headline,
      tagline: t.bentoCards.runestone.tagline,
      url: "/runestone",
      linkLabel: t.bentoCards.runestone.linkLabel,
      linkColor: "#1D1D1F",
      bgStyle: { background: "#F7931A" },
      image: "/parent-runestone-inscription.jpg",
      imageClass: "object-cover object-center scale-[1.20] hover:scale-[1.30] transition-transform duration-700 opacity-90",
      headlineClass: "text-[#1D1D1F]",
      taglineClass: "text-[#1D1D1F]/70",
      eyebrowClass: "text-[#1D1D1F]/60",
      gridClass: "lg:col-span-3",
      minH: "min-h-[300px]",
      wide: false,
    },
    {
      id: "ordinals",
      eyebrow: t.bentoCards.ordinals.eyebrow,
      headline: t.bentoCards.ordinals.headline,
      tagline: t.bentoCards.ordinals.tagline,
      url: "#",
      linkLabel: t.bentoCards.ordinals.linkLabel,
      linkColor: "#F7931A",
      bgStyle: { background: "#ffffff" },
      headlineClass: "text-[#1D1D1F]",
      taglineClass: "text-[#6E6E73]",
      eyebrowClass: "text-[#F7931A]",
      gridClass: "lg:col-span-3",
      minH: "min-h-[300px]",
      wide: false,
      modalId: "ordinals",
      image: "/Ordinals.png",
      imageClass: "object-contain p-6 mix-blend-multiply transition-transform hover:scale-105 duration-500",
    },
    {
      id: "runes",
      eyebrow: t.bentoCards.runes.eyebrow,
      headline: t.bentoCards.runes.headline,
      tagline: t.bentoCards.runes.tagline,
      url: "#",
      linkLabel: t.bentoCards.runes.linkLabel,
      linkColor: "#F7931A",
      bgStyle: { background: "#ffffff" },
      headlineClass: "text-[#1D1D1F]",
      taglineClass: "text-[#6E6E73]",
      eyebrowClass: "text-[#F7931A]",
      gridClass: "lg:col-span-3",
      minH: "min-h-[300px]",
      wide: false,
      modalId: "runes",
      quote: t.bentoCards.runes.quote,
      author: t.bentoCards.runes.author,
    },
    {
      id: "stacks",
      eyebrow: t.bentoCards.stacks.eyebrow,
      headline: t.bentoCards.stacks.headline,
      tagline: t.bentoCards.stacks.tagline,
      url: "#",
      linkLabel: t.bentoCards.stacks.linkLabel,
      linkColor: "#F7931A",
      bgStyle: { background: "#ffffff" },
      headlineClass: "text-[#1D1D1F]",
      taglineClass: "text-[#6E6E73]",
      eyebrowClass: "text-[#F7931A]",
      gridClass: "lg:col-span-3",
      minH: "min-h-[300px]",
      wide: false,
      modalId: "stacks",
      image: "/stackspfp.png",
      imageClass: "object-contain p-6 transition-transform hover:scale-105 duration-500",
    },
  ];

  const swapPlatforms = t.platforms.swap.map((p, i) => ({ ...p, ...swapPlatformsMeta[i] }));
  const noKycPlatforms = t.platforms.noKyc.map((p, i) => ({ ...p, ...noKycPlatformsMeta[i] }));
  const defiPlatforms = t.platforms.defi.map((p, i) => ({ ...p, ...defiPlatformsMeta[i] }));

  const footerLinks = {
    [t.footer.columns.ecosystem]: footerLinksMeta.ecosystem,
    [t.footer.columns.learn]: footerLinksMeta.learn,
    [t.footer.columns.community]: footerLinksMeta.community,
    [t.footer.columns.buy]: footerLinksMeta.buy,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCard = (card: any) => {
    const hasModal = !!card.modalId;
    const LinkComponent = card.url.startsWith("http") ? "a" : Link;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Wrapper: any = hasModal ? "div" : LinkComponent;

    const baseProps = hasModal ? {} : {
      href: card.url,
      target: card.url.startsWith("http") ? "_blank" : undefined,
      rel: card.url.startsWith("http") ? "noopener noreferrer" : undefined,
    };

    return (
      <Wrapper
        key={card.id}
        {...baseProps}
        onClick={hasModal ? () => setOpenModal(card.modalId) : undefined}
        className={`apple-card ${card.bgClass ?? ""} ${card.gridClass} ${card.minH} p-8 md:p-10 flex no-underline ${hasModal ? "cursor-pointer" : ""} ${card.wide
          ? "flex-col md:flex-row md:items-center md:justify-between gap-6"
          : "flex-col justify-between"
          }`}
        style={card.bgStyle}
      >
        <div className="flex-1 flex flex-col">
          <p className={`text-[12px] font-semibold uppercase tracking-[0.06em] mb-2 ${card.eyebrowClass}`}>
            {card.eyebrow}
          </p>
          <h3
            className={`text-[34px] md:text-[40px] font-bold leading-[1.06] ${card.headlineClass} whitespace-pre-line`}
            style={{ letterSpacing: "-0.016em" }}
          >
            {card.headline}
          </h3>
          {!card.wide && (
            <p className={`text-[15px] mt-3 leading-[1.45] ${card.taglineClass}`}>
              {card.tagline}
            </p>
          )}
          {card.quote && (
            <div className="mt-6 p-5 rounded-2xl bg-[#F5F5F7] border border-[#E5E5E7] flex flex-col gap-3 relative overflow-hidden group/quote">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1D1D1F] flex items-center justify-center text-[12px] text-white font-bold shrink-0">
                  C
                </div>
                <div className="flex flex-col -space-y-0.5">
                  <span className="text-[13px] font-bold text-[#1D1D1F]">{card.author}</span>
                  <span className="text-[11px] text-[#86868B]">@rodarmor</span>
                </div>
                <div className="ml-auto opacity-20 group-hover/quote:opacity-40 transition-opacity">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L1.254 2.25H8.08l4.264 5.633L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" /></svg>
                </div>
              </div>
              <p className="text-[14px] text-[#1D1D1F] leading-[1.5] font-medium">
                {card.quote}
              </p>
            </div>
          )}
        </div>

        <div className={card.wide ? "shrink-0" : "mt-auto pt-6"}>
          {card.image && (
            <div className="w-full h-40 md:h-48 mb-6 rounded-xl overflow-hidden bg-black/5 flex items-center justify-center relative">
              <img
                src={card.image}
                alt={card.headline}
                className={`w-full h-full absolute inset-0 ${card.imageClass || 'object-cover mix-blend-multiply'}`}
              />
            </div>
          )}
          {card.wide && (
            <p className={`text-[15px] mb-4 leading-[1.45] ${card.taglineClass}`}>
              {card.tagline}
            </p>
          )}
          <span
            className="text-[17px] font-medium hover:underline underline-offset-2"
            style={{ color: card.linkColor }}
          >
            {card.linkLabel} {card.url !== "#" || hasModal ? "›" : ""}
          </span>
        </div>
      </Wrapper>
    );
  };

  return (
    <div>

      {/* ══════════════════════════════════════
          HERO — Full viewport, cinematic
      ══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-end text-center px-6 overflow-hidden pb-28"
        style={{ background: "#000000" }}
      >
        {/* Full-bleed background video */}
        <video
          src="/dogbox.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          style={{ opacity: 0.85 }}
        />

        {/* Cinematic gradient — dark at bottom, transparent at top */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        {/* Orange vignette at bottom edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 100% 40% at 50% 100%, rgba(247,147,26,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Content — pinned to bottom */}
        <div className="relative z-10 flex flex-col items-center">

          {/* Headline */}
          <h1
            className="text-[52px] md:text-[80px] lg:text-[108px] font-bold text-white mb-5"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.02", textShadow: "0 2px 24px rgba(0,0,0,0.7)" }}
          >
            {t.hero.headline1}
            <br />
            <span style={{ color: "#F7931A" }}>{t.hero.headline2}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-[18px] md:text-[21px] max-w-[560px] mb-10 leading-[1.5]"
            style={{ color: "rgba(255,255,255,0.70)", textShadow: "0 1px 12px rgba(0,0,0,0.9)" }}
          >
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://hodlmm.bitflow.finance/dlmm-pools"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full text-[17px] font-semibold transition-opacity hover:opacity-85"
              style={{ background: "#F7931A", color: "#000000" }}
            >
              {t.hero.cta_buy}
            </a>
            <Link
              href="/educacao"
              className="text-[17px] font-medium transition-all hover:underline underline-offset-2 text-white"
            >
              {t.hero.cta_learn}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown className="w-5 h-5" style={{ color: "rgba(255,255,255,0.4)" }} />
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP — Apple spec bar style
      ══════════════════════════════════════ */}
      <section
        style={{
          background: "#0A0A0A",
          borderTop: "0.5px solid rgba(255,255,255,0.07)",
          borderBottom: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="max-w-[980px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {t.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center py-7 px-4"
                style={{
                  borderRight: i < 3 ? "0.5px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <div
                  className="text-[28px] md:text-[32px] font-bold text-white"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[11px] uppercase tracking-[0.08em] mt-1.5"
                  style={{ color: "#6E6E73" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ECOSYSTEM BENTO GRID
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-6" style={{ background: "#000000" }}>
        <div className="max-w-[980px] mx-auto">

          {/* Tokenomics Bento Grid (Moved before header) */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-3">
            {bentoCards.filter(c => c.id === "tokenomics").map(renderCard)}
          </div>

          {/* ── Kray Space — separador visual ── */}
          <div className="flex items-center gap-4 mt-10 mb-3">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.2)" }}>PARCEIRO</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>

          {/* ── Kray Space featured card ── */}
          <div className="mb-20 md:mb-28">
            <a
              href="https://kray.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[18px] relative overflow-hidden group"
              style={{
                background: "#000000",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 0 60px -20px rgba(255,255,255,0.06)",
                textDecoration: "none"
              }}
            >
              {/* Subtle top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }} />

              {/* Glow top-right */}
              <div className="absolute top-0 right-0 w-[480px] h-[280px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(255,255,255,0.05) 0%, transparent 70%)" }} />

              <div className="relative z-10 flex flex-col md:flex-row gap-0">

                {/* Left — Identity block */}
                <div className="flex flex-col justify-between p-8 md:p-10 md:w-[320px] shrink-0"
                  style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                  <div>
                    <div
                      className="w-16 h-16 rounded-[18px] overflow-hidden mb-5"
                      style={{ border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 8px 24px rgba(0,0,0,0.6)" }}
                    >
                      <img src="/kray-app.png" alt="Kray Space" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {language === 'pt' ? 'Wallet Recomendada' : 'Recommended Wallet'}
                    </p>
                    <h3 className="text-[32px] md:text-[38px] font-bold text-white mb-2" style={{ letterSpacing: "-0.02em" }}>
                      Kray Space
                    </h3>
                    <p className="text-[14px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.45)" }}>
                      Self-Custodial Bitcoin Wallet
                    </p>
                  </div>
                  <div className="mt-8">
                    <span
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all group-hover:scale-105"
                      style={{ background: "#FFFFFF", color: "#000000" }}
                    >
                      {language === 'pt' ? 'Acessar Kray Space' : 'Visit Kray Space'}
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </div>
                </div>

                {/* Right — Description + Features */}
                <div className="flex-1 p-8 md:p-10">
                  <p className="text-[15px] md:text-[17px] leading-[1.7] mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {language === 'pt'
                      ? 'Kray Space é a wallet self-custodial nativa do Bitcoin. Suporte completo a Taproot, Ordinals e Runes — gerencie seus sats, inscrições e tokens com total soberania. Suas chaves, seu Bitcoin. Sem intermediários.'
                      : 'Kray Space is the native self-custodial Bitcoin wallet. Full support for Taproot, Ordinals and Runes — manage your sats, inscriptions and tokens with total sovereignty. Your keys, your Bitcoin. No intermediaries.'}
                  </p>

                  {/* Feature chips — sem Stacks/L2 */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      { icon: "🔑", label: "Self-Custody" },
                      { icon: "🖼", label: "Ordinals" },
                      { icon: "⚡", label: "Runes" },
                      { icon: "🔍", label: "KrayScan" },
                      { icon: "🔄", label: "Native Swap" },
                      { icon: "🌐", label: "Taproot" },
                    ].map(f => (
                      <div key={f.label}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        <span className="text-[15px]">{f.icon}</span>
                        <span className="text-[13px] font-medium text-white/55">{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Apple-style two-column section header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 md:mb-12">
            <h2
              className="text-[44px] md:text-[56px] font-bold leading-[1.05] whitespace-pre-line"
              style={{ letterSpacing: "-0.025em" }}
            >
              {t.ecosystem.headline}
            </h2>
            <p
              className="text-[15px] md:text-[17px] max-w-[460px] leading-[1.5]"
              style={{ color: "#86868B" }}
            >
              {t.ecosystem.description}
            </p>
          </div>

          {/* Bento grid rest */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-3">
            {bentoCards.filter(c => c.id !== "tokenomics").map(renderCard)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURE: KRAYSCAN
          Bitcoin Explorer Search
      ══════════════════════════════════════ */}
      <KrayScanSection language={language} />

      {/* ══════════════════════════════════════
          FEATURE: DOG NEWS
      ══════════════════════════════════════ */}
      <section
        style={{
          background: "#0A0A0A",
          borderTop: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="max-w-[980px] mx-auto px-6 py-20 md:py-28">

          {/* Header */}
          <div className="mb-10 md:mb-12">
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-5"
              style={{ color: "#F7931A" }}
            >
              {t.dogNews.eyebrow}
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2
                className="text-[40px] md:text-[52px] font-bold text-white leading-[1.06]"
                style={{ letterSpacing: "-0.025em" }}
              >
                {t.dogNews.title}
              </h2>
              <Link
                href="/news"
                className="text-[15px] font-medium hover:underline underline-offset-2 shrink-0"
                style={{ color: "#F7931A" }}
              >
                {t.dogNews.cta}
              </Link>
            </div>
          </div>

          {/* Latest video */}
          <div
            className="apple-card overflow-hidden mb-6"
            style={{ border: "0.5px solid rgba(255,255,255,0.08)" }}
          >
            <div className="aspect-video w-full relative">
              {latestVideo ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${latestVideo.videoId}`}
                  title={latestVideo.title || "DOG NEWS — Cryptolution"}
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

          {/* Reporter card */}
          <div
            className="apple-card p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(29,29,31,0.4) 0%, rgba(17,17,17,0.8) 100%)", border: "0.5px solid rgba(255,255,255,0.08)" }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{ background: "radial-gradient(circle at 0% 0%, rgba(247,147,26,0.06) 0%, transparent 50%)" }}
            />
            {/* Avatar */}
            <div
              className="w-24 h-24 rounded-full shrink-0 overflow-hidden relative z-10 shadow-2xl"
              style={{ border: "2px solid rgba(247,147,26,0.3)" }}
            >
              <img src="/vincentpfp.jpg" alt="Vincent Cryptolution" className="w-full h-full object-cover" />
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0 text-center sm:text-left relative z-10">
              <span
                className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-1.5 block"
                style={{ color: "#F7931A" }}
              >
                {tr.news.reporter.role}
              </span>
              <h3
                className="text-[22px] font-bold leading-tight mb-2 text-white"
                style={{ letterSpacing: "-0.018em" }}
              >
                Vincent (Cryptolution)
              </h3>
              <p className="text-[15px] leading-[1.6]" style={{ color: "#A1A1A6" }}>
                {tr.news.reporter.bio}
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
              <a
                href="https://www.youtube.com/@cryptolution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold hover:opacity-85 transition-opacity"
                style={{ background: "#DC2626", color: "#ffffff" }}
              >
                <Youtube className="w-4 h-4" />
                {tr.news.reporter.subscribe}
              </a>
              <a
                href="https://x.com/Cryptolution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold hover:opacity-85 transition-opacity"
                style={{ background: "#ffffff", color: "#000000" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L1.254 2.25H8.08l4.264 5.633L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
                {tr.news.reporter.follow}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURE: DOG DATA
      ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "#0A0A0A",
          borderTop: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Background video */}
        <video
          src="/backgrounddogdata.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ opacity: 0.20 }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-5"
              style={{ color: "#F7931A" }}
            >
              {t.dogdata.eyebrow}
            </p>
            <h2
              className="text-[40px] md:text-[52px] font-bold text-white leading-[1.06] mb-5"
              style={{ letterSpacing: "-0.025em" }}
            >
              {t.dogdata.headline1}
              <br />
              <span style={{ color: "#F7931A" }}>{t.dogdata.headline2}</span>
            </h2>
            <p
              className="text-[17px] leading-[1.6] mb-8"
              style={{ color: "#86868B" }}
            >
              {t.dogdata.description}
            </p>
            <a
              href="https://www.dogdata.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] font-medium hover:underline underline-offset-2"
              style={{ color: "#F7931A" }}
            >
              {t.dogdata.cta}
            </a>
          </div>
          {/* Widget + attribution */}
          <div className="flex flex-col gap-0 w-full">
            {/* iframe */}
            <div
              className="rounded-t-2xl overflow-hidden w-full"
              style={{ border: "0.5px solid rgba(255,255,255,0.08)", borderBottom: "none", height: "480px" }}
            >
              <iframe
                src="https://www.dogdata.xyz/"
                width="100%"
                height="100%"
                title="DOG DATA Overview"
              />
            </div>

            {/* Footer bar: attribution left, logo right */}
            <div
              className="rounded-b-2xl px-4 py-3 flex items-center justify-between gap-4"
              style={{
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderTop: "0.5px solid rgba(255,255,255,0.06)",
                background: "#111111",
              }}
            >
              <p className="text-[11px] leading-[1.5]" style={{ color: "#6E6E73" }}>
                Made By{" "}
                <a
                  href="https://x.com/bitmaxdog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: "#F7931A" }}
                >
                  Bitmax
                </a>{" "}
                for the Dog Community
              </p>
              <img
                src="/dogdata1.png"
                alt="DOG DATA"
                className="h-7 w-auto object-contain shrink-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURE: RUNESTONE — Full-bleed with image
          Apple "product hero" style
      ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#000000", borderTop: "0.5px solid rgba(255,255,255,0.07)" }}
      >
        <img
          src="/runestone-airdrop.jpg"
          alt="Runestone Airdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-25 select-none"
        />

        {/* Orange gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[980px] mx-auto px-6 py-24 md:py-36 text-center">
          <p
            className="text-[12px] font-semibold uppercase tracking-[0.14em] mb-6"
            style={{ color: "#F7931A" }}
          >
            {t.runestone_section.eyebrow}
          </p>
          <h2
            className="text-[48px] md:text-[72px] lg:text-[88px] font-bold text-white leading-[1.02] mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            {t.runestone_section.headline1}<br />
            <span style={{ color: "#F7931A" }}>{t.runestone_section.headline2}</span>
          </h2>
          <p
            className="text-[19px] md:text-[21px] max-w-[520px] mx-auto mb-10 leading-[1.5]"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {t.runestone_section.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/runestone"
              className="px-7 py-3.5 rounded-full text-[17px] font-semibold transition-opacity hover:opacity-85"
              style={{ background: "#F7931A", color: "#000000" }}
            >
              {t.runestone_section.cta_main}
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURE: DOG SWAP
          Reversed layout
      ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "#111111",
          borderTop: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Background video */}
        <video
          src="/dogfire.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ opacity: 0.18 }}
        />
        {/* Dark overlay to keep content legible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(17,17,17,0.55)" }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Widget — left on desktop */}
          <div className="dark-iframe-card w-full h-[500px] lg:h-[560px] order-2 lg:order-1"
            style={{ border: "0.5px solid rgba(255,255,255,0.06)" }}
          >
            <iframe
              src="https://swap.dogofbitcoin.com/"
              width="100%"
              height="100%"
            />
          </div>
          {/* Text — right on desktop */}
          <div className="order-1 lg:order-2">
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-5"
              style={{ color: "#F7931A" }}
            >
              {t.dogswap.eyebrow}
            </p>
            <h2
              className="text-[40px] md:text-[52px] font-bold text-white leading-[1.06] mb-5"
              style={{ letterSpacing: "-0.025em" }}
            >
              {t.dogswap.headline1}
              <br />
              <span style={{ color: "#F7931A" }}>{t.dogswap.headline2}</span>
            </h2>
            <p
              className="text-[17px] leading-[1.6] mb-8"
              style={{ color: "#86868B" }}
            >
              {t.dogswap.description}
            </p>
            <a
              href="https://swap.dogofbitcoin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] font-medium hover:underline underline-offset-2"
              style={{ color: "#F7931A" }}
            >
              {t.dogswap.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURE: TRADINGVIEW
          Apple-style 50/50 section
      ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "#0A0A0A",
          borderTop: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Background video */}
        <video
          src="/graficos.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ opacity: 0.25 }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-5"
              style={{ color: "#F7931A" }}
            >
              {t.tradingview.eyebrow}
            </p>
            <h2
              className="text-[40px] md:text-[52px] font-bold text-white leading-[1.06] mb-5"
              style={{ letterSpacing: "-0.025em" }}
            >
              {t.tradingview.headline1}
              <span style={{ color: "#F7931A" }}>{t.tradingview.headline2}</span>
            </h2>
            <p
              className="text-[17px] leading-[1.6] mb-8"
              style={{ color: "#86868B" }}
            >
              {t.tradingview.description}
            </p>
            <a
              href="https://www.tradingview.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] font-medium hover:underline underline-offset-2"
              style={{ color: "#F7931A" }}
            >
              {t.tradingview.cta}
            </a>
          </div>
          {/* Widget */}
          <div className="dark-iframe-card w-full h-[420px] lg:h-[480px]">
            <iframe
              src="https://s.tradingview.com/widgetembed/?symbol=MEXC%3ADOGUSDT&interval=D&theme=dark"
              width="100%"
              height="100%"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER — Apple multi-column style
      ══════════════════════════════════════ */}
      <footer
        style={{
          background: "#111111",
          borderTop: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="max-w-[980px] mx-auto px-6 pt-12 pb-8">

          {/* Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10"
            style={{ borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}
          >
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4
                  className="text-[12px] font-semibold mb-4 uppercase tracking-[0.06em]"
                  style={{ color: "#6E6E73" }}
                >
                  {section}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[13px] transition-colors hover:text-white"
                          style={{ color: "#A1A1A6" }}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[13px] transition-colors hover:text-white"
                          style={{ color: "#A1A1A6" }}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            <p className="text-[12px]" style={{ color: "#6E6E73" }}>
              {t.footer.copyright}
            </p>
            <p className="text-[12px]" style={{ color: "#6E6E73" }}>
              {t.footer.tagline}
            </p>
          </div>
        </div>
      </footer>

      {/* ══════════════════════════════════════
          MODALS
      ══════════════════════════════════════ */}
      {openModal && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-16 overflow-y-auto"
          onClick={() => setOpenModal(null)}
        >
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-[640px] rounded-3xl p-8 md:p-10 mb-8"
            style={{ background: "#ffffff" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-black/5"
              aria-label={t.modals.close}
            >
              <CloseIcon className="w-4 h-4" style={{ color: "#1D1D1F" }} />
            </button>

            {/* Ordinals modal */}
            {openModal === "ordinals" && (
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.09em] mb-3" style={{ color: "#F7931A" }}>{t.modals.ordinals.eyebrow}</p>
                <h2 className="text-[32px] font-bold leading-[1.1] mb-6" style={{ color: "#1D1D1F", letterSpacing: "-0.018em" }}>
                  {t.modals.ordinals.title}
                </h2>
                <a
                  href="https://www.youtube.com/watch?v=rSS0O2KQpsI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full aspect-video rounded-2xl overflow-hidden mb-6 relative group"
                >
                  <img
                    src="https://img.youtube.com/vi/rSS0O2KQpsI/hqdefault.jpg"
                    alt={t.modals.ordinals.videoCaption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/55 transition-all gap-2">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#FF0000" }}>
                      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1"><polygon points="6,4 20,12 6,20" /></svg>
                    </div>
                    <span className="text-white text-[13px] font-semibold drop-shadow">{t.modals.ordinals.videoCaption}</span>
                  </div>
                </a>
                <div className="space-y-4 text-[15px] leading-[1.6]" style={{ color: "#3A3A3C" }}>
                  <div>
                    <h3 className="font-bold text-[17px] mb-1" style={{ color: "#1D1D1F" }}>{t.modals.ordinals.whatAre.title}</h3>
                    <p>{t.modals.ordinals.whatAre.content}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[17px] mb-1" style={{ color: "#1D1D1F" }}>{t.modals.ordinals.howWorks.title}</h3>
                    <p>{t.modals.ordinals.howWorks.content}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[17px] mb-1" style={{ color: "#1D1D1F" }}>{t.modals.ordinals.why.title}</h3>
                    <ul className="space-y-1">
                      {t.modals.ordinals.why.points.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span style={{ color: "#F7931A" }} className="mt-0.5 shrink-0">✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href="https://docs.ordinals.com/introduction.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold mt-6 hover:underline underline-offset-2"
                  style={{ color: "#F7931A" }}
                >
                  {t.modals.ordinals.docLink}
                </a>
                <div style={{ borderTop: "0.5px solid #E5E5E7" }} className="mt-6 pt-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "#86868B" }}>{t.modals.ordinals.exploreLabel}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ordinalsExplorers.map((exp) => (
                      <a
                        key={exp.url}
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-3 rounded-xl transition-colors hover:bg-[#F5F5F7]"
                        style={{ border: "0.5px solid #E5E5E7" }}
                      >
                        <span className="font-semibold text-[15px]" style={{ color: "#1D1D1F" }}>{exp.label}</span>
                        {exp.xUrl
                          ? <a href={exp.xUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-[12px] font-medium px-2 py-0.5 rounded-full hover:bg-black/10" style={{ color: "#6E6E73" }}>@Satflow</a>
                          : <span style={{ color: "#F7931A" }} className="text-[15px]">→</span>
                        }
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* No-KYC modal */}
            {openModal === "no-kyc" && (
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.09em] mb-3" style={{ color: "#F7931A" }}>{t.modals.noKyc.eyebrow}</p>
                <h2 className="text-[32px] font-bold leading-[1.1] mb-2" style={{ color: "#1D1D1F", letterSpacing: "-0.018em" }}>{t.modals.noKyc.title}</h2>
                <p className="text-[15px] mb-8 leading-[1.6]" style={{ color: "#6E6E73" }}>
                  {t.modals.noKyc.description}
                </p>
                <div className="space-y-4">
                  {noKycPlatforms.map((platform) => (
                    <div key={platform.url} className="rounded-2xl p-5 flex flex-col sm:flex-row gap-5 items-start" style={{ background: "#F5F5F7", border: "0.5px solid #E5E5E7" }}>
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2 bg-white shadow-sm" style={{ border: "0.5px solid #E5E5E7" }}>
                        <img src={platform.logo} alt={platform.name} className="w-full h-full object-contain rounded-lg" />
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-2">
                          <h3 className="font-bold text-[17px]" style={{ color: "#1D1D1F" }}>{platform.name}</h3>
                          {platform.xUrl && (
                            <a href={platform.xUrl} target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium shrink-0 hover:underline" style={{ color: "#6E6E73" }}>{platform.xLabel}</a>
                          )}
                        </div>
                        <p className="text-[14px] leading-[1.55] mb-4" style={{ color: "#3A3A3C" }}>{platform.desc}</p>
                        <a href={platform.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center sm:justify-start gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-opacity hover:opacity-85 shadow-sm" style={{ background: "#1D1D1F", color: "#ffffff" }}>
                          {t.modals.openPlatform}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Swap & Trade modal */}
            {openModal === "swap-trade" && (
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.09em] mb-3" style={{ color: "#F7931A" }}>{t.modals.swapTrade.eyebrow}</p>
                <h2 className="text-[32px] font-bold leading-[1.1] mb-2" style={{ color: "#1D1D1F", letterSpacing: "-0.018em" }}>{t.modals.swapTrade.title}</h2>
                <p className="text-[15px] mb-8 leading-[1.6]" style={{ color: "#6E6E73" }}>
                  {t.modals.swapTrade.description}
                </p>
                <div className="space-y-4">
                  {swapPlatforms.map((platform) => (
                    <div key={platform.url} className="rounded-2xl p-5 flex flex-col sm:flex-row gap-5 items-start" style={{ background: "#F5F5F7", border: "0.5px solid #E5E5E7" }}>
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2 bg-white shadow-sm" style={{ border: "0.5px solid #E5E5E7" }}>
                        <img src={platform.logo} alt={platform.name} className="w-full h-full object-contain rounded-lg" />
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-2">
                          <h3 className="font-bold text-[17px]" style={{ color: "#1D1D1F" }}>{platform.name}</h3>
                          {platform.xUrl && (
                            <a href={platform.xUrl} target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium shrink-0 hover:underline" style={{ color: "#6E6E73" }}>{platform.xLabel}</a>
                          )}
                        </div>
                        <p className="text-[14px] leading-[1.55] mb-4" style={{ color: "#3A3A3C" }}>{platform.desc}</p>
                        <a href={platform.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center sm:justify-start gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-opacity hover:opacity-85 shadow-sm" style={{ background: "#1D1D1F", color: "#ffffff" }}>
                          {t.modals.openPlatform}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bitcoin DeFi modal */}
            {openModal === "bitcoin-defi" && (
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.09em] mb-3" style={{ color: "#F7931A" }}>{t.modals.defi.eyebrow}</p>
                <h2 className="text-[32px] font-bold leading-[1.1] mb-2" style={{ color: "#1D1D1F", letterSpacing: "-0.018em" }}>{t.modals.defi.title}</h2>
                <p className="text-[15px] mb-8 leading-[1.6]" style={{ color: "#6E6E73" }}>
                  {t.modals.defi.description}
                </p>
                <div className="space-y-4">
                  {defiPlatforms.map((platform) => (
                    <div key={platform.url} className="rounded-2xl p-5 flex flex-col sm:flex-row gap-5 items-start" style={{ background: "#F5F5F7", border: "0.5px solid #E5E5E7" }}>
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2 bg-white shadow-sm" style={{ border: "0.5px solid #E5E5E7" }}>
                        <img src={platform.logo} alt={platform.name} className="w-full h-full object-contain rounded-lg" />
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-2">
                          <h3 className="font-bold text-[17px]" style={{ color: "#1D1D1F" }}>{platform.name}</h3>
                          {platform.xUrl && (
                            <a href={platform.xUrl} target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium shrink-0 hover:underline" style={{ color: "#6E6E73" }}>{platform.xLabel}</a>
                          )}
                        </div>
                        <p className="text-[14px] leading-[1.55] mb-4" style={{ color: "#3A3A3C" }}>{platform.desc}</p>
                        <a href={platform.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center sm:justify-start gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-opacity hover:opacity-85 shadow-sm" style={{ background: "#1D1D1F", color: "#ffffff" }}>
                          {t.modals.openPlatform}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stacks modal */}
            {openModal === "stacks" && (
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.09em] mb-3" style={{ color: "#F7931A" }}>{t.modals.stacks.eyebrow}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm" style={{ border: "0.5px solid #E5E5E7" }}>
                    <img src="/stackspfp.jpg" alt="Stacks" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-[32px] font-bold leading-[1.1]" style={{ color: "#1D1D1F", letterSpacing: "-0.018em" }}>{t.modals.stacks.title}</h2>
                </div>
                <p className="text-[15px] mb-8 leading-[1.6]" style={{ color: "#6E6E73" }}>
                  {t.modals.stacks.description}
                </p>

                <div className="space-y-3">
                  <a
                    href="https://www.stacks.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E5E7] hover:bg-[#EBEBEF] transition-colors group"
                  >
                    <span className="font-bold text-[16px]" style={{ color: "#1D1D1F" }}>Official Website</span>
                    <span className="text-[#6E6E73] group-hover:text-[#1D1D1F] transition-colors">stacks.co ›</span>
                  </a>

                  <a
                    href="https://www.stacks.co/sbtc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E5E7] hover:bg-[#EBEBEF] transition-colors group"
                  >
                    <span className="font-bold text-[16px]" style={{ color: "#1D1D1F" }}>{t.modals.stacks.sbtc}</span>
                    <span className="text-[#6E6E73] group-hover:text-[#1D1D1F] transition-colors">Learn more ›</span>
                  </a>

                  <a
                    href="https://bridge.stacks.co/usdc/eth/stx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E5E7] hover:bg-[#EBEBEF] transition-colors group"
                  >
                    <span className="font-bold text-[16px]" style={{ color: "#1D1D1F" }}>{t.modals.stacks.usdcx}</span>
                    <span className="text-[#6E6E73] group-hover:text-[#1D1D1F] transition-colors">Bridge USDC ›</span>
                  </a>
                </div>
              </div>
            )}

            {/* Runes modal */}
            {openModal === "runes" && (
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.09em] mb-3" style={{ color: "#F7931A" }}>{t.modals.runes.eyebrow}</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center bg-[#F7931A]/10" style={{ border: "0.5px solid #E5E5E7" }}>
                    <img src="/dogdata1.png" alt="Runes" className="w-10 h-auto object-contain" />
                  </div>
                  <h2 className="text-[32px] font-bold leading-[1.1]" style={{ color: "#1D1D1F", letterSpacing: "-0.018em" }}>{t.modals.runes.title}</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-[17px] mb-2" style={{ color: "#1D1D1F" }}>{t.modals.runes.intro.title}</h3>
                    <p className="text-[15px] leading-[1.6]" style={{ color: "#3A3A3C" }}>{t.modals.runes.intro.content}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F5F5F7] border border-[#E5E5E7]">
                    <h3 className="font-bold text-[17px] mb-2" style={{ color: "#1D1D1F" }}>{t.modals.runes.philosophy.title}</h3>
                    <p className="text-[15px] leading-[1.6]" style={{ color: "#3A3A3C" }}>{t.modals.runes.philosophy.content}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[17px] mb-2" style={{ color: "#1D1D1F" }}>{t.modals.runes.launch.title}</h3>
                    <p className="text-[15px] leading-[1.6]" style={{ color: "#3A3A3C" }}>{t.modals.runes.launch.content}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[17px] mb-2" style={{ color: "#1D1D1F" }}>{t.modals.runes.difference.title}</h3>
                    <p className="text-[15px] leading-[1.6]" style={{ color: "#3A3A3C" }}>{t.modals.runes.difference.content}</p>
                  </div>
                </div>

                <a
                  href="https://docs.ordinals.com/runes.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold mt-8 hover:underline underline-offset-2"
                  style={{ color: "#F7931A" }}
                >
                  {t.modals.runes.docLink}
                </a>

                <div className="mt-8 pt-8 border-t border-[#E5E5E7]">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-4 text-[#86868B]">{t.modals.runes.references.title}</p>
                  <div className="flex flex-col gap-3">
                    {t.modals.runes.references.items.map((ref: any, idx: number) => (
                      <a
                        key={idx}
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E5E7] hover:bg-[#EBEBEF] transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white p-2 shrink-0 shadow-sm border border-[#E5E5E7] flex items-center justify-center">
                          <img src={ref.logo} alt={ref.title} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div>
                          <p className="text-[15px] font-bold text-[#1D1D1F]">{ref.title}</p>
                          <p className="text-[13px] text-[#86868B]">{ref.description}</p>
                        </div>
                        <span className="ml-auto text-[#F7931A] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
