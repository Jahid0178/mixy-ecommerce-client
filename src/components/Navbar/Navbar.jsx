import React, { useState } from "react";
import logo from "/public/logo.jpg";
import Image from "next/image";
import { Col, Row, Badge, Dropdown, Drawer } from "antd";
import { RxPerson } from "react-icons/rx";
import { IoRepeat } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import {
  BsTelephone,
  BsHeart,
  BsMinecartLoaded,
  BsSearch,
} from "react-icons/bs";
import Link from "next/link";

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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

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
                  <a href="#" title="Login to customer account">
                    <RxPerson size={20} />
                  </a>
                </li>
                <li className="link-list">
                  <Badge count={1} offset={[-5, 10]}>
                    <a href="#" title="Compare">
                      <IoRepeat size={20} />
                    </a>
                  </Badge>
                </li>
                <li className="link-list">
                  <Badge count={1} offset={[-5, 10]}>
                    <a href="#" title="Wishlist">
                      <BsHeart size={20} />
                    </a>
                  </Badge>
                </li>
                <li className="link-list">
                  <Badge count={1} offset={[-5, 10]}>
                    <a href="#" title="Cart" onClick={showDrawer}>
                      <BsMinecartLoaded size={20} />
                    </a>
                  </Badge>
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className="navbar-container">
          <Row className="container" gutter={[25, 25]} align="middle">
            <Col>
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
            <Col>
              <ul className="link-ul">
                <li>
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="nav-link">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
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
