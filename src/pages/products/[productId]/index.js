import React from "react";
import { useRouter } from "next/router";
import { Col, Image, Rate, Row, Typography } from "antd";
import paymentMethodImage from "/public/assets/payment.png";
import styles from "./productDetail.module.css";

const { Title, Paragraph, Text } = Typography;

const ProductDetails = () => {
  const [product, setProduct] = React.useState({});
  const router = useRouter();
  const { productId } = router.query;
  React.useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const { title, description, price, thumbnail, rating, stock, images } =
    product;
  console.log(product);

  return (
    <div>
      {product ? (
        <div className="container">
          <Row gutter={[20, 20]}>
            <Col sm={24} md={12} lg={12} style={{ textAlign: "center" }}>
              <Image src={thumbnail} alt={title} />
              <div
                style={{
                  display: "flex",
                  height: "80px",
                  gap: "1rem",
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
              >
                {images?.map((image, ind) => {
                  return (
                    <Image style={{ height: "100%" }} key={ind} src={image} />
                  );
                })}
              </div>
            </Col>
            <Col sm={24} md={12} lg={12}>
              <Title level={2} style={{ marginBottom: 0 }}>
                {title}
              </Title>
              <Rate disabled defaultValue={rating} allowHalf />
              <Paragraph className={styles.price}>${price}</Paragraph>
              <Paragraph>{description}</Paragraph>
              <Paragraph>In Stock: {stock}</Paragraph>
              <img src={paymentMethodImage} alt="Payment Image" />
            </Col>
          </Row>
        </div>
      ) : (
        <Title level={1}>No Product Here</Title>
      )}
    </div>
  );
};

export default ProductDetails;
