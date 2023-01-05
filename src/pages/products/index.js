import { Col, Row, Typography, Slider, Checkbox, Tag } from "antd";
import Head from "next/head";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";

const { Title } = Typography;

const Products = () => {
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
                  <Slider min={7} max={500} />
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
                Products
              </Col>
            </Row>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
