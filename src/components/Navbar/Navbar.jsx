import { Col, Row } from "antd";
import { BsTelephone } from "react-icons/bs";
import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <Row>
        <Col span={8}>
          <p>Free shipping on orders over $25. Read more.</p>
        </Col>
        <Col span={8}></Col>
        <Col span={8}>
          <BsTelephone style={{ marginRight: "5px" }} />{" "}
          <span>
            Need help? Call Us:{" "}
            <strong>
              <a href="tel:+88 01789-293803">+88 01789-293803</a>
            </strong>
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
