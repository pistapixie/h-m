import React from "react";

const ProductCard = ({ product }) => {
  const { img, title, price, choice, new: isNew, size } = product;

  return (
    <div>
      <img width={250} src={img} alt={title} />
      <div>{title}</div>
      <div>₩{price}</div>
      {choice && <div>Conscious choice</div>}
      {isNew && <div>신제품</div>}
      <div>사이즈: {size.join(", ")}</div>
    </div>
  );
};

export default ProductCard;
