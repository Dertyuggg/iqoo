import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "TalentIQ — Verified Talent",
  description: "A skill profile recruiters can trust. Built from daily practice, paste-proof assessments, real commit history, and a live defence round. Made for tier-2/3 college students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface pb-24 md:pb-0">
        <TopNav />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
