import React from "react";
import Head from "next/head";
import styles from "./productDetail.module.css";
import Button from "../../../components/common/Buttons/Button";
import { useRouter } from "next/router";
import { Col, Image, InputNumber, Rate, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

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

  const onChange = (value) => {
    console.log("Product Quantity", value);
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
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
              <Rate disabled value={rating} allowHalf />
              <Paragraph className={styles.price}>${price}</Paragraph>
              <Paragraph>{description}</Paragraph>
              <Paragraph>In Stock: {stock}</Paragraph>
              <div style={{ margin: "1rem 0", display: "flex", gap: 16 }}>
                <InputNumber
                  min={1}
                  max={10}
                  onChange={onChange}
                  defaultValue={1}
                />
                <Button value="Add To Cart" />
              </div>
              <img src="/public/assets/payment.png" alt="Payment Image" />
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
