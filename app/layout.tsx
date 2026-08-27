import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1UP Esports — Fortnite Roster & Results",
  description:
    "OneUp Esports roster, organization rankings, earnings and recent Fortnite competitive results.",
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
