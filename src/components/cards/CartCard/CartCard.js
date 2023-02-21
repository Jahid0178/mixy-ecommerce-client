import React from "react";
import { Card, Col, Row, Typography } from "antd";
import Image from "next/image";

const { Title, Paragraph } = Typography;

const CartCard = ({ product }) => {
  const { title, brand, price, thumbnail, category } = product;
  console.log(product);
  return (
    <Card>
      <Row gutter={[8, 8]}>
        <Col xs={8}>
          <Image src={thumbnail} alt={brand} width={80} height={80} />
        </Col>
        <Col xs={16}>
          <Title level={5} style={{ marginBottom: 0 }}>
            {title}
          </Title>
          <Paragraph strong style={{ fontSize: 16, marginBottom: 0 }}>
            {category}
          </Paragraph>
          <Paragraph strong style={{ marginBottom: 0 }}>
            $ {price}
          </Paragraph>
        </Col>
      </Row>
      <button style={removeBtn}>Remove From Cart</button>
    </Card>
  );
};

export default CartCard;

const removeBtn = {
  backgroundColor: "#0aaa5a",
  padding: "0.3rem 1rem",
  border: 0,
  color: "#fff",
  borderRadius: "0.3rem",
  cursor: "pointer",
  marginTop: "1rem",
};
