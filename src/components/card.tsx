import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "rounded-xl border border-slate-300 bg-white px-8 py-6 shadow",
        className,
      )}
    >
      {children}
    </div>
  );
}
