import { createFileRoute } from "@tanstack/react-router";

import { Button, buttonStyles } from "~/components/button";

export const Route = createFileRoute("/button")({
  component: () => (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Button</h1>
      <div className="grid w-max grid-flow-col grid-rows-5 gap-4 *:justify-self-center">
        {(
          Object.keys(
            buttonStyles.variants.color,
          ) as (keyof typeof buttonStyles.variants.color)[]
        ).map((color) => (
          <Button key={color} color={color} className="capitalize">
            Button
          </Button>
        ))}
      </div>
    </>
  ),
});
