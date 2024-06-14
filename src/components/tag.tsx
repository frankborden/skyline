import { ReactNode } from "react";
import {
  Tag as AriaTag,
  TagGroup,
  TagList,
  TagProps,
  composeRenderProps,
} from "react-aria-components";
import { VariantProps, tv } from "tailwind-variants";

export const tagStyles = tv({
  base: "rounded-lg border px-1.5 py-px text-xs font-medium outline-none",
  variants: {
    color: {
      slate: "border-slate-600 bg-slate-600 text-slate-50",
      gray: "border-gray-600 bg-gray-600 text-gray-50",
      zinc: "border-zinc-600 bg-zinc-600 text-zinc-50",
      neutral: "border-neutral-600 bg-neutral-600 text-neutral-50",
      stone: "border-stone-600 bg-stone-600 text-stone-50",
      rose: "border-rose-600 bg-rose-600 text-rose-50",
      red: "border-red-600 bg-red-600 text-red-50",
      orange: "border-orange-600 bg-orange-600 text-orange-50",
      amber: "border-amber-600 bg-amber-600 text-amber-50",
      yellow: "border-yellow-600 bg-yellow-600 text-yellow-50",
      lime: "border-lime-600 bg-lime-600 text-lime-50",
      green: "border-green-600 bg-green-600 text-green-50",
      emerald: "border-emerald-600 bg-emerald-600 text-emerald-50",
      teal: "border-teal-600 bg-teal-600 text-teal-50",
      cyan: "border-cyan-600 bg-cyan-600 text-cyan-50",
      sky: "border-sky-600 bg-sky-600 text-sky-50",
      blue: "border-blue-600 bg-blue-600 text-blue-50",
      indigo: "border-indigo-600 bg-indigo-600 text-indigo-50",
      violet: "border-violet-600 bg-violet-600 text-violet-50",
      purple: "border-purple-600 bg-purple-600 text-purple-50",
      fuchsia: "border-purple-600 bg-purple-600 text-purple-50",
      pink: "border-pink-600 bg-pink-600 text-pink-50",
      black: "border-black/85 bg-black/85 text-slate-100",
      white: "border-slate-300 bg-white text-slate-700",
      ghost: "border-transparent text-slate-800",
    },
  },
});

export function Tag({
  className,
  color,
  ...props
}: TagProps & VariantProps<typeof tagStyles>) {
  return (
    <AriaTag
      className={composeRenderProps(className, (className) =>
        tagStyles({ color, className }),
      )}
      {...props}
    />
  );
}

export function Tags({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <TagGroup>
      <TagList className={className}>{children}</TagList>
    </TagGroup>
  );
}
