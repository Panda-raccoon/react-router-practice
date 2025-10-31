import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Panda-raccoon/react-router-practice/products/${id}`;
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
        <Col className="product-detail-image" md={6}>
          <img src={product?.img} alt="Product" />
        </Col>
        <Col md={6} className="product-detail-info">
          <h2>{product?.title}</h2>
          <h3>₩{product?.price}</h3>
          <h5>{product?.choice === true ? "Conscious choice" : ""}</h5>
          <h5>{product?.new === true ? "신제품" : ""}</h5>
          <select className="size-dropdown">
            {product?.size.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          <Button className="buy-button" variant="dark">
            구매하기
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
