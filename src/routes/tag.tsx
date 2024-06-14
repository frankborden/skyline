import { createFileRoute } from "@tanstack/react-router";

import { Tag, Tags, tagStyles } from "~/components/tag";

export const Route = createFileRoute("/tag")({
  component: () => (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Tag</h1>
      <Tags className="grid w-max grid-flow-col grid-rows-5 gap-4 *:justify-self-center">
        {(
          Object.keys(
            tagStyles.variants.color,
          ) as (keyof typeof tagStyles.variants.color)[]
        ).map((color, i) => (
          <Tag key={color} color={color} className="capitalize">
            Tag #{i + 1}
          </Tag>
        ))}
      </Tags>
    </>
  ),
});
