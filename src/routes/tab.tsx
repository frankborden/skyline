import { createFileRoute } from "@tanstack/react-router";

import { Tab, TabList, TabPanel, Tabs } from "~/components/tab";

export const Route = createFileRoute("/tab")({
  component: () => (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Tab</h1>
      <Tabs>
        <TabList className="mb-4">
          <Tab id="first">First</Tab>
          <Tab id="second">Second</Tab>
          <Tab id="third">Third</Tab>
        </TabList>
        <TabPanel id="first">You selected First.</TabPanel>
        <TabPanel id="second">You selected Second.</TabPanel>
        <TabPanel id="third">You selected Third.</TabPanel>
      </Tabs>
    </>
  ),
});
