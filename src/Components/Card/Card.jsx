import React from "react";
import iconbg from "../../assets/Images/About/iconbg.png";

export function Card({ hidden, classname, title, description, icon: Icon }) {
  return (
    <>
      <div
        className={`w-full h-full flex flex-col justify-center ${classname}`}
      >
        <div
          className={`bg-contain w-[100px] h-[100px] bg-center bg-no-repeat ${hidden} flex justify-center items-center text-4xl max-[850px]:w-full max-[850px]:h-full`}
          style={{ backgroundImage: `url(${iconbg})` }}
        >
          <Icon />
        </div>
        <h2 className="text-2xl font-semibold themetext">{title}</h2>
        <p className="text-gray-800">{description}</p>
      </div>
    </>
  );
}
