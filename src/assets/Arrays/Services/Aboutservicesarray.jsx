import { GiKnifeFork } from "react-icons/gi";
import { FaPrayingHands } from "react-icons/fa";
import { MdHotel } from "react-icons/md";

export const Aboutservicesarray = [
  {
    title: "Restaurant",
    description:
      "Savor delicious, freshly prepared meals crafted by expert chefs, ensuring a delightful dining experience with diverse cuisine options.",
    icon: GiKnifeFork,
    classname: "bg-[#eff8f5] rounded-3xl shadow-lg shadow-gray-200 items-center text-center py-6 px-8 gap-4"
  },
  {
    title: "Meditation",
    description:
      "Experience tranquility in serene spaces designed for mindfulness, enhancing inner peace, relaxation, and spiritual well-being.",
    icon: FaPrayingHands,
    classname : "items-center text-center py-6 px-8 gap-4"
  },
  {
    title: "Stays",
    description:
      "Enjoy luxurious and comfortable accommodations equipped with modern amenities, offering a perfect retreat for relaxation and rejuvenation.",
    icon: MdHotel,
    classname : "items-center text-center py-6 px-8 gap-4"
  },
//   {
//     title: "",
//     description: "... And More",
//     icon: MdHotel,
//     hidden: "hidden"
//   }
];
