import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabListProps,
  TabProps,
  composeRenderProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export { TabPanel, Tabs } from "react-aria-components";

export function TabList<T extends object>(props: TabListProps<T>) {
  return (
    <AriaTabList
      {...props}
      className={composeRenderProps(props.className, (className) =>
        twMerge(
          "flex items-center rounded-xl border border-slate-200 bg-slate-100 p-1",
          className,
        ),
      )}
    />
  );
}

export function Tab(props: TabProps) {
  return (
    <AriaTab
      {...props}
      className={composeRenderProps(props.className, (className) =>
        twMerge(
          "select-none rounded-lg px-2 py-0.5 text-sm font-medium text-slate-600 outline-none transition-colors hover:bg-slate-200/50 hover:text-slate-700 selected:bg-white selected:text-slate-800",
          className,
        ),
      )}
    />
  );
}
