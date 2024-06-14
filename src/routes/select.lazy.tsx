import { createLazyFileRoute } from "@tanstack/react-router";

import { Select } from "~/components/select";

export const Route = createLazyFileRoute("/select")({
  component: () => (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Select</h1>
      <Select
        placeholder="Select a choice"
        items={[{ id: "Choice #1" }, { id: "Choice #2" }, { id: "Choice #3" }]}
      >
        {({ id }) => id}
      </Select>
    </>
  ),
});
