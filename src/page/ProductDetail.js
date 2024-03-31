import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetail = async () => {
      let url = `https://my-json-server.typicode.com/pistapixie/h-m/products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      setProduct(data);
    };

    getProductDetail();
  }, [id]);

  return (
    <div className="product-detail-container">
      <Container>
        <Row>
          <Col className="product-img">
            <img src={product?.img} alt={product?.title} />
          </Col>
          <Col>
            <h2>{product?.title}</h2>
            <p>가격: ₩{product?.price}</p>
            {product?.choice === true && <p>Conscious choice</p>}
            {product?.new === true && <p>신제품</p>}
            <div>
              <label htmlFor="size-select">사이즈:</label>
              <select id="size-select" className="custom-select">
                {product?.size?.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <Button className="add-button" variant="danger">
              추가
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
