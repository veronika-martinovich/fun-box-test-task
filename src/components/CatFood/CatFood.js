import React from "react";
import "./CatFood.scss";
import { products } from "./constants";
import { Product } from "../Product/Product";

export const CatFood = () => {
  return (
    <section className="cat-food">
      <h2 className="cat-food__title">Ты сегодня покормил кота?</h2>
      <div className="cat-food__container">
        {products.map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
