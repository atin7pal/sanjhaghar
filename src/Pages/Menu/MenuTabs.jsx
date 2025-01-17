import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const FoodMenuTabs = ({ menu }) => {
  const [activeTab, setActiveTab] = React.useState("html");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMenu = menu.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="w-full">
      <Tabs value={menu[0]?.category}>
        <TabsHeader
          indicatorProps={{
            className:
              "bg-transparent bg-[#009688] text-[#fff] shadow-none rounded-md",
          }}
          className="w-[100%] bg-white my-2 py-2 flex-row max-sm:grid max-sm:grid-cols-3 max-md:grid-cols-2"
        >
          {menu.map(({ category }) => (
            <Tab
              style={{ padding: "10px 0" }}
              key={category}
              value={category}
              className="capitalize"
            >
              {category}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody
          animate={{
            initial: { x: 250 },
            mount: { x: 0 },
            unmount: { x: 250 },
          }}
        >
          {filteredMenu.map(({ category, items }) => (
            <TabPanel key={category} value={category} className="py-4">
              <h2 className="text-xl font-semibold mb-4">{category}</h2>
              <div className="py-2">
                <div className="w-full flex justify-center py-4 bg-gradient-to-r from-white via-teal-400/10 to-white">
                  <input
                    type="text"
                    placeholder="Search for a dish or category..."
                    className="border-none rounded-lg px-4 py-2 w-3/4 sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              {items.length > 0 ? (
                <ul className="space-y-3 grid grid-cols-1 space-x-4 rounded-lg px-2 py-5 max-sm:px-0">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center px-2 pb-5 border p-4 rounded-md"
                    >
                      <div className="flex justify-start items-center gap-4">
                        <img
                          src={item.image}
                          className="h-[120px] w-[120px] object-contain"
                          alt=""
                        />
                        <div className="flex flex-col gap-2">
                          <h3 className="font-medium text-xl">{item.name}</h3>
                          <p className="text-sm pt-2">{item.description}</p>
                          <div className="text-yellow-500">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <span key={index}>
                                {index < (item.id % 2 === 0 ? 4 : 5)
                                  ? "★"
                                  : "☆"}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-gray-600 text-xl px-4">
                        {item.price === "App." ? "Approx." : `₹${item.price}`}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No items match your search.</p>
              )}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default FoodMenuTabs;
