import React, { useEffect } from "react";
import {
  Col,
  Row,
  Typography,
  Slider,
  Checkbox,
  Tag,
  Pagination,
  Dropdown,
  Space,
} from "antd";
import Head from "next/head";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import ProductCards from "../../components/cards/ProductCard/ProductCards";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { priceFilter } from "../../redux/actions/filterAction";
import loadProductData from "../../redux/thunk/products/fetchProducts";

const { Title, Paragraph } = Typography;

const items = [
  {
    key: "1",
    label: <a href="#">Best Seller</a>,
  },
  {
    key: "2",
    label: <a href="#">Relevance</a>,
  },
  {
    key: "3",
    label: <a href="#">Name, A to Z</a>,
  },
  {
    key: "4",
    label: <a href="#">Name, Z to A</a>,
  },
  {
    key: "5",
    label: <a href="#">Price, low to high</a>,
  },
  {
    key: "6",
    label: <a href="#">Price, high to low</a>,
  },
];

const Products = () => {
  const dispatch = useDispatch();
  const { price } = useSelector((state) => state.filter);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(loadProductData());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>All Product</title>
      </Head>
      <main>
        <div>
          <BreadCrumb />
        </div>
        <section>
          <div className="container">
            <Row gutter={[20, 20]}>
              <Col sm={24} md={12} lg={6}>
                <Title level={3}>Filter By</Title>
                <div>
                  <Title level={3}>Categories</Title>
                  <ul>
                    <li>
                      <Checkbox>Fresh Fruit</Checkbox>
                    </li>
                    <li>
                      <Checkbox>Fresh Salad & Dips</Checkbox>
                    </li>
                    <li>
                      <Checkbox>Fresh Vegetables</Checkbox>
                    </li>
                    <li>
                      <Checkbox>Fresh Fruit</Checkbox>
                    </li>
                    <li>
                      <Checkbox>Milk, Butter & Eggs</Checkbox>
                    </li>
                  </ul>
                </div>
                <div>
                  <Title level={3}>Price</Title>
                  <Slider
                    min={7}
                    max={500}
                    defaultValue={price}
                    onChange={(e) => dispatch(priceFilter(e))}
                  />
                </div>
                <div>
                  <Title level={3}>Tags</Title>
                  <Tag style={{ padding: "0.3rem", marginBottom: "0.3rem" }}>
                    Fresh Fruit
                  </Tag>
                  <Tag style={{ padding: "0.3rem", marginBottom: "0.3rem" }}>
                    Fresh Vegetables
                  </Tag>
                  <Tag style={{ padding: "0.3rem", marginBottom: "0.3rem" }}>
                    Backing & Cooking
                  </Tag>
                  <Tag style={{ padding: "0.3rem", marginBottom: "0.3rem" }}>
                    Bananas
                  </Tag>
                </div>
              </Col>
              <Col sm={24} md={12} lg={18}>
                <div className={styles.sortContainer}>
                  <div>
                    <Paragraph>There is {products?.length} products.</Paragraph>
                  </div>
                  <div>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      trigger={["click"]}
                    >
                      <a className="link" onClick={(e) => e.preventDefault()}>
                        Sort By
                      </a>
                    </Dropdown>
                  </div>
                </div>
                <div className={styles.productContainer}>
                  {products?.map((product) => (
                    <ProductCards key={product.id} product={product} />
                  ))}
                </div>
                <div style={{ textAlign: "center" }}>
                  <Pagination defaultCurrent={1} total={50} />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
