import { createFileRoute } from "@tanstack/react-router";

import { Button } from "~/components/button";
import { toast } from "~/components/toast";

let i = 1;

export const Route = createFileRoute("/toast")({
  component: () => (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Toast</h1>
      <Button
        color="slate"
        onPress={() =>
          toast(`Created event #${i++}`, `Lorem ipsum dolor sit amet`)
        }
      >
        Toast
      </Button>
    </>
  ),
});
