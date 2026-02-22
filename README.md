# $DOG Aggregator | Dog of Bitcoin Community Hub

O hub educativo oficial da comunidade $DOG (Dog of Bitcoin). Um portal focado em onboarding, soberania financeira e ecossistema nativo do Bitcoin (Ordinals e Runes).

## 🚀 Tecnologias

- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Interação**: [sats-connect](https://www.leather.io/sats-connect) (Xverse Wallet)
- **Ícones**: [Lucide React](https://lucide.dev/)

## 🛠️ Setup Local

1.  **Clonar o repositório**:
    ```bash
    git clone <repositorio-url>
    cd dog-aggregator
    ```

2.  **Instalar dependências**:
    ```bash
    npm install
    ```

3.  **Configurar variáveis de ambiente**:
    Crie um arquivo `.env.local` na raiz com:
    ```env
    YOUTUBE_API_KEY=sua_chave_do_youtube_api_v3
    ```
    *Nota: Se a chave não for fornecida, o site usará um vídeo fallback.*

4.  **Rodar o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```
    Acesse: `http://localhost:3000`

## 📖 Estrutura do Projeto

- `/src/app`: Rotas e páginas (Home, Comunidade, Eventos, Educação, Apps, News).
- `/src/components`: Componentes reutilizáveis (Sidebar, WalletConnect, ThemeProvider).
- `/src/data`: Dados estáticos e mocks da comunidade.
- `/src/app/api`: Rota para buscar o último vídeo do YouTube (API Route).

## 🌍 Deployment

O projeto está pronto para ser hospedado na **Vercel**:
1. Conecte seu repositório GitHub.
2. Adicione `YOUTUBE_API_KEY` nas Environment Variables (opcional).
3. Deploy!

---

## 🧡 Missão $DOG

**Autocustódia é soberania.** Nunca compartilhe sua seed phrase. O $DOG Aggregator é uma ferramenta educativa para ajudar a comunidade a crescer com convicção e paciência. HODL!
