import { BarChart3, Database, Users, ArrowRightLeft, Info, ArrowUpRight } from "lucide-react";

const allApps = [
    {
        title: "DCA",
        eyebrow: "Finance",
        description: "Estratégia de acumulação automatizada via Bitflow. Compre $DOG aos poucos e vença a volatilidade.",
        url: "https://app.bitflow.finance/trade?tab=dca",
        icon: BarChart3,
        iconBg: "#EFF6FF",
        iconColor: "#3B82F6",
        accentColor: "#3B82F6",
    },
    {
        title: "DOG DATA",
        eyebrow: "Analytics",
        description: "O dashboard definitivo para métricas de $DOG. Holders, volume, raridade e muito mais.",
        url: "https://www.dogdata.xyz/",
        icon: Database,
        iconBg: "#F5F3FF",
        iconColor: "#9333EA",
        accentColor: "#9333EA",
    },
    {
        title: "DOG Summit",
        eyebrow: "Comunidade",
        description: "O hub dos eventos mundiais do $DOG. Networking e estratégia para a elite soberana.",
        url: "https://www.dogsummit.club/",
        icon: Users,
        iconBg: "#FFF7ED",
        iconColor: "#F7931A",
        accentColor: "#F7931A",
    },
    {
        title: "DOG SWAP",
        eyebrow: "Finance",
        description: "Troque seus Runes e Satoshis de forma descentralizada. Simples, rápido e no Bitcoin.",
        url: "https://swap.dogofbitcoin.com/",
        icon: ArrowRightLeft,
        iconBg: "#F0FDF4",
        iconColor: "#16A34A",
        accentColor: "#16A34A",
    },
    {
        title: "Kraken DOG",
        eyebrow: "Mercado",
        description: "Referência de preço e liquidez global para traders profissionais de $DOG.",
        url: "https://www.kraken.com/pt/prices/dog",
        icon: BarChart3,
        iconBg: "#EEF2FF",
        iconColor: "#6366F1",
        accentColor: "#6366F1",
    },
    {
        title: "Runestone",
        eyebrow: "História",
        description: "A gênese da nossa cultura no Bitcoin. Entenda o artefato que mudou tudo.",
        url: "https://doggotothemoon.io/runestone/",
        icon: Info,
        iconBg: "#FFF7ED",
        iconColor: "#F7931A",
        accentColor: "#F7931A",
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
                    Descubra apps e ferramentas construídos para a Dog Army.
                </p>
            </div>

            {/* App Grid */}
            <div className="max-w-[980px] mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {allApps.map((app) => {
                        const Icon = app.icon;
                        return (
                            <a
                                key={app.title}
                                href={app.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="apple-card p-7 flex flex-col h-full no-underline group"
                                style={{ border: "0.5px solid var(--apple-separator)" }}
                            >
                                {/* Icon + category */}
                                <div className="flex items-start justify-between mb-6">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                        style={{ background: app.iconBg }}
                                    >
                                        <Icon className="w-6 h-6" style={{ color: app.iconColor }} />
                                    </div>
                                    <span
                                        className="text-[11px] font-semibold uppercase tracking-[0.06em] mt-1"
                                        style={{ color: "var(--apple-text-tertiary)" }}
                                    >
                                        {app.eyebrow}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3
                                        className="text-[20px] font-bold mb-2"
                                        style={{ letterSpacing: "-0.016em" }}
                                    >
                                        {app.title}
                                    </h3>
                                    <p
                                        className="text-[14px] leading-[1.55]"
                                        style={{ color: "var(--apple-text-secondary)" }}
                                    >
                                        {app.description}
                                    </p>
                                </div>

                                {/* Link */}
                                <div
                                    className="flex items-center justify-between mt-6 pt-5 border-t"
                                    style={{ borderColor: "var(--apple-separator)" }}
                                >
                                    <span
                                        className="text-[14px] font-semibold group-hover:underline underline-offset-2"
                                        style={{ color: app.accentColor }}
                                    >
                                        Visitar plataforma
                                    </span>
                                    <ArrowUpRight
                                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{ color: app.accentColor }}
                                    />
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* CTA */}
                <div
                    className="mt-6 apple-card p-10 md:p-14 text-center"
                    style={{
                        background: "var(--apple-section-alt)",
                        border: "0.5px solid var(--apple-separator)",
                    }}
                >
                    <h2
                        className="text-[28px] md:text-[36px] font-bold mb-3"
                        style={{ letterSpacing: "-0.018em" }}
                    >
                        Construindo no Bitcoin?
                    </h2>
                    <p
                        className="text-[17px] max-w-[400px] mx-auto mb-8 leading-[1.47]"
                        style={{ color: "var(--apple-text-secondary)" }}
                    >
                        Se você tem uma ferramenta que ajuda a comunidade $DOG a crescer
                        de forma soberana, queremos conhecê-la.
                    </p>
                    <button
                        className="px-5 py-2.5 rounded-full text-[15px] font-semibold hover:opacity-80 transition-opacity"
                        style={{ background: "#F7931A", color: "#ffffff" }}
                    >
                        Sugerir Aplicativo
                    </button>
                </div>
            </div>

            <div className="h-px mx-6" style={{ background: "var(--apple-separator)" }} />
        </div>
    );
}
