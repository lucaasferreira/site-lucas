import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/data/config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

// Corpo / UI — grotesca humanista, quente e legível
const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Mono — eyebrows, datas, detalhes técnicos
const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

// Display editorial com caráter (serifa de contraste alto e opsz)
const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0a08",
  width: "device-width",
  initialScale: 1,
};

const siteTitle = `${siteConfig.name} — ${siteConfig.role}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://site-lucas-lucasferreira.vercel.app"),
  title: {
    default: siteTitle,
    // As páginas filhas (ex.: /projetos/[slug], /cv) já definem títulos
    // completos terminando em "— Lucas Ferreira"; o template "%s" apenas
    // repassa esse título sem acrescentar sufixo (evita duplicar o nome).
    template: "%s",
  },
  description: siteConfig.shortBio,
  keywords: [
    "desenvolvedor full-stack",
    "desenvolvedor web",
    "aplicativos",
    "APIs",
    "react",
    "next.js",
    "node.js",
    "Lucas Ferreira",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: siteTitle,
    description: siteConfig.shortBio,
    siteName: siteConfig.name,
    // TODO (opcional): adicionar `images: ["/og-image.png"]` quando existir
    // uma imagem real de Open Graph em public/og-image.png.
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteConfig.shortBio,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <body>
        {/* textura de grão fílmico sobre toda a página */}
        <div aria-hidden className="grain-overlay" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
