import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
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
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CallLock | Your AI Receptionist Answers When You Can't",
  description: "Stop missing high-value Trades Home Service jobs. Our AI receptionist answers instantly, qualifies leads, and books appointments 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${inter.variable} antialiased selection:bg-primary/30 selection:text-foreground`}
      >
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}

