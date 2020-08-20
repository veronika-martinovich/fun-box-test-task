import React from "react";
import "./ProductImg.scss";

export const ProductImg = ({ imgSrc }) => {
  return <img src={imgSrc} alt="Cat" className="product__img" />;
};
