import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.16em]",
  {
    variants: {
      variant: {
        default: "border-[#f5c542]/30 bg-[#f5c542]/10 text-[#f5c542]",
        success: "border-[#d7d8dc]/25 bg-[#d7d8dc]/10 text-[#eeeeef]",
        warning: "border-[#f5c542]/30 bg-[#f5c542]/10 text-[#f5c542]",
        neutral: "border-white/10 bg-white/[.06] text-zinc-300",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({ className, variant, ...props }: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
