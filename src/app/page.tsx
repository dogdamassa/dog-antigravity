'use client';
import { useState } from 'react';
import Link from 'next/link';
import { X as CloseIcon, ChevronDown } from 'lucide-react';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const swapPlatforms = [
  {
    name: "SatsTerminal",
    desc: "Aggregator de liquidez para Runes e Ordinals. Encontra o melhor preço entre múltiplas plataformas automaticamente.",
    url: "https://app.satsterminal.com/",
    xUrl: "https://x.com/SatsTerminal",
    xLabel: "@SatsTerminal",
  },
  {
    name: "DOG Swap",
    desc: "Swap nativo e descentralizado da comunidade $DOG. Troque Runes diretamente no Bitcoin sem intermediários.",
    url: "https://swap.dogofbitcoin.com/",
    xUrl: "https://x.com/DogOfBitcoinOG",
    xLabel: "@DogOfBitcoinOG",
  },
  {
    name: "Satflow — Runes",
    desc: "Marketplace e swap de Runes com interface profissional. Alta liquidez e dados de mercado em tempo real.",
    url: "https://www.satflow.com/runes",
    xUrl: "https://x.com/Satflow",
    xLabel: "@Satflow",
  },
];

const noKycPlatforms = [
  {
    name: "BTC no Pix",
    desc: "Compre Bitcoin diretamente via Pix, sem cadastro, sem KYC. Rápido, privado e simples.",
    url: "https://www.btcnopix.com/compre",
    xUrl: "https://x.com/btcnopix",
    xLabel: "@btcnopix",
  },
  {
    name: "B2Pix",
    desc: "Plataforma peer-to-peer para comprar e vender Bitcoin com Pix sem burocracia e sem verificação de identidade.",
    url: "https://b2pix.org/",
    xUrl: "https://x.com/b2pixorg",
    xLabel: "@b2pixorg",
  },
];

const ordinalsExplorers = [
  { label: "ord.io", url: "https://www.ord.io/", xUrl: null },
  { label: "ordinals.com", url: "https://ordinals.com/", xUrl: null },
  { label: "ord.net", url: "https://ord.net/", xUrl: null },
  { label: "Satflow — Ordinals", url: "https://www.satflow.com/ordinals", xUrl: "https://x.com/Satflow" },
];

const bentoCards = [
  {
    id: "tokenomics",
    eyebrow: "$DOG TOKENOMICS",
    headline: "100 Billion",
    tagline: "Supply total em circulação. Sem pré-venda, sem investidores.",
    url: "#",
    linkLabel: "100% Descentralizado",
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
    eyebrow: "Bitflow Finance",
    headline: "Acumule com\nestratégia.",
    tagline: "Compre $DOG aos poucos e vença a volatilidade com DCA.",
    url: "https://app.bitflow.finance/trade?tab=dca",
    linkLabel: "Abrir Bitflow",
    linkColor: "#F7931A",
    bgStyle: { background: "#ffffff" },
    headlineClass: "text-[#1D1D1F]",
    taglineClass: "text-[#6E6E73]",
    eyebrowClass: "text-[#F7931A]",
    gridClass: "lg:col-span-3",
    minH: "min-h-[380px] lg:min-h-[420px]",
    wide: false,
  },
  {
    id: "data",
    eyebrow: "Analytics On-Chain",
    headline: "Números que\nrevela tudo.",
    tagline: "Holders, volume e métricas reais do $DOG em tempo real.",
    url: "https://www.dogdata.xyz/",
    linkLabel: "Abrir DOG DATA",
    linkColor: "#F7931A",
    bgStyle: { background: "#ffffff" },
    headlineClass: "text-[#1D1D1F]",
    taglineClass: "text-[#6E6E73]",
    eyebrowClass: "text-[#F7931A]",
    gridClass: "lg:col-span-3",
    minH: "min-h-[380px] lg:min-h-[420px]",
    wide: false,
  },
  {
    id: "summit",
    eyebrow: "Evento Global",
    headline: "O encontro da elite $DOG.",
    tagline: "Bitcoin City, El Salvador · 2024",
    url: "https://www.dogsummit.club/",
    linkLabel: "Ver detalhes",
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
    eyebrow: "Bitcoin Assets",
    headline: "Swap e\nTrade.",
    tagline: "SatsTerminal, DOG Swap e Satflow. Troque Runes com liquidez real no Bitcoin.",
    url: "#",
    linkLabel: "Ver plataformas",
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
    eyebrow: "Soberania Financeira",
    headline: "Compre sem\nKYC.",
    tagline: "Adquira Bitcoin e cripto com Pix, sem cadastro e sem burocracia.",
    url: "#",
    linkLabel: "Ver plataformas",
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
    id: "runestone",
    eyebrow: "História",
    headline: "O maior\nairdrop.",
    tagline: "A pedra fundamental da cultura Ordinals.",
    url: "/runestone",
    linkLabel: "Saiba mais",
    linkColor: "#1D1D1F",
    bgStyle: { background: "#F7931A" },
    image: "/runestone.png",
    headlineClass: "text-[#1D1D1F]",
    taglineClass: "text-[#1D1D1F]/70",
    eyebrowClass: "text-[#1D1D1F]/60",
    gridClass: "lg:col-span-2",
    minH: "min-h-[300px]",
    wide: false,
  },
  {
    id: "ordinals",
    eyebrow: "Educação",
    headline: "Ordinals",
    tagline: "NFTs nativos do Bitcoin. Clique para aprender tudo sobre o protocolo criado por Casey Rodarmor.",
    url: "#",
    linkLabel: "Aprender Ordinals",
    linkColor: "#F7931A",
    bgStyle: { background: "#ffffff" },
    headlineClass: "text-[#1D1D1F]",
    taglineClass: "text-[#6E6E73]",
    eyebrowClass: "text-[#F7931A]",
    gridClass: "lg:col-span-3",
    minH: "min-h-[300px]",
    wide: false,
    modalId: "ordinals",
  },
  {
    id: "runes",
    eyebrow: "Educação",
    headline: "Runes",
    tagline: "Runes são tokens no Bitcoin. Mais eficientes e simples que BRC-20.",
    url: "https://docs.ordinals.com/introduction.html",
    linkLabel: "Aprenda sobre Runes",
    linkColor: "#F7931A",
    bgStyle: { background: "#ffffff" },
    headlineClass: "text-[#1D1D1F]",
    taglineClass: "text-[#6E6E73]",
    eyebrowClass: "text-[#F7931A]",
    gridClass: "lg:col-span-3",
    minH: "min-h-[300px]",
    wide: false,
  },
];

const footerLinks = {
  "Ecossistema": [
    { label: "DOG DATA", href: "https://www.dogdata.xyz/" },
    { label: "DOG Swap", href: "https://swap.dogofbitcoin.com/" },
    { label: "SatsTerminal", href: "https://app.satsterminal.com/" },
    { label: "Satflow", href: "https://www.satflow.com/" },
    { label: "Bitflow", href: "https://app.bitflow.finance/" },
  ],
  "Aprender": [
    { label: "Ordinals", href: "/educacao" },
    { label: "Runes", href: "https://docs.ordinals.com/" },
    { label: "Runestone", href: "/runestone" },
    { label: "Educação", href: "/educacao" },
  ],
  "Comunidade": [
    { label: "X / Twitter", href: "https://x.com/DogOfBitcoinOG" },
    { label: "DOG Summit", href: "https://www.dogsummit.club/" },
    { label: "DOG NEWS", href: "/news" },
    { label: "Comunidade", href: "/comunidade" },
  ],
  "Comprar": [
    { label: "BTC no Pix", href: "https://www.btcnopix.com/compre" },
    { label: "B2Pix", href: "https://b2pix.org/" },
    { label: "Sem KYC ›", href: "#" },
  ],
};

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <div>

      {/* ══════════════════════════════════════
          HERO — Full viewport, Apple-style
      ══════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ background: "#000000" }}
      >
        {/* Radial orange glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(247,147,26,0.18) 0%, transparent 65%)",
          }}
        />

        {/*
          ── IMAGE SLOT ──
          Coloque um arquivo chamado  /public/hero-dog.png  para aparecer aqui.
          Sugestão: arte do $DOG com fundo transparente, ~800px de largura.
        */}
        {/* <img
          src="/hero-dog.png"
          alt="$DOG"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[480px] md:w-[640px] opacity-15 select-none pointer-events-none"
        /> */}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">

          {/* DOG Logo */}
          <div
            className="w-28 h-28 md:w-40 md:h-40 rounded-[2.25rem] md:rounded-[2.75rem] shadow-2xl mb-10 border overflow-hidden"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              boxShadow: "0 0 80px rgba(247,147,26,0.22), 0 20px 60px rgba(0,0,0,0.6)",
            }}
          >
            <img src="/dog-logo.jpg" alt="$DOG" className="w-full h-full object-cover" />
          </div>

          {/* Eyebrow */}
          <p
            className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.14em] mb-6"
            style={{ color: "#F7931A" }}
          >
            Principal Meme do Bitcoin
          </p>

          {/* Headline */}
          <h1
            className="text-[52px] md:text-[80px] lg:text-[104px] font-bold text-white mb-6"
            style={{ letterSpacing: "-0.03em", lineHeight: "1.02" }}
          >
            Preço muda,
            <br />
            <span style={{ color: "#F7931A" }}>visão não.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-[18px] md:text-[21px] max-w-[560px] mb-12 leading-[1.5]"
            style={{ color: "#86868B" }}
          >
            $DOG — o principal meme do Bitcoin. Construa sua soberania financeira com paciência e convicção.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://app.satsterminal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full text-[17px] font-semibold transition-opacity hover:opacity-85"
              style={{ background: "#F7931A", color: "#000000" }}
            >
              Comprar $DOG
            </a>
            <Link
              href="/educacao"
              className="text-[17px] font-medium transition-all hover:underline underline-offset-2"
              style={{ color: "#F7931A" }}
            >
              Saiba mais ›
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown className="w-5 h-5" style={{ color: "rgba(255,255,255,0.25)" }} />
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
            {[
              { value: "100B", label: "Supply total" },
              { value: "Bitcoin", label: "Blockchain nativa" },
              { value: "Zero", label: "Pré-venda / VCs" },
              { value: "100%", label: "Descentralizado" },
            ].map((stat, i) => (
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

          {/* Apple-style two-column section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
            <h2
              className="text-[44px] md:text-[56px] font-bold leading-[1.05]"
              style={{ letterSpacing: "-0.025em" }}
            >
              DOG<br />Ecossistema.
            </h2>
            <p
              className="text-[17px] md:text-[19px] max-w-[300px] leading-[1.45]"
              style={{ color: "#6E6E73" }}
            >
              Ferramentas construídas para a Dog Army.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-3">
            {bentoCards.map((card) => {
              const hasModal = !!(card as any).modalId;
              const LinkComponent = card.url.startsWith("http") ? "a" : Link;
              const Wrapper = hasModal ? "div" : LinkComponent;

              const baseProps = hasModal ? {} : {
                href: card.url,
                target: card.url.startsWith("http") ? "_blank" : undefined,
                rel: card.url.startsWith("http") ? "noopener noreferrer" : undefined,
              };

              return (
                <Wrapper
                  key={card.id}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  {...(baseProps as any)}
                  onClick={hasModal ? () => setOpenModal((card as any).modalId) : undefined}
                  className={`apple-card ${(card as any).bgClass ?? ""} ${card.gridClass} ${card.minH} p-8 md:p-10 flex no-underline ${hasModal ? "cursor-pointer" : ""} ${card.wide
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
                  </div>

                  <div className={card.wide ? "shrink-0" : "mt-auto pt-6"}>
                    {(card as any).image && (
                      <div className="w-full h-40 mb-6 rounded-xl overflow-hidden bg-black/10 flex items-center justify-center">
                        <img src={(card as any).image} alt={card.headline} className="w-full h-full object-cover mix-blend-multiply" />
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
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURE: TRADINGVIEW
          Apple-style 50/50 section
      ══════════════════════════════════════ */}
      <section
        style={{
          background: "#0A0A0A",
          borderTop: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-5"
              style={{ color: "#F7931A" }}
            >
              Mercado em tempo real
            </p>
            <h2
              className="text-[40px] md:text-[52px] font-bold text-white leading-[1.06] mb-5"
              style={{ letterSpacing: "-0.025em" }}
            >
              Trading
              <span style={{ color: "#F7931A" }}>View.</span>
            </h2>
            <p
              className="text-[17px] leading-[1.6] mb-8"
              style={{ color: "#86868B" }}
            >
              Acompanhe o par DOG/USDT em tempo real com gráficos profissionais. Analise tendências, volume e suportes antes de cada decisão.
            </p>
            <a
              href="https://www.tradingview.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] font-medium hover:underline underline-offset-2"
              style={{ color: "#F7931A" }}
            >
              Abrir TradingView ›
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
          FEATURE: DOG SWAP
          Reversed layout
      ══════════════════════════════════════ */}
      <section
        style={{
          background: "#111111",
          borderTop: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              Swap descentralizado
            </p>
            <h2
              className="text-[40px] md:text-[52px] font-bold text-white leading-[1.06] mb-5"
              style={{ letterSpacing: "-0.025em" }}
            >
              DOG
              <br />
              <span style={{ color: "#F7931A" }}>Swap.</span>
            </h2>
            <p
              className="text-[17px] leading-[1.6] mb-8"
              style={{ color: "#86868B" }}
            >
              Swap nativo e descentralizado da comunidade $DOG. Troque Runes diretamente no Bitcoin, sem intermediários, sem custódia.
            </p>
            <a
              href="https://swap.dogofbitcoin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] font-medium hover:underline underline-offset-2"
              style={{ color: "#F7931A" }}
            >
              Abrir DOG Swap ›
            </a>
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
        {/*
          ── IMAGE SLOT ──
          Coloque  /public/runestone-airdrop.jpg  ou  /public/summit-photo.jpg
          para preencher o fundo desta seção.
          A foto deve ter pelo menos 1400×800px.
        */}
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
            História · Airdrop
          </p>
          <h2
            className="text-[48px] md:text-[72px] lg:text-[88px] font-bold text-white leading-[1.02] mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            O maior airdrop<br />
            <span style={{ color: "#F7931A" }}>do Bitcoin.</span>
          </h2>
          <p
            className="text-[19px] md:text-[21px] max-w-[520px] mx-auto mb-10 leading-[1.5]"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Runestone — a pedra fundamental da cultura Ordinals. Distribuído gratuitamente para os holders mais leais do Bitcoin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/runestone"
              className="px-7 py-3.5 rounded-full text-[17px] font-semibold transition-opacity hover:opacity-85"
              style={{ background: "#F7931A", color: "#000000" }}
            >
              Saiba mais
            </Link>
            <a
              href="https://www.dogsummit.club/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] font-medium transition-all hover:underline underline-offset-2 text-white"
            >
              DOG Summit ›
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURE: DOG DATA
      ══════════════════════════════════════ */}
      <section
        style={{
          background: "#0A0A0A",
          borderTop: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-5"
              style={{ color: "#F7931A" }}
            >
              Analytics on-chain
            </p>
            <h2
              className="text-[40px] md:text-[52px] font-bold text-white leading-[1.06] mb-5"
              style={{ letterSpacing: "-0.025em" }}
            >
              DOG
              <br />
              <span style={{ color: "#F7931A" }}>DATA.</span>
            </h2>
            <p
              className="text-[17px] leading-[1.6] mb-8"
              style={{ color: "#86868B" }}
            >
              Holders, volume e métricas reais do $DOG em tempo real. Dados on-chain que revelam a força e a convicção da Dog Army.
            </p>
            <a
              href="https://www.dogdata.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] font-medium hover:underline underline-offset-2"
              style={{ color: "#F7931A" }}
            >
              Abrir DOG DATA ›
            </a>
          </div>
          {/* Widget */}
          <div className="dark-iframe-card w-full h-[500px] lg:h-[560px]">
            <iframe
              src="https://www.dogdata.xyz/transactions"
              width="100%"
              height="100%"
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
              Copyright © 2025 $DOG Aggregator. Todos os direitos reservados.
            </p>
            <p className="text-[12px]" style={{ color: "#6E6E73" }}>
              Bitcoin Nativo · 100% Descentralizado
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
              aria-label="Fechar"
            >
              <CloseIcon className="w-4 h-4" style={{ color: "#1D1D1F" }} />
            </button>

            {/* Ordinals modal */}
            {openModal === "ordinals" && (
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.09em] mb-3" style={{ color: "#F7931A" }}>Educação</p>
                <h2 className="text-[32px] font-bold leading-[1.1] mb-6" style={{ color: "#1D1D1F", letterSpacing: "-0.018em" }}>
                  Ordinals — NFTs Nativos do Bitcoin
                </h2>
                <a
                  href="https://www.youtube.com/watch?v=rSS0O2KQpsI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full aspect-video rounded-2xl overflow-hidden mb-6 relative group"
                >
                  <img
                    src="https://img.youtube.com/vi/rSS0O2KQpsI/hqdefault.jpg"
                    alt="Casey Rodarmor apresenta Ordinals"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/55 transition-all gap-2">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#FF0000" }}>
                      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1"><polygon points="6,4 20,12 6,20" /></svg>
                    </div>
                    <span className="text-white text-[13px] font-semibold drop-shadow">Casey Rodarmor apresenta Ordinals ao mundo</span>
                  </div>
                </a>
                <div className="space-y-4 text-[15px] leading-[1.6]" style={{ color: "#3A3A3C" }}>
                  <div>
                    <h3 className="font-bold text-[17px] mb-1" style={{ color: "#1D1D1F" }}>O que são Ordinals?</h3>
                    <p>Ordinals é um protocolo criado por Casey Rodarmor em janeiro de 2023. Ele permite inscrever qualquer dado — imagem, texto, código — diretamente nos menores pedaços de Bitcoin: os <strong>satoshis</strong>.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[17px] mb-1" style={{ color: "#1D1D1F" }}>Como funciona?</h3>
                    <p>O protocolo atribui um número de série único a cada satoshi. O conteúdo inscrito fica gravado <strong>permanentemente</strong> na blockchain do Bitcoin — sem servidores externos, sem IPFS.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[17px] mb-1" style={{ color: "#1D1D1F" }}>Por que é revolucionário?</h3>
                    <ul className="space-y-1">
                      {["100% on-chain: os dados ficam dentro da blockchain", "Imutável: uma vez inscrito, não pode ser alterado", "Sem smart contracts: usa apenas o protocolo nativo", "Proof-of-Work: segurança da maior rede do mundo"].map((item) => (
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
                  Ler documentação oficial →
                </a>
                <div style={{ borderTop: "0.5px solid #E5E5E7" }} className="mt-6 pt-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "#86868B" }}>Explorar Ordinals</p>
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
                <p className="text-[12px] font-semibold uppercase tracking-[0.09em] mb-3" style={{ color: "#F7931A" }}>Soberania Financeira</p>
                <h2 className="text-[32px] font-bold leading-[1.1] mb-2" style={{ color: "#1D1D1F", letterSpacing: "-0.018em" }}>Compre Cripto sem KYC</h2>
                <p className="text-[15px] mb-8 leading-[1.6]" style={{ color: "#6E6E73" }}>
                  Plataformas brasileiras que permitem adquirir Bitcoin via Pix sem exigir cadastro ou verificação de identidade.
                </p>
                <div className="space-y-4">
                  {noKycPlatforms.map((platform) => (
                    <div key={platform.url} className="rounded-2xl p-5" style={{ background: "#F5F5F7", border: "0.5px solid #E5E5E7" }}>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-bold text-[17px]" style={{ color: "#1D1D1F" }}>{platform.name}</h3>
                        <a href={platform.xUrl} target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium shrink-0 hover:underline" style={{ color: "#6E6E73" }}>{platform.xLabel}</a>
                      </div>
                      <p className="text-[14px] leading-[1.55] mb-4" style={{ color: "#3A3A3C" }}>{platform.desc}</p>
                      <a href={platform.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold transition-opacity hover:opacity-80" style={{ background: "#F7931A", color: "#ffffff" }}>
                        Abrir plataforma →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Swap & Trade modal */}
            {openModal === "swap-trade" && (
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.09em] mb-3" style={{ color: "#F7931A" }}>Bitcoin Assets</p>
                <h2 className="text-[32px] font-bold leading-[1.1] mb-2" style={{ color: "#1D1D1F", letterSpacing: "-0.018em" }}>Swap e Trade</h2>
                <p className="text-[15px] mb-8 leading-[1.6]" style={{ color: "#6E6E73" }}>
                  Plataformas descentralizadas para trocar e negociar Runes e ativos do Bitcoin.
                </p>
                <div className="space-y-4">
                  {swapPlatforms.map((platform) => (
                    <div key={platform.url} className="rounded-2xl p-5" style={{ background: "#F5F5F7", border: "0.5px solid #E5E5E7" }}>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-bold text-[17px]" style={{ color: "#1D1D1F" }}>{platform.name}</h3>
                        <a href={platform.xUrl} target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium shrink-0 hover:underline" style={{ color: "#6E6E73" }}>{platform.xLabel}</a>
                      </div>
                      <p className="text-[14px] leading-[1.55] mb-4" style={{ color: "#3A3A3C" }}>{platform.desc}</p>
                      <a href={platform.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold transition-opacity hover:opacity-80" style={{ background: "#F7931A", color: "#ffffff" }}>
                        Abrir plataforma →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
