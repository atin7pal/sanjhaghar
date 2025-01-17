import { Gallery } from "../../../Components/Gallerygrid/Gallery";
import { FoodArray } from "./FoodArray";
import { Yogaarray } from "./Yogaarray";

export const GalleryData = [
  {
    label: "Restaurant",
    value: "restaurant",
    desc: <Gallery items={FoodArray} />,
  },
  {
    label: "Vibes",
    value: "Vibes",
    desc: <Gallery items={Yogaarray} />,
  },
];
