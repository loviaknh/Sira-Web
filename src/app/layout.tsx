import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sira — Votre santé, notre mission",
  description:
    "Sira est la plateforme de santé numérique du Bénin. Prenez rendez-vous, consultez votre dossier médical, recevez des ordonnances numériques et localisez les établissements de santé.",
  keywords: [
    "santé",
    "Bénin",
    "rendez-vous médical",
    "dossier médical",
    "téléconsultation",
    "Sira",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
