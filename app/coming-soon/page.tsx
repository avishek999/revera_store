import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Revera Store is Powering Up — Coming Soon",
  description: "Game credits, passes, and vouchers for the worlds you play. Follow Revera Store for launch updates.",
  openGraph: {
    title: "Revera Store is Powering Up",
    description: "Your next power-up is almost here. Follow Revera Store for launch updates.",
    type: "website",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Revera Store is powering up — coming soon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revera Store is Powering Up",
    description: "Your next power-up is almost here. Follow Revera Store for launch updates.",
    images: ["/og.png"],
  },
};

export default function ComingSoonPage() {
  return <ComingSoon />;
}
