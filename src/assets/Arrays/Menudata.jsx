import { Product } from "../../Components/Product/Product";
import { breakfastItems } from "./Breakfastarray";
import { DessertItems } from "./Desertsarray";
import { LunchItems } from "./LunchItems";


export const MenuData = [
    {
      label: "Breakfast",
      value: "breakfast",
      desc: <Product items={breakfastItems} />,
    },
    {
      label: "Lunch",
      value: "lunch",
      desc: <Product items={LunchItems} />,
    },
    {
      label: "Desserts",
      value: "desserts",
      desc: <Product items={DessertItems} />,
    },
    {
      label: "Beverage",
      value: "beverage",
      desc: <Product items={DessertItems} />
    },
  ];