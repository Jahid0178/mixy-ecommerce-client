import { Col, Row } from "antd";
import { BsEnvelope, BsWhatsapp, BsGift } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { SlSupport } from "react-icons/sl";
import styles from "./Newsletter.module.css";
import Button from "../Buttons/Button";

const Newsletter = () => {
  return (
    <div>
      <div className={styles.newsletterTop}>
        <div className="container">
          <Row align="middle" gutter={[20, 20]}>
            <Col span={8} xs={24} sm={24} md={12} lg={7}>
              <div className={styles.couponBox}>
                <div>
                  <BsEnvelope size={50} />
                </div>
                <div>
                  <h1>Sign Up To Newsletter</h1>
                  <p>...and receive $20 coupon for first shopping</p>
                </div>
              </div>
            </Col>
            <Col span={8} xs={24} sm={24} md={12} lg={9}>
              <form action="#">
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter you email"
                  />
                  <Button type={"submit"} value={"Subscribe"} />
                </div>
              </form>
            </Col>
            <Col span={8} xs={24} sm={24} md={12} lg={8}>
              <div className={styles.callUs}>
                <div>
                  <BsWhatsapp size={60} />
                </div>
                <div>
                  <p>Call Us 24/7</p>
                  <h3>
                    <a href="+8 88 55 4168">+8 88 55 4168</a>
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="newsletter-bottom">
        <div className="container">
          <Row gutter={20}>
            <Col span={6} xs={24} sm={24} md={12} lg={6}>
              <div className={styles.boxInfo}>
                <div>
                  <MdOutlineLocalShipping size={30} fill="#043c36" />
                </div>
                <div>
                  <h4>Free Shipping</h4>
                  <p>Online Only. Exclusion Apply</p>
                </div>
              </div>
            </Col>
            <Col span={6} xs={24} sm={24} md={12} lg={6}>
              <div className={styles.boxInfo}>
                <div>
                  <BiDollarCircle size={30} fill="#de7e5b" />
                </div>
                <div>
                  <h4>Best Price Guarantee</h4>
                  <p>If You Find a Lower Price</p>
                </div>
              </div>
            </Col>
            <Col span={6} xs={24} sm={24} md={12} lg={6}>
              <div className={styles.boxInfo}>
                <div>
                  <BsGift size={30} fill="#8b2982" />
                </div>
                <div>
                  <h4>Free Curbside Pickup</h4>
                  <p>Grab Your Gear and Go</p>
                </div>
              </div>
            </Col>
            <Col span={6} xs={24} sm={24} md={12} lg={6}>
              <div className={styles.boxInfo}>
                <div>
                  <SlSupport size={30} fill="#976c31" />
                </div>
                <div>
                  <h4>Support 24/7</h4>
                  <p>Contact us 24 hours a day</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
