import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuItemProps,
  MenuProps,
  composeRenderProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { Popover } from "./popover";

export { MenuTrigger } from "react-aria-components";

export function Menu<T extends object>(props: MenuProps<T>) {
  return (
    <Popover>
      <AriaMenu<T>
        {...props}
        className={twMerge(
          "rounded-lg border border-slate-300 bg-white shadow-md outline-none",
          props.className,
        )}
      ></AriaMenu>
    </Popover>
  );
}

export function MenuItem<T extends object>(props: MenuItemProps<T>) {
  return (
    <AriaMenuItem<T>
      {...props}
      className={composeRenderProps(props.className, (className) =>
        twMerge(
          "select-none px-4 py-1.5 text-sm font-medium text-slate-600 outline-none first:rounded-t-lg last:rounded-b-lg focus:bg-slate-200/60 focus:text-slate-800",
          className,
        ),
      )}
    ></AriaMenuItem>
  );
}
