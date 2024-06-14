import {
  Input as AriaInput,
  InputProps,
  composeRenderProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Input(props: InputProps) {
  return (
    <AriaInput
      {...props}
      className={composeRenderProps(props.className, (className) =>
        twMerge(
          "rounded-lg border border-slate-400 px-2.5 py-0.5 text-sm placeholder:text-slate-500",
          className,
        ),
      )}
    />
  );
}
