import {
  Popover as AriaPopover,
  PopoverProps,
  composeRenderProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Popover(props: PopoverProps) {
  return (
    <AriaPopover
      offset={4}
      placement="bottom"
      {...props}
      className={composeRenderProps(props.className, (className) =>
        twMerge(
          "entering:animate-in entering:zoom-in-95 placement-top:entering:slide-in-from-bottom-2 placement-bottom:entering:slide-in-from-top-2 exiting:animate-out exiting:zoom-out-95 placement-top:exiting:slide-out-to-bottom-1 placement-bottom:exiting:slide-out-to-top-1",
          className,
        ),
      )}
    ></AriaPopover>
  );
}
