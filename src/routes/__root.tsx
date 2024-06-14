import {
  FileRoutesByPath,
  Link,
  Outlet,
  createRootRoute,
} from "@tanstack/react-router";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { Toaster } from "~/components/toast";

const sections: {
  label: string;
  links: { label: string; to: keyof FileRoutesByPath }[];
}[] = [
  {
    label: "General",
    links: [
      { label: "Overview", to: "/" },
      {
        label: "Setup",
        to: "/setup",
      },
    ],
  },
  {
    label: "Components",
    links: [
      { label: "Button", to: "/button" },
      { label: "Card", to: "/card" },
      { label: "Dialog", to: "/dialog" },
      { label: "Input", to: "/input" },
      { label: "Menu", to: "/menu" },
      { label: "Select", to: "/select" },
      { label: "Tab", to: "/tab" },
      { label: "Tag", to: "/tag" },
      { label: "Toast", to: "/toast" },
    ],
  },
];

export const Route = createRootRoute({
  component: () => (
    <div className="flex w-screen">
      <div>
        <div className="sticky top-0 h-screen border border-slate-300">
          <div className="grid grid-cols-1">
            <div className="aspect-square w-full p-6">
              <div className="grid size-full place-items-center rounded-lg bg-slate-200/75 p-2">
                <div className="i-tabler-building-skyscraper h-[calc(100%_-_1rem)] w-[calc(100%_-_1rem)] text-slate-600" />
              </div>
            </div>
            <div className="mx-4 -mt-5 border-b border-white pb-2 text-center text-lg font-medium text-slate-800">
              Skyline
            </div>
            {sections.map((section) => (
              <>
                <div
                  key={section.label}
                  className="mb-1 mt-6 px-6 text-xs font-medium text-slate-500"
                >
                  {section.label}
                </div>
                {section.links.map((link) => (
                  <PageLink key={link.to} to={link.to}>
                    {link.label}
                  </PageLink>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
      <main className="p-6">
        <Outlet />
      </main>
      <Toaster />
    </div>
  ),
});

function PageLink(props: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={twMerge(
        "border-x-2 border-transparent px-6 py-1.5 font-medium text-slate-600 transition-colors duration-100 hover:bg-slate-100 hover:text-slate-700 [&.active]:border-r-slate-500 [&.active]:bg-slate-200/75 [&.active]:text-slate-800",
        props.className,
      )}
    />
  );
}
