import { Card, Col, Row, Typography } from "antd";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";

import shipping from "/public/svg/shipping.svg";
import inventory from "/public/svg/inventory.svg";
import creditCard from "/public/svg/credit_card.svg";
import support from "/public/svg/support.svg";

const { Paragraph, Title } = Typography;
const { Meta } = Card;

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <main>
        <div>
          <BreadCrumb />
        </div>

        <section>
          <div className="container">
            <section>
              <Row gutter={[20, 10]}>
                <Col sm={24} md={12} lg={12}>
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                    style={{ width: "100%", borderRadius: "0.3rem" }}
                  />
                </Col>
                <Col sm={24} md={12} lg={12}>
                  <Title level={3}>What is the Mixy E-commerce</Title>
                  <Paragraph>
                    Mixy, ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore aut adipisci quam cum sapiente reprehenderit optio
                    ratione ipsa nam nostrum.
                  </Paragraph>
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam, quod ut, nesciunt recusandae magni ipsum
                    praesentium saepe fuga soluta voluptatibus ducimus provident
                    nostrum repellendus omnis veritatis quam aspernatur nisi
                    eum.
                  </Paragraph>
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate sed doloremque deserunt accusantium? Asperiores,
                    tenetur?
                  </Paragraph>
                </Col>
              </Row>
            </section>
            <section>
              <Row gutter={[20, 10]}>
                <Col sm={24} md={12} lg={6}>
                  <Card hoverable={true} style={{ textAlign: "center" }}>
                    <Image src={shipping} alt="Shipping" />
                    <Meta
                      title="Free Shipping"
                      description="Free shipping on all Dhaka order or order above $200"
                    />
                  </Card>
                </Col>
                <Col sm={24} md={12} lg={6}>
                  <Card hoverable={true} style={{ textAlign: "center" }}>
                    <Image src={support} alt="Support" />
                    <Meta
                      title="24X7 Support"
                      description="Contact us 24 hours a day, 7 days a week. For any problem or any solution"
                    />
                  </Card>
                </Col>
                <Col sm={24} md={12} lg={6}>
                  <Card hoverable={true} style={{ textAlign: "center" }}>
                    <Image src={inventory} alt="Return" />
                    <Meta
                      title="30 Days Return"
                      description="Simply return it within 30 days for an exchange. You can choose other"
                    />
                  </Card>
                </Col>
                <Col sm={24} md={12} lg={6}>
                  <Card hoverable={true} style={{ textAlign: "center" }}>
                    <Image src={creditCard} alt="Payment" />
                    <Meta
                      title="Payment Secure"
                      description="You can payment us securely. it will be secret from others"
                    />
                  </Card>
                </Col>
              </Row>
            </section>
            <section>Testimonials Coming Soon</section>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
