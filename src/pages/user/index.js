import React from "react";
import { Col, Menu, Row } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("UserProfile", "profile", <MailOutlined />),
  getItem("History", "history", <AppstoreOutlined />),
  getItem("Wishlist", "wishlist", <SettingOutlined />),
];

const UserProfile = () => {
  return (
    <>
      <section>
        <Row gutter={[20, 20]} style={{ width: "100%", height: "100vh" }}>
          <Col sm={24} md={12} lg={4} style={{ width: "100%" }}>
            <Menu style={{ width: "100%" }} items={items} />
          </Col>
          <Col sm={24} md={12} lg={20} style={{ width: "100%" }}>
            Display
          </Col>
        </Row>
      </section>
    </>
  );
};

export default UserProfile;
