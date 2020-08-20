import React, { useState } from "react";
import "./Product.scss";
import Cat from "../../assets/images/Cat.png";

export const Product = ({ product }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleProductClick = () => {
    if (product.isAvailable) {
      setIsSelected(!isSelected);
    }
  };

  return (
    <div className="product">
      {isSelected && (
        <div className="product__mark-container">
          <span className="product__mark">
            <span className="plus"></span>
            <span className="plus"></span>
          </span>
        </div>
      )}
      <div
        className={`product__container-wrapper product__container-wrapper_${product.styles}`}
        onClick={handleProductClick}
      >
        <div className="product__container">
          {!product.isAvailable && <div className="product__overlay"></div>}
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
          <img src={Cat} alt="Cat" className="product__img" />
          <div className={`product__weight product__weight_${product.styles}`}>
            <span>{product.weight}</span>
            <span>кг</span>
          </div>
        </div>
      </div>
      <div className="product__comment-container">
        {product.comments.map((item, index) => (
          <span
            className={`product__comment product__comment_${item.styles}`}
            key={index}
            onClick={item.styles === "link" ? handleProductClick : null}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};
