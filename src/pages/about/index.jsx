import { Card, Col, Collapse, Row, Typography } from "antd";
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
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const facilitiesContent = [
  {
    image: shipping,
    title: "Free Shipping",
    description: "Free shipping on all Dhaka order or order above $200",
  },
  {
    image: support,
    title: "24X7 Support",
    description:
      "Contact us 24 hours a day, 7 days a week. For any problem or any solution",
  },
  {
    image: inventory,
    title: "30 Days Return",
    description:
      "Simply return it within 30 days for an exchange. You can choose other",
  },
  {
    image: creditCard,
    title: "Payment Secure",
    description: "You can payment us securely. it will be secret from others",
  },
];

const teams = [
  {
    image:
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    name: "Tony Williams",
    role: "Founder / Ceo",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "George S.",
    role: "Founder",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Marjorie Barney",
    role: "Designer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Jack Jelian",
    role: "Sales Manager",
  },
];

const About = () => {
  const onChange = (key) => {
    console.log(key);
  };
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
                  <Image
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                    width="620"
                    height="550"
                    style={{ width: "100%", height: "100%" }}
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
                {facilitiesContent.map((facility, ind) => {
                  const { image, title, description } = facility;
                  return (
                    <Col key={ind} sm={24} md={12} lg={6}>
                      <Card hoverable={true} style={{ textAlign: "center" }}>
                        <Image src={image} alt="" />
                        <Meta title={title} description={description} />
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </section>

            <section>
              <Title level={3}>Our Teams</Title>
              <Row gutter={[20, 20]}>
                {teams.map((team, ind) => {
                  const { image, name, role } = team;
                  return (
                    <Col sm={24} md={12} lg={6} key={ind}>
                      <Card
                        bordered={false}
                        cover={
                          <Image
                            src={image}
                            alt={name}
                            width={1250}
                            height={450}
                            style={{ width: "100%", height: "100%" }}
                          />
                        }
                      >
                        <Meta title={name} description={role.toUpperCase()} />
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </section>
            <section>Testimonials Coming Soon</section>
            <section>
              <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                <Panel header="This is panel header 1" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
