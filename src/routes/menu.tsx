import { createFileRoute } from "@tanstack/react-router";

import { Button } from "~/components/button";
import { Menu, MenuItem, MenuTrigger } from "~/components/menu";

export const Route = createFileRoute("/menu")({
  component: () => (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Menu</h1>
      <MenuTrigger>
        <Button color="slate">Open</Button>
        <Menu>
          <MenuItem>Action #1</MenuItem>
          <MenuItem>Action #2</MenuItem>
          <MenuItem>Action #3</MenuItem>
        </Menu>
      </MenuTrigger>
    </>
  ),
});
