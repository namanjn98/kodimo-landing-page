import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "testimonial" | "content" | "problem" | "feature";
  className?: string;
}

export default function Card({ children, variant = "content", className }: CardProps) {
  return (
    <div
      className={cn(
        {
          "rounded-[7.071px] border-[0.442px] border-solid border-primary-navy bg-card-dark p-10 shadow-[0px_3.536px_3.536px_0px_rgba(0,0,0,0.25)]":
            variant === "testimonial",
          "rounded-[6.858px] border-[0.857px] border-solid border-border-card bg-white p-8 shadow-[0px_3.429px_3.429px_0px_rgba(0,0,0,0.15)]":
            variant === "content",
          "flex items-start gap-5 rounded-lg border border-border-light bg-white p-5 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]":
            variant === "problem",
          "rounded-lg bg-card-inner":
            variant === "feature",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
