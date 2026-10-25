"use client";

import { motion } from "motion/react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Camera, Gamepad2, MessageCircle, ShieldCheck, Zap } from "lucide-react";

const games = [
  { name: "Mobile Legends", image: "/game_icons/mb_icon.jpeg" },
  { name: "BGMI", image: "/game_icons/bgmi_icon.jpeg" },
  { name: "Free Fire", image: "/game_icons/free_fire.jpeg" },
  { name: "Genshin Impact", image: "/game_icons/gensin_impact.jpeg" },
];

const whatsappHref = "https://wa.me/919439039305?text=Hi%20Revera%20Store!%20Please%20notify%20me%20when%20you%20launch.";
const instagramHref = "https://www.instagram.com/reverast0re/";

export function ComingSoon() {
  return (
    <main className="relative isolate flex min-h-screen overflow-hidden bg-[#070707] text-white">
      <img
        src="/images/revera-hero.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover object-center opacity-25 grayscale"
      />
      <div className="absolute inset-0 -z-10 bg-[#070707]/75" />
      <div className="pointer-events-none absolute -right-40 top-1/4 -z-10 size-[34rem] rounded-full border border-[#f5c542]/10" />
      <div className="pointer-events-none absolute -right-24 top-[30%] -z-10 size-[26rem] rounded-full border border-[#f5c542]/[.07]" />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-12">
        <header className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3" aria-label="Revera Store home">
            <span className="grid size-11 place-items-center overflow-hidden rounded-xl border border-[#f5c542]/30 bg-[#111]">
              <img src="/images/revera-logo.jpg" alt="" className="size-full object-cover" />
            </span>
            <span className="text-sm font-bold tracking-[.12em]">REVERA <span className="text-[#f5c542]">STORE</span></span>
          </a>
          <a href="/" className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-zinc-300 transition hover:border-white/25 hover:text-white sm:flex">
            Explore store <ArrowUpRight className="size-3.5" />
          </a>
        </header>

        <section className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f5c542]/25 bg-[#f5c542]/[.07] px-3 py-2 text-[10px] font-bold uppercase tracking-[.17em] text-[#f5c542]">
              <span className="size-1.5 rounded-full bg-[#f5c542]" /> A new destination for gamers
            </div>
            <p className="mt-7 text-xs font-bold uppercase tracking-[.24em] text-zinc-400">Revera Store · Coming soon</p>
            <h1 className="mt-4 text-balance text-5xl font-bold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-[76px]">
              Your next power-up <span className="text-[#f5c542]">is almost here.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
              Game credits, passes, and vouchers for the worlds you play—coming together in one smooth store.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-[#f5c542] px-6 text-sm font-bold text-[#090909] transition hover:bg-[#ffda67]"
              >
                <MessageCircle className="size-4" /> Get launch updates <ArrowRight className="size-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[.035] px-6 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/[.07]"
              >
                <Camera className="size-4" /> Follow on Instagram <ArrowUpRight className="size-4" />
              </motion.a>
            </div>
            <p className="mt-3 text-xs text-zinc-500">Launch updates open directly in WhatsApp. No sign-up form.</p>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs font-semibold text-zinc-400">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-[#f5c542]" /> Secure checkout</span>
              <span className="inline-flex items-center gap-2"><Zap className="size-4 text-[#f5c542]" /> Fast top-ups</span>
              <span className="inline-flex items-center gap-2"><Gamepad2 className="size-4 text-[#f5c542]" /> 12 games and growing</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111]/90 p-5 shadow-[0_28px_100px_rgba(0,0,0,.45)] sm:p-7">
              <div className="flex items-center justify-between border-b border-white/[.08] pb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.2em] text-zinc-500">The next move</p>
                  <p className="mt-1 text-lg font-bold text-white">Power up, without the wait.</p>
                </div>
                <div className="grid size-11 place-items-center rounded-2xl border border-[#f5c542]/20 bg-[#f5c542]/[.08] text-[#f5c542]">
                  <ArrowDownRight className="size-5" />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {games.map((game, index) => (
                  <motion.div
                    key={game.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, delay: 0.28 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative aspect-[1.28] overflow-hidden rounded-2xl border border-white/[.08] bg-[#1a1a1a]"
                  >
                    <img src={game.image} alt={game.name} className="size-full object-cover opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 bg-black/75 px-3 py-2.5">
                      <p className="truncate text-xs font-bold text-white">{game.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-[#f5c542]/15 bg-[#f5c542]/[.045] p-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.17em] text-[#f5c542]">Coming soon</p>
                  <p className="mt-1 text-xs text-zinc-400">Your favorite games. One destination.</p>
                </div>
                <span className="grid size-9 place-items-center rounded-full border border-[#f5c542]/20 text-[#f5c542]"><Zap className="size-4" /></span>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-zinc-600">
              <span>Game top-ups</span><span className="text-[#f5c542]">·</span><span>Passes</span><span className="text-[#f5c542]">·</span><span>Vouchers</span>
            </div>
          </motion.div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/[.08] py-5 text-[11px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Revera Store. All rights reserved.</span>
          <span>Game names belong to their respective owners.</span>
        </footer>
      </div>
    </main>
  );
}
