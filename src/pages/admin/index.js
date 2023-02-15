import React, { useState } from "react";
import Head from "next/head";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import {
  LogoutOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("E-Commerce", "sub1", <ShoppingCartOutlined />, [
    getItem("Admin", "3", <UserOutlined />, [
      getItem("Add Product", "10"),
      getItem("Products", "11"),
      getItem("Customers", "12"),
      getItem("Customer Details", "13"),
      getItem("Order", "14"),
      getItem("Order Details", "15"),
    ]),
    getItem("Customer", "4", <UsergroupAddOutlined />, [
      getItem("Home Page", "16"),
      getItem("Product details", "17"),
      getItem("Product filter", "18"),
      getItem("Cart", "19"),
      getItem("Checkout", "20"),
      getItem("Profile", "21"),
    ]),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Roles", "9", <UserAddOutlined />),
  getItem("Admin Log Out", "9", <LogoutOutlined />),
];

const AdminPanel = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admin Panel</title>
      </Head>
      <main>
        <Layout
          style={{
            minHeight: "100vh",
            padding: 0,
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
            />
          </Sider>
          <Layout className="site-layout" style={{ padding: 0 }}>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
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
                  background: colorBgContainer,
                  marginTop: "16px",
                }}
              >
                Bill is a cat.
              </div>
            </Content>
            <Footer
              style={{
                textAlign: "center",
              }}
            >
              {new Date().getFullYear()} IconifySoft, All Rights Reserved
            </Footer>
          </Layout>
        </Layout>
      </main>
    </div>
  );
};

export default AdminPanel;
