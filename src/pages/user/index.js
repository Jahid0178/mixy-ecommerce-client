import React, { useState } from "react";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Head from "next/head";
import Profile from "./profile";
import History from "./history";
import WishList from "./wishlist";
import Invoice from "./invoice";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children,
  };
}

const items = [
  getItem("Profile", "1", <PieChartOutlined />),
  getItem("History", "2", <DesktopOutlined />),
  getItem("Wishlist", "3", <UserOutlined />),
  getItem("Invoice", "4", <TeamOutlined />),
  getItem("Files", "9", <FileOutlined />),
];

const UserProfile = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("Profile");
  return (
    <>
      <Head>
        <title>User Profile</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onClick={(e) => setSelected(e.domEvent.target.innerText)}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {selected === "Profile" && <Profile />}
              {selected === "History" && <History />}
              {selected === "Wishlist" && <WishList />}
              {selected === "Invoice" && <Invoice />}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default UserProfile;
