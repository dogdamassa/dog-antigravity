import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { TopNav } from "@/components/TopNav";
import { PriceTicker } from "@/components/PriceTicker";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "$DOG Aggregator | Dog of Bitcoin Community Hub",
  description: "O hub educativo oficial da comunidade $DOG. Aprenda sobre Ordinals, Runes e soberania financeira no Bitcoin.",
  keywords: ["Bitcoin", "$DOG", "Ordinals", "Runes", "Crypto", "Education", "Self-custody"],
  openGraph: {
    title: "$DOG Aggregator",
    description: "Principal meme do Bitcoin. Construa soberania com paciência e convicção.",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={spaceMono.variable}>
        <Providers>
          <PriceTicker />
          <TopNav />
          <main className="pt-[72px]">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
