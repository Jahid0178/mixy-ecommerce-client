import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/assets/images/logo.jpg";
import styles from "./style.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

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
  const [active, setActive] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
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
                const { title, to, icons } = navigationLink;
                return (
                  <li key={ind} className={styles.navbarLists}>
                    <Link href={to} onClick={() => setActive(false)}>
                      {icons} {title}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href="/cart">
                  <BsCart4 size={20} style={{ color: "000" }} />
                </Link>
              </li>
              <li className={styles.navbarLists}>
                {currentUser.length ? (
                  <Link href="/user">Profile</Link>
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
    </>
  );
};

export default Navbar;
