import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🇯🇵 假名大作戰",
  description: "五十音互動學習遊戲｜透過遊戲化方式快速記憶日語假名，提升反應速度與聽力辨識能力",
  openGraph: {
    title: "🇯🇵 假名大作戰 | 日文五十音互動學習",
    description: "五十音互動學習遊戲｜透過遊戲化方式快速記憶日語假名，提升反應速度與聽力辨識能力",
    type: "website",
    locale: "zh_TW",
    url: "https://kana.qrtt1.io/",
    siteName: "假名大作戰",
  },
  twitter: {
    card: "summary_large_image",
    title: "假名大作戰 | 日文五十音互動學習遊戲",
    description: "五十音互動學習遊戲｜透過遊戲化方式快速記憶日語假名，提升反應速度與聽力辨識能力",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-2V1LS2KBTX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2V1LS2KBTX');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
