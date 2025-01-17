import React from "react";
import { Counter } from "../../../Modules/Counter/Counter";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiBowlFoodLight } from "react-icons/pi";
import { TiTicket } from "react-icons/ti";
import { MdOutlineAccessTime } from "react-icons/md";

export const StatsData = () => {
  const data = [
    {
      title: "Years in Service",
      description: "Serving you since decades",
      icon: MdOutlineAccessTime,
      number: 3,
      classname: "",
    },
    {
      title: "Visitors Daily",
      description: "People visit us and stay happy",
      icon: TiTicket,
      number: 125,
      classname: "",
    },
    {
      title: "Team Members",
      description: "Dedicated and passionate members",
      icon: FaPeopleGroup,
      number: 35,
      classname: "",
    },
    {
      title: "Fresh & Healthy",
      description: "Quality food assured",
      icon: PiBowlFoodLight,
      number: 100,
      classname: "bg-teal-100",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 max-[850px]:gap-3">
      {data.map((item, index) => (
        <Counter
          className={item.classname}
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          number={item.number}
        />
      ))}
    </div>
  );
};
