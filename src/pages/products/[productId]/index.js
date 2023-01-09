import React from "react";
import Head from "next/head";
import styles from "./productDetail.module.css";
import Button from "../../../components/common/Buttons/Button";
import { useRouter } from "next/router";
import { Col, Image, InputNumber, Rate, Row, Spin, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import loadSingleProduct from "../../../redux/thunk/products/fetchSingleProduct";
import { loadingStart } from "../../../redux/actions/productAction";
import { LoadingOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const loadingIcon = (
  <LoadingOutlined
    style={{
      fontSize: 30,
      color: "#15bd68",
    }}
  />
);

const ProductDetails = () => {
  const { product, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const router = useRouter();
  const { productId } = router.query;

  React.useEffect(() => {
    dispatch(loadingStart());
    dispatch(loadSingleProduct(productId));
  }, [dispatch, productId]);

  const onChange = (value) => {
    console.log("Product Quantity", value);
  };

  return (
    <div>
      <Head>
        <title>{product?.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <div className="container">
          <Row gutter={[20, 20]} style={{ padding: "5rem 0" }}>
            {loading && product === undefined ? (
              <Spin indicator={loadingIcon} />
            ) : (
              false
            )}
            <Col sm={24} md={12} lg={12} style={{ textAlign: "center" }}>
              <Image src={product?.thumbnail} alt={product?.title} />
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
                  {product?.images?.map((image, ind) => {
                    return (
                      <Image
                        key={ind}
                        style={{ height: "100%" }}
                        src={image}
                        alt={image}
                      />
                    );
                  })}
                </Image.PreviewGroup>
              </div>
            </Col>
            <Col sm={24} md={12} lg={12}>
              <Title level={2} style={{ marginBottom: 0 }}>
                {product?.title}
              </Title>
              <Rate disabled value={product?.rating} allowHalf />
              <Paragraph className={styles.price}>${product?.price}</Paragraph>
              <Paragraph>{product?.description}</Paragraph>
              <Paragraph>
                {product?.stock > 0
                  ? `In Stock: ${product?.stock}`
                  : "Out of stock"}
              </Paragraph>
              {product?.stock > 0 && (
                <div style={{ margin: "1rem 0", display: "flex", gap: 16 }}>
                  <InputNumber
                    min={1}
                    max={product.stock}
                    onChange={onChange}
                    defaultValue={1}
                  />
                  <Button value="Add To Cart" />
                </div>
              )}
              <img src="/public/assets/payment.png" alt="Payment Image" />
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
