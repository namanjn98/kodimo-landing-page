import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex h-[38px] items-center gap-2 rounded-full bg-button-secondary px-5 transition-colors hover:bg-badge-hover",
        className
      )}
    >
      <div className="h-2 w-2 rounded-full bg-primary-lime" />
      <span className="text-[14px] font-medium leading-[30px] text-white">
        {children}
      </span>
    </div>
  );
}
