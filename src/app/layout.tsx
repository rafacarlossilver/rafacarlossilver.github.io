import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael Carlos | Desenvolvedor | Arquiteto de Dados",
  description:
    "Portfólio profissional de Rafael Carlos Silverio - Desenvolvedor, Arquiteto de Dados e Cientista de Dados com mais de 10 anos de experiência.",
  keywords: [
    "desenvolvedor",
    "arquiteto de dados",
    "cientista de dados",
    "python",
    "java",
    "php",
    "react",
    "power bi",
    "etl",
  ],
  authors: [{ name: "Rafael Carlos Silverio" }],
  openGraph: {
    title: "Rafael Carlos | Desenvolvedor | Arquiteto de Dados",
    description:
      "Portfólio profissional com mais de 10 anos de experiência em desenvolvimento de sistemas.",
    url: "https://rafacarlossilver.github.io",
    siteName: "Rafael Carlos Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
