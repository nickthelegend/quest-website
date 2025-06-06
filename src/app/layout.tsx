import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google"
import Nav from "@/components/nav"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlgoQuest",
  description: "AlgoQuest: Win Rewards by Solving Quests",
};
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
          {/* Animated Background */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-purple-700/30 rounded-full blur-[120px] animate-blob" />
              <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
              <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-purple-800/30 rounded-full blur-[120px] animate-blob animation-delay-4000" />
            </div>
          </div>

          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
