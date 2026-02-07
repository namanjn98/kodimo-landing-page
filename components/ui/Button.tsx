import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "nav";
  children: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-semibold transition-all",
        {
          "h-[60px] w-[226px] bg-primary-lime text-[18px] text-primary-dark hover:bg-primary-lime-hover":
            variant === "primary",
          "h-[60px] w-[226px] bg-button-secondary text-[18px] font-bold text-white hover:bg-button-secondary-hover":
            variant === "secondary",
          "h-[40px] w-[172px] bg-primary-lime text-[17px] text-primary-dark hover:bg-primary-lime-hover":
            variant === "nav",
        },
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
