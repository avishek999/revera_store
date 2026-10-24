import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://revera-store-demo.freshloon258.chatgpt.site"),
  title: "Revera Store — Game Top-Ups, Instantly",
  description: "A premium multi-game top-up and account marketplace demo.",
  openGraph: {
    title: "Revera Store — Power up. Skip the wait.",
    description: "A premium multi-game top-up and account marketplace demo.",
    type: "website",
    images: [{ url: "/images/revera-logo.jpg", width: 1080, height: 1080, alt: "Revera Store logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revera Store — Power up. Skip the wait.",
    description: "A premium multi-game top-up and account marketplace demo.",
    images: ["/images/revera-logo.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060606",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
