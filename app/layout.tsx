import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zainab Engineering | Powering Pakistan's Future",
  description: "Premier electrical panel manufacturing and solar energy solutions in Pakistan. ISO 9001 certified with 30+ years of engineering excellence.",
  keywords: ["electrical panels", "solar energy", "power distribution", "MCC panels", "PFI panels", "distribution boards", "Pakistan"],
  authors: [{ name: "Zainab Engineering" }],
  openGraph: {
    title: "Zainab Engineering | Powering Pakistan's Future",
    description: "Premier electrical panel manufacturing and solar energy solutions in Pakistan.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-surface font-body text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
