import Head from "next/head";
import { Col, Row, Typography } from "antd";
import { useForm } from "react-hook-form";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import styles from "./style/contact.module.css";

const { Title, Text } = Typography;

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main>
        <div>
          <BreadCrumb />
        </div>

        <section>
          <div className="container">
            <h2>Map coming soon</h2>
          </div>
        </section>

        <section>
          <div className="container">
            <Row gutter={[20, 10]}>
              <Col sm={24} md={12} lg={12}>
                <Title level={3}>Store Information</Title>
                <ul className={styles.informationContent}>
                  <li>
                    <span className={styles.iconBox}>
                      <FaMapMarkedAlt size={25} fill="#fff" />
                    </span>
                    <span>
                      <Text strong>IconifySoft Ltd, Dhaka, Bangladesh</Text>
                    </span>
                  </li>
                  <li>
                    <span className={styles.iconBox}>
                      <BsFillTelephoneFill size={25} fill="#fff" />
                    </span>
                    <span>
                      <Text strong>
                        Call Us:{" "}
                        <a href="tel:+8801789293803" className="link">
                          +8801789293803
                        </a>
                      </Text>
                    </span>
                  </li>
                  <li>
                    <span className={styles.iconBox}>
                      <BsFillEnvelopeFill size={25} fill="#fff" />
                    </span>
                    <span>
                      <Text strong>
                        Email Us:{" "}
                        <a href="mailto:demo@hotmail.com" className="link">
                          demo@hotmail.com
                        </a>
                      </Text>
                    </span>
                  </li>
                </ul>
              </Col>
              <Col sm={24} md={12} lg={12}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={styles.contactForm}
                >
                  <Title level={3}>Contact Us</Title>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                  <input
                    type="text"
                    placeholder="Enter you last name"
                    {...register("lastName", { required: true })}
                  />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email", { required: true })}
                  />
                  <textarea
                    placeholder="Enter your message"
                    rows={8}
                    type="text"
                    {...register("message")}
                  />
                  <input type="submit" />
                </form>
              </Col>
            </Row>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
