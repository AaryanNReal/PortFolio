  'use client'
  
  import { Geist, Geist_Mono } from "next/font/google";
  import "./globals.css";
  import useMetadata from "./hooks/useMetadata";
  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });



  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    useMetadata({
    title: 'Aaryan Sharma | Full Stack Developer',
    description: 'Personal portfolio of Aaryan Sharma, showcasing projects, skills, and professional experience as a Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    keywords: [
      'portfolio',
      'Aaryan Sharma',
      'full stack developer',
      'web development',
      'react developer',
      'nextjs developer',
      'typescript',
      'frontend developer',
      'backend developer'
    ],
    image: "/Me.jpg" ,
    siteName: 'Aaryan Sharma Portfolio',
  });
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
