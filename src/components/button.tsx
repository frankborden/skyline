import {
  Button as AriaButton,
  Link as AriaLink,
  ButtonProps,
  LinkProps,
  composeRenderProps,
} from "react-aria-components";
import { VariantProps, tv } from "tailwind-variants";

export const buttonStyles = tv({
  base: "rounded-lg border px-2 py-0.5 text-sm font-medium shadow-[inset_0_-1px_2px_0_#0006,inset_0_1px_2px_#fff6] transition-[shadow_padding] duration-100 pressed:shadow-[inset_0_1px_2px_0_#0006,inset_0_-1px_2px_0_#fff6] outline-none pressed:pt-[2.5px] pressed:pb-[1.5px]",
  variants: {
    color: {
      slate:
        "border-slate-600 bg-slate-600 text-slate-50 hover:text-white hover:bg-slate-600/90",
      gray: "border-gray-600 bg-gray-600 text-gray-50 hover:text-white hover:bg-gray-600/90",
      zinc: "border-zinc-600 bg-zinc-600 text-zinc-50 hover:text-white hover:bg-zinc-600/90",
      neutral:
        "border-neutral-600 bg-neutral-600 text-neutral-50 hover:text-white hover:bg-neutral-600/90",
      stone:
        "border-stone-600 bg-stone-600 text-stone-50 hover:text-white hover:bg-stone-600/90",
      rose: "border-rose-600 bg-rose-600 text-rose-50 hover:text-white hover:bg-rose-600/90",
      red: "border-red-600 bg-red-600 text-red-50 hover:text-white hover:bg-red-600/90",
      orange:
        "border-orange-600 bg-orange-600 text-orange-50 hover:text-white hover:bg-orange-600/90",
      amber:
        "border-amber-600 bg-amber-600 text-amber-50 hover:text-white hover:bg-amber-600/90",
      yellow:
        "border-yellow-600 bg-yellow-600 text-yellow-50 hover:text-white hover:bg-yellow-600/90",
      lime: "border-lime-600 bg-lime-600 text-lime-50 hover:text-white hover:bg-lime-600/90",
      green:
        "border-green-600 bg-green-600 text-green-50 hover:text-white hover:bg-green-600/90",
      emerald:
        "border-emerald-600 bg-emerald-600 text-emerald-50 hover:text-white hover:bg-emerald-600/90",
      teal: "border-teal-600 bg-teal-600 text-teal-50 hover:text-white hover:bg-teal-600/90",
      cyan: "border-cyan-600 bg-cyan-600 text-cyan-50 hover:text-white hover:bg-cyan-600/90",
      sky: "border-sky-600 bg-sky-600 text-sky-50 hover:text-white hover:bg-sky-600/90",
      blue: "border-blue-600 bg-blue-600 text-blue-50 hover:text-white hover:bg-blue-600/90",
      indigo:
        "border-indigo-600 bg-indigo-600 text-indigo-50 hover:text-white hover:bg-indigo-600/90",
      violet:
        "border-violet-600 bg-violet-600 text-violet-50 hover:text-white hover:bg-violet-600/90",
      purple:
        "border-purple-600 bg-purple-600 text-purple-50 hover:text-white hover:bg-purple-600/90",
      fuchsia:
        "border-purple-600 bg-purple-600 text-purple-50 hover:text-white hover:bg-purple-600/90",
      pink: "border-pink-600 bg-pink-600 text-pink-50 hover:text-white hover:bg-pink-600/90",
      black:
        "border-black/85 bg-black/85 text-slate-100 hover:bg-black/75 hover:text-white",
      white:
        "border-slate-300 bg-white text-slate-700 hover:bg-slate-100/75 hover:text-slate-900 shadow-[inset_0_-1px_2px_0_#0003,inset_0_1px_2px_#fff3] pressed:shadow-[inset_0_1px_2px_0_#0003,inset_0_-1px_2px_0_#fff3]",
      ghost:
        "border-transparent shadow-none hover:bg-slate-100/90 hover:text-black text-slate-800 pressed:shadow-none pressed:hover:bg-slate-200/70",
    },
  },
});

export function Button({
  className,
  color,
  ...props
}: ButtonProps & VariantProps<typeof buttonStyles>) {
  return (
    <AriaButton
      className={composeRenderProps(className, (className) =>
        buttonStyles({ color, className }),
      )}
      {...props}
    />
  );
}

export function Link({
  className,
  color,
  ...props
}: LinkProps & VariantProps<typeof buttonStyles>) {
  return (
    <AriaLink
      className={composeRenderProps(className, (className) =>
        buttonStyles({ color, className }),
      )}
      {...props}
    />
  );
}
