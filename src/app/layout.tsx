import type { Metadata } from "next";
import { EB_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Arteria Home Interiors | Luxury Interior Design in Kerala",
  description:
    "Transform your home with Arteria's luxury interior design services in Kerala. Bespoke residential & commercial interiors, modular kitchens & more. Free consultation.",
  keywords: [
    "interior designers in Kerala",
    "luxury interiors Kerala",
    "home interiors Kerala",
    "villa interiors Kerala",
    "modular kitchen design Kerala",
    "best interior designers in Kochi",
  ],
  openGraph: {
    title: "Arteria Home Interiors | Luxury Interior Design in Kerala",
    description:
      "Transform your home with Kerala's premier luxury interior design service.",
    url: "https://arteria.design",
    siteName: "Arteria Home Interiors",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
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
      className={`${ebGaramond.variable} ${hankenGrotesk.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
