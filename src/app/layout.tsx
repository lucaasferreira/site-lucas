import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { siteConfig } from "@/data/config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08080a",
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
