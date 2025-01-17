import React from "react";
import { GalleryComponent } from "./GalleryComponent";

export function Gallery({ items = [] }) {
  return (
    <>
      {items.map((item) => (
        <GalleryComponent url={item.url} alt={item.alt} />
      ))}
    </>
  );
}
