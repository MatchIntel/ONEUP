import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1UP Esports — Fortnite Roster & Earnings",
  description:
    "OneUp Esports roster, organization rankings and latest Fortnite competitive earnings.",
  icons: {
    icon: "/oneup-icon-orange.png",
    shortcut: "/oneup-icon-orange.png",
    apple: "/oneup-icon-orange.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
