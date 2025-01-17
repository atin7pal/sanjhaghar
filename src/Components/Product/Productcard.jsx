import React from "react";

export function Productcard({ name, rating, price, description, star, image }) {
  function showStar(star) {
    const stars = "⭐".repeat(Math.round(star));
    return stars;
  }

  return (
    <>
      <div className="w-full h-full flex gap-4 flex-col border rounded-lg shadow-md shadow-gray-200 relative justify-center items-start px-4 py-4 bg-white min-w-[350px] max-sm:w-full max-md:min-w-full max-sm:min-w-full">
        {star} ⭐
        <h2 className="font-semibold text-xl py-5 max-sm:py-4">{name}</h2>
        {/* <img
          src={image}
          alt=""
          className="h-[170px] w-[170px] absolute -top-[40px] left-[170px] max-sm:h-[140px] max-sm:w-[140px]"
        /> */}
        <p>{description}</p>
        <div className="flex w-full justify-between items-center">
          <p className="text-xs font-semibold text-gray-500">Rs. {price}</p>
          <button className="rounded-full px-4 py-1.5 bg-[#fff] text-[#009688] border-2 border-[#009688] hover:text-[#fff] text-sm hover:bg-[#009688] hover:border-2 hover:border-[#548776] transition-all max-sm:px-3">
            More about me
          </button>
        </div>
      </div>
    </>
  );
}
