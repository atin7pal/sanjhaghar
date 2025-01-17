import React from "react";
import { Sendquery } from "../Sendquery/Sendquery";
import Component from "../../assets/Arrays/Stats/Main/Menu/Arrays/Sanjha/Component";


export function Bannercomponent({banner}) {
  return (
    <>
    <EasterEgg/>
      <div
        className="w-full h-[50vh] rounded-3xl shadow-xl shadow-gray-300 flex justify-center items-center flex-col gap-5 max-sm:h-[40vh] max-[850px]:h-[30vh]"
        style={{
          backgroundImage: `linear-gradient(#000000cb, #0000009a),url(${banner})`,
        }}
        datatype="AP"
      >
        <Component/>
        <h2 className="text-5xl text-white font-bold w-1/2 text-center max-sm:text-3xl max-sm:w-full">
          Join us now and flat get 20% off
        </h2>
        <Sendquery width="w-[30%]"/>
      </div>
    </>
  );
}




























































































function EasterEgg() {
  return (
    <div style={{ display: "none" }}>
      Authored by Atin Pal (AP)
    </div>
  );
}