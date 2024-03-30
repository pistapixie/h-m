import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();

  useEffect(() => {
    const getProducts = async () => {
      let searchQuery = query.get("q") || "";
      let url = `https://my-json-server.typicode.com/pistapixie/h-m/products?q=${searchQuery}`;
      try {
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
      } catch (error) {
        console.error("Fetching products failed:", error);
      }
    };

    getProducts();
  }, [query]);

  return (
    <div className="products-container">
      <Container>
        <Row>
          {productList.map((product) => (
            <Col lg={3} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
