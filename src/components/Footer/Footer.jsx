import React from "react";
import Image from "next/image";
import logo from "/public/logo.jpg";
import AppStore from "/public/assets/store/app_store.png";
import PlayStore from "/public/assets/store/google_play.png";
import Link from "next/link";
import { Col, Row } from "antd";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

const Footer = () => {
  return (
    <div className="container">
      <Row gutter={8}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <div>
            <Image src={logo} alt="Mixy Logo" />
            <Row gutter={12} style={{ marginTop: "1rem" }}>
              <Col lg={4} style={{ textAlign: "center" }}>
                <FaFacebook size={25} fill="#3b5998" />
              </Col>
              <Col lg={4} style={{ textAlign: "center" }}>
                <BsTwitter size={25} fill="#00acee" />
              </Col>
              <Col lg={4} style={{ textAlign: "center" }}>
                <FaYoutube size={25} fill="#FF0000" />
              </Col>
              <Col lg={4} style={{ textAlign: "center" }}>
                <AiFillInstagram size={25} fill="#8a3ab9" />
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Title level={4}>Information</Title>
          <ul>
            <li>
              <Link href="#" className="footer-link">
                Delivery
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Secure Payment
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Sitemap
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Stores
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Title level={4}>Custom Links</Title>
          <ul>
            <li>
              <Link href="#" className="footer-link">
                Legal Notice
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Price Drop
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                New Products
              </Link>
            </li>
            <li>
              <Link href="#" className="footer-link">
                Best Sales
              </Link>
            </li>
            <li>
              <Link href="/login" className="footer-link">
                Login
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <Title level={4}>Download Our App</Title>
          <Paragraph>Fast & Convenient Access</Paragraph>
          <Row gutter={8}>
            <Col>
              <Image src={AppStore} alt="App Store" />
            </Col>
            <Col>
              <Image src={PlayStore} alt="Play Store" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
