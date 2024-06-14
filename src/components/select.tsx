import { ReactNode } from "react";
import {
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  ListBox,
  ListBoxItem,
  SelectValue,
} from "react-aria-components";

import { Button } from "./button";
import { Popover } from "./popover";

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  items: Iterable<T>;
  children: (t: T) => ReactNode;
}

export function Select<T extends object>(props: SelectProps<T>) {
  const { children, items, ...otherProps } = props;
  return (
    <AriaSelect<T>
      {...otherProps}
      className="[&_.i-tabler-chevron-down]:open:rotate-180"
    >
      <Button
        color="ghost"
        className="flex items-center gap-2 border-slate-300 bg-white"
      >
        <SelectValue />
        <div className="i-tabler-chevron-down size-4 transition-transform duration-200 ease-in-out" />
      </Button>
      <Popover placement="bottom left">
        <ListBox
          items={items}
          className="min-w-[--trigger-width] rounded-lg border border-slate-300 bg-white shadow-md outline-none"
        >
          {(item) => (
            <ListBoxItem className="select-none px-4 py-1.5 text-sm font-medium text-slate-600 outline-none first:rounded-t-lg last:rounded-b-lg focus:bg-slate-200/60 focus:text-slate-800">
              {children(item)}
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}
