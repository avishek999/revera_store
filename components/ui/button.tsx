import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold tracking-tight transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#f5c542] text-[#090909] shadow-[0_10px_35px_rgba(245,197,66,.16)] hover:bg-[#e4b72e] hover:-translate-y-0.5",
        secondary: "border border-white/10 bg-white/[.07] text-white hover:border-white/20 hover:bg-white/[.11]",
        ghost: "text-zinc-300 hover:bg-white/[.07] hover:text-white",
        outline: "border border-[#f5c542]/30 bg-[#f5c542]/10 text-[#f5c542] hover:bg-[#f5c542]/15",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-13 rounded-2xl px-7 text-[15px]",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
