import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter, Archivo_Black, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CallLock",
  description: "Catch the calls you miss.",
  icons: {
    icon: "/calllock-mark.png",
    apple: "/calllock-mark.png",
  },
  openGraph: {
    type: "website",
    url: "https://calllock.co/",
    siteName: "CallLock",
    title: "CallLock",
    description: "Catch the calls you miss.",
    images: [
      { url: "/calllock-og.png", width: 1200, height: 1200, alt: "CallLock — Catch the calls you miss." },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CallLock",
    description: "Catch the calls you miss.",
    images: ["/calllock-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${inter.variable} ${archivoBlack.variable} ${jetbrainsMono.variable} antialiased selection:bg-primary/30 selection:text-foreground`}
      >
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
{process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </body>
    </html>
  );
}
