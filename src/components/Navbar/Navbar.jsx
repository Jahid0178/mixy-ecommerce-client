import React, { useEffect, useRef, useState } from "react";
import logo from "/public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { Col, Row, Badge, Dropdown, Drawer, Avatar } from "antd";
import { RxPerson } from "react-icons/rx";
import { IoRepeat } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import {
  BsTelephone,
  BsHeart,
  BsMinecartLoaded,
  BsSearch,
} from "react-icons/bs";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const items = [
  {
    label: <a href="https://www.antgroup.com">Our special products</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">Our best sales</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "New Arrivals",
    key: "3",
  },
];

const routes = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About Us",
  },
  {
    path: "/products",
    title: "Products",
  },
  {
    path: "/contact",
    title: "Contact Us",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  // const [user, setUser] = useState(false);
  const navRef = useRef(null);
  const { push } = useRouter();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = navRef.current.offsetHeight;
      setIsSticky(window.scrollY > navHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="container">
          <Row gutter={[20, 20]} align="middle">
            <Col span={8}>
              <p style={{ marginBottom: 0 }}>
                Free shipping on orders over $25.{" "}
                <a href="#" className="link">
                  Read more.
                </a>
              </p>
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

        <div className="container">
          <Row gutter={[15, 15]} align="middle">
            <Col span={6} xs={24} sm={24} md={8}>
              <Image src={logo} alt="Mixy Logo" />
            </Col>
            <Col span={9} xs={24} sm={24} md={8}>
              <div className="input-wrapper">
                <input
                  type="search"
                  name="searchBox"
                  id=""
                  placeholder="Enter your search key..."
                />
                <button>
                  <BsSearch size={20} />
                </button>
              </div>
            </Col>
            <Col span={9} xs={24} sm={24} md={8}>
              <ul className="link-ul">
                <li className="link-list">
                  <Link href="/login" title="Login to customer account">
                    <RxPerson size={20} />
                  </Link>
                </li>
                <li className="link-list">
                  <Badge count={1} offset={[-5, 10]}>
                    <Link href="#" title="Compare">
                      <IoRepeat size={20} />
                    </Link>
                  </Badge>
                </li>
                <li className="link-list">
                  <Badge count={1} offset={[-5, 10]}>
                    <Link href="#" title="Wishlist">
                      <BsHeart size={20} />
                    </Link>
                  </Badge>
                </li>
                <li className="link-list">
                  <Badge count={1} offset={[-5, 10]}>
                    <Link href="#" title="Cart" onClick={showDrawer}>
                      <BsMinecartLoaded size={20} />
                    </Link>
                  </Badge>
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        <div
          className={`${styles.navbarContainer} ${
            isSticky ? styles.stickyNav : ""
          }`}
          ref={navRef}
        >
          <Row className="container" gutter={[25, 25]} align="middle">
            <Col sm={24} md={8} lg={6}>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                arrow
              >
                <a
                  onClick={(e) => e.preventDefault()}
                  className="dropdown-menu"
                >
                  <HiMenu size="1.3rem" /> All Categories
                </a>
              </Dropdown>
            </Col>
            <Col sm={24} md={8} lg={9}>
              <ul className="link-ul">
                {routes.map((route, ind) => (
                  <li key={ind}>
                    <Link href={route.path} className="nav-link">
                      {route.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col sm={24} md={8} lg={9} style={{ textAlign: "right" }}>
              {!currentUser ? (
                <LoginOutlined
                  title="Login Your Profile"
                  style={{ fontSize: 30, color: "#fff", cursor: "pointer" }}
                  onClick={() => push("/login")}
                />
              ) : (
                <Avatar
                  size={40}
                  icon={
                    currentUser ? (
                      `${currentUser.slice(0, 1).trim().toUpperCase()}`
                    ) : (
                      <UserOutlined />
                    )
                  }
                  title="User Profile"
                  style={{ cursor: "pointer" }}
                />
              )}
            </Col>
          </Row>
        </div>
        <Drawer
          title="Cart"
          placement="right"
          onClose={closeDrawer}
          open={open}
        >
          <p>Product One</p>
          <p>Product Two</p>
          <p>Product Three</p>
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;
