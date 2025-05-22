// src/app/(private)/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NavMenu } from "./_components/navmenu/NavMenu";
import { Header } from "./_components/header/Header";
import { ToastProvider } from "@/components/providers/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Área Privada | Base System",
  description: "Layout exclusivo para rotas privadas",
};

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen overflow-hidden bg-white">
          {/* Sidebar com menu de navegação */}
          <div className="hidden md:flex p-1">
            <NavMenu />
          </div>

          {/* Conteúdo principal */}
          <div className="flex-1 flex flex-col">
            {/* Cabeçalho */}
            <Header />

            {/* Conteúdo da página */}
            <main className="flex-1 overflow-auto p-6">{children}</main>
          </div>
        </div>
        <ToastProvider />
      </body>
    </html>
  );
}
