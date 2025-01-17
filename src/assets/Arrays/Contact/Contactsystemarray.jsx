import { MdTableRestaurant } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { HiOutlineSupport } from "react-icons/hi";

export const ContactOptionsArray = [
  {
    title: "Reserve a Table",
    description: "Book your table quickly and easily.",
    icon: MdTableRestaurant,
    hidden: "hidden",
    classname: "items-start w-full text-start px-2 py-2 gap-3 rounded-2xl",
  },
  {
    title: "Having Queries?",
    description: "Reach out with questions or concerns.",
    icon: BiMessageDetail,
    hidden: "hidden",
    classname: "items-start w-full text-start px-2 py-2 gap-3 rounded-2xl",
  },
  {
    title: "Contact Support",
    description: "Get assistance from our friendly team.",
    icon: HiOutlineSupport,
    hidden: "hidden",
    classname: "items-start w-full text-start px-2 py-2 gap-3 rounded-2xl",
  },
];
