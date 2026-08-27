import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1UP Esports — Competitive Fortnite",
  description:
    "Official 1UP Esports roster, organization stats and rankings across NA West, NA Central and Brazil.",
  icons: {
    icon: "/oneup-logo.png",
    shortcut: "/oneup-logo.png",
    apple: "/oneup-logo.png",
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
