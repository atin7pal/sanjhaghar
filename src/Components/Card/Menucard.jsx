import React from "react";
import Component from "../Avatar/Component";

export function MenuCard({
  classname,
  title,
  iconbg,
  description,
  subdescription,
}) {
  return (
    <>
      <div
        className={`w-full h-full flex flex-col gap-3 justify-center items-center text-center ${classname}`}
      >
        <Component/>
        <div
          className={`bg-contain w-[150px] h-[150px] flex-col bg-center rounded-full bg-no-repeat flex justify-center items-center text-4xl max-[850px]:w-[150px] max-[850px]:h-[150px]`}
          style={{ backgroundImage: `url(${iconbg})` }}
        ></div>
        <h2 className="text-lg font-semibold themetext">{title}</h2>
      </div>
    </>
  );
}
