import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Component from "../Avatar/Component";
import { FAQArray } from "../../assets/Arrays/Services/Faqarray";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-6 w-5 transition-transform`}
    >
      <Component/>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export const Expandable = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (id) => {
    setOpen(open === id ? 0 : id);
  };

  const Icon = ({ id, open }) => (
    <span>{open === id ? "-" : "+"}</span> // Example icon logic
  );

  return (
    <div className="w-full">
      {FAQArray.map((item) => (
        <Accordion
          key={item.id}
          open={open === item.id}
          icon={<Icon id={item.id} open={open} />}
        >
          <AccordionHeader
            className="text-xl text-gray-600 font-normal max-sm:text-lg"
            onClick={() => handleOpen(item.id)}
          >
            {item.question}
          </AccordionHeader>
          <AccordionBody>
            <p className="themetext text-[16px]">{item.answer}</p>
          </AccordionBody>
          <Component/>
        </Accordion>
      ))}
    </div>
  );
};
