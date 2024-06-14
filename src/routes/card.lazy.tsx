import { createLazyFileRoute } from "@tanstack/react-router";

import { Button } from "~/components/button";
import { Card } from "~/components/card";

export const Route = createLazyFileRoute("/card")({
  component: () => (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Card</h1>
      <Card className="max-w-prose">
        <div className="mb-4 text-xl font-medium">Content Title</div>
        <p className="mb-6 text-pretty">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus
          massa lacinia quam scelerisque, maximus tincidunt quam placerat. Donec
          et iaculis risus, ut malesuada tortor. Sed dignissim elit quis elit
          facilisis, quis euismod enim euismod. Proin sit amet libero molestie,
          eleifend turpis at, efficitur magna. Nam finibus nec neque sit amet
          blandit. Quisque id magna convallis, venenatis lectus sed, ullamcorper
          mi. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Nam arcu urna, cursus non nisl eget, varius
          pretium augue.
        </p>
        <div className="flex justify-end gap-4">
          <Button color="slate" className="flex items-center gap-1">
            Browse
            <div className="i-tabler-arrow-right size-4" />
          </Button>
        </div>
      </Card>
    </>
  ),
});
