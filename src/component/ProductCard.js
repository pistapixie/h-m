import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${product.id}`);
  };

  const { img, title, price, choice, new: isNew, size } = product;

  return (
    <div>
      <div className="product-img-container" onClick={showDetail}>
        <img className="product-image" width={250} src={img} alt={title} />
      </div>
      <div>{choice === true ? "Conscious choice" : ""}</div>
      <div>{title}</div>
      <div>₩{price}</div>
      <div>{isNew === true ? "신제품" : ""}</div>
      <div>사이즈: {size.join(", ")}</div>{" "}
    </div>
  );
};

export default ProductCard;
