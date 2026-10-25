import type { Metadata } from "next";
import { AccountDashboard } from "@/components/account-dashboard";

export const metadata: Metadata = {
  title: "My Account | Revera Store",
  description: "View your Revera demo wallet, top-up history, and saved player IDs.",
};

export default function AccountPage() {
  return <AccountDashboard />;
}
