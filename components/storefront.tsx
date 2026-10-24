"use client";

import * as React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  ChevronRight,
  CircleHelp,
  Clock3,
  Crosshair,
  Gamepad2,
  Gem,
  Headphones,
  Home,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Swords,
  Target,
  Trophy,
  User,
  Users,
  WalletCards,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Game = {
  id: string;
  name: string;
  short: string;
  category: "MOBA" | "Battle Royale" | "RPG" | "Shooter";
  currency: string;
  accent: string;
  gradient: string;
  icon: React.ElementType;
  badge?: string;
  fields: string[];
};

const games: Game[] = [
  {
    id: "mobile-legends",
    name: "Mobile Legends",
    short: "ML",
    category: "MOBA",
    currency: "Diamonds",
    accent: "#8b5cf6",
    gradient: "from-violet-500/80 via-indigo-500/40 to-[#10152c]",
    icon: Swords,
    badge: "Most popular",
    fields: ["Player ID", "Zone ID"],
  },
  {
    id: "bgmi",
    name: "BGMI",
    short: "BG",
    category: "Battle Royale",
    currency: "UC",
    accent: "#f59e0b",
    gradient: "from-amber-500/75 via-orange-600/35 to-[#211308]",
    icon: Crosshair,
    badge: "India",
    fields: ["Character ID"],
  },
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    short: "PM",
    category: "Battle Royale",
    currency: "UC",
    accent: "#fb923c",
    gradient: "from-orange-500/75 via-red-500/35 to-[#21100c]",
    icon: Target,
    fields: ["Player ID"],
  },
  {
    id: "free-fire",
    name: "Free Fire MAX",
    short: "FF",
    category: "Battle Royale",
    currency: "Diamonds",
    accent: "#ef4444",
    gradient: "from-red-500/75 via-rose-500/35 to-[#240e18]",
    icon: Zap,
    badge: "Hot",
    fields: ["Player ID"],
  },
  {
    id: "genshin-impact",
    name: "Genshin Impact",
    short: "GI",
    category: "RPG",
    currency: "Genesis Crystals",
    accent: "#22d3ee",
    gradient: "from-cyan-400/70 via-sky-500/35 to-[#091c29]",
    icon: WandSparkles,
    fields: ["UID", "Server"],
  },
  {
    id: "valorant",
    name: "Valorant",
    short: "VL",
    category: "Shooter",
    currency: "VP",
    accent: "#fb7185",
    gradient: "from-rose-500/75 via-pink-500/35 to-[#240d19]",
    icon: Crosshair,
    badge: "Gift card",
    fields: ["Email for delivery"],
  },
  {
    id: "honkai-star-rail",
    name: "Honkai: Star Rail",
    short: "HSR",
    category: "RPG",
    currency: "Oneiric Shards",
    accent: "#60a5fa",
    gradient: "from-blue-500/75 via-indigo-500/35 to-[#10132a]",
    icon: Sparkles,
    fields: ["UID", "Server"],
  },
  {
    id: "wuthering-waves",
    name: "Wuthering Waves",
    short: "WW",
    category: "RPG",
    currency: "Lunites",
    accent: "#2dd4bf",
    gradient: "from-teal-400/75 via-emerald-500/30 to-[#071d1d]",
    icon: Bolt,
    badge: "New",
    fields: ["UID", "Server"],
  },
  {
    id: "call-of-duty-mobile",
    name: "Call of Duty Mobile",
    short: "COD",
    category: "Shooter",
    currency: "CP",
    accent: "#facc15",
    gradient: "from-yellow-400/75 via-amber-500/30 to-[#211b08]",
    icon: Target,
    fields: ["Player ID"],
  },
  {
    id: "honor-of-kings",
    name: "Honor of Kings",
    short: "HOK",
    category: "MOBA",
    currency: "Tokens",
    accent: "#c084fc",
    gradient: "from-fuchsia-500/70 via-violet-500/30 to-[#1d0c24]",
    icon: Trophy,
    fields: ["Player ID", "Region"],
  },
  {
    id: "clash-of-clans",
    name: "Clash of Clans",
    short: "COC",
    category: "MOBA",
    currency: "Gold Pass",
    accent: "#4ade80",
    gradient: "from-green-400/70 via-emerald-600/30 to-[#0b2114]",
    icon: ShieldCheck,
    fields: ["Player Tag"],
  },
  {
    id: "zenless-zone-zero",
    name: "Zenless Zone Zero",
    short: "ZZZ",
    category: "RPG",
    currency: "Monochrome",
    accent: "#a3e635",
    gradient: "from-lime-400/70 via-green-500/25 to-[#172107]",
    icon: Gamepad2,
    fields: ["UID", "Server"],
  },
];

const categories = ["All", "MOBA", "Battle Royale", "RPG", "Shooter"] as const;

const packageSets = [
  { amount: "86", bonus: "+ 8 bonus", price: 139, oldPrice: 149, tag: "Starter" },
  { amount: "172", bonus: "+ 16 bonus", price: 269, oldPrice: 289, tag: "Popular" },
  { amount: "257", bonus: "+ 23 bonus", price: 399, oldPrice: 429, tag: "Best value" },
  { amount: "706", bonus: "+ 81 bonus", price: 1069, oldPrice: 1149, tag: "Save 7%" },
  { amount: "2195", bonus: "+ 335 bonus", price: 3299, oldPrice: 3499, tag: "Mega pack" },
  { amount: "Weekly Pass", bonus: "7-day rewards", price: 159, oldPrice: 189, tag: "19% off" },
];

const faq = [
  {
    q: "Do I need to share my game password?",
    a: "Never. A standard top-up only needs the public player details shown in your game profile, such as Player ID and Zone or Server ID.",
  },
  {
    q: "How fast will the top-up arrive?",
    a: "This frontend demonstrates an instant-delivery flow. In production, timing depends on the selected supplier API and the package availability returned at checkout.",
  },
  {
    q: "What happens if I enter the wrong Player ID?",
    a: "Delivered digital credits are normally irreversible. The production flow will verify the player nickname before payment and ask you to confirm it clearly.",
  },
  {
    q: "Which payment methods will be supported?",
    a: "The planned India checkout supports UPI apps, cards, and net banking through an approved hosted payment gateway such as Cashfree or Razorpay.",
  },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5" aria-label="NEXORA home">
      <div className="relative grid size-10 place-items-center overflow-hidden rounded-[14px] border border-violet-300/20 bg-violet-500/15 shadow-[0_0_30px_rgba(124,58,237,.25)]">
        <span className="bg-gradient-to-br from-violet-200 via-violet-400 to-cyan-300 bg-clip-text text-[24px] font-black italic leading-none tracking-[-.18em] text-transparent" aria-hidden="true">N</span>
        <span className="absolute bottom-1.5 h-[2px] w-4 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" aria-hidden="true" />
      </div>
      {!compact && (
        <div>
          <div className="text-[17px] font-black leading-none tracking-[.15em] text-white">NEXORA</div>
          <div className="mt-1 text-[8px] font-bold uppercase tracking-[.24em] text-violet-300/80">Play beyond</div>
        </div>
      )}
    </div>
  );
}

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-3 text-balance text-3xl font-black tracking-[-.035em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {copy && <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">{copy}</p>}
    </div>
  );
}

function GameArtwork({ game, large = false }: { game: Game; large?: boolean }) {
  const Icon = game.icon;
  return (
    <div className={cn("relative overflow-hidden bg-gradient-to-br", game.gradient, large ? "h-full min-h-48" : "aspect-[4/3]") }>
      <div className="absolute -right-6 -top-8 size-32 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-10%] size-40 rounded-full bg-black/30 blur-2xl" />
      <div className="absolute inset-0 grid-lines opacity-25" />
      <div className={cn("absolute right-3 top-3 font-black tracking-[-.08em] text-white/[.09]", large ? "text-8xl" : "text-6xl")}>{game.short}</div>
      <div className={cn("absolute rounded-[22px] border border-white/15 bg-black/20 shadow-2xl backdrop-blur-md", large ? "bottom-8 left-8 p-5" : "bottom-4 left-4 p-3") }>
        <Icon className={cn("text-white", large ? "size-10" : "size-7")} strokeWidth={1.8} />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0c0f1b] to-transparent" />
    </div>
  );
}

function GameCard({ game, onSelect }: { game: Game; onSelect: (game: Game) => void }) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      onClick={() => onSelect(game)}
      className="glow-border group relative overflow-hidden rounded-[22px] border border-white/[.08] bg-[#0d101b] text-left shadow-[0_18px_45px_rgba(0,0,0,.24)] outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
    >
      <GameArtwork game={game} />
      {game.badge && (
        <Badge variant={game.badge === "Hot" ? "warning" : "default"} className="absolute left-3 top-3 backdrop-blur-md">
          {game.badge}
        </Badge>
      )}
      <div className="relative flex items-center justify-between gap-3 px-4 pb-4 pt-1">
        <div className="min-w-0">
          <p className="truncate text-sm font-extrabold text-white sm:text-[15px]">{game.name}</p>
          <p className="mt-1 text-[11px] font-medium text-zinc-500">{game.currency}</p>
        </div>
        <div className="grid size-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[.05] text-zinc-400 transition group-hover:border-violet-400/30 group-hover:bg-violet-500/15 group-hover:text-violet-200">
          <ChevronRight className="size-4" />
        </div>
      </div>
    </motion.button>
  );
}

function TopUpDialog({ game, onClose }: { game: Game | null; onClose: () => void }) {
  const [selectedPackage, setSelectedPackage] = React.useState(1);
  const [verified, setVerified] = React.useState(false);
  const [verifying, setVerifying] = React.useState(false);
  const [showCheckout, setShowCheckout] = React.useState(false);

  React.useEffect(() => {
    setSelectedPackage(1);
    setVerified(false);
    setVerifying(false);
    setShowCheckout(false);
  }, [game?.id]);

  if (!game) return null;

  const verify = () => {
    setVerifying(true);
    setVerified(false);
    window.setTimeout(() => {
      setVerifying(false);
      setVerified(true);
    }, 700);
  };

  const pkg = packageSets[selectedPackage];

  return (
    <Dialog open={Boolean(game)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <div className="grid md:grid-cols-[.85fr_1.35fr]">
          <div className="relative min-h-52 overflow-hidden rounded-t-[28px] md:min-h-full md:rounded-l-[28px] md:rounded-tr-none">
            <GameArtwork game={game} large />
            <div className="absolute inset-x-0 bottom-0 z-10 p-6">
              <Badge variant="success"><span className="size-1.5 rounded-full bg-emerald-300" /> Available</Badge>
              <DialogTitle className="mt-3 text-2xl">{game.name}</DialogTitle>
              <DialogDescription className="mt-1 text-zinc-300">Top up {game.currency} securely.</DialogDescription>
            </div>
          </div>

          <div className="p-5 sm:p-7">
            {!showCheckout ? (
              <>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[.18em] text-violet-300">01 · Account</p>
                    <h3 className="mt-1 text-lg font-black text-white">Enter player details</h3>
                  </div>
                  <Badge variant="neutral">Demo mode</Badge>
                </div>
                <div className={cn("mt-4 grid gap-3", game.fields.length > 1 && "sm:grid-cols-2")}>
                  {game.fields.map((field, index) => (
                    <Input key={field} aria-label={field} placeholder={index === 0 ? `Enter ${field}` : field} defaultValue={index === 0 ? "123456789" : "2048"} />
                  ))}
                </div>
                <Button variant="secondary" className="mt-3 w-full" onClick={verify} disabled={verifying}>
                  {verifying ? <span className="size-4 animate-spin rounded-full border-2 border-zinc-500 border-t-white" /> : <BadgeCheck className="size-4" />}
                  {verifying ? "Checking player..." : "Verify player"}
                </Button>
                <AnimatePresence>
                  {verified && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <div className="mt-3 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[.07] p-3">
                        <div className="grid size-9 place-items-center rounded-full bg-emerald-400/15 text-emerald-300"><BadgeCheck className="size-5" /></div>
                        <div><p className="text-xs text-emerald-200/70">Player found</p><p className="text-sm font-extrabold text-white">NexoraPlayer_24</p></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-6">
                  <p className="text-xs font-black uppercase tracking-[.18em] text-violet-300">02 · Select package</p>
                  <div className="mt-3 grid grid-cols-2 gap-2.5">
                    {packageSets.map((item, index) => (
                      <button
                        key={item.amount}
                        onClick={() => setSelectedPackage(index)}
                        className={cn(
                          "relative rounded-2xl border p-3 text-left transition outline-none focus-visible:ring-2 focus-visible:ring-violet-400",
                          selectedPackage === index ? "border-violet-400/60 bg-violet-500/15" : "border-white/[.08] bg-white/[.025] hover:bg-white/[.05]",
                        )}
                      >
                        <span className={cn("text-[9px] font-black uppercase tracking-[.12em]", selectedPackage === index ? "text-violet-300" : "text-zinc-600")}>{item.tag}</span>
                        <p className="mt-1 truncate text-sm font-black text-white">{item.amount}</p>
                        <p className="truncate text-[10px] text-zinc-500">{item.bonus}</p>
                        <div className="mt-2 flex items-end gap-1.5"><span className="text-sm font-black text-white">₹{item.price}</span><span className="text-[10px] text-zinc-600 line-through">₹{item.oldPrice}</span></div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/[.08] pt-5">
                  <div><p className="text-[11px] text-zinc-500">Total payable</p><p className="text-2xl font-black text-white">₹{pkg.price}</p></div>
                  <Button size="lg" onClick={() => setShowCheckout(true)} disabled={!verified}>Continue <ArrowRight className="size-4" /></Button>
                </div>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <Badge variant="success"><ShieldCheck className="size-3" /> Secure checkout</Badge>
                <h3 className="mt-4 text-2xl font-black text-white">Ready to power up.</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">This is the frontend demo. Production will open the approved hosted payment gateway here.</p>
                <div className="mt-6 space-y-3 rounded-2xl border border-white/[.08] bg-black/20 p-4">
                  <div className="flex justify-between text-sm"><span className="text-zinc-500">Game</span><span className="font-bold text-white">{game.name}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-zinc-500">Player</span><span className="font-bold text-white">NexoraPlayer_24</span></div>
                  <div className="flex justify-between text-sm"><span className="text-zinc-500">Package</span><span className="font-bold text-white">{pkg.amount} {game.currency}</span></div>
                  <div className="h-px bg-white/[.08]" />
                  <div className="flex items-end justify-between"><span className="text-sm text-zinc-400">Total</span><span className="text-3xl font-black text-white">₹{pkg.price}</span></div>
                </div>
                <Button size="lg" className="mt-5 w-full" onClick={() => setShowCheckout(false)}><WalletCards className="size-4" /> Pay with UPI · Demo</Button>
                <button onClick={() => setShowCheckout(false)} className="mt-3 w-full text-center text-xs font-bold text-zinc-500 hover:text-white">Back to packages</button>
              </motion.div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function TrackOrderDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [tracked, setTracked] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose()}>
      <DialogContent className="max-w-md p-6 sm:p-8">
        <Badge variant="neutral">Order center</Badge>
        <DialogTitle className="mt-4 text-2xl">Track your top-up</DialogTitle>
        <DialogDescription className="mt-2">Enter a demo order ID to preview the fulfillment timeline.</DialogDescription>
        <div className="mt-5 flex gap-2">
          <Input defaultValue="NX-240184" aria-label="Order ID" />
          <Button onClick={() => setTracked(true)}>Track</Button>
        </div>
        {tracked && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 rounded-2xl border border-white/[.08] bg-black/20 p-4">
            {["Payment confirmed", "Player verified", "Top-up delivered"].map((label, index) => (
              <div key={label} className="relative flex gap-3 pb-5 last:pb-0">
                {index < 2 && <div className="absolute left-[9px] top-5 h-full w-px bg-emerald-400/30" />}
                <div className="z-10 mt-0.5 grid size-5 place-items-center rounded-full bg-emerald-400 text-[#06120d]"><BadgeCheck className="size-3" /></div>
                <div><p className="text-sm font-bold text-white">{label}</p><p className="mt-0.5 text-[11px] text-zinc-500">{index === 2 ? "Completed just now" : `${index + 1} min ago`}</p></div>
              </div>
            ))}
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function Storefront() {
  const [activeCategory, setActiveCategory] = React.useState<(typeof categories)[number]>("All");
  const [search, setSearch] = React.useState("");
  const [selectedGame, setSelectedGame] = React.useState<Game | null>(null);
  const [trackOpen, setTrackOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const filteredGames = games.filter((game) => {
    const matchesCategory = activeCategory === "All" || game.category === activeCategory;
    const matchesSearch = game.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToGames = () => document.getElementById("games")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="overflow-hidden pb-20 md:pb-0">
      <div className="border-b border-violet-400/10 bg-violet-500/[.07] px-4 py-2 text-center text-[10px] font-extrabold uppercase tracking-[.16em] text-violet-200 sm:text-[11px]">
        <span className="mr-2 inline-block size-1.5 animate-pulse rounded-full bg-emerald-400" /> Client preview · Payments are simulated in this demo
      </div>

      <header className="sticky top-0 z-40 border-b border-white/[.07] bg-[#070912]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><Logo /></button>
          <nav className="hidden items-center gap-1 md:flex">
            {[{ label: "Games", href: "#games" }, { label: "Deals", href: "#deals" }, { label: "How it works", href: "#how" }, { label: "FAQ", href: "#faq" }].map((item) => (
              <a key={item.label} href={item.href} className="rounded-lg px-4 py-2 text-sm font-semibold text-zinc-400 transition hover:bg-white/[.05] hover:text-white">{item.label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="sm" onClick={() => setTrackOpen(true)}><ShoppingBag className="size-4" /> Track order</Button>
            <Button size="sm"><User className="size-4" /> Sign in</Button>
          </div>
          <button className="grid size-10 place-items-center rounded-xl border border-white/10 text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/[.07] bg-[#090b15] md:hidden">
              <nav className="grid gap-1 p-4">
                {["Games", "Deals", "How it works", "FAQ"].map((item) => <a key={item} href={`#${item === "How it works" ? "how" : item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-bold text-zinc-300 hover:bg-white/[.05]">{item}</a>)}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className="relative isolate min-h-[690px] border-b border-white/[.06] noise lg:min-h-[750px]">
        <div className="absolute inset-0 bg-cover bg-[62%_center] lg:bg-center" style={{ backgroundImage: "url('/images/nexora-hero.png')" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070912_0%,rgba(7,9,18,.96)_31%,rgba(7,9,18,.62)_58%,rgba(7,9,18,.08)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070912] via-transparent to-[#070912]/25" />
        <div className="relative mx-auto grid min-h-[690px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:min-h-[750px] lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-2xl">
            <Badge><Sparkles className="size-3" /> A new era of game top-ups</Badge>
            <h1 className="mt-6 text-balance text-5xl font-black leading-[.94] tracking-[-.055em] text-white sm:text-6xl lg:text-[78px]">
              Power up.<br /><span className="bg-gradient-to-r from-violet-300 via-violet-500 to-cyan-300 bg-clip-text text-transparent">Skip the wait.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">One fast, secure destination for game credits, passes, and vouchers across the titles you play most.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={scrollToGames}>Explore games <ArrowRight className="size-4" /></Button>
              <Button size="lg" variant="secondary" onClick={() => setTrackOpen(true)}><ShoppingBag className="size-4" /> Track an order</Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-zinc-400">
              <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-emerald-400" /> Secure checkout</span>
              <span className="flex items-center gap-2"><Zap className="size-4 text-amber-300" /> Instant-ready flow</span>
              <span className="flex items-center gap-2"><Headphones className="size-4 text-cyan-300" /> Human support</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.65 }} className="mt-10 hidden justify-self-end lg:block">
            <div className="glass w-[330px] rounded-[28px] p-4">
              <div className="flex items-center justify-between"><div><p className="text-[10px] font-black uppercase tracking-[.18em] text-zinc-500">Trending now</p><p className="mt-1 text-lg font-black text-white">Quick top-up</p></div><div className="grid size-10 place-items-center rounded-xl bg-violet-500/20 text-violet-300"><Bolt className="size-5" /></div></div>
              <div className="mt-4 space-y-2">
                {games.slice(0, 3).map((game, index) => {
                  const Icon = game.icon;
                  return <button key={game.id} onClick={() => setSelectedGame(game)} className="flex w-full items-center gap-3 rounded-2xl border border-white/[.07] bg-black/20 p-3 text-left transition hover:border-violet-400/30 hover:bg-white/[.06]"><div className={cn("grid size-11 place-items-center rounded-xl bg-gradient-to-br", game.gradient)}><Icon className="size-5 text-white" /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-extrabold text-white">{game.name}</p><p className="text-[10px] text-zinc-500">From ₹{[26, 69, 79][index]}</p></div><ChevronRight className="size-4 text-zinc-600" /></button>;
                })}
              </div>
              <button onClick={scrollToGames} className="mt-4 flex w-full items-center justify-center gap-2 text-xs font-bold text-violet-300 hover:text-violet-200">View all games <ArrowRight className="size-3" /></button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass grid overflow-hidden rounded-[24px] sm:grid-cols-3">
          {[
            { icon: BadgeCheck, title: "Verify before paying", copy: "Confirm the player nickname first" },
            { icon: Clock3, title: "Built for speed", copy: "A direct, distraction-free checkout" },
            { icon: ShieldCheck, title: "Payment protected", copy: "No password or OTP is ever requested" },
          ].map(({ icon: Icon, title, copy }, index) => (
            <div key={title} className={cn("flex items-center gap-4 p-5 sm:p-6", index > 0 && "border-t border-white/[.07] sm:border-l sm:border-t-0")}>
              <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-violet-500/10 text-violet-300"><Icon className="size-5" /></div>
              <div><p className="text-sm font-extrabold text-white">{title}</p><p className="mt-1 text-[11px] text-zinc-500">{copy}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="games" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading kicker="Game vault" title="Every world. One checkout." copy="Browse the launch catalog and preview a full top-up journey for any game." />
          <label className="relative block w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search games..." className="pl-11" />
          </label>
        </div>
        <div className="scrollbar-none mt-9 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)} className={cn("shrink-0 rounded-full border px-4 py-2 text-xs font-extrabold transition", activeCategory === category ? "border-violet-400/40 bg-violet-500/20 text-violet-200" : "border-white/[.08] bg-white/[.025] text-zinc-500 hover:text-white")}>{category}</button>
          ))}
        </div>
        <motion.div layout className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {filteredGames.map((game) => <GameCard key={game.id} game={game} onSelect={setSelectedGame} />)}
          </AnimatePresence>
        </motion.div>
        {filteredGames.length === 0 && <div className="mt-8 rounded-2xl border border-dashed border-white/10 p-10 text-center text-sm text-zinc-500">No game found. Try a different search.</div>}
      </section>

      <section id="deals" className="border-y border-white/[.06] bg-white/[.018] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-5">
            <SectionHeading kicker="Limited drops" title="Deals worth the detour." />
            <Button variant="ghost" className="hidden sm:flex">See all offers <ArrowRight className="size-4" /></Button>
          </div>
          <div className="mt-9 grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
            <button onClick={() => setSelectedGame(games[0])} className="group relative min-h-80 overflow-hidden rounded-[28px] border border-violet-400/15 bg-gradient-to-br from-violet-500/25 via-[#161126] to-[#0b0e18] p-7 text-left sm:p-9">
              <div className="absolute inset-0 grid-lines opacity-30" /><div className="absolute -right-16 -top-16 size-80 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="relative max-w-md"><Badge variant="warning"><Sparkles className="size-3" /> Weekend drop</Badge><h3 className="mt-5 text-3xl font-black tracking-[-.04em] text-white sm:text-4xl">Double the energy.<br />Keep the momentum.</h3><p className="mt-4 text-sm leading-6 text-zinc-400">Preview a high-converting promotional block for passes, first-recharge packs, and seasonal bundles.</p><div className="mt-8 inline-flex items-center gap-2 text-sm font-black text-violet-300">Unlock deal <ArrowRight className="size-4 transition group-hover:translate-x-1" /></div></div>
              <Gem className="absolute -bottom-8 right-2 size-64 rotate-[-12deg] text-violet-400/[.13] sm:right-10" strokeWidth={1} />
            </button>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[{ game: games[1], title: "UC Rush", copy: "Battle-ready packs from ₹69", icon: Crosshair }, { game: games[4], title: "Crystal Week", copy: "Adventure bundles from ₹89", icon: WandSparkles }].map(({ game, title, copy, icon: Icon }) => (
                <button key={title} onClick={() => setSelectedGame(game)} className="group relative min-h-36 overflow-hidden rounded-[24px] border border-white/[.08] bg-[#0d101b] p-6 text-left transition hover:border-white/15">
                  <div className={cn("absolute inset-0 bg-gradient-to-r opacity-35", game.gradient)} /><Icon className="absolute -bottom-5 right-2 size-36 rotate-[-8deg] text-white/[.08]" strokeWidth={1} /><div className="relative"><p className="text-xs font-black uppercase tracking-[.16em] text-zinc-500">{game.name}</p><p className="mt-2 text-2xl font-black text-white">{title}</p><p className="mt-1 text-sm text-zinc-400">{copy}</p></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-1/2 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[.06] blur-3xl" />
        <SectionHeading kicker="Smooth by design" title="Three moves. Then game on." copy="The storefront removes uncertainty at every step—from account details to delivery status." />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {[
            { n: "01", icon: Gamepad2, title: "Pick your game", copy: "Search the full catalog and choose the exact credits, pass, or voucher you need." },
            { n: "02", icon: BadgeCheck, title: "Verify your player", copy: "Enter public account details and confirm the nickname before any payment starts." },
            { n: "03", icon: Zap, title: "Pay and power up", copy: "Complete a secure hosted checkout and follow delivery from paid to completed." },
          ].map(({ n, icon: Icon, title, copy }, index) => (
            <motion.div key={title} whileHover={{ y: -5 }} className="relative overflow-hidden rounded-[26px] border border-white/[.08] bg-white/[.025] p-7">
              <div className="flex items-center justify-between"><div className="grid size-12 place-items-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300"><Icon className="size-5" /></div><span className="text-5xl font-black tracking-[-.08em] text-white/[.055]">{n}</span></div>
              <h3 className="mt-8 text-xl font-black text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-zinc-500">{copy}</p>
              {index < 2 && <ArrowRight className="absolute -right-3 top-1/2 hidden size-6 text-violet-300/30 lg:block" />}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/[.08] bg-gradient-to-br from-[#121526] to-[#0a0c15] p-7 sm:p-10 lg:p-14">
          <div className="absolute inset-0 grid-lines opacity-20" /><div className="absolute right-[-10%] top-[-60%] size-[480px] rounded-full bg-cyan-400/[.08] blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_.8fr]">
            <div><Badge variant="success"><ShieldCheck className="size-3" /> Trust layer</Badge><h2 className="mt-5 text-balance text-3xl font-black tracking-[-.04em] text-white sm:text-4xl">Built to protect every click between pay and play.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">The production build will verify signed payment webhooks, prevent duplicate fulfillment, and keep game credentials out of checkout entirely.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[{ icon: ShieldCheck, label: "Signed webhooks" }, { icon: User, label: "No passwords" }, { icon: BadgeCheck, label: "Player pre-check" }, { icon: Headphones, label: "Human escalation" }].map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/[.07] bg-black/20 p-4"><div className="grid size-9 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300"><Icon className="size-4" /></div><span className="text-xs font-extrabold text-zinc-200">{label}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-white/[.06] bg-black/10 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div><SectionHeading kicker="Need to know" title="Clear answers. No loot boxes." copy="Everything buyers need to understand before they place a digital order." /><Button variant="secondary" className="mt-7"><MessageCircle className="size-4" /> Talk to support</Button></div>
          <Accordion type="single" collapsible className="rounded-[24px] border border-white/[.08] bg-white/[.025] px-5 sm:px-7">
            {faq.map((item, index) => <AccordionItem value={`item-${index}`} key={item.q}><AccordionTrigger>{item.q}</AccordionTrigger><AccordionContent>{item.a}</AccordionContent></AccordionItem>)}
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-white/[.07] bg-[#05060b]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div><Logo /><p className="mt-5 max-w-xs text-sm leading-6 text-zinc-500">A client-ready concept for a modern multi-game top-up platform. Demo content only.</p></div>
            {[{ title: "Store", links: ["All games", "Deals", "Track order"] }, { title: "Help", links: ["Support", "Refund policy", "Player ID guide"] }, { title: "Company", links: ["About", "Terms", "Privacy"] }].map((group) => <div key={group.title}><p className="text-xs font-black uppercase tracking-[.17em] text-zinc-300">{group.title}</p><div className="mt-4 grid gap-3">{group.links.map((link) => <a href="#" key={link} className="text-sm text-zinc-600 transition hover:text-violet-300">{link}</a>)}</div></div>)}
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-white/[.07] pt-6 text-[11px] text-zinc-700 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 NEXORA. Frontend concept demo.</span><span>Game names belong to their respective owners. No affiliation implied.</span></div>
        </div>
      </footer>

      <a href="#faq" className="fixed bottom-20 right-4 z-30 grid size-12 place-items-center rounded-full border border-emerald-300/20 bg-emerald-500 text-[#04120b] shadow-[0_14px_40px_rgba(16,185,129,.3)] transition hover:scale-105 md:bottom-6" aria-label="Open support"><MessageCircle className="size-5" /></a>

      <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 rounded-[22px] border border-white/10 bg-[#0b0e18]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
        {[{ icon: Home, label: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) }, { icon: Gamepad2, label: "Games", action: scrollToGames }, { icon: ShoppingBag, label: "Orders", action: () => setTrackOpen(true) }, { icon: User, label: "Account", action: () => undefined }].map(({ icon: Icon, label, action }, index) => <button key={label} onClick={action} className={cn("flex flex-col items-center gap-1 rounded-xl py-2 text-[9px] font-bold", index === 0 ? "bg-violet-500/15 text-violet-300" : "text-zinc-500")}><Icon className="size-[18px]" />{label}</button>)}
      </nav>

      <TopUpDialog game={selectedGame} onClose={() => setSelectedGame(null)} />
      <TrackOrderDialog open={trackOpen} onClose={() => setTrackOpen(false)} />
    </main>
  );
}
