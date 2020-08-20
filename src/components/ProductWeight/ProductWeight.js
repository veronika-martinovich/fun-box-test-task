import React from "react";
import "./ProductWeight.scss";

export const ProductWeight = ({ styles, weight }) => {
  return (
    <div className={`product__weight product__weight_${styles}`}>
      <span>{weight}</span>
      <span>кг</span>
    </div>
  );
};
