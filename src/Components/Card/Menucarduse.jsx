import React from "react";
import { MenuCard } from "./Menucard";
import { Dishesarray } from "../../assets/Arrays/Restaurant/Dishesarray";

export function Menucarduse({ item }) {
  return (<>{
    Dishesarray.map((element, index) => (
    <MenuCard key={element.key} iconbg={element.image} title={element.title} classname={element.classname}/>
    ))
    
    }</>);
}
