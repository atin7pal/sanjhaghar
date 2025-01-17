import React, { useState } from "react";
import { FoodMenu } from "../../assets/Arrays/Restaurant/Menuarray";

export function Menu({ menu }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <>
      <div className="w-full h-full px-0">
        <div className="py-2">
          <div className="w-full flex justify-center py-4 bg-gradient-to-r from-white via-teal-400/10 to-white">
            <input
              type="text"
              placeholder="Search for a dish or category..."
              className="border-none rounded-lg px-4 py-2 w-3/4 sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {FoodMenu.map((category, index) => {
          const filteredItems = category.items.filter(
            (item) =>
              item.name.toLowerCase().includes(searchQuery) ||
              item.description.toLowerCase().includes(searchQuery) ||
              category.category.toLowerCase().includes(searchQuery)
          );

          if (filteredItems.length === 0) {
            return null;
          }

          return (
            <div key={index} className="w-full mx-auto bg-transparent">
              <h2 className="category-title text-2xl outlinefont font-bold mt-4 mb-2">
                {category.category}
              </h2>
              <ul className="category-items list-disc pl-4">
                {filteredItems.map((item) => (
                  <li
                    key={item.id}
                    className="menu-item flex justify-between py-5  rounded-lg my-2 px-5 bg-white items-center"
                  >
                    <div className="flex gap-2 justify-center items-center">
                      <div className="flex flex-col gap-2">
                        <span className="item-name font-medium text-xl text-gray-900">
                          {item.name}
                        </span>
                        <span className="themetext text-xs">
                          {item.description}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <img
                        src={item.image}
                        className="h-[120px] w-[120px] object-contain"
                        alt=""
                      />
                      <span className="text-gray-600 font-semibold text-xl">
                        {item.price === "App." ? "Approx." : `₹${item.price}`}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
