"use client";

import { motion } from "motion/react";

export function FullPageLoader() {
  return (
    <main role="status" aria-live="polite" aria-busy="true" className="relative grid min-h-[100svh] place-items-center overflow-hidden bg-[#07080c] px-6 text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/[.06]" />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
        <div className="relative grid size-[76px] place-items-center">
          <motion.span aria-hidden="true" className="absolute inset-0 rounded-[24px] border border-[#f5c542]/35" animate={{ opacity: [.25, .75, .25], scale: [1, 1.07, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
          <div className="relative size-[62px] overflow-hidden rounded-[19px] border border-white/10 bg-[#111216] p-1.5">
            <img src="/images/revera-logo.jpg" alt="" className="size-full rounded-[14px] object-cover" />
          </div>
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[.28em] text-[#f5c542]">Revera Store</p>
        <h1 className="mt-2 text-2xl font-bold tracking-[-.04em]">Getting things ready</h1>
        <p className="mt-2 text-sm text-zinc-500">Your game store is powering up.</p>

        <div className="mt-7 h-1 w-48 overflow-hidden rounded-full bg-white/[.08]">
          <motion.div className="h-full w-1/3 rounded-full bg-[#f5c542]" animate={{ x: ["-100%", "300%"] }} transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }} />
        </div>
        <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-zinc-600">
          <motion.span className="size-1.5 rounded-full bg-[#f5c542]" animate={{ opacity: [.35, 1, .35] }} transition={{ duration: 1.1, repeat: Infinity }} />
          Loading Revera
        </div>
      </motion.div>
    </main>
  );
}
