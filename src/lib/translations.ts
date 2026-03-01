export type Language = 'pt' | 'en';

const translations = {
  pt: {
    nav: {
      home: 'Home',
      comunidade: 'Comunidade',
      eventos: 'Eventos',
      educacao: 'Educação',
      apps: 'Apps',
      news: 'DOG NEWS',
      toggleTheme: 'Alternar tema',
      toggleLanguage: 'Mudar idioma',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      lightMode: 'Modo Claro',
      darkMode: 'Modo Escuro',
    },
    home: {
      hero: {
        headline1: 'Preço muda,',
        headline2: 'visão não.',
        subtitle: '$DOG nāo é só preço. É um sinal de que o Bitcoin está evoluindo culturamente rumo à hiperbitcoinizaçāo',
        cta_buy: 'Comprar $DOG',
        cta_learn: 'Saiba mais ›',
      },
      stats: [
        { value: '100B', label: 'Supply total' },
        { value: 'Bitcoin', label: 'Blockchain nativa' },
        { value: 'Zero', label: 'Pré-venda / VCs' },
        { value: '100%', label: 'Descentralizado' },
      ],
      ecosystem: {
        headline: 'Bitcoin\nEcosystem.',
        description: 'A hiperbitcoinização é construída com infraestrutura. L2s ampliam escalabilidade e DeFi ativa o capital. Assets fortalecem a cultura e a liquidez dentro do próprio Bitcoin. Não é só reserva de valor. É um ecossistema soberano em expansão.',
      },
      bentoCards: {
        tokenomics: {
          eyebrow: '$DOG TOKENOMICS',
          headline: '100 Billion',
          tagline: 'Supply total em circulação. Sem pré-venda, sem investidores.',
          linkLabel: '100% Descentralizado',
        },
        dca: {
          eyebrow: 'Estratégia',
          headline: 'Acumule com\nestratégia.',
          tagline: 'Automatize suas compras de $DOG, vença a volatilidade e construa sua posição no longo prazo.',
          linkLabel: 'Configurar DCA',
        },
        data: {
          eyebrow: 'Analytics On-Chain',
          headline: 'Números que\nrevelam tudo.',
          tagline: 'Holders, volume e métricas do $DOG on-chain, direto da fonte e em tempo real.',
          linkLabel: 'Abrir DOG DATA',
        },
        summit: {
          eyebrow: 'Evento Global',
          headline: 'O encontro da elite $DOG.',
          tagline: 'Bitcoin City, El Salvador · 2024',
          linkLabel: 'Ver detalhes',
        },
        swapTrade: {
          eyebrow: 'Bitcoin Assets',
          headline: 'Swap e\nTrade.',
          tagline: 'Plataformas nativas para trocar Runes com liquidez profunda diretamente no Bitcoin, sem fricção.',
          linkLabel: 'Ver plataformas',
        },
        noKyc: {
          eyebrow: 'Soberania Financeira',
          headline: 'Compre sem\nKYC.',
          tagline: 'Adquira Bitcoin e cripto com Pix, sem cadastro e sem burocracia.',
          linkLabel: 'Ver plataformas',
        },
        defi: {
          eyebrow: 'DeFi no Bitcoin',
          headline: 'Bitcoin\nDeFi.',
          tagline: 'Acesse infraestrutura financeira de ponta: empréstimos, rendimentos e trade descentralizado.',
          linkLabel: 'Ver plataformas',
        },
        runestone: {
          eyebrow: 'História',
          headline: 'O maior\nairdrop.',
          tagline: 'A pedra fundamental da cultura Ordinals.',
          linkLabel: 'Saiba mais',
        },
        ordinals: {
          eyebrow: 'Educação',
          headline: 'Ordinals',
          tagline: 'NFTs nativos do Bitcoin. Clique para aprender tudo sobre o protocolo criado por Casey Rodarmor.',
          linkLabel: 'Aprender Ordinals',
        },
        runes: {
          eyebrow: 'Educação',
          headline: 'Runes',
          tagline: 'Runes são tokens no Bitcoin. Mais eficientes e simples que BRC-20.',
          linkLabel: 'Aprenda sobre Runes',
        },
      },
      tradingview: {
        eyebrow: 'Mercado em tempo real',
        headline1: 'Trading',
        headline2: 'View.',
        description: 'Acompanhe o par DOG/USDT em tempo real com gráficos profissionais. Analise tendências, volume e suportes antes de cada decisão.',
        cta: 'Abrir TradingView ›',
      },
      dogswap: {
        eyebrow: 'Swap descentralizado',
        headline1: 'DOG',
        headline2: 'Swap.',
        description: 'Swap nativo e descentralizado da comunidade $DOG. Troque Runes diretamente no Bitcoin, sem intermediários, sem custódia.',
        cta: 'Abrir DOG Swap ›',
      },
      runestone_section: {
        eyebrow: 'História · Airdrop',
        headline1: 'O maior airdrop',
        headline2: 'do Bitcoin.',
        description: 'Runestone nāo foi só distribuiçāo. Foi o inicio de um movimento que gravou cultura diretamente do Bitcoin.',
        cta_main: 'Saiba mais',
      },
      dogdata: {
        eyebrow: 'Analytics on-chain',
        headline1: 'DOG',
        headline2: 'DATA.',
        description: 'Holders, volume e métricas reais do $DOG em tempo real. Dados on-chain que revelam a força e a convicção da Dog Army.',
        cta: 'Abrir DOG DATA ›',
      },
      footer: {
        copyright: 'Copyright © 2025 $DOG Aggregator. Todos os direitos reservados.',
        tagline: 'Bitcoin Nativo · 100% Descentralizado',
        columns: {
          ecosystem: 'Ecossistema',
          learn: 'Aprender',
          community: 'Comunidade',
          buy: 'Comprar',
        },
      },
      modals: {
        close: 'Fechar',
        openPlatform: 'Abrir plataforma →',
        ordinals: {
          eyebrow: 'Educação',
          title: 'Ordinals — NFTs Nativos do Bitcoin',
          videoCaption: 'Casey Rodarmor apresenta Ordinals ao mundo',
          whatAre: {
            title: 'O que são Ordinals?',
            content: 'Ordinals é um protocolo criado por Casey Rodarmor em janeiro de 2023. Ele permite inscrever qualquer dado — imagem, texto, código — diretamente nos menores pedaços de Bitcoin: os satoshis.',
          },
          howWorks: {
            title: 'Como funciona?',
            content: 'O protocolo atribui um número de série único a cada satoshi. O conteúdo inscrito fica gravado permanentemente na blockchain do Bitcoin — sem servidores externos, sem IPFS.',
          },
          why: {
            title: 'Por que é revolucionário?',
            points: [
              '100% on-chain: os dados ficam dentro da blockchain',
              'Imutável: uma vez inscrito, não pode ser alterado',
              'Sem smart contracts: usa apenas o protocolo nativo',
              'Proof-of-Work: segurança da maior rede do mundo',
            ],
          },
          docLink: 'Ler documentação oficial →',
          exploreLabel: 'Explorar Ordinals',
        },
        noKyc: {
          eyebrow: 'Soberania Financeira',
          title: 'Compre Cripto sem KYC',
          description: 'Plataformas brasileiras que permitem adquirir Bitcoin via Pix sem exigir cadastro ou verificação de identidade.',
        },
        swapTrade: {
          eyebrow: 'Bitcoin Assets',
          title: 'Swap e Trade',
          description: 'Plataformas descentralizadas para trocar e negociar Runes e ativos do Bitcoin.',
        },
        defi: {
          eyebrow: 'DeFi no Bitcoin',
          title: 'Bitcoin DeFi',
          description: 'Plataformas de finanças descentralizadas (DeFi) no Bitcoin. Faça seu patrimônio render, pegue empréstimos e negocie com segurança.',
        },
      },
      platforms: {
        swap: [
          {
            name: 'SatsTerminal',
            desc: 'Aggregator de liquidez para Runes e Ordinals. Encontra o melhor preço entre múltiplas plataformas automaticamente.',
          },
          {
            name: 'DOG Swap',
            desc: 'Swap nativo e descentralizado da comunidade $DOG. Troque Runes diretamente no Bitcoin sem intermediários.',
          },
          {
            name: 'Satflow — Runes',
            desc: 'Marketplace e swap de Runes com interface profissional. Alta liquidez e dados de mercado em tempo real.',
          },
        ],
        noKyc: [
          {
            name: 'BTC no Pix',
            desc: 'Compre Bitcoin diretamente via Pix, sem cadastro, sem KYC. Rápido, privado e simples.',
          },
          {
            name: 'B2Pix',
            desc: 'Plataforma peer-to-peer para comprar e vender Bitcoin com Pix sem burocracia e sem verificação de identidade.',
          },
        ],
        defi: [
          {
            name: 'Liquidium',
            desc: 'Principal plataforma de empréstimos de NFTs no Bitcoin.',
          },
          {
            name: 'Bitflow Finance',
            desc: 'DEX e Hub de Liquidez construído para Bitcoiners.',
          },
          {
            name: 'SatsTerminal',
            desc: 'Terminal profissional para analisar e negociar no Bitcoin.',
          },
        ],
      },
    },
    comunidade: {
      eyebrow: 'Dog Army',
      title: 'Comunidade.',
      subtitle: 'O pulso da comunidade $DOG.',
      trending: {
        title: 'O que está acontecendo',
        showMore: 'Mostrar mais',
        labels: {
          bitcoin: 'Trending no Bitcoin',
          tech: 'Tecnologia',
          culture: 'Cultura',
          finance: 'Finanças Globais',
        },
      },
      sidebar: {
        disclaimer: 'Feed simulado para o protótipo. Em breve, integração com APIs reais.',
        policies: 'Políticas da Comunidade',
      },
    },
    eventos: {
      eyebrow: 'Comunidade Global',
      title: 'Eventos.',
      subtitle: 'Onde o mundo físico e o digital se encontram.',
      featured: {
        badge: 'Featured Event',
        title: 'DOG SUMMIT 2025.',
        description: 'O encontro definitivo da comunidade $DOG focado na adoção regional e cultura Bitcoin. Estratégia, networking e soberania financeira no Brasil.',
        cta: 'Ver Detalhes',
      },
      upcoming: {
        title: 'Próximos Encontros',
        empty: 'Nenhum evento agendado.',
      },
      past: {
        title: 'Histórico',
      },
    },
    educacao: {
      eyebrow: 'Soberania Financeira',
      title: 'Educação.',
      subtitle: 'Entenda as tecnologias que impulsionam o $DOG e o ecossistema Bitcoin.',
      docLink: 'Documentação',
      sections: [
        {
          title: 'Ordinals (NFTs no Bitcoin)',
          eyebrow: 'Inscrições permanentes no Bitcoin.',
          content: 'A teoria dos Ordinals atribui números de série aos satoshis, permitindo rastrear e transferir sats individuais. Ordinals permitem que dados (como imagens, texto ou código) sejam inscritos diretamente em unidades individuais de Bitcoin. Diferente de NFTs em outras redes, os Ordinals vivem inteiramente na blockchain do Bitcoin, via Proof-of-Work.',
        },
        {
          title: 'Runes',
          eyebrow: 'Tokens fungíveis nativos do Bitcoin.',
          content: 'Runes são tokens no Bitcoin. $DOG é um Rune. O protocolo Runes foi criado para ser mais eficiente e simples que o padrão BRC-20, permitindo a criação de ativos fungíveis sem "inchar" a rede de forma desnecessária. É segurança Bitcoin com flexibilidade moderna.',
        },
        {
          title: '$DOG',
          eyebrow: 'O espírito da comunidade em código.',
          content: '$DOG não é apenas um meme; é um experimento de distribuição justa e soberania comunitária no ecossistema Ordinals/Runes. Sem pré-venda, sem investidores, apenas a comunidade construindo sobre a rede mais segura do mundo.',
        },
      ],
      philosophy: {
        eyebrow: 'Filosofia',
        title: 'A Primeira Regra da Soberania.',
        content: '"Don\'t trust, verify." Todo o código do ecossistema Ordinals e Runes é aberto. Nunca aceite promessas; estude as regras de consenso.',
        badges: ['Autocustódia é soberania', 'Bitcoin é liberdade', 'Longo Prazo > Hype'],
      },
    },
    apps: {
      eyebrow: 'Dog Army Tools',
      title: 'Ecossistema.',
      subtitle: 'Todos os apps e ferramentas da Dog Army em um só lugar.',
      visitPlatform: 'Visitar plataforma',
      cta: {
        title: 'Construindo no Bitcoin?',
        description: 'Se você tem uma ferramenta que ajuda a comunidade $DOG a crescer de forma soberana, queremos conhecê-la.',
        button: 'Sugerir no X',
      },
      items: [
        {
          id: 'liquidium',
          description: 'A principal plataforma de empréstimos P2P construída no Bitcoin. Use seus Ordinals e Runes como garantia para pegar BTC emprestado.',
        },
        {
          id: 'satsterminal',
          description: 'Aggregator de Bitcoin DeFi que encontra a melhor rota para swaps de Runes, Alkanes e Spark tokens. Investido por Draper VC e CB Ventures.',
        },
        {
          id: 'dogswap',
          description: 'Swap nativo e descentralizado criado pela comunidade $DOG. Troque Runes diretamente no Bitcoin, sem intermediários e sem custódia.',
        },
        {
          id: 'satflow',
          description: 'Marketplace profissional para comprar, vender e trocar Runes e Ordinals. Alta liquidez, interface limpa e dados de mercado em tempo real.',
        },
        {
          id: 'bitflow',
          description: 'DEX para Bitcoiners com DCA automatizado para $DOG, BTC e Runes. Sem custódia, rendimento real via pools de liquidez no Bitcoin.',
        },
        {
          id: 'dogdata',
          description: 'Dashboard definitivo de métricas do $DOG. Holders, volume, transações, distribuição de carteiras e dados on-chain em tempo real.',
        },
        {
          id: 'btcnopix',
          description: 'Compre Bitcoin diretamente via Pix, sem cadastro e sem KYC. Privacidade e soberania desde o primeiro satoshi.',
        },
        {
          id: 'b2pix',
          description: 'Plataforma peer-to-peer brasileira para comprar e vender Bitcoin com Pix. Sem burocracia, sem verificação de identidade.',
        },
        {
          id: 'dogsummit',
          description: 'O evento mundial da elite $DOG. Networking, educação e estratégia para quem leva Bitcoin a sério.',
        },
        {
          id: 'runestone',
          description: 'O maior airdrop da história do Bitcoin. A pedra fundamental da cultura Ordinals que distribuiu $DOG para toda a comunidade.',
        },
      ],
    },
    news: {
      eyebrow: 'Ecossistema $DOG',
      title: 'DOG NEWS.',
      subtitle: 'Acompanhe as últimas atualizações do ecossistema.',
      reporter: {
        role: 'Reporter · Data Analyst',
        bio: 'Análise diária do ecossistema $DOG — dados on-chain, preço e narrativa. Vídeos todo dia.',
        subscribe: 'Inscrever',
        follow: 'Seguir',
      },
      featured: {
        label: 'Destaque · Último Vídeo @cryptolution',
      },
      recent: {
        title: 'Vídeos Recentes.',
      },
      cta: {
        eyebrow: 'Não perca nenhum vídeo',
        description: 'Conteúdo diário sobre $DOG, Bitcoin e economia.',
        subscribeYt: 'Inscrever-se',
        followX: 'Seguir no X',
      },
      timeAgo: {
        today: 'hoje',
        oneDay: '1 dia atrás',
        days: (n: number) => `${n} dias atrás`,
        oneWeek: '1 semana atrás',
        weeks: (n: number) => `${n} semanas atrás`,
        oneMonth: '1 mês atrás',
        months: (n: number) => `${n} meses atrás`,
      },
    },
    runestone: {
      backLink: 'VOLTAR PARA HOME',
      title: 'Runestone: Quando o Bitcoin passou a carregar história, não só valor.',
      subtitle: 'O maior airdrop da história do Bitcoin e a pedra fundamental do $DOG.',
      body: {
        intro: 'Runestone não foi apenas um projeto. Foi um marco definitivo na história do Bitcoin.\n\nIdealizada por [Leonidas](https://x.com/leonidasnft/status/1764216092514213988?s=46) e criada pelo artista [Leo Caillard](https://x.com/cl_art_studio/status/1765052114533826770?s=46), a Runestone nasceu no coração do movimento Ordinals para provar algo que muitos duvidavam: o Bitcoin podia carregar mais do que valor financeiro.\n\nPodia carregar cultura. Podia carregar identidade. Podia carregar memória permanente.\n\nForam 3.97 MB inscritos diretamente na blockchain do Bitcoin. Registro on chain: [63140674](https://www.ord.io/63140674)\n\nSem servidores. Sem dependência externa. Sem intermediários.\nImutável. Permanente. Bitcoin.',
        h2_1: 'A Inscrição Pai e o Ato Simbólico',
        p1: 'No centro da Runestone estava a chamada inscrição pai. Uma das maiores inscrições já registradas na rede até então. Um bloco de dados que marcou um ponto de virada.',
        p2: 'Essa inscrição foi enviada para um endereço amplamente atribuído a Satoshi Nakamoto. O gesto foi intencional.',
        p3: 'Ao enviar a peça original para um endereço inacessível, Leonidas selou a criação de forma definitiva. Nenhuma alteração futura. Nenhum controle central. Nenhuma manipulação. A Runestone nasceu imutável. Um ato de respeito à própria natureza do Bitcoin.',
        h2_2: 'O Maior Airdrop da História do Bitcoin',
        p4: 'Para financiar a distribuição, a primeira Runestone foi leiloada. O próprio mercado custeou a operação.\n\nSem VC. Sem pré venda. Sem insiders.',
        p5: 'Mais de 112.000 early adopters de Ordinals receberam Runestones. Exatamente 112.383 inscrições foram distribuídas para carteiras que possuíam pelo menos três inscrições Ordinals.\n\nNão foi apenas um airdrop. Foi um selo de pertencimento. Um reconhecimento aos que estavam construindo cultura na L1 quando ainda era impopular.',
        h2_3: '25 de Abril: O Nascimento do $DOG',
        p6: 'Meses depois, a história evoluiu. No dia 25 de abril, todos os detentores de Runestone receberam um novo capítulo. Cada Runestone deu direito a 889.806 unidades de $DOG.',
        p7: 'O supply total de 100 bilhões de $DOG foi distribuído integralmente aos holders.\n\n100% na rua. Sem pré venda. Sem alocação de time. Sem investidores ocultos.\n\nLivre e justo. $DOG nasceu como experimento social nativo do Bitcoin.',
        h2_4: 'Rune Number 3',
        p8: 'No último halving do Bitcoin, o protocolo Runes foi lançado. E $DOG garantiu a Rune #3.\n\nDOG•GO•TO•THE•MOON.',
        p9: 'A inscrição não foi para "criar 100 bilhões", mas para assegurar a posição histórica como a terceira Rune da rede. Para garantir esse lugar, foram pagas taxas superiores a 100 mil dólares.',
        p10: 'Não foi marketing. Foi compromisso com a L1. Foi gravado no momento mais simbólico do ciclo do Bitcoin.',
        h2_5: 'Quando o Bitcoin Passou a Carregar História',
        p11: 'Runestone mostrou que o Bitcoin pode registrar arte e cultura. $DOG mostrou que memes podem nascer soberanos na L1.\n\nJuntos, representam um ponto de virada. Não dependem de fundações. Não dependem de empresas. Não dependem de plataformas. Vivem na blockchain mais segura do mundo.',
        p12: 'Runestone é a pedra fundamental. $DOG é a continuidade do movimento.\n\nO Bitcoin não carrega apenas valor. Carrega história.',
        p13: '',
        closing: 'E essa história está escrita on chain.',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      comunidade: 'Community',
      eventos: 'Events',
      educacao: 'Education',
      apps: 'Apps',
      news: 'DOG NEWS',
      toggleTheme: 'Toggle theme',
      toggleLanguage: 'Change language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode',
    },
    home: {
      hero: {
        headline1: 'Price changes,',
        headline2: 'vision doesn\'t.',
        subtitle: '$DOG is not just price. It\'s a signal that Bitcoin is evolving culturally toward hyperbitcoinization.',
        cta_buy: 'Buy $DOG',
        cta_learn: 'Learn more ›',
      },
      stats: [
        { value: '100B', label: 'Total supply' },
        { value: 'Bitcoin', label: 'Native blockchain' },
        { value: 'Zero', label: 'Pre-sale / VCs' },
        { value: '100%', label: 'Decentralized' },
      ],
      ecosystem: {
        headline: 'Bitcoin\nEcosystem.',
        description: 'Hyperbitcoinization is built with infrastructure. L2s expand scalability and DeFi activates capital. Assets strengthen culture and liquidity within Bitcoin itself. Not just a store of value. A sovereign ecosystem in expansion.',
      },
      bentoCards: {
        tokenomics: {
          eyebrow: '$DOG TOKENOMICS',
          headline: '100 Billion',
          tagline: 'Total circulating supply. No pre-sale, no investors.',
          linkLabel: '100% Decentralized',
        },
        dca: {
          eyebrow: 'Strategy',
          headline: 'Accumulate with\nstrategy.',
          tagline: 'Automate your $DOG purchases, beat volatility and build your position for the long term.',
          linkLabel: 'Set up DCA',
        },
        data: {
          eyebrow: 'On-Chain Analytics',
          headline: 'Numbers that\nreveal everything.',
          tagline: '$DOG holders, volume and on-chain metrics, directly from the source in real time.',
          linkLabel: 'Open DOG DATA',
        },
        summit: {
          eyebrow: 'Global Event',
          headline: 'The $DOG elite gathering.',
          tagline: 'Bitcoin City, El Salvador · 2024',
          linkLabel: 'View details',
        },
        swapTrade: {
          eyebrow: 'Bitcoin Assets',
          headline: 'Swap &\nTrade.',
          tagline: 'Native platforms to exchange Runes with deep liquidity directly on Bitcoin, frictionless.',
          linkLabel: 'View platforms',
        },
        noKyc: {
          eyebrow: 'Financial Sovereignty',
          headline: 'Buy without\nKYC.',
          tagline: 'Acquire Bitcoin and crypto with Pix, no registration and no bureaucracy.',
          linkLabel: 'View platforms',
        },
        defi: {
          eyebrow: 'Bitcoin DeFi',
          headline: 'Bitcoin\nDeFi.',
          tagline: 'Access cutting-edge financial infrastructure: loans, yields and decentralized trading.',
          linkLabel: 'View platforms',
        },
        runestone: {
          eyebrow: 'History',
          headline: 'The biggest\nairdrop.',
          tagline: 'The cornerstone of Ordinals culture.',
          linkLabel: 'Learn more',
        },
        ordinals: {
          eyebrow: 'Education',
          headline: 'Ordinals',
          tagline: 'Bitcoin-native NFTs. Click to learn everything about the protocol created by Casey Rodarmor.',
          linkLabel: 'Learn Ordinals',
        },
        runes: {
          eyebrow: 'Education',
          headline: 'Runes',
          tagline: 'Runes are tokens on Bitcoin. More efficient and simpler than BRC-20.',
          linkLabel: 'Learn about Runes',
        },
      },
      tradingview: {
        eyebrow: 'Real-time market',
        headline1: 'Trading',
        headline2: 'View.',
        description: 'Track the DOG/USDT pair in real time with professional charts. Analyze trends, volume and support levels before every decision.',
        cta: 'Open TradingView ›',
      },
      dogswap: {
        eyebrow: 'Decentralized swap',
        headline1: 'DOG',
        headline2: 'Swap.',
        description: 'Native decentralized swap by the $DOG community. Exchange Runes directly on Bitcoin, no intermediaries, no custody.',
        cta: 'Open DOG Swap ›',
      },
      runestone_section: {
        eyebrow: 'History · Airdrop',
        headline1: 'The biggest airdrop',
        headline2: 'on Bitcoin.',
        description: 'Runestone was not just a distribution. It was the beginning of a movement that etched culture directly onto Bitcoin.',
        cta_main: 'Learn more',
      },
      dogdata: {
        eyebrow: 'On-chain analytics',
        headline1: 'DOG',
        headline2: 'DATA.',
        description: 'Real-time $DOG holders, volume and metrics. On-chain data that reveals the strength and conviction of the Dog Army.',
        cta: 'Open DOG DATA ›',
      },
      footer: {
        copyright: 'Copyright © 2025 $DOG Aggregator. All rights reserved.',
        tagline: 'Bitcoin Native · 100% Decentralized',
        columns: {
          ecosystem: 'Ecosystem',
          learn: 'Learn',
          community: 'Community',
          buy: 'Buy',
        },
      },
      modals: {
        close: 'Close',
        openPlatform: 'Open platform →',
        ordinals: {
          eyebrow: 'Education',
          title: 'Ordinals — Bitcoin-Native NFTs',
          videoCaption: 'Casey Rodarmor presents Ordinals to the world',
          whatAre: {
            title: 'What are Ordinals?',
            content: 'Ordinals is a protocol created by Casey Rodarmor in January 2023. It allows inscribing any data — images, text, code — directly onto the smallest pieces of Bitcoin: satoshis.',
          },
          howWorks: {
            title: 'How does it work?',
            content: 'The protocol assigns a unique serial number to each satoshi. The inscribed content is permanently recorded on the Bitcoin blockchain — no external servers, no IPFS.',
          },
          why: {
            title: 'Why is it revolutionary?',
            points: [
              '100% on-chain: data lives inside the blockchain',
              'Immutable: once inscribed, it cannot be altered',
              'No smart contracts: uses only the native protocol',
              'Proof-of-Work: security of the world\'s largest network',
            ],
          },
          docLink: 'Read official documentation →',
          exploreLabel: 'Explore Ordinals',
        },
        noKyc: {
          eyebrow: 'Financial Sovereignty',
          title: 'Buy Crypto without KYC',
          description: 'Platforms that allow acquiring Bitcoin without registration or identity verification.',
        },
        swapTrade: {
          eyebrow: 'Bitcoin Assets',
          title: 'Swap & Trade',
          description: 'Decentralized platforms for exchanging and trading Runes and Bitcoin assets.',
        },
        defi: {
          eyebrow: 'Bitcoin DeFi',
          title: 'Bitcoin DeFi',
          description: 'Decentralized finance (DeFi) platforms on Bitcoin. Make your assets earn, take loans and trade securely.',
        },
      },
      platforms: {
        swap: [
          {
            name: 'SatsTerminal',
            desc: 'Liquidity aggregator for Runes and Ordinals. Finds the best price across multiple platforms automatically.',
          },
          {
            name: 'DOG Swap',
            desc: 'Native decentralized swap of the $DOG community. Exchange Runes directly on Bitcoin with no intermediaries.',
          },
          {
            name: 'Satflow — Runes',
            desc: 'Runes marketplace and swap with professional interface. High liquidity and real-time market data.',
          },
        ],
        noKyc: [
          {
            name: 'BTC no Pix',
            desc: 'Buy Bitcoin directly via Pix, no registration, no KYC. Fast, private and simple.',
          },
          {
            name: 'B2Pix',
            desc: 'Peer-to-peer platform to buy and sell Bitcoin with Pix, no bureaucracy and no identity verification.',
          },
        ],
        defi: [
          {
            name: 'Liquidium',
            desc: 'Leading NFT lending platform on Bitcoin.',
          },
          {
            name: 'Bitflow Finance',
            desc: 'DEX and Liquidity Hub built for Bitcoiners.',
          },
          {
            name: 'SatsTerminal',
            desc: 'Professional terminal for analyzing and trading on Bitcoin.',
          },
        ],
      },
    },
    comunidade: {
      eyebrow: 'Dog Army',
      title: 'Community.',
      subtitle: 'The pulse of the $DOG community.',
      trending: {
        title: 'What\'s happening',
        showMore: 'Show more',
        labels: {
          bitcoin: 'Trending on Bitcoin',
          tech: 'Technology',
          culture: 'Culture',
          finance: 'Global Finance',
        },
      },
      sidebar: {
        disclaimer: 'Simulated feed for the prototype. Real API integration coming soon.',
        policies: 'Community Policies',
      },
    },
    eventos: {
      eyebrow: 'Global Community',
      title: 'Events.',
      subtitle: 'Where the physical and digital worlds meet.',
      featured: {
        badge: 'Featured Event',
        title: 'DOG SUMMIT 2025.',
        description: 'The definitive $DOG community gathering focused on regional adoption and Bitcoin culture. Strategy, networking and financial sovereignty in Brazil.',
        cta: 'View Details',
      },
      upcoming: {
        title: 'Upcoming Events',
        empty: 'No scheduled events.',
      },
      past: {
        title: 'History',
      },
    },
    educacao: {
      eyebrow: 'Financial Sovereignty',
      title: 'Education.',
      subtitle: 'Understand the technologies powering $DOG and the Bitcoin ecosystem.',
      docLink: 'Documentation',
      sections: [
        {
          title: 'Ordinals (Bitcoin NFTs)',
          eyebrow: 'Permanent inscriptions on Bitcoin.',
          content: 'The Ordinals theory assigns serial numbers to satoshis, enabling tracking and transferring individual sats. Ordinals allow data (such as images, text or code) to be inscribed directly onto individual Bitcoin units. Unlike NFTs on other networks, Ordinals live entirely on the Bitcoin blockchain, via Proof-of-Work.',
        },
        {
          title: 'Runes',
          eyebrow: 'Bitcoin-native fungible tokens.',
          content: 'Runes are tokens on Bitcoin. $DOG is a Rune. The Runes protocol was designed to be more efficient and simpler than the BRC-20 standard, enabling the creation of fungible assets without unnecessarily bloating the network. Bitcoin security with modern flexibility.',
        },
        {
          title: '$DOG',
          eyebrow: 'The community spirit in code.',
          content: '$DOG is not just a meme; it\'s a fair distribution experiment and community sovereignty in the Ordinals/Runes ecosystem. No pre-sale, no investors, just the community building on the world\'s most secure network.',
        },
      ],
      philosophy: {
        eyebrow: 'Philosophy',
        title: 'The First Rule of Sovereignty.',
        content: '"Don\'t trust, verify." All Ordinals and Runes ecosystem code is open. Never accept promises; study the consensus rules.',
        badges: ['Self-custody is sovereignty', 'Bitcoin is freedom', 'Long Term > Hype'],
      },
    },
    apps: {
      eyebrow: 'Dog Army Tools',
      title: 'Ecosystem.',
      subtitle: 'All Dog Army apps and tools in one place.',
      visitPlatform: 'Visit platform',
      cta: {
        title: 'Building on Bitcoin?',
        description: 'If you have a tool that helps the $DOG community grow sovereignly, we want to know about it.',
        button: 'Suggest on X',
      },
      items: [
        {
          id: 'liquidium',
          description: 'The leading P2P lending platform built on Bitcoin. Use your Ordinals and Runes as collateral to borrow BTC.',
        },
        {
          id: 'satsterminal',
          description: 'Bitcoin DeFi aggregator that finds the best route for Runes, Alkanes and Spark token swaps. Backed by Draper VC and CB Ventures.',
        },
        {
          id: 'dogswap',
          description: 'Native decentralized swap created by the $DOG community. Exchange Runes directly on Bitcoin, no intermediaries and no custody.',
        },
        {
          id: 'satflow',
          description: 'Professional marketplace to buy, sell and swap Runes and Ordinals. High liquidity, clean interface and real-time market data.',
        },
        {
          id: 'bitflow',
          description: 'DEX for Bitcoiners with automated DCA for $DOG, BTC and Runes. Non-custodial, real yield via Bitcoin liquidity pools.',
        },
        {
          id: 'dogdata',
          description: 'The definitive $DOG metrics dashboard. Holders, volume, transactions, wallet distribution and real-time on-chain data.',
        },
        {
          id: 'btcnopix',
          description: 'Buy Bitcoin directly via Pix, no registration and no KYC. Privacy and sovereignty from the first satoshi.',
        },
        {
          id: 'b2pix',
          description: 'Brazilian peer-to-peer platform to buy and sell Bitcoin with Pix. No bureaucracy, no identity verification.',
        },
        {
          id: 'dogsummit',
          description: 'The global $DOG elite event. Networking, education and strategy for those who take Bitcoin seriously.',
        },
        {
          id: 'runestone',
          description: 'The biggest airdrop in Bitcoin history. The cornerstone of Ordinals culture that distributed $DOG to the entire community.',
        },
      ],
    },
    news: {
      eyebrow: '$DOG Ecosystem',
      title: 'DOG NEWS.',
      subtitle: 'Follow the latest ecosystem updates.',
      reporter: {
        role: 'Reporter · Data Analyst',
        bio: 'Daily $DOG ecosystem analysis — on-chain data, price and narrative. Videos every day.',
        subscribe: 'Subscribe',
        follow: 'Follow',
      },
      featured: {
        label: 'Featured · Latest Video @cryptolution',
      },
      recent: {
        title: 'Recent Videos.',
      },
      cta: {
        eyebrow: 'Don\'t miss any video',
        description: 'Daily content about $DOG, Bitcoin and economy.',
        subscribeYt: 'Subscribe',
        followX: 'Follow on X',
      },
      timeAgo: {
        today: 'today',
        oneDay: '1 day ago',
        days: (n: number) => `${n} days ago`,
        oneWeek: '1 week ago',
        weeks: (n: number) => `${n} weeks ago`,
        oneMonth: '1 month ago',
        months: (n: number) => `${n} months ago`,
      },
    },
    runestone: {
      backLink: 'BACK TO HOME',
      title: 'Runestone: When Bitcoin started carrying history, not just value.',
      subtitle: 'The biggest airdrop in Bitcoin history and the cornerstone of $DOG.',
      body: {
        intro: 'Runestone was not just a project. It was a definitive milestone in Bitcoin\'s history.\n\nConceived by [Leonidas](https://x.com/leonidasnft/status/1764216092514213988?s=46) and created by artist [Leo Caillard](https://x.com/cl_art_studio/status/1765052114533826770?s=46), Runestone was born in the heart of the Ordinals movement to prove what many doubted: Bitcoin could carry more than financial value.\n\nIt could carry culture. It could carry identity. It could carry permanent memory.\n\nA massive 3.97 MB inscribed directly on the Bitcoin blockchain. On-chain record: [63140674](https://www.ord.io/63140674)\n\nNo servers. No external dependencies. No intermediaries.\nImmutable. Permanent. Bitcoin.',
        h2_1: 'The Parent Inscription and the Symbolic Act',
        p1: 'At the center of Runestone was the so-called parent inscription. One of the largest inscriptions ever recorded on the network up to that point. A block of data that marked a turning point.',
        p2: 'This inscription was sent to an address widely attributed to Satoshi Nakamoto. The gesture was intentional.',
        p3: 'By sending the original piece to an inaccessible address, Leonidas definitively sealed the creation. No future alterations. No central control. No manipulation. Runestone was born immutable. An act of respect to the true nature of Bitcoin.',
        h2_2: 'The Largest Airdrop in Bitcoin History',
        p4: 'To fund the distribution, the first Runestone was auctioned. The market itself paid for the operation.\n\nNo VC. No pre-sale. No insiders.',
        p5: 'Over 112,000 early Ordinals adopters received Runestones. Exactly 112,383 inscriptions were distributed to wallets holding at least three Ordinals inscriptions.\n\nIt wasn\'t just an airdrop. It was a badge of belonging. A recognition of those building culture on L1 when it was still unpopular.',
        h2_3: 'April 25: The Birth of $DOG',
        p6: 'Months later, the story evolved. On April 25, all Runestone holders received a new chapter. Each Runestone entitled the holder to 889,806 $DOG.',
        p7: 'The entire 100 billion $DOG supply was distributed fully to holders.\n\n100% in the wild. No pre-sale. No team allocation. No hidden investors.\n\nFree and fair. $DOG was born as a native Bitcoin social experiment.',
        h2_4: 'Rune Number 3',
        p8: 'During the last Bitcoin halving, the Runes protocol was launched. And $DOG secured Rune #3.\n\nDOG•GO•TO•THE•MOON.',
        p9: 'The inscription wasn\'t just about creating 100 billion tokens, but ensuring its historical position as the third Rune on the network. To guarantee this spot, over $100,000 in fees were paid.',
        p10: 'It wasn\'t marketing. It was commitment to L1. Etched at the most symbolic moment of the Bitcoin cycle.',
        h2_5: 'When Bitcoin Started Carrying History',
        p11: 'Runestone showed that Bitcoin can record art and culture. $DOG showed that memes can be born sovereign on L1.\n\nTogether, they represent a turning point. They don\'t rely on foundations. They don\'t rely on companies. They don\'t rely on platforms. They live on the most secure blockchain in the world.',
        p12: 'Runestone is the cornerstone. $DOG is the continuation of the movement.\n\nBitcoin doesn\'t just carry value. It carries history.',
        p13: '',
        closing: 'And that history is written on-chain.',
      },
    },
  },
} as const;

export type TranslationsType = typeof translations.pt;

export function getTranslations(lang: Language) {
  return translations[lang];
}

export function createT(lang: Language) {
  return translations[lang];
}
