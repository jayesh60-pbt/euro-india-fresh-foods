import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.euroindiafoods.com";
const title = "Manufacturer Declaration | Euro India Fresh Foods Limited";
const description =
  "Statutory manufacturer and FSSAI license declaration for Euro India Fresh Foods Limited (J. R. Group) — address, FSSAI license number, and customer care contact details.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Euro India Fresh Foods",
    "Euro India Fresh Foods Limited",
    "J. R. Group",
    "FSSAI license",
    "manufacturer declaration",
    "food safety compliance India",
  ],
  icons: {},
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Euro India Fresh Foods",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
