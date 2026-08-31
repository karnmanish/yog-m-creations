import type { Metadata } from "next";
import { Fraunces, Work_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://yogmcreations.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yog M Creations — Stories. Wisdom. Creativity. Discoveries.",
    template: "%s | Yog M Creations",
  },
  description:
    "Yog M Creations is a creative hub bringing together Bhavatu Sarvam (devotional stories), StoryKahani (short storytelling) and Yog M Smart Finds (curated discoveries) in one place.",
  keywords: [
    "Yog M Creations",
    "Bhavatu Sarvam",
    "StoryKahani",
    "Yog M Smart Finds",
    "devotional stories",
    "short stories",
    "storytelling",
    "spiritual stories",
    "curated products India",
  ],
  openGraph: {
    title: "Yog M Creations — Stories. Wisdom. Creativity. Discoveries.",
    description:
      "A creative space bringing together meaningful stories, spiritual content, visual storytelling, books and carefully selected discoveries.",
    url: siteUrl,
    siteName: "Yog M Creations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yog M Creations",
    description:
      "Stories. Wisdom. Creativity. Discoveries. — one creative hub, three brands.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
