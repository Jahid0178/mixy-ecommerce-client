import React from "react";
import { useRouter } from "next/router";
import { Col, Image, Rate, Row, Typography } from "antd";
import paymentMethodImage from "/public/assets/payment.png";
import styles from "./productDetail.module.css";
import BreadCrumb from "../../../components/common/BreadCrumb/BreadCrumb";
import Head from "next/head";

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

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <BreadCrumb />
        <div className="container">
          <Row gutter={[20, 20]} style={{ padding: "5rem 0" }}>
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
                <Image.PreviewGroup>
                  {images?.map((image, ind) => {
                    return (
                      <Image key={ind} style={{ height: "100%" }} src={image} />
                    );
                  })}
                </Image.PreviewGroup>
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
      </main>
    </div>
  );
};

export default ProductDetails;
