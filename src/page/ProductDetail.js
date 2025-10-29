import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="product-detail-container">
      <Row>
        <Col md={6}>
          <img
            src={product?.img}
            alt="Product"
            className="product-detail-image"
          />
        </Col>
        <Col md={6} className="product-detail-info">
          <h2>{product?.title}</h2>
          <h3>₩{product?.price}</h3>
          <select className="size-dropdown">
            {product?.size.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          <Button variant="dark">구매하기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
