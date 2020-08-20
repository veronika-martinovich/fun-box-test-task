import React from "react";
import "./ProductComments.scss";

export const ProductComments = ({ comments, handleProductClick }) => {
  return (
    <div className="product__comment-container">
      {comments.map((item, index) => (
        <span
          className={`product__comment product__comment_${item.styles}`}
          key={index}
          onClick={item.styles === "link" ? handleProductClick : null}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
};
