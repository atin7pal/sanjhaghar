import React from "react";
import { Productcard } from "./Productcard";

export function Product({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <Productcard key={index} name={item.name} description={item.description} price={item.price} star={item.rating} image={item.image}/>
      ))}
    </>
  );
}
