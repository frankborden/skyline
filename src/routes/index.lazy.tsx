import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Overview</h1>
      <p className="max-w-prose text-pretty">
        Skyline is a set of styled UI components built on{" "}
        <a
          className="underline underline-offset-4"
          target="_blank"
          href="https://react-spectrum.adobe.com/react-aria/index.html"
        >
          React Aria Components
        </a>
        . The components live in your codebase so you can easily customize or
        swap out any aspect to suit your needs.
      </p>
    </>
  ),
});
