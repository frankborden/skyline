import { createFileRoute } from "@tanstack/react-router";

import { Button } from "~/components/button";
import { toast } from "~/components/toast";

export const Route = createFileRoute("/setup")({
  component: () => (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Setup</h1>
      <h2 id="dependencies" className="mb-2 font-medium">
        1. Install the dependencies
      </h2>
      <p className="mb-2 max-w-prose text-pretty">
        Make sure your project has the needed dependencies installed.
      </p>
      <ul className="mb-8 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm shadow">
        <li>
          <code>@egoist/tailwindcss-icons</code>
        </li>
        <li>
          <code>@iconify/json</code>
        </li>
        <li>
          <code>@react-aria/toast</code>
        </li>
        <li>
          <code>@react-stately/toast</code>
        </li>
        <li>
          <code>autoprefixer</code>
        </li>
        <li>
          <code>react-aria-components</code>
        </li>
        <li>
          <code>tailwind-merge</code>
        </li>
        <li>
          <code>tailwind-variants</code>
        </li>
        <li>
          <code>tailwindcss</code>
        </li>
        <li>
          <code>tailwindcss-animate</code>
        </li>
        <li>
          <code>tailwindcss-react-aria-components</code>
        </li>
      </ul>
      <h2 id="tailwind" className="mb-2 font-medium">
        2. Update your tailwind.config.ts
      </h2>
      <p className="mb-2 max-w-prose text-pretty">
        After configuring{" "}
        <a
          className="underline underline-offset-4"
          href="https://tailwindcss.com/docs/installation/framework-guides"
          target="_blank"
        >
          Tailwind
        </a>{" "}
        in your project, add the plugins to your config file.
      </p>
      <code className="mb-8 flex whitespace-pre rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm shadow">
        {`import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import aria from "tailwindcss-react-aria-components";

export default {
  // other fields

  plugins: [
    aria,
    animate,
    iconsPlugin({ collections: getIconCollections(["tabler"]) }),
  ],
} satisfies Config;
`}
      </code>
      <h2 id="components" className="mb-2 font-medium">
        3. Copy the components into your project
      </h2>
      <div className="mb-4 flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 shadow">
        <code className="text-sm">
          <span className="select-none">$ </span>npx degit
          frankborden/skyline/src/components src/some/destination
        </code>
        <Button
          color="ghost"
          className="inline-flex p-1 pressed:pb-[3.5px] pressed:pt-[4.5px]"
          onPress={() => {
            navigator.clipboard.writeText(
              "npx degit frankborden/skyline/src/components src/some/destination",
            );
            toast(
              "Copied to clipboard",
              "Run the command in your project root.",
            );
          }}
        >
          <div className="i-tabler-copy size-5" />
        </Button>
      </div>
      <p className="max-w-prose text-pretty">
        Replace the destination path with the desired location relative to your
        project root.
      </p>
    </>
  ),
});
