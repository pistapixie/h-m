import React, { useEffect } from "react";
import ProductCard from "../component/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
// import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/reducers/productSlice";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(fetchProducts(searchQuery));
  };
  useEffect(() => {
    // let url = `https://my-json-server.typicode.com/pistapixie/h-m/products?q=${searchQuery}`;
    // try {
    //   let response = await fetch(url);
    //   let data = await response.json();
    //   setProductList(data);
    // } catch (error) {
    //   console.error("Fetching products failed:", error);
    // }

    getProducts();
  }, [query]);

  return (
    <div className="products-container">
      <Container>
        <Row>
          {productList.map((product) => (
            <Col lg={3} md={4} sm={6} xs={12} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
