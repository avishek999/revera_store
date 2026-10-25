"use client";

import * as React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  ChevronRight,
  Clock3,
  Crosshair,
  Gamepad2,
  Headphones,
  Home,
  MessageCircle,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Swords,
  Target,
  Trophy,
  User,
  WalletCards,
  WandSparkles,
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
  surface: string;
  icon: React.ElementType;
  iconImage: string;
  sideWallpaper: string;
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
    surface: "#2a2010",
    icon: Swords,
    iconImage: "/game_icons/mb_icon.jpeg",
    sideWallpaper: "/game_side_wallpaper/mobile_legend_side_wallpaper.jpeg",
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
    surface: "#30220d",
    icon: Crosshair,
    iconImage: "/game_icons/bgmi_icon.jpeg",
    sideWallpaper: "/game_side_wallpaper/bgmi_side.jpg",
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
    surface: "#2b1c10",
    icon: Target,
    iconImage: "/game_icons/pubg_mobile.webp",
    sideWallpaper: "/game_side_wallpaper/pubg_mobile_side_wallpaper.jpeg",
    fields: ["Player ID"],
  },
  {
    id: "free-fire",
    name: "Free Fire MAX",
    short: "FF",
    category: "Battle Royale",
    currency: "Diamonds",
    accent: "#ef4444",
    surface: "#2a1515",
    icon: Zap,
    iconImage: "/game_icons/free_fire.jpeg",
    sideWallpaper: "/game_side_wallpaper/free_fire_side_wallpaper.jpeg",
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
    surface: "#152329",
    icon: WandSparkles,
    iconImage: "/game_icons/gensin_impact.jpeg",
    sideWallpaper: "/game_side_wallpaper/Genshin_Impact_side.jpeg",
    fields: ["UID", "Server"],
  },
  {
    id: "valorant",
    name: "Valorant",
    short: "VL",
    category: "Shooter",
    currency: "VP",
    accent: "#fb7185",
    surface: "#281619",
    icon: Crosshair,
    iconImage: "/game_icons/valo_icon.jpeg",
    sideWallpaper: "/game_side_wallpaper/valo_side_wallpaper.jpg",
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
    surface: "#18202c",
    icon: Sparkles,
    iconImage: "/game_icons/honkai_icon.jpeg",
    sideWallpaper: "/game_side_wallpaper/Honkai_Star_Rail_side_wallpaper.jpeg",
    fields: ["UID", "Server"],
  },
  {
    id: "wuthering-waves",
    name: "Wuthering Waves",
    short: "WW",
    category: "RPG",
    currency: "Lunites",
    accent: "#2dd4bf",
    surface: "#132522",
    icon: Bolt,
    iconImage: "/game_icons/wuthring_wave_icon.png",
    sideWallpaper: "/game_side_wallpaper/Wuthering_Waves_side%20wallpaer.jpeg",
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
    surface: "#2b250f",
    icon: Target,
    iconImage: "/game_icons/codm_icon.jpeg",
    sideWallpaper: "/game_side_wallpaper/Call_of_Duty_Mobile_side_wallaper.jpeg",
    fields: ["Player ID"],
  },
  {
    id: "honor-of-kings",
    name: "Honor of Kings",
    short: "HOK",
    category: "MOBA",
    currency: "Tokens",
    accent: "#c084fc",
    surface: "#24192a",
    icon: Trophy,
    iconImage: "/game_icons/hok_icon.png",
    sideWallpaper: "/game_side_wallpaper/Honor_of_Kings_side_wallpaper.jpeg",
    fields: ["Player ID", "Region"],
  },
  {
    id: "clash-of-clans",
    name: "Clash of Clans",
    short: "COC",
    category: "MOBA",
    currency: "Gold Pass",
    accent: "#4ade80",
    surface: "#17251b",
    icon: ShieldCheck,
    iconImage: "/game_icons/coc_icon.png",
    sideWallpaper: "/game_side_wallpaper/coc_side_wallpaper.jpeg",
    fields: ["Player Tag"],
  },
  {
    id: "zenless-zone-zero",
    name: "Zenless Zone Zero",
    short: "ZZZ",
    category: "RPG",
    currency: "Monochrome",
    accent: "#a3e635",
    surface: "#202711",
    icon: Gamepad2,
    iconImage: "/game_icons/zenless_zero_icon.jpeg",
    sideWallpaper: "/game_side_wallpaper/zenless_zone_zero_side_wallaper.jpeg",
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
    a: "Delivery timing depends on the selected package, supplier availability, and the live status shown during checkout.",
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
    <motion.div whileHover={{ scale: 1.035 }} transition={{ type: "spring", stiffness: 380, damping: 22 }} className="flex items-center gap-2.5" aria-label="Revera Store home">
      <div className="relative grid size-11 place-items-center overflow-hidden rounded-[13px] border border-[#f5c542]/30 bg-[#111111] shadow-[0_0_28px_rgba(245,197,66,.12)]">
        <img src="/images/revera-logo.jpg" alt="" className="size-full object-cover" />
      </div>
      {!compact && (
        <div>
          <div className="text-[17px] font-bold leading-none tracking-[.1em] text-white">REVERA <span className="text-[#f5c542]">STORE</span></div>
          <div className="mt-1 text-[8px] font-bold uppercase tracking-[.22em] text-[#d7d8dc]/70">Account · Buy · Sell</div>
        </div>
      )}
    </motion.div>
  );
}

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-2xl"
    >
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-[-.035em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {copy && <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">{copy}</p>}
    </motion.div>
  );
}

function GameArtwork({ game, large = false }: { game: Game; large?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden bg-[#111111]", large ? "h-full min-h-[96px] md:min-h-[390px]" : "aspect-square") }>
      <motion.img
        src={large ? game.sideWallpaper : game.iconImage}
        alt={`${game.name} ${large ? "wallpaper" : "icon"}`}
        className="absolute inset-0 size-full object-cover"
        initial={{ scale: 1.025 }}
        animate={{ scale: large ? [1.025, 1.055, 1.025] : 1.025 }}
        whileHover={{ scale: 1.08 }}
        transition={large ? { duration: 10, repeat: Infinity, ease: "easeInOut" } : { duration: 0.35 }}
      />
      {large && <div className="absolute inset-0 bg-black/15" />}
    </div>
  );
}

function GameCard({ game, onSelect, index }: { game: Game; onSelect: (game: Game) => void; index: number }) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      whileHover={{ y: -6, transition: { duration: 0.18, ease: "easeOut" } }}
      transition={{ duration: 0.46, delay: Math.min(index, 5) * 0.035, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(game)}
      className="glow-border group relative overflow-hidden rounded-[22px] border border-white/[.08] bg-[#111111] text-left shadow-[0_18px_45px_rgba(0,0,0,.24)] outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542]"
    >
      <GameArtwork game={game} />
      {game.badge && (
        <Badge variant={game.badge === "Hot" ? "warning" : "default"} className="absolute left-3 top-3 backdrop-blur-md">
          {game.badge}
        </Badge>
      )}
      <div className="relative flex items-center justify-between gap-3 px-4 pb-4 pt-1">
        <div className="min-w-0">
          <p className="min-h-10 text-sm font-extrabold leading-5 text-white sm:text-[15px]">{game.name}</p>
          <p className="mt-1 text-[11px] font-medium text-zinc-500">{game.currency}</p>
        </div>
        <div className="grid size-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[.05] text-zinc-400 transition group-hover:border-[#f5c542]/35 group-hover:bg-[#f5c542]/10 group-hover:text-[#f5c542]">
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
          <div className="grid min-h-24 grid-cols-[88px_1fr] overflow-hidden rounded-t-[24px] bg-[#0d0d0d] sm:rounded-t-[28px] md:flex md:min-h-full md:flex-col md:rounded-l-[28px] md:rounded-tr-none">
            <div className="relative h-24 min-h-0 overflow-hidden md:h-auto md:min-h-[390px] md:flex-1">
              <GameArtwork game={game} large />
            </div>
            <div className="relative z-10 flex min-w-0 flex-col justify-center border-t border-white/10 bg-[#0d0d0d] p-2.5 md:p-6">
              <Badge variant="success" className="w-fit"><span className="size-1.5 rounded-full bg-[#f5c542]" /> Available</Badge>
              <DialogTitle className="mt-1.5 break-words text-base leading-tight sm:mt-3 sm:text-2xl">{game.name}</DialogTitle>
              <DialogDescription className="mt-1 text-xs text-zinc-400 sm:mt-2 sm:text-sm">Top up {game.currency} securely.</DialogDescription>
            </div>
          </div>

          <div className="p-3 sm:p-7">
            {!showCheckout ? (
              <>
                <div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#f5c542] sm:text-xs">01 · Account</p>
                    <h3 className="mt-0.5 text-base font-bold text-white sm:mt-1 sm:text-lg">Enter player details</h3>
                  </div>
                  <Badge variant="neutral" className="mt-1 text-[9px] sm:text-[10px]">Secure flow</Badge>
                </div>
                <div className={cn("mt-2 grid gap-2 sm:mt-4 sm:gap-3", game.fields.length > 1 && "sm:grid-cols-2")}>
                  {game.fields.map((field, index) => (
                    <Input key={field} aria-label={field} placeholder={index === 0 ? `Enter ${field}` : field} defaultValue={index === 0 ? "123456789" : "2048"} />
                  ))}
                </div>
                <Button variant="secondary" className="mt-2 h-9 w-full sm:mt-3 sm:h-10" onClick={verify} disabled={verifying}>
                  {verifying ? <span className="size-4 animate-spin rounded-full border-2 border-zinc-500 border-t-white" /> : <BadgeCheck className="size-4" />}
                  {verifying ? "Checking player..." : verified ? "Player verified" : "Verify player"}
                </Button>

                <div className="mt-3 sm:mt-6">
                  <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#f5c542] sm:text-xs">02 · Select package</p>
                  <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-3 sm:gap-2.5">
                    {packageSets.map((item, index) => (
                      <button
                        key={item.amount}
                        onClick={() => setSelectedPackage(index)}
                        className={cn(
                          "relative rounded-xl border p-2 text-left transition outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] sm:rounded-2xl sm:p-3",
                          selectedPackage === index ? "border-[#f5c542]/60 bg-[#f5c542]/10" : "border-white/[.08] bg-white/[.025] hover:bg-white/[.05]",
                        )}
                      >
                        <span className={cn("text-[8px] font-bold uppercase tracking-[.1em] sm:text-[9px] sm:tracking-[.12em]", selectedPackage === index ? "text-[#f5c542]" : "text-zinc-600")}>{item.tag}</span>
                        <p className="mt-0.5 truncate text-xs font-bold text-white sm:mt-1 sm:text-sm">{item.amount}</p>
                        <p className="truncate text-[9px] text-zinc-500 sm:text-[10px]">{item.bonus}</p>
                        <div className="mt-1 flex items-end gap-1.5 sm:mt-2"><span className="text-xs font-bold text-white sm:text-sm">₹{item.price}</span><span className="text-[9px] text-zinc-600 line-through sm:text-[10px]">₹{item.oldPrice}</span></div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/[.08] pt-3 sm:mt-5 sm:pt-5">
                  <div><p className="text-[10px] text-zinc-500 sm:text-[11px]">Total payable</p><p className="text-xl font-bold text-white sm:text-2xl">₹{pkg.price}</p></div>
                  <Button size="lg" className="h-10 sm:h-11" onClick={() => setShowCheckout(true)} disabled={!verified}>Continue <ArrowRight className="size-4" /></Button>
                </div>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <Badge variant="success"><ShieldCheck className="size-3" /> Secure checkout</Badge>
                <h3 className="mt-4 text-2xl font-bold text-white">Ready to power up.</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">Complete payment through our secure hosted checkout. Your order begins processing after payment confirmation.</p>
                <div className="mt-6 space-y-3 rounded-2xl border border-white/[.08] bg-black/20 p-4">
                  <div className="flex justify-between text-sm"><span className="text-zinc-500">Game</span><span className="font-bold text-white">{game.name}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-zinc-500">Player</span><span className="font-bold text-white">ReveraPlayer_24</span></div>
                  <div className="flex justify-between text-sm"><span className="text-zinc-500">Package</span><span className="font-bold text-white">{pkg.amount} {game.currency}</span></div>
                  <div className="h-px bg-white/[.08]" />
                  <div className="flex items-end justify-between"><span className="text-sm text-zinc-400">Total</span><span className="text-3xl font-bold text-white">₹{pkg.price}</span></div>
                </div>
                <Button size="lg" className="mt-5 w-full" onClick={() => setShowCheckout(false)}><WalletCards className="size-4" /> Pay with UPI</Button>
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
        <DialogDescription className="mt-2">Enter your order ID to follow the fulfillment timeline.</DialogDescription>
        <div className="mt-5 flex gap-2">
          <Input defaultValue="RS-240184" aria-label="Order ID" />
          <Button onClick={() => setTracked(true)}>Track</Button>
        </div>
        {tracked && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 rounded-2xl border border-white/[.08] bg-black/20 p-4">
            {["Payment confirmed", "Player verified", "Top-up delivered"].map((label, index) => (
              <div key={label} className="relative flex gap-3 pb-5 last:pb-0">
                {index < 2 && <div className="absolute left-[9px] top-5 h-full w-px bg-[#f5c542]/35" />}
                <div className="z-10 mt-0.5 grid size-5 place-items-center rounded-full bg-[#f5c542] text-[#080808]"><BadgeCheck className="size-3" /></div>
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

  const modalOpen = Boolean(selectedGame) || trackOpen;

  React.useEffect(() => {
    if (!modalOpen) return;

    const root = document.documentElement;
    const body = document.body;
    const previous = {
      rootOverflow: root.style.overflow,
      rootOverscroll: root.style.overscrollBehavior,
      bodyOverflow: body.style.overflow,
      bodyOverscroll: body.style.overscrollBehavior,
    };

    root.style.overflow = "hidden";
    root.style.overscrollBehavior = "none";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";

    return () => {
      root.style.overflow = previous.rootOverflow;
      root.style.overscrollBehavior = previous.rootOverscroll;
      body.style.overflow = previous.bodyOverflow;
      body.style.overscrollBehavior = previous.bodyOverscroll;
    };
  }, [modalOpen]);

  const filteredGames = games.filter((game) => {
    const matchesCategory = activeCategory === "All" || game.category === activeCategory;
    const matchesSearch = game.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToGames = () => document.getElementById("games")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="overflow-hidden pb-24 xl:pb-0">
      <div className="border-b border-[#f5c542]/15 bg-[#15130c] px-4 py-2 text-center text-[10px] font-extrabold uppercase tracking-[.16em] text-[#f5c542] sm:text-[11px]">
        <span className="mr-2 inline-block size-1.5 animate-pulse rounded-full bg-[#d7d8dc]" /> Fast delivery · Secure checkout · Human support
      </div>

      <header className="sticky top-0 z-40 border-b border-white/[.07] bg-[#070912]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><Logo /></button>
          <nav className="hidden items-center gap-1 xl:flex">
            {[{ label: "Games", href: "#games" }, { label: "Deals", href: "#deals" }, { label: "How it works", href: "#how" }, { label: "FAQ", href: "#faq" }].map((item) => (
              <a key={item.label} href={item.href} className="rounded-lg px-4 py-2 text-sm font-semibold text-zinc-400 transition hover:bg-white/[.05] hover:text-white">{item.label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 xl:flex">
            <Button variant="ghost" size="sm" onClick={() => setTrackOpen(true)}><ShoppingBag className="size-4" /> Track order</Button>
            <Button variant="secondary" size="sm"><User className="size-4" /> Sign in</Button>
            <Button size="sm"><User className="size-4" /> Sign up</Button>
          </div>
          <div className="flex items-center gap-1.5 xl:hidden">
            <Button variant="secondary" size="sm" className="h-9 px-2.5 text-[11px]">Sign in</Button>
            <Button size="sm" className="h-9 px-2.5 text-[11px]">Sign up</Button>
          </div>
        </div>
      </header>

      <section className="relative isolate min-h-[690px] border-b border-white/[.06] bg-[#060606] noise lg:min-h-[750px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.32 }} transition={{ duration: 1.1 }} className="absolute inset-0 bg-cover bg-[62%_center] grayscale lg:bg-center" style={{ backgroundImage: "url('/images/revera-hero.png')" }} />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto grid min-h-[690px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:min-h-[750px] lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-2xl">
            <Badge><Sparkles className="size-3" /> Revera Store · Game marketplace</Badge>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-[.94] tracking-[-.055em] text-white sm:text-6xl lg:text-[78px]">
              Power up.<br /><motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32, duration: 0.5 }} className="inline-block text-[#f5c542]">Skip the wait.</motion.span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">One fast, secure destination for game credits, passes, and vouchers across the titles you play most.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={scrollToGames}>Explore games <ArrowRight className="size-4" /></Button>
              <Button size="lg" variant="secondary" onClick={() => setTrackOpen(true)}><ShoppingBag className="size-4" /> Track an order</Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-zinc-400">
              <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-[#f5c542]" /> Secure checkout</span>
              <span className="flex items-center gap-2"><Zap className="size-4 text-amber-300" /> Instant-ready flow</span>
              <span className="flex items-center gap-2"><Headphones className="size-4 text-[#d7d8dc]" /> Human support</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.65 }} className="mt-10 hidden justify-self-end lg:block">
            <div className="glass w-[330px] rounded-[28px] p-4">
              <div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-zinc-500">Trending now</p><p className="mt-1 text-lg font-bold text-white">Quick top-up</p></div><div className="grid size-10 place-items-center rounded-xl bg-[#f5c542]/15 text-[#f5c542]"><Bolt className="size-5" /></div></div>
              <div className="mt-4 space-y-2">
                {games.slice(0, 3).map((game, index) => (
                  <motion.button whileHover={{ x: 4 }} key={game.id} onClick={() => setSelectedGame(game)} className="flex w-full items-center gap-3 rounded-2xl border border-white/[.07] bg-black/20 p-3 text-left transition hover:border-[#f5c542]/30 hover:bg-white/[.06]">
                    <img src={game.iconImage} alt="" className="size-11 shrink-0 rounded-xl object-cover" />
                    <div className="min-w-0 flex-1"><p className="truncate text-sm font-extrabold text-white">{game.name}</p><p className="text-[10px] text-zinc-500">From ₹{[26, 69, 79][index]}</p></div>
                    <ChevronRight className="size-4 shrink-0 text-zinc-600" />
                  </motion.button>
                ))}
              </div>
              <button onClick={scrollToGames} className="mt-4 flex w-full items-center justify-center gap-2 text-xs font-bold text-[#f5c542] hover:text-[#ffe080]">View all games <ArrowRight className="size-3" /></button>
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
            <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.42, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }} className={cn("flex items-center gap-4 p-5 sm:p-6", index > 0 && "border-t border-white/[.07] sm:border-l sm:border-t-0")}>
              <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#f5c542]/10 text-[#f5c542]"><Icon className="size-5" /></div>
              <div><p className="text-sm font-extrabold text-white">{title}</p><p className="mt-1 text-[11px] text-zinc-500">{copy}</p></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="games" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading kicker="Game vault" title="Every world. One checkout." copy="Browse the catalog and complete a smooth top-up journey for any supported game." />
          <label className="relative block w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search games..." className="pl-11" />
          </label>
        </div>
        <div className="scrollbar-none mt-9 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <motion.button whileTap={{ scale: 0.96 }} key={category} onClick={() => setActiveCategory(category)} className={cn("shrink-0 rounded-full border px-4 py-2 text-xs font-extrabold transition", activeCategory === category ? "border-[#f5c542]/45 bg-[#f5c542]/12 text-[#f5c542]" : "border-white/[.08] bg-white/[.025] text-zinc-500 hover:text-white")}>{category}</motion.button>
          ))}
        </div>
        <motion.div layout className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {filteredGames.map((game, index) => <GameCard key={game.id} game={game} index={index} onSelect={setSelectedGame} />)}
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
            <motion.button initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -5, transition: { duration: 0.18, ease: "easeOut" } }} onClick={() => setSelectedGame(games[0])} className="group relative min-h-80 overflow-hidden rounded-[28px] border border-[#f5c542]/20 bg-[#17140b] p-7 text-left sm:p-9">
              <motion.div animate={{ rotate: [0, 7, 0], y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-16 -top-16 size-80 rounded-full border border-[#f5c542]/15 bg-[#f5c542]/[.05]" />
              <div className="relative max-w-md"><Badge variant="warning"><Sparkles className="size-3" /> Weekend drop</Badge><h3 className="mt-5 text-3xl font-bold tracking-[-.04em] text-white sm:text-4xl">Double the energy.<br />Keep the momentum.</h3><p className="mt-4 text-sm leading-6 text-zinc-400">Explore special passes, first-recharge packs, and limited seasonal bundles at competitive prices.</p><div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#f5c542]">Unlock deal <ArrowRight className="size-4 transition group-hover:translate-x-1" /></div></div>
              <motion.img animate={{ y: [0, -8, 0], rotate: [-3, 2, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} src={games[0].iconImage} alt="" className="absolute bottom-8 right-8 hidden size-48 rounded-[28px] border border-white/10 object-cover opacity-45 shadow-2xl lg:block" />
            </motion.button>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[{ game: games[1], title: "UC Rush", copy: "Battle-ready packs from ₹69" }, { game: games[4], title: "Crystal Week", copy: "Adventure bundles from ₹89" }].map(({ game, title, copy }, index) => (
                <motion.button initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.42, delay: (index + 1) * 0.07, ease: [0.16, 1, 0.3, 1] }} whileHover={{ x: 5, transition: { duration: 0.18, ease: "easeOut" } }} key={title} onClick={() => setSelectedGame(game)} className="group relative min-h-36 overflow-hidden rounded-[24px] border border-white/[.08] bg-[#111111] p-6 text-left transition hover:border-[#f5c542]/25">
                  <div className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: game.accent }} /><img src={game.iconImage} alt="" className="absolute right-4 top-1/2 size-24 -translate-y-1/2 rounded-2xl object-cover opacity-35" /><div className="relative max-w-[65%]"><p className="text-xs font-bold uppercase tracking-[.12em] text-zinc-500">{game.name}</p><p className="mt-2 text-2xl font-bold leading-tight text-white">{title}</p><p className="mt-1 text-sm text-zinc-400">{copy}</p></div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-1/2 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f5c542]/[.06]" />
        <SectionHeading kicker="Smooth by design" title="Three moves. Then game on." copy="The storefront removes uncertainty at every step—from account details to delivery status." />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {[
            { n: "01", icon: Gamepad2, title: "Pick your game", copy: "Search the full catalog and choose the exact credits, pass, or voucher you need." },
            { n: "02", icon: BadgeCheck, title: "Verify your player", copy: "Enter public account details and confirm the nickname before any payment starts." },
            { n: "03", icon: Zap, title: "Pay and power up", copy: "Complete a secure hosted checkout and follow delivery from paid to completed." },
          ].map(({ n, icon: Icon, title, copy }, index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.42, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }} whileHover={{ y: -5, transition: { duration: 0.18, ease: "easeOut" } }} className="relative overflow-hidden rounded-[26px] border border-white/[.08] bg-white/[.025] p-7">
              <div className="flex items-center justify-between"><div className="grid size-12 place-items-center rounded-2xl border border-[#f5c542]/20 bg-[#f5c542]/10 text-[#f5c542]"><Icon className="size-5" /></div><span className="text-5xl font-bold tracking-[-.08em] text-white/[.055]">{n}</span></div>
              <h3 className="mt-8 text-xl font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-zinc-500">{copy}</p>
              {index < 2 && <ArrowRight className="absolute -right-3 top-1/2 hidden size-6 text-[#f5c542]/30 lg:block" />}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/[.08] bg-[#111111] p-7 sm:p-10 lg:p-14">
          <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[-10%] top-[-60%] size-[480px] rounded-full border border-[#d7d8dc]/10 bg-white/[.02]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_.8fr]">
            <div><Badge variant="success"><ShieldCheck className="size-3" /> Trust layer</Badge><h2 className="mt-5 text-balance text-3xl font-bold tracking-[-.04em] text-white sm:text-4xl">Built to protect every click between pay and play.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">The production build will verify signed payment webhooks, prevent duplicate fulfillment, and keep game credentials out of checkout entirely.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[{ icon: ShieldCheck, label: "Signed webhooks" }, { icon: User, label: "No passwords" }, { icon: BadgeCheck, label: "Player pre-check" }, { icon: Headphones, label: "Human escalation" }].map(({ icon: Icon, label }, index) => <motion.div key={label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.4, delay: index * 0.055, ease: [0.16, 1, 0.3, 1] }} className="flex items-center gap-3 rounded-2xl border border-white/[.07] bg-black/20 p-4"><div className="grid size-9 place-items-center rounded-xl bg-[#d7d8dc]/10 text-[#d7d8dc]"><Icon className="size-4" /></div><span className="text-xs font-extrabold text-zinc-200">{label}</span></motion.div>)}
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
            <div><Logo /><p className="mt-5 max-w-xs text-sm leading-6 text-zinc-500">A fast, secure destination for game top-ups, passes, vouchers, and account marketplace services.</p></div>
            {[{ title: "Store", links: ["All games", "Deals", "Track order"] }, { title: "Help", links: ["Support", "Refund policy", "Player ID guide"] }, { title: "Company", links: ["About", "Terms", "Privacy"] }].map((group) => <div key={group.title}><p className="text-xs font-bold uppercase tracking-[.17em] text-zinc-300">{group.title}</p><div className="mt-4 grid gap-3">{group.links.map((link) => <a href="#" key={link} className="text-sm text-zinc-600 transition hover:text-[#f5c542]">{link}</a>)}</div></div>)}
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-white/[.07] pt-6 text-[11px] text-zinc-700 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Revera Store. All rights reserved.</span><span>Game names belong to their respective owners. No affiliation implied.</span></div>
        </div>
      </footer>

      <motion.a whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }} href="#faq" className="fixed bottom-20 right-4 z-30 grid size-12 place-items-center rounded-full border border-[#f5c542]/30 bg-[#f5c542] text-[#090909] shadow-[0_14px_40px_rgba(245,197,66,.18)] xl:bottom-6" aria-label="Open support"><MessageCircle className="size-5" /></motion.a>

      <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 rounded-[22px] border border-white/10 bg-[#0b0e18]/95 p-2 shadow-2xl backdrop-blur-xl xl:hidden">
        {[{ icon: Home, label: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) }, { icon: Gamepad2, label: "Games", action: scrollToGames }, { icon: ShoppingBag, label: "Orders", action: () => setTrackOpen(true) }].map(({ icon: Icon, label, action }, index) => <motion.button whileTap={{ scale: 0.92 }} key={label} onClick={action} className={cn("flex flex-col items-center gap-1 rounded-xl py-2 text-[9px] font-bold", index === 0 ? "bg-[#f5c542]/10 text-[#f5c542]" : "text-zinc-500")}><Icon className="size-[18px]" />{label}</motion.button>)}
      </nav>

      <TopUpDialog game={selectedGame} onClose={() => setSelectedGame(null)} />
      <TrackOrderDialog open={trackOpen} onClose={() => setTrackOpen(false)} />
    </main>
  );
}
