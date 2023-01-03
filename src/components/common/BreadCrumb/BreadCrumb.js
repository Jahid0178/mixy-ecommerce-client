import React from "react";
import Link from "next/link";
import { Breadcrumb } from "antd";
import { useRouter } from "next/router";
import styles from "./BreadCrumb.module.css";
import breadCrumbBg from "/public/assets/bread-crumb/bg_breadcrumb.jpg";

const BreadCrumb = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div
      className={styles.pageTitleWrapper}
      style={
        pathname.includes("products") ? bg : { backgroundColor: "#f5f9ee" }
      }
    >
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{pathname}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BreadCrumb;

const bg = {
  backgroundImage: `url(${breadCrumbBg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};
