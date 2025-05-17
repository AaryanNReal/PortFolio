import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from 'next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aaryan PortFolio",
  description: "My career Portfolio",
  keywords: ["Portfolio", "Aaryan", "Career"],
  authors: [{ name: "Aaryan", url: "https://aaryan-portfolio-sigma.vercel.app/" }],
  openGraph: {
    title: "Aaryan Portfolio",
    description: "Aaryan's Portfolio",
    url: "https://aaryan-portfolio-sigma.vercel.app/",
    siteName: "Aaryan PortFolio",
    images: [
      {
        url: "/Me.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Website Title",
    description: "Your website description",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}