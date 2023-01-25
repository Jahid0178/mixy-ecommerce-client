import React, { useState } from "react";
import {
  FileOutlined,
  UserOutlined,
  HistoryOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Head from "next/head";
import Profile from "./profile";
import History from "./history";
import WishList from "./wishlist";
import TrackOder from "./trackOrder";
import Invoice from "./invoice";
import useAuth from "../../hooks/useAuth";
import { Layout, Menu } from "antd";
import { FaShuttleVan } from "react-icons/fa";
import { useRouter } from "next/router";
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
  getItem("Profile", "1", <UserOutlined />),
  getItem("History", "2", <HistoryOutlined />),
  getItem("Wishlist", "3", <ShoppingCartOutlined />),
  getItem("Invoice", "4", <FileOutlined />),
  getItem("TrackOrder", "5", <FaShuttleVan />),
  getItem("Logout", "6", <LogoutOutlined />),
];

const UserProfile = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("Profile");
  const { replace } = useRouter();
  const { userInfo, logOut } = useAuth();
  const { displayName, email } = userInfo;

  const handleLogOut = () => {
    logOut();
    replace("/");
  };

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
              color: "#fff",
              fontSize: 16,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {displayName || email}
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onClick={(e) => setSelected(e.domEvent.target.innerText)}
          />
        </Sider>
        <Layout className="site-layout" style={{ padding: 0 }}>
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
              {selected === "TrackOrder" && <TrackOder />}
              {selected === "Logout" && handleLogOut()}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} IconifySoft, All Rights Reserved
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default UserProfile;
