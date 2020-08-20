import React, { useState } from "react";
import "./Product.scss";
import Cat from "../../assets/images/Cat.png";
import { ProductMark } from "../ProductMark/ProductMark";
import { ProductWeight } from "../ProductWeight/ProductWeight";
import { ProductComments } from "../ProductComments/ProductComments";
import { ProductImg } from "../ProductImg/ProductImg";
import { ProductOverlay } from "../ProductOverlay/ProductOverlay";

export const Product = ({ product }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleProductClick = () => {
    if (product.isAvailable) {
      setIsSelected(!isSelected);
    }
  };

  return (
    <div className="product">
      {isSelected && <ProductMark />}
      <div
        className={`product__container-wrapper product__container-wrapper_${product.styles}`}
        onClick={handleProductClick}
      >
        <div className="product__container">
          {!product.isAvailable && <ProductOverlay />}
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
          <ProductImg imgSrc={Cat} />
          <ProductWeight styles={product.styles} weight={product.weight} />
        </div>
      </div>
      <ProductComments
        comments={product.comments}
        handleProductClick={handleProductClick}
      />
    </div>
  );
};
