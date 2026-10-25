"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ArrowDownLeft, ArrowUpRight, BadgeCheck, ChevronRight, Clock3, Gamepad2, LogOut, Plus, ShieldCheck, WalletCards } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type DemoUser = { name: string; email: string };

const userKey = "revera-demo-user";
const orders = [
  { id: "RS-240184", game: "Mobile Legends", detail: "284 Diamonds", price: 399, status: "Delivered", date: "Today, 10:42 AM" },
  { id: "RS-239772", game: "BGMI", detail: "660 UC", price: 799, status: "Delivered", date: "18 Oct 2026" },
  { id: "RS-238901", game: "Free Fire MAX", detail: "100 Diamonds", price: 85, status: "Processing", date: "12 Oct 2026" },
];
const savedPlayers = [
  { game: "Mobile Legends", id: "742916385", server: "2391", code: "ML" },
  { game: "BGMI", id: "5128047192", server: "Character ID", code: "BG" },
];

export function AccountDashboard() {
  const [user, setUser] = React.useState<DemoUser | null>(null);
  const [balance, setBalance] = React.useState(860);
  const [notice, setNotice] = React.useState("");

  React.useEffect(() => {
    try {
      const raw = window.localStorage.getItem(userKey);
      if (raw) setUser(JSON.parse(raw) as DemoUser);
    } catch {
      window.localStorage.removeItem(userKey);
    }
  }, []);

  const addDemoFunds = () => {
    setBalance((current) => current + 100);
    setNotice("₹100 demo balance added. No payment was taken.");
  };

  const signOut = () => {
    window.localStorage.removeItem(userKey);
    window.location.href = "/";
  };

  return (
    <main className="min-h-screen bg-[#08090d] text-white">
      <header className="border-b border-white/[.07] bg-[#08090d]/95">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="text-xl font-extrabold tracking-[-.06em]">revera<span className="text-[#f5c542]">.</span></a>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex"><a href="/#games">Browse games <ChevronRight className="size-4" /></a></Button>
            <Button variant="ghost" size="sm" onClick={signOut} aria-label="Sign out"><LogOut className="size-4" /><span className="hidden sm:inline">Sign out</span></Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .38 }}>
          <Badge variant="neutral"><Gamepad2 className="size-3" /> Player account</Badge>
          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-[-.04em] sm:text-4xl">Hey, {user?.name || "Player"}</h1>
              <p className="mt-2 text-sm text-zinc-400">Your top-ups, saved player IDs, and wallet in one place.</p>
            </div>
            <span className="text-xs text-zinc-500">{user?.email || "Demo account · sign in from the store to personalize"}</span>
          </div>
        </motion.div>

        <div className="mt-7 rounded-2xl border border-[#f5c542]/20 bg-[#f5c542]/[.06] px-4 py-3 text-xs leading-5 text-[#e8d9a6] sm:px-5">
          <span className="font-bold text-[#f5c542]">Demo account:</span> balances, order history, and player IDs are sample data. No real purchases or payments are processed here.
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
          <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .4 }} className="relative overflow-hidden rounded-[26px] border border-white/[.08] bg-[#111217] p-5 sm:p-7">
            <div className="flex items-start justify-between">
              <div><p className="text-xs font-bold uppercase tracking-[.14em] text-zinc-500">Revera wallet</p><p className="mt-5 text-4xl font-bold tracking-[-.04em]">₹{balance.toLocaleString("en-IN")}</p><p className="mt-1 text-xs text-zinc-500">Available demo balance</p></div>
              <div className="grid size-11 place-items-center rounded-2xl bg-[#f5c542]/10 text-[#f5c542]"><WalletCards className="size-5" /></div>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button onClick={addDemoFunds}><Plus className="size-4" /> Add ₹100 demo funds</Button>
              <span className="flex items-center gap-1.5 text-[11px] text-zinc-500"><ShieldCheck className="size-3.5 text-[#f5c542]" /> No payment required</span>
            </div>
            {notice && <p role="status" className="mt-3 text-xs font-semibold text-[#f5c542]">{notice}</p>}
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .14, duration: .4 }} className="rounded-[26px] border border-white/[.08] bg-[#111217] p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[.14em] text-zinc-500">Account snapshot</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/[.06] bg-white/[.025] p-4"><p className="text-2xl font-bold">12</p><p className="mt-1 text-xs text-zinc-500">Top-ups placed</p></div>
              <div className="rounded-2xl border border-white/[.06] bg-white/[.025] p-4"><p className="text-2xl font-bold">₹2,480</p><p className="mt-1 text-xs text-zinc-500">Total saved</p></div>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-zinc-400"><BadgeCheck className="size-4 text-[#f5c542]" /> Player profile ready</p>
          </motion.section>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .4 }} className="rounded-[26px] border border-white/[.08] bg-[#111217] p-5 sm:p-7">
            <div className="flex items-center justify-between"><div><h2 className="text-lg font-bold">Recent orders</h2><p className="mt-1 text-xs text-zinc-500">Your latest top-up activity</p></div><Clock3 className="size-5 text-zinc-500" /></div>
            <div className="mt-5 divide-y divide-white/[.06]">
              {orders.map((order) => <div key={order.id} className="flex flex-wrap items-center justify-between gap-3 py-4 first:pt-0 last:pb-0">
                <div className="flex min-w-0 items-center gap-3"><div className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/[.07] bg-white/[.04] text-xs font-extrabold text-[#f5c542]">{order.game.slice(0, 2).toUpperCase()}</div><div className="min-w-0"><p className="truncate text-sm font-bold">{order.game} <span className="font-medium text-zinc-500">· {order.detail}</span></p><p className="mt-1 text-[11px] text-zinc-600">{order.id} · {order.date}</p></div></div>
                <div className="ml-auto flex items-center gap-3"><Badge variant={order.status === "Delivered" ? "success" : "warning"}>{order.status}</Badge><span className="text-sm font-bold">₹{order.price}</span></div>
              </div>)}
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .26, duration: .4 }} className="rounded-[26px] border border-white/[.08] bg-[#111217] p-5 sm:p-7">
            <div className="flex items-center justify-between"><div><h2 className="text-lg font-bold">Saved player IDs</h2><p className="mt-1 text-xs text-zinc-500">Ready for a quicker checkout</p></div><Gamepad2 className="size-5 text-zinc-500" /></div>
            <div className="mt-5 space-y-3">
              {savedPlayers.map((player) => <div key={player.game} className="flex items-center gap-3 rounded-2xl border border-white/[.06] bg-white/[.025] p-3.5"><div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#f5c542]/10 text-xs font-extrabold text-[#f5c542]">{player.code}</div><div className="min-w-0 flex-1"><p className="text-sm font-bold">{player.game}</p><p className="mt-1 truncate text-xs text-zinc-500">ID {player.id} · {player.server}</p></div><ArrowUpRight className="size-4 text-zinc-600" /></div>)}
            </div>
            <Button asChild variant="secondary" className="mt-4 w-full"><a href="/#games">Top up a game <ArrowDownLeft className="size-4" /></a></Button>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
