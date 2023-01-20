import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/assets/images/logo.jpg";
import styles from "./style.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";

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
  {
    title: "",
    to: "/cart",
    icons: <BsCart4 size={20} />,
  },
  {
    title: "Login",
    to: "/login",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <>
      <nav>
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
