import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexora-game-store-demo.freshloon258.chatgpt.site"),
  title: "NEXORA — Game Top-Ups, Instantly",
  description: "A premium multi-game top-up storefront demo.",
  openGraph: {
    title: "NEXORA — Power up. Skip the wait.",
    description: "A premium multi-game top-up storefront demo.",
    type: "website",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "NEXORA gaming storefront" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXORA — Power up. Skip the wait.",
    description: "A premium multi-game top-up storefront demo.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070912",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
