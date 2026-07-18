import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Save Our Seas (SOS) | Project TIDE",
  description: "Protecting our waterways. Building cleaner communities. Earn rewards by recycling plastic waste at TIDE Collection Centres.",
  keywords: ["Save Our Seas", "Project TIDE", "Plastic to Cash", "Recycling Rewards", "Waterway Protection", "Environmental Sustainability", "Nigeria", "Wigwe University", "Isiokpo"],
  openGraph: {
    title: "Save Our Seas (SOS) | Project TIDE",
    description: "Protecting our waterways. Building cleaner communities. Earn rewards by recycling plastic waste.",
    type: "website",
    locale: "en_US",
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
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-ocean-dark text-slate-100">
        {children}
      </body>
    </html>
  );
}
