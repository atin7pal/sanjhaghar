import React from "react";
import { Card } from "./Card";
import Component from "../../assets/menu/Component";

export function Carduse({ items }) {
  return (
    <>
    <Component/>
      {items.map((element, index) => (
        <Card
          key={index}
          title={element.title}
          description={element.description}
          icon={element.icon}
          classname={element.classname}
          hidden={element.hidden}
        />
      ))}
    </>
  );
}
