'use client';
import { useState } from 'react';
import Link from 'next/link';
import { X as CloseIcon } from 'lucide-react';

/* ── Modal content ── */
const MODALS: Record<string, { title: string; content: React.ReactNode }> = {
  ordinals: {
    title: "Ordinals — NFTs Nativos do Bitcoin",
    content: null, // rendered inline
  },
  "swap-trade": {
    title: "Swap e Trade — Bitcoin Assets",
    content: null,
  },
};

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

/* ── Bento cards ── */
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

export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="text-center px-6 pt-20 md:pt-28 pb-24 md:pb-32 relative"
        style={{ background: "#1D1D1F" }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-[2rem] shadow-2xl shadow-dog-orange/20 mb-8 border border-white/10 flex items-center justify-center overflow-hidden" style={{ background: "#2A2A2A" }}>
          <img src="/dog-logo.jpg" alt="$DOG Logo" className="w-full h-full object-cover" />
        </div>

        <p
          className="text-[14px] font-semibold uppercase tracking-[0.09em] mb-5"
          style={{ color: "#F7931A" }}
        >
          Principal Meme do Bitcoin
        </p>

        <h1
          className="text-[52px] md:text-[80px] lg:text-[96px] font-bold leading-[1.04] text-white mb-6"
          style={{ letterSpacing: "-0.025em" }}
        >
          Preço muda,
          <br />
          <span style={{ color: "#F7931A" }}>visão não.</span>
        </h1>

        <p
          className="text-[18px] md:text-[21px] max-w-[540px] mx-auto mb-10 leading-[1.45]"
          style={{ color: "#86868B" }}
        >
          $DOG – o principal meme do Bitcoin. Construa sua soberania financeira
          com paciência, convicção e os olhos no longo prazo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/educacao"
            className="text-[17px] font-medium hover:underline underline-offset-2 transition-all"
            style={{ color: "#F7931A" }}
          >
            Saiba mais ›
          </Link>
        </div>
      </section>

      {/* ── Ecosystem Bento Grid ── */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-[40px] md:text-[56px] font-bold leading-[1.07] mb-4"
              style={{ letterSpacing: "-0.022em" }}
            >
              DOG Ecosystem.
            </h2>
            <p
              className="text-[19px] md:text-[21px]"
              style={{ color: "var(--apple-text-secondary)" }}
            >
              Ferramentas construídas para a Dog Army.
            </p>
          </div>

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

      {/* ── Integrations Section (Iframes) ── */}
      <section className="py-12 px-4 md:px-6 max-w-[1200px] mx-auto space-y-16">

        {/* TradingView Chart */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold">
              Trading<span style={{ color: "#F7931A" }}>View</span>
            </h2>
            <p style={{ color: "var(--apple-text-secondary)" }} className="text-[15px]">
              Acompanhe $DOG em tempo real (DOG/USDT)
            </p>
          </div>
          <div className="dark-iframe-card w-full h-[500px]">
            <iframe
              src="https://s.tradingview.com/widgetembed/?symbol=MEXC%3ADOGUSDT&interval=D&theme=dark"
              width="100%"
              height="100%"
              allowFullScreen
            />
          </div>
        </div>

        {/* DOG Swap */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full flex items-center justify-center text-base font-bold text-black" style={{ background: "#F7931A" }}>
              ↔
            </span>
            <h2 className="text-3xl font-bold">DOG Swap</h2>
            <p style={{ color: "var(--apple-text-secondary)" }} className="text-[15px]">
              Troca descentralizada de Runes
            </p>
          </div>
          <div className="dark-iframe-card w-full h-[600px]">
            <iframe
              src="https://swap.dogofbitcoin.com/"
              width="100%"
              height="100%"
            />
          </div>
        </div>

        {/* DOG DATA Transactions */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold">
              DOG <span style={{ color: "#F7931A" }}>DATA</span>
            </h2>
            <p style={{ color: "var(--apple-text-secondary)" }} className="text-[15px]">
              Atividade On-Chain e Transações
            </p>
          </div>
          <div className="dark-iframe-card w-full h-[600px]">
            <iframe
              src="https://www.dogdata.xyz/transactions"
              width="100%"
              height="100%"
            />
          </div>
        </div>

      </section>

      {/* ── Footer ── */}
      <footer
        className="py-8 px-6"
        style={{ borderTop: "0.5px solid var(--apple-separator)" }}
      >
        <div className="max-w-[980px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px]" style={{ color: "var(--apple-text-tertiary)" }}>
            Copyright © 2024 $DOG Aggregator. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Comunidade", href: "/comunidade" },
              { label: "Educação", href: "/educacao" },
              { label: "Apps", href: "/apps" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[12px] hover:underline underline-offset-2"
                style={{ color: "var(--apple-text-tertiary)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>

      {/* ── Modals ── */}
      {openModal && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-16 overflow-y-auto"
          onClick={() => setOpenModal(null)}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" />

          {/* Panel */}
          <div
            className="relative w-full max-w-[640px] rounded-3xl p-8 md:p-10 mb-8"
            style={{ background: "#ffffff" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-black/5"
              aria-label="Fechar"
            >
              <CloseIcon className="w-4 h-4" style={{ color: "#1D1D1F" }} />
            </button>

            {/* ── Ordinals modal ── */}
            {openModal === "ordinals" && (
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.09em] mb-3" style={{ color: "#F7931A" }}>
                  Educação
                </p>
                <h2 className="text-[32px] font-bold leading-[1.1] mb-6" style={{ color: "#1D1D1F", letterSpacing: "-0.018em" }}>
                  Ordinals — NFTs Nativos do Bitcoin
                </h2>

                {/* Video thumbnail */}
                <a
                  href="https://www.youtube.com/watch?v=rSS0O2KQpsI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full aspect-video rounded-2xl overflow-hidden mb-6 relative group"
                  aria-label="Casey Rodarmor apresenta Ordinals — assistir no YouTube"
                >
                  <img
                    src="https://img.youtube.com/vi/rSS0O2KQpsI/hqdefault.jpg"
                    alt="Casey Rodarmor apresenta Ordinals"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/55 transition-all gap-2">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#FF0000" }}>
                      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1">
                        <polygon points="6,4 20,12 6,20" />
                      </svg>
                    </div>
                    <span className="text-white text-[13px] font-semibold drop-shadow">Casey Rodarmor apresenta Ordinals ao mundo</span>
                  </div>
                </a>

                {/* Lesson */}
                <div className="space-y-4 text-[15px] leading-[1.6]" style={{ color: "#3A3A3C" }}>
                  <div>
                    <h3 className="font-bold text-[17px] mb-1" style={{ color: "#1D1D1F" }}>O que são Ordinals?</h3>
                    <p>Ordinals é um protocolo criado por Casey Rodarmor em janeiro de 2023. Ele permite inscrever qualquer dado — imagem, texto, código, vídeo — diretamente nos menores pedaços de Bitcoin: os <strong>satoshis</strong>.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[17px] mb-1" style={{ color: "#1D1D1F" }}>Como funciona?</h3>
                    <p>O protocolo atribui um número de série único a cada satoshi, tornando possível rastreá-los individualmente. O conteúdo inscrito fica gravado <strong>permanentemente</strong> na blockchain do Bitcoin — sem servidores externos, sem IPFS, sem depender de terceiros.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[17px] mb-1" style={{ color: "#1D1D1F" }}>Por que é revolucionário?</h3>
                    <ul className="space-y-1 list-none">
                      {[
                        "100% on-chain: os dados ficam dentro da blockchain do Bitcoin",
                        "Imutável: uma vez inscrito, não pode ser alterado ou deletado",
                        "Sem smart contracts: usa apenas o protocolo nativo do Bitcoin",
                        "Proof-of-Work: segurança garantida pela maior rede do mundo",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span style={{ color: "#F7931A" }} className="mt-0.5 shrink-0">✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-[17px] mb-1" style={{ color: "#1D1D1F" }}>A primeira Inscrição</h3>
                    <p>Em 20 de janeiro de 2023, as primeiras inscrições chegaram à rede principal do Bitcoin. Nascia ali a cultura Ordinals — e com ela, o caminho para os Runes e para o <strong>$DOG</strong>, o principal meme do Bitcoin.</p>
                  </div>
                </div>

                {/* Docs link */}
                <a
                  href="https://docs.ordinals.com/introduction.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold mt-6 hover:underline underline-offset-2"
                  style={{ color: "#F7931A" }}
                >
                  Ler documentação oficial →
                </a>

                {/* Explorer links */}
                <div style={{ borderTop: "0.5px solid #E5E5E7" }} className="mt-6 pt-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "#86868B" }}>
                    Explorar Ordinals
                  </p>
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
                        {exp.xUrl && (
                          <a
                            href={exp.xUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[12px] font-medium px-2 py-0.5 rounded-full hover:bg-black/10 transition-colors"
                            style={{ color: "#6E6E73" }}
                          >
                            @Satflow
                          </a>
                        )}
                        {!exp.xUrl && (
                          <span style={{ color: "#F7931A" }} className="text-[15px]">→</span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── No-KYC modal ── */}
            {openModal === "no-kyc" && (
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.09em] mb-3" style={{ color: "#F7931A" }}>
                  Soberania Financeira
                </p>
                <h2 className="text-[32px] font-bold leading-[1.1] mb-2" style={{ color: "#1D1D1F", letterSpacing: "-0.018em" }}>
                  Compre Cripto sem KYC
                </h2>
                <p className="text-[15px] mb-8 leading-[1.6]" style={{ color: "#6E6E73" }}>
                  Plataformas brasileiras que permitem adquirir Bitcoin via Pix sem exigir cadastro, documentos ou verificação de identidade. Privacidade e soberania desde o primeiro satoshi.
                </p>

                <div className="space-y-4">
                  {noKycPlatforms.map((platform) => (
                    <div
                      key={platform.url}
                      className="rounded-2xl p-5"
                      style={{ background: "#F5F5F7", border: "0.5px solid #E5E5E7" }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-bold text-[17px]" style={{ color: "#1D1D1F" }}>{platform.name}</h3>
                        <a
                          href={platform.xUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] font-medium shrink-0 hover:underline"
                          style={{ color: "#6E6E73" }}
                        >
                          {platform.xLabel}
                        </a>
                      </div>
                      <p className="text-[14px] leading-[1.55] mb-4" style={{ color: "#3A3A3C" }}>
                        {platform.desc}
                      </p>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold transition-opacity hover:opacity-80"
                        style={{ background: "#F7931A", color: "#ffffff" }}
                      >
                        Abrir plataforma →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Swap & Trade modal ── */}
            {openModal === "swap-trade" && (
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.09em] mb-3" style={{ color: "#F7931A" }}>
                  Bitcoin Assets
                </p>
                <h2 className="text-[32px] font-bold leading-[1.1] mb-2" style={{ color: "#1D1D1F", letterSpacing: "-0.018em" }}>
                  Swap e Trade
                </h2>
                <p className="text-[15px] mb-8 leading-[1.6]" style={{ color: "#6E6E73" }}>
                  Plataformas descentralizadas para trocar e negociar Runes e ativos do Bitcoin. Cada uma com liquidez e experiência diferente — escolha a que melhor se encaixa na sua estratégia.
                </p>

                <div className="space-y-4">
                  {swapPlatforms.map((platform) => (
                    <div
                      key={platform.url}
                      className="rounded-2xl p-5"
                      style={{ background: "#F5F5F7", border: "0.5px solid #E5E5E7" }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-bold text-[17px]" style={{ color: "#1D1D1F" }}>{platform.name}</h3>
                        <a
                          href={platform.xUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] font-medium shrink-0 hover:underline"
                          style={{ color: "#6E6E73" }}
                        >
                          {platform.xLabel}
                        </a>
                      </div>
                      <p className="text-[14px] leading-[1.55] mb-4" style={{ color: "#3A3A3C" }}>
                        {platform.desc}
                      </p>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold transition-opacity hover:opacity-80"
                        style={{ background: "#F7931A", color: "#ffffff" }}
                      >
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
