import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/assets/images/logo.jpg";
import styles from "./style.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { Badge, Col, Drawer, Row, Tooltip, Empty } from "antd";
import Button from "../common/Buttons/Button";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import CartCard from "../cards/CartCard/CartCard";

const { Paragraph } = Typography;

const navigationLinks = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Products",
    to: "/products",
  },
  {
    title: "Contact Us",
    to: "/contact",
  },
];

const Navbar = () => {
  const { productCount, cartProducts } = useSelector((state) => state.cart);
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { userInfo } = useAuth();
  const { displayName, email } = userInfo;

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  console.log(cartProducts);

  return (
    <>
      <nav className={styles.mainNav}>
        <div className="container">
          <div className={styles.navbarContainer}>
            <Image
              src={Logo}
              alt="Mixy E-Commerce Logo"
              width="195"
              height="53"
            />
            <ul
              className={`${
                active
                  ? styles.navbarListsMobileContainer
                  : styles.navbarListsContainer
              }`}
            >
              {navigationLinks.map((navigationLink, ind) => {
                const { title, to } = navigationLink;
                return (
                  <li key={ind} className={styles.navbarLists}>
                    <Link href={to} onClick={() => setActive(false)}>
                      {title}
                    </Link>
                  </li>
                );
              })}
              <li className={styles.navbarLists}>
                <Link href="#" onClick={showDrawer}>
                  <Badge count={!productCount ? 0 : productCount} showZero>
                    <BsCart4 size={20} style={{ color: "000" }} />
                  </Badge>
                </Link>
              </li>
              <li className={styles.navbarLists}>
                {displayName || email ? (
                  <Link href="/user">
                    <Tooltip title="Dashboard">
                      <Paragraph
                        style={{ margin: 0, fontSize: 16, fontWeight: 600 }}
                        ellipsis={true}
                      >
                        Welcome To {displayName || email}
                      </Paragraph>
                    </Tooltip>
                  </Link>
                ) : (
                  <Link href="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>

          {/* two button for open and close of menu */}
          <div className="mobile-navbar-btn mobile">
            <AiOutlineMenu size={20} onClick={() => setActive(!active)} />
          </div>
        </div>
      </nav>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              maxHeight: "820px",
              height: "100%",
              overflowX: "hidden",
              overflowY: "scroll",
            }}
          >
            <Row gutter={[8, 8]}>
              {cartProducts?.length ? (
                <>
                  {cartProducts?.map((cartProduct, ind) => (
                    <Col key={ind} span={24}>
                      <CartCard key={ind} product={cartProduct} />
                    </Col>
                  ))}
                </>
              ) : (
                <div style={{ width: "100%" }}>
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </div>
              )}
            </Row>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <Button style={{ width: "100%" }} value="Checkout" />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
