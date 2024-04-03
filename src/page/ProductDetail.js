import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  let { id } = useParams();
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productAction.getProductDetail(id));
  }, [dispatch, id]);

  return (
    <div className="product-detail-container">
      <Container>
        <Row>
          <Col xs={12} md={6} className="product-img">
            <img
              src={product?.img}
              alt={product?.title}
              style={{ width: "100%" }}
            />
          </Col>
          <Col xs={12} md={6}>
            <h2>{product?.title}</h2>
            <p>가격: ₩{product?.price}</p>
            {product?.choice && <p>Conscious choice</p>}
            {product?.new && <p>신제품</p>}
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
            <Button variant="danger" className="mt-3">
              장바구니에 추가
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
