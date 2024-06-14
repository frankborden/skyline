import { createLazyFileRoute } from "@tanstack/react-router";

import { Input } from "~/components/input";

export const Route = createLazyFileRoute("/input")({
  component: () => (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Input</h1>
      <Input placeholder="Enter a value" />
    </>
  ),
});
