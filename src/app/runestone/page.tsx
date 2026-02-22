import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RunestoneHistoryPage() {
    return (
        <article className="max-w-[800px] mx-auto px-4 py-12 md:py-24 space-y-12">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-dog-orange font-bold text-sm tracking-widest hover:underline mb-8"
            >
                <ArrowLeft className="w-4 h-4" />
                VOLTAR PARA HOME
            </Link>

            <header className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold font-display leading-[1.1]">
                    Runestone: Quando o Bitcoin passou a carregar história, não só valor.
                </h1>
                <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed">
                    O maior airdrop da história do Bitcoin e a pedra fundamental do $DOG.
                </p>
            </header>

            {/* Featured Img 1 (Leonidas) */}
            <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden glass border border-white/5 bg-dog-dark relative">
                <img
                    src="/leonidas.jpg"
                    alt="Leonidas"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="prose prose-lg dark:prose-invert prose-p:text-foreground/80 prose-headings:font-display prose-headings:font-bold prose-a:text-dog-orange max-w-none space-y-8">
                <p>
                    Runestone nasce como um dos projetos mais simbólicos da história recente do Bitcoin. Utilizando o Protocolo Ordinals, o projeto levou artefatos digitais diretamente para a blockchain mais segura do mundo, mostrando que o Bitcoin vai muito além de dinheiro. Idealizado por Leonidas, figura central do movimento Ordinals, Runestone provou na prática que NFTs no Bitcoin não eram teoria, eram realidade.
                </p>

                <h2>A Inscrição Pai e a Queima Simbólica</h2>
                <p>
                    A história da Runestone começa com a criação da chamada inscrição pai, da qual todas as outras inscrições do projeto derivam. Essa inscrição foi, até então, a maior já feita na blockchain do Bitcoin, ocupando um espaço significativo de bloco e marcando um momento histórico.
                </p>

                {/* Featured Img 2 (Parent Inscription) */}
                <div className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden glass border border-white/5 bg-dog-dark relative my-12">
                    <img
                        src="/parent-runestone-inscription.jpg"
                        alt="Parent Runestone Inscription"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <p>
                    Essa inscrição pai foi enviada para uma carteira amplamente atribuída a Satoshi Nakamoto. O gesto foi intencional e carregado de simbolismo. Ao enviar a inscrição para um endereço inacessível, Leonidas efetivamente selou e queimou a inscrição original, tornando impossível qualquer alteração ou reutilização futura.
                </p>
                <p>
                    Com isso, a Runestone ficou permanentemente preservada. Sem risco de mudanças, sem centralização, sem interferência. Um ato que garantiu autenticidade, integridade e respeito absoluto à criação original.
                </p>

                <h2>O Primeiro Leilão da Runestone e o Financiamento do Airdrop</h2>
                <p>
                    Para tornar o projeto verdadeiramente comunitário, foi realizado o leilão da primeira Runestone. Os recursos arrecadados foram usados para cobrir os altos custos de rede necessários para distribuir Runestones para mais de 112 mil early adopters do Protocolo Ordinals, além de ajudar a viabilizar o futuro airdrop de $DOG.
                </p>
                <p>
                    Nada de investidores ocultos, nada de VC, nada de atalhos. O próprio mercado financiou a distribuição. Uma solução simples, transparente e alinhada com os princípios do Bitcoin.
                </p>

                <h2>Runestone Airdrop</h2>
                <p>
                    Após o leilão, a Runestone executou um dos maiores airdrops já vistos no ecossistema do Bitcoin. Foram distribuídas 112.383 inscrições para carteiras que possuíam pelo menos três inscrições Ordinals.
                </p>

                {/* Featured Img 3 (Airdrop) */}
                <div className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden glass border border-white/5 bg-dog-dark relative my-12">
                    <img
                        src="/runestone-airdrop.jpg"
                        alt="Runestone Airdrop"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <p>
                    Esse momento consolidou o caráter comunitário do projeto. Para muitos, segurar uma Runestone passou a representar pertencimento. Um símbolo de ter participado desde o começo de uma nova fase do Bitcoin. Desde então, a Runestone segue como referência cultural e histórica, mostrando que o Bitcoin também é espaço para arte, identidade e experimentação on-chain.
                </p>

                <h2>O Airdrop de $DOG para Detentores de Runestone</h2>
                <p>
                    A história evoluiu com o lançamento do $DOG, a primeira memecoin criada diretamente no Bitcoin através do Protocolo Runes.
                </p>
                <p>
                    Como reconhecimento aos early supporters da Runestone, todos os detentores receberam um airdrop de $DOG. Não foi apenas uma distribuição de tokens. Foi a conexão direta entre arte, comunidade e cultura meme nativa do Bitcoin.
                </p>
                <p>
                    O $DOG nasceu livre e justo. Supply todo na rua. Sem pré-venda. Sem insiders. Um experimento social e econômico que reforça valores como soberania, autocustódia e participação comunitária.
                </p>

                <h2>O Legado e o Futuro da Runestone e do $DOG</h2>
                <p>
                    Runestone e $DOG representam mais do que projetos. Representam um momento. Um ponto de virada onde o Bitcoin deixou claro que pode carregar história, cultura e coordenação social sem abrir mão de seus princípios.
                </p>
                <p>
                    A Runestone permanece como um marco artístico e técnico do Bitcoin. O $DOG segue explorando a interseção entre meme, educação e soberania financeira.
                </p>
                <p>
                    Não é sobre hype. Não é sobre curto prazo. É sobre construir on-chain, respeitando o que Satoshi iniciou e expandindo o que é possível fazer na blockchain do Bitcoin.
                </p>
                <p className="font-bold text-2xl text-dog-orange">
                    O futuro continua sendo escrito.<br />
                    E ele é on-chain.
                </p>
            </div>
        </article>
    );
}
