import React from "react";
import { trendingRecipes } from "../../../assets/Arrays/Restaurant/Trendingreceipearray";
import { MenuCard } from "../Menucard";
import { Trendingmenu } from "./Trendingcardmain";
import Component from "../../../assets/menu/Component";

export function Trendingcard(props) {
  return (
    <>
    <Component/>
      {trendingRecipes.map((element) => (
        <Trendingmenu
          key={element.id}
          iconbg={element.image}
          title={element.title}
          description={element.description}
          subdescription={element.ingredients.join(", ")}
          classname={element.classname}
        />
      ))}
    </>
  );
}
