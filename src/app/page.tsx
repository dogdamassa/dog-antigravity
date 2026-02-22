import { WalletConnect } from "@/components/WalletConnect";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const bentoCards = [
  {
    id: "tokenomics",
    eyebrow: "$DOG TOKENOMICS",
    headline: "100 Billion (total supply)",
    tagline: "100 Billion (Circulating Supply)",
    url: "#",
    linkLabel: "100% Descentralizado",
    linkColor: "#F7931A",
    bgStyle: { background: "#111111" },
    headlineClass: "text-white text-3xl md:text-5xl",
    taglineClass: "text-white/60 font-bold",
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
    linkLabel: "Saiba mais",
    linkColor: "#3B82F6",
    bgStyle: { background: "#1D1D1F" },
    headlineClass: "text-white",
    taglineClass: "text-[#6E6E73]",
    eyebrowClass: "text-blue-400",
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
    linkLabel: "Saiba mais",
    linkColor: "#9333EA",
    bgStyle: {},
    bgClass: "bg-white dark:bg-[#2C2C2E]",
    headlineClass: "text-[#1D1D1F] dark:text-white",
    taglineClass: "text-[#6E6E73]",
    eyebrowClass: "text-purple-600 dark:text-purple-400",
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
    id: "swap",
    eyebrow: "Swap Nativo",
    headline: "Troque\nRunes.",
    tagline: "Descentralizado e simples no Bitcoin.",
    url: "https://swap.dogofbitcoin.com/",
    linkLabel: "Saiba mais",
    linkColor: "#16A34A",
    bgStyle: {},
    bgClass: "bg-[#F5F5F7] dark:bg-[#2C2C2E]",
    headlineClass: "text-[#1D1D1F] dark:text-white",
    taglineClass: "text-[#6E6E73]",
    eyebrowClass: "text-green-600 dark:text-green-400",
    gridClass: "lg:col-span-2",
    minH: "min-h-[300px]",
    wide: false,
  },
  {
    id: "kraken",
    eyebrow: "Mercado Global",
    headline: "Preço e\nliquidez.",
    tagline: "Referência profissional para traders de $DOG.",
    url: "https://www.kraken.com/pt/prices/dog",
    linkLabel: "Ver gráfico",
    linkColor: "#6366F1",
    bgStyle: { background: "#1D1D1F" },
    headlineClass: "text-white",
    taglineClass: "text-[#6E6E73]",
    eyebrowClass: "text-indigo-400",
    gridClass: "lg:col-span-2",
    minH: "min-h-[300px]",
    wide: false,
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
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="text-center px-6 pt-20 md:pt-28 pb-24 md:pb-32 relative"
        style={{ background: "#1D1D1F" }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-[2rem] shadow-2xl shadow-dog-orange/20 mb-8 border border-white/10 flex items-center justify-center text-5xl md:text-6xl select-none" style={{ background: "#2A2A2A" }}>
          🐕
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
          <WalletConnect />
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

          {/* Bento grid: 1 col mobile → 6 col desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-3">
            {bentoCards.map((card) => {
              const LinkComponent = card.url.startsWith("http") ? "a" : Link;
              return (
                <LinkComponent
                  key={card.id}
                  href={card.url}
                  target={card.url.startsWith("http") ? "_blank" : undefined}
                  rel={card.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`apple-card ${card.bgClass ?? ""} ${card.gridClass} ${card.minH} p-8 md:p-10 flex no-underline ${card.wide
                    ? "flex-col md:flex-row md:items-center md:justify-between gap-6"
                    : "flex-col justify-between"
                    }`}
                  style={card.bgStyle}
                >
                  <div>
                    <p
                      className={`text-[12px] font-semibold uppercase tracking-[0.06em] mb-2 ${card.eyebrowClass}`}
                    >
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
                    {card.image && (
                      <div className="w-full h-40 mb-6 rounded-xl overflow-hidden bg-black/10 flex items-center justify-center">
                        <img src={card.image} alt={card.headline} className="w-full h-full object-cover mix-blend-multiply" />
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
                      {card.linkLabel} {card.url !== "#" ? "›" : ""}
                    </span>
                  </div>
                </LinkComponent>
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
            <h2 className="text-3xl font-bold font-display">
              Trading<span style={{ color: "#F7931A" }}>View</span>
            </h2>
            <p className="text-foreground/50">Acompanhe $DOG em tempo real (DOG/USDT)</p>
          </div>
          <div className="w-full h-[500px] rounded-2xl overflow-hidden glass border border-white/10 relative">
            <iframe
              src="https://s.tradingview.com/widgetembed/?symbol=MEXC%3ADOGUSDT&interval=D&theme=dark"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>

        {/* Bitflow DCA — iframe bloqueado pelo servidor (X-Frame-Options: SAMEORIGIN) */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg" style={{ background: "#1D1D1F" }}>
              📈
            </div>
            <h2 className="text-3xl font-bold font-display">Bitflow DCA</h2>
            <p className="text-foreground/50">Automatize suas compras de $DOG</p>
          </div>
          <div
            className="w-full rounded-2xl overflow-hidden border border-white/10 flex flex-col items-center justify-center gap-6 py-16 px-8 text-center"
            style={{ background: "#111111" }}
          >
            <div className="text-5xl">⚡</div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">Bitflow DCA</h3>
              <p className="text-[#6E6E73] text-[15px] max-w-[420px] leading-relaxed">
                O Bitflow não permite incorporação por segurança
                (<code className="text-[#F7931A] text-[13px]">X-Frame-Options: SAMEORIGIN</code>).
                Acesse diretamente para configurar sua estratégia de DCA em $DOG.
              </p>
            </div>
            <a
              href="https://app.bitflow.finance/trade?tab=dca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-semibold transition-opacity hover:opacity-80"
              style={{ background: "#3B82F6", color: "#ffffff" }}
            >
              Abrir Bitflow DCA
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* DOG Swap */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg" style={{ background: "#F7931A" }}>
              🔄
            </div>
            <h2 className="text-3xl font-bold font-display">DOG Swap</h2>
            <p className="text-foreground/50">Troca descentralizada de Runes</p>
          </div>
          <div className="w-full h-[600px] rounded-2xl overflow-hidden glass border border-white/10 relative">
            <iframe
              src="https://swap.dogofbitcoin.com/"
              width="100%"
              height="100%"
              frameBorder="0"
            />
          </div>
        </div>

        {/* DOG DATA Transactions */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold font-display">DOG DATA</h2>
            <p className="text-foreground/50">Atividade On-Chain e Transações</p>
          </div>
          <div className="w-full h-[600px] rounded-2xl overflow-hidden glass border border-white/10 relative">
            <iframe
              src="https://www.dogdata.xyz/transactions"
              width="100%"
              height="100%"
              frameBorder="0"
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
          <p
            className="text-[12px]"
            style={{ color: "var(--apple-text-tertiary)" }}
          >
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
    </div>
  );
}
