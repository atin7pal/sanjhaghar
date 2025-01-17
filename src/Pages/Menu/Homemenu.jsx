import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
const Homemenu = ({ menu }) => {
  const [activeTab, setActiveTab] = useState(menu[0]?.category || "html");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMenu = menu.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="w-full">
      <Tabs value={activeTab} onChange={setActiveTab}>
        <TabsHeader
          indicatorProps={{
            className:
              "bg-transparent bg-[#009688] text-[#fff] shadow-none rounded-md",
          }}
          className="w-[100%] my-4 py-2 flex-row max-sm:grid max-sm:grid-cols-3 max-[800px]:grid max-[800px]:grid-col-2"
        >
          {menu.map(({ category }) => (
            <Tab
              style={{ padding: "10px 0" }}
              key={category}
              value={category}
              className="capitalize grid grid-cols-1 max-sm:grid-cols-3 max-[800px]:grid-col-2"
            >
              {category}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody
          animate={{
            initial: { x: 550 },
            mount: { x: 0 },
            unmount: { x: 1000 },
          }}
        >
          {filteredMenu.map(({ category, items }) => (
            <TabPanel key={category} value={category} className="py-4">
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <div className="mb-4 flex justify-start items-center">
                <input
                  type="text"
                  placeholder="Search for a dish..."
                  className="w-[300px] p-2 rounded-md focus:outline-none border-none shadow-md shadow-gray-200 max-sm:w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              {items.length > 0 ? (
                <motion.ul
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-3 gap-6 rounded-lg px-0 py-5 max-sm:px-0 max-sm:grid-cols-1 max-[800px]:grid-cols-2"
                >
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-center items-start rounded-lg shadow-md shadow-gray-200 px-4 py-3 bg-white flex-col"
                    >
                      <div className="text-yellow-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span key={index}>
                            {index < (item.id % 2 === 0 ? 4 : 5) ? "★" : "☆"}
                          </span>
                        ))}
                      </div>
                      <div className="py-6 gap-3 flex justify-start relative w-full">
                        <div className="flex flex-col">
                          <h3 className="font-medium text-2xl w-[90%]">
                            {item.name}
                          </h3>
                          <h2 className="w-[70%]">{item.description}</h2>
                        </div>
                        <img
                          src={item.image}
                          className="h-[120px] w-[120px] absolute -top-5 -right-2 object-contain"
                          alt=""
                        />
                      </div>
                      <div className="w-full h-full flex justify-between items-center">
                        <span className="text-gray-600">
                          {item.price === "App." ? "Approx." : `₹${item.price}`}
                        </span>
                        <button className="text-xs font-semibold py-2 px-6 bg-[#009688] text-white rounded-full">
                          More about me
                        </button>
                      </div>
                    </li>
                  ))}
                </motion.ul>
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

export default Homemenu;
