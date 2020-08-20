import React from "react";
import "./Product.scss";

export const Product = ({ product }) => {
  return (
    <div className="product">
      <div className={`product__container-wrapper product__container-wrapper_${product.styles}`}>
        <div className="product__container">
          <span className="product__title">{product.title}</span>
          <h3 className="product__name">
            {product.name}
            <span className="product__description">{product.description}</span>
          </h3>
          {product.additionalInfo.map((item, index) => (
            <span className="product__additional-info" key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
      {product.comments.map((item, index) => (
        <span className="product__comment" key={index}>
          {item.text}
        </span>
      ))}
    </div>
  );
};
