import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PalimRev — Documentation Migration Specialists",
  description:
    "We migrate and modernize legacy documentation into searchable, web-hosted formats your team and customers will actually use.",
  openGraph: {
    title: "PalimRev — Documentation Migration Specialists",
    description:
      "We migrate and modernize legacy documentation into searchable, web-hosted formats your team and customers will actually use.",
    url: "https://palimrev.com",
    siteName: "PalimRev",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
