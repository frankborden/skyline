import { createFileRoute } from "@tanstack/react-router";

import { Button } from "~/components/button";
import { Dialog, DialogTrigger } from "~/components/dialog";

export const Route = createFileRoute("/dialog")({
  component: () => (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Dialog</h1>
      <DialogTrigger>
        <Button color="slate">Open</Button>
        <Dialog className="max-w-prose">
          {({ close }) => (
            <div>
              <div className="mb-4 text-xl font-medium">Content Title</div>
              <div className="mb-6 text-pretty">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempus massa lacinia quam scelerisque, maximus tincidunt quam
                placerat. Donec et iaculis risus, ut malesuada tortor. Sed
                dignissim elit quis elit facilisis, quis euismod enim euismod.
                Proin sit amet libero molestie, eleifend turpis at, efficitur
                magna. Nam finibus nec neque sit amet blandit. Quisque id magna
                convallis, venenatis lectus sed, ullamcorper mi. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nam arcu urna, cursus non nisl eget, varius
                pretium augue.
              </div>
              <div className="flex justify-end gap-4">
                <Button color="ghost" onPress={close}>
                  Cancel
                </Button>
                <Button color="slate" onPress={close}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </Dialog>
      </DialogTrigger>
    </>
  ),
});
