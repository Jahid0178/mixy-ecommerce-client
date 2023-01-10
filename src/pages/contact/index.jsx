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

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.096785327894!2d90.25701431545323!3d23.85069669085337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebd3a31fc6e1%3A0xe55aca4d05ef4fa2!2sSavar%20New%20Market!5e0!3m2!1sen!2sbd!4v1673381378002!5m2!1sen!2sbd"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

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
