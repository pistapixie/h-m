import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data);
    } catch (error) {
      console.error("Fetching products failed:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid-container">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductAll;
