import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://altiplano-harvest.example"),
  title: { default: "Altiplano Harvest | Bolivian Quinoa & Chia Supplier", template: "%s | Altiplano Harvest" },
  description: "Bulk Bolivian Royal Quinoa and Chia Seeds for food importers, distributors and wholesale buyers worldwide.",
  keywords: ["Bolivian quinoa supplier", "Royal Quinoa bulk", "chia seeds wholesale", "superfood ingredients", "B2B food supplier"],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: { title: "Altiplano Harvest", description: "Bolivian Quinoa & Chia • Bulk B2B Supply", type: "website", locale: "en_US", alternateLocale: "es_ES", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Altiplano Harvest — Bolivian Quinoa and Chia" }] },
  twitter: { card: "summary_large_image", title: "Altiplano Harvest", description: "Bolivian Quinoa & Chia • Bulk B2B Supply", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
