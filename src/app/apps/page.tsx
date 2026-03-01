import { ArrowUpRight } from "lucide-react";

const allApps = [
  {
    id: "liquidium",
    title: "Liquidium",
    eyebrow: "DeFi · Lend & Borrow",
    description:
      "A principal plataforma de empréstimos P2P construída no Bitcoin. Use seus Ordinals e Runes como garantia para pegar BTC emprestado.",
    url: "https://app.liquidium.wtf/welcome?invite=vc22OOR5nEdokrB8pybz",
    logo: "/logos/liquidium.jpg",
    logoContain: true,
    logoBg: "#111111",
    xUrl: "https://x.com/LiquidiumWTF",
    xLabel: "@LiquidiumWTF",
    accentColor: "#F7931A",
  },
  {
    id: "satsterminal",
    title: "Sats Terminal",
    eyebrow: "Swap · Aggregator",
    description:
      "Aggregator de Bitcoin DeFi que encontra a melhor rota para swaps de Runes, Alkanes e Spark tokens. Investido por Draper VC e CB Ventures.",
    url: "https://app.satsterminal.com/",
    logo: "/logos/satsterminal.png",
    logoContain: false,
    logoBg: "#000000",
    xUrl: "https://x.com/SatsTerminal",
    xLabel: "@SatsTerminal",
    accentColor: "#F7931A",
  },
  {
    id: "dogswap",
    title: "DOG Swap",
    eyebrow: "Swap · Runes",
    description:
      "Swap nativo e descentralizado criado pela comunidade $DOG. Troque Runes diretamente no Bitcoin, sem intermediários e sem custódia.",
    url: "https://swap.dogofbitcoin.com/",
    logo: "/logos/dogswap.png",
    logoContain: true,
    logoBg: "#111111",
    xUrl: "https://x.com/DogOfBitcoinOG",
    xLabel: "@DogOfBitcoinOG",
    accentColor: "#F7931A",
  },
  {
    id: "satflow",
    title: "Satflow",
    eyebrow: "Marketplace · Runes & Ordinals",
    description:
      "Marketplace profissional para comprar, vender e trocar Runes e Ordinals. Alta liquidez, interface limpa e dados de mercado em tempo real.",
    url: "https://www.satflow.com/runes",
    logo: "/logos/satflow.png",
    logoContain: true,
    logoBg: "#0D0D0D",
    xUrl: "https://x.com/Satflow",
    xLabel: "@Satflow",
    accentColor: "#F7931A",
  },
  {
    id: "bitflow",
    title: "Bitflow Finance",
    eyebrow: "Finance · DCA & DEX",
    description:
      "DEX para Bitcoiners com DCA automatizado para $DOG, BTC e Runes. Sem custódia, rendimento real via pools de liquidez no Bitcoin.",
    url: "https://app.bitflow.finance/trade?tab=dca",
    logo: "/logos/bitflow.png",
    logoContain: false,
    logoBg: "#FFFFFF",
    xUrl: "https://x.com/Bitflow_Finance",
    xLabel: "@Bitflow_Finance",
    accentColor: "#F7931A",
  },
  {
    id: "dogdata",
    title: "DOG DATA",
    eyebrow: "Analytics · On-Chain",
    description:
      "Dashboard definitivo de métricas do $DOG. Holders, volume, transações, distribuição de carteiras e dados on-chain em tempo real.",
    url: "https://www.dogdata.xyz/",
    logo: "/logos/dogdata.png",
    logoContain: true,
    logoBg: "#111111",
    xUrl: null,
    xLabel: null,
    accentColor: "#F7931A",
  },
  {
    id: "btcnopix",
    title: "BTC no Pix",
    eyebrow: "Finance · Sem KYC",
    description:
      "Compre Bitcoin diretamente via Pix, sem cadastro e sem KYC. Privacidade e soberania desde o primeiro satoshi.",
    url: "https://www.btcnopix.com/compre",
    logo: "/logos/btcnopix.png",
    logoContain: true,
    logoBg: "#111111",
    xUrl: "https://x.com/btcnopix",
    xLabel: "@btcnopix",
    accentColor: "#F7931A",
  },
  {
    id: "b2pix",
    title: "B2Pix",
    eyebrow: "Finance · P2P",
    description:
      "Plataforma peer-to-peer brasileira para comprar e vender Bitcoin com Pix. Sem burocracia, sem verificação de identidade.",
    url: "https://b2pix.org/",
    logo: "/logos/b2pix.png",
    logoContain: true,
    logoBg: "#0A0A1A",
    xUrl: "https://x.com/b2pixorg",
    xLabel: "@b2pixorg",
    accentColor: "#F7931A",
  },
  {
    id: "dogsummit",
    title: "DOG Summit",
    eyebrow: "Comunidade · Evento",
    description:
      "O evento mundial da elite $DOG. Networking, educação e estratégia para quem leva Bitcoin a sério.",
    url: "https://www.dogsummit.club/",
    logo: "/logos/dogsummit.png",
    logoContain: true,
    logoBg: "#1D1D1F",
    xUrl: null,
    xLabel: null,
    accentColor: "#F7931A",
  },
  {
    id: "runestone",
    title: "Runestone",
    eyebrow: "História · Ordinals",
    description:
      "O maior airdrop da história do Bitcoin. A pedra fundamental da cultura Ordinals que distribuiu $DOG para toda a comunidade.",
    url: "https://doggotothemoon.io/runestone/",
    logo: "/runestone.png",
    logoContain: true,
    logoBg: "#F7931A",
    xUrl: null,
    xLabel: null,
    accentColor: "#1D1D1F",
  },
];

export default function AppsPage() {
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
          Dog Army Tools
        </p>
        <h1
          className="text-[40px] md:text-[56px] font-bold leading-[1.07] mb-3"
          style={{ letterSpacing: "-0.022em" }}
        >
          Ecossistema.
        </h1>
        <p
          className="text-[19px]"
          style={{ color: "var(--apple-text-secondary)" }}
        >
          Todos os apps e ferramentas da Dog Army em um só lugar.
        </p>
      </div>

      {/* App Grid */}
      <div className="max-w-[980px] mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {allApps.map((app) => (
            <div
              key={app.id}
              className="apple-card p-6 flex flex-col h-full"
              style={{ border: "0.5px solid var(--apple-separator)" }}
            >
              {/* Logo */}
              <div
                className="w-full h-[80px] rounded-2xl mb-5 overflow-hidden flex items-center justify-center shrink-0"
                style={{ background: app.logoBg }}
              >
                <img
                  src={app.logo}
                  alt={`${app.title} logo`}
                  className="w-full h-full"
                  style={{
                    objectFit: app.logoContain ? "contain" : "cover",
                    objectPosition: "center",
                    padding: app.logoContain ? "10px" : "0",
                  }}
                />
              </div>

              {/* Category */}
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.06em] mb-1.5"
                style={{ color: "#F7931A" }}
              >
                {app.eyebrow}
              </span>

              {/* Title */}
              <h3
                className="text-[20px] font-bold mb-2"
                style={{ letterSpacing: "-0.016em", color: "#1D1D1F" }}
              >
                {app.title}
              </h3>

              {/* Description */}
              <p
                className="text-[14px] leading-[1.55] flex-1"
                style={{ color: "#6E6E73" }}
              >
                {app.description}
              </p>

              {/* Footer */}
              <div
                className="flex items-center justify-between mt-5 pt-4 border-t"
                style={{ borderColor: "#E5E5E7" }}
              >
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[13px] font-semibold hover:underline underline-offset-2"
                  style={{ color: "#F7931A" }}
                >
                  Visitar plataforma
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                {app.xUrl && (
                  <a
                    href={app.xUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium px-2 py-1 rounded-full hover:bg-black/5 transition-colors"
                    style={{ color: "#86868B" }}
                  >
                    {app.xLabel}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-6 apple-card p-10 md:p-14 text-center"
          style={{
            background: "#111111",
            border: "0.5px solid var(--apple-separator)",
          }}
        >
          <h2
            className="text-[28px] md:text-[36px] font-bold mb-3 text-white"
            style={{ letterSpacing: "-0.018em" }}
          >
            Construindo no Bitcoin?
          </h2>
          <p
            className="text-[17px] max-w-[400px] mx-auto mb-8 leading-[1.47]"
            style={{ color: "#6E6E73" }}
          >
            Se você tem uma ferramenta que ajuda a comunidade $DOG a crescer
            de forma soberana, queremos conhecê-la.
          </p>
          <a
            href="https://x.com/DogOfBitcoinOG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 rounded-full text-[15px] font-semibold hover:opacity-80 transition-opacity"
            style={{ background: "#F7931A", color: "#ffffff" }}
          >
            Sugerir no X
          </a>
        </div>
      </div>

      <div className="h-px mx-6" style={{ background: "var(--apple-separator)" }} />
    </div>
  );
}
