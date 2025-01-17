import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export function Menutabs({ data, activestate }) {
  const [activeTab, setActiveTab] = useState(`${activestate}`); // State to manage active tab

  return (
    <Tabs
      value={activeTab}
      onChange={(value) => setActiveTab(value)} // Handle active tab change
      className="w-full z-0"
    >
      <TabsHeader
        className="bg-transparent w-1/2 mt-6 z-0"
        indicatorProps={{
          className:
            "bg-[#009688] text-white shadow-none text-white rounded-md font-semibold",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className={
              activeTab === value
                ? "font-normal text-gray-900"
                : "font-normal text-gray-900"
            }
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel
            key={value}
            value={value}
            className="flex justify-center items-center z-0"
          >
            <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-6 gap-8 max-md:grid-cols-2 max-[850px]:grid-col-2 max-[850px]:gap-4">
              {desc}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
