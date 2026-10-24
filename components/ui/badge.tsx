import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.16em]",
  {
    variants: {
      variant: {
        default: "border-violet-400/25 bg-violet-500/15 text-violet-200",
        success: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
        warning: "border-amber-400/25 bg-amber-400/10 text-amber-300",
        neutral: "border-white/10 bg-white/[.06] text-zinc-300",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({ className, variant, ...props }: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
