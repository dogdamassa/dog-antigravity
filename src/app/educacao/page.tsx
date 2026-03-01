import { Layers, Cpu, ShieldCheck, ExternalLink, ChevronRight, Code } from "lucide-react";

const eduSections = [
    {
        title: "Ordinals (NFTs no Bitcoin)",
        eyebrow: "Inscrições permanentes no Bitcoin.",
        content:
            "A teoria dos Ordinals atribui números de série aos satoshis, permitindo rastrear e transferir sats individuais. Ordinals permitem que dados (como imagens, texto ou código) sejam inscritos diretamente em unidades individuais de Bitcoin. Diferente de NFTs em outras redes, os Ordinals vivem inteiramente na blockchain do Bitcoin, via Proof-of-Work.",
        videoId: "rSS0O2KQpsI",
        icon: Layers,
        iconBg: "#EFF6FF",
        iconColor: "#3B82F6",
        darkIconBg: "#1E3A5F",
        accentColor: "#3B82F6",
        link: "https://docs.ordinals.com/introduction.html",
        githubLink: "https://github.com/ordinals/ord",
    },
    {
        title: "Runes",
        eyebrow: "Tokens fungíveis nativos do Bitcoin.",
        content:
            "Runes são tokens no Bitcoin. $DOG é um Rune. O protocolo Runes foi criado para ser mais eficiente e simples que o padrão BRC-20, permitindo a criação de ativos fungíveis sem \"inchar\" a rede de forma desnecessária. É segurança Bitcoin com flexibilidade moderna.",
        videoId: null,
        icon: Cpu,
        iconBg: "#FFF7ED",
        iconColor: "#F7931A",
        darkIconBg: "#4A2C0A",
        accentColor: "#F7931A",
        link: "https://docs.ordinals.com/introduction.html",
        githubLink: null,
    },
    {
        title: "$DOG",
        eyebrow: "O espírito da comunidade em código.",
        content:
            "$DOG não é apenas um meme; é um experimento de distribuição justa e soberania comunitária no ecossistema Ordinals/Runes. Sem pré-venda, sem investidores, apenas a comunidade construindo sobre a rede mais segura do mundo.",
        videoId: null,
        icon: ShieldCheck,
        iconBg: "#FEFCE8",
        iconColor: "#EAB308",
        darkIconBg: "#3D3000",
        accentColor: "#EAB308",
        link: null,
        githubLink: null,
    },
];

export default function EducacaoPage() {
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
                    Soberania Financeira
                </p>
                <h1
                    className="text-[40px] md:text-[56px] font-bold leading-[1.07] mb-3"
                    style={{ letterSpacing: "-0.022em" }}
                >
                    Educação.
                </h1>
                <p
                    className="text-[19px] max-w-[500px] mx-auto"
                    style={{ color: "var(--apple-text-secondary)" }}
                >
                    Entenda as tecnologias que impulsionam o $DOG e o ecossistema Bitcoin.
                </p>
            </div>

            {/* Education Cards */}
            <div className="max-w-[980px] mx-auto px-4 md:px-6 py-12 md:py-16 space-y-4">
                {eduSections.map((section) => {
                    const Icon = section.icon;
                    return (
                        <div
                            key={section.title}
                            className="apple-card p-8 md:p-12"
                            style={{ border: "0.5px solid var(--apple-separator)" }}
                        >
                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                                    style={{ background: section.iconBg }}
                                >
                                    <Icon
                                        className="w-7 h-7"
                                        style={{ color: section.iconColor }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <h3
                                            className="text-[28px] md:text-[34px] font-bold leading-[1.07] mb-1"
                                            style={{ letterSpacing: "-0.018em" }}
                                        >
                                            {section.title}
                                        </h3>
                                        <p
                                            className="text-[15px] font-medium"
                                            style={{ color: section.accentColor }}
                                        >
                                            {section.eyebrow}
                                        </p>
                                    </div>

                                    <p
                                        className="text-[17px] leading-[1.55]"
                                        style={{ color: "var(--apple-text-secondary)" }}
                                    >
                                        {section.content}
                                    </p>

                                    {section.videoId && (
                                        <div className="w-full aspect-video rounded-xl overflow-hidden border my-6" style={{ borderColor: "var(--apple-separator)" }}>
                                            <iframe
                                                src={`https://www.youtube.com/embed/${section.videoId}`}
                                                title={`Video sobre ${section.title}`}
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
                                                    Documentação
                                                    <ChevronRight className="w-4 h-4" />
                                                </a>
                                            )}
                                            {section.githubLink && (
                                                <a
                                                    href={section.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-[15px] font-medium hover:underline underline-offset-2"
                                                    style={{ color: "var(--apple-text-secondary)" }}
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
                        Filosofia
                    </p>
                    <h2
                        className="text-[34px] md:text-[48px] font-bold leading-[1.07] mb-4"
                        style={{ letterSpacing: "-0.022em" }}
                    >
                        A Primeira Regra da Soberania.
                    </h2>
                    <p
                        className="text-[17px] md:text-[19px] mb-10 leading-[1.47]"
                        style={{ color: "var(--apple-text-secondary)" }}
                    >
                        "Don't trust, verify." Todo o código do ecossistema Ordinals e
                        Runes é aberto. Nunca aceite promessas; estude as regras de
                        consenso.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "Autocustódia é soberania",
                            "Bitcoin é liberdade",
                            "Longo Prazo > Hype",
                        ].map((badge) => (
                            <span
                                key={badge}
                                className="px-4 py-2 rounded-full text-[13px] font-semibold"
                                style={{
                                    background: "var(--apple-card-bg)",
                                    border: "0.5px solid var(--apple-separator)",
                                    color: "var(--foreground)",
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
