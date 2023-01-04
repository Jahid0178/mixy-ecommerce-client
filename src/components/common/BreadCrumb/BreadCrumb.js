import React from "react";
import Link from "next/link";
import { Breadcrumb } from "antd";
import { useRouter } from "next/router";
import styles from "./BreadCrumb.module.css";
import breadCrumbBg from "/public/assets/bread-crumb/bg_breadcrumb.jpg";
import letterCapitalized from "../../../libs/latterCapitalize/latterCapitalize";

const BreadCrumb = () => {
  const router = useRouter();
  const { pathname } = router;
  const pathsName = pathname.substring(1).trim().split("/");
  const capitalizedWords = letterCapitalized(pathsName);

  return (
    <div
      className={styles.pageTitleWrapper}
      style={
        pathname.includes("products") ? bgImage : { backgroundColor: "#f5f9ee" }
      }
    >
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          {capitalizedWords.split(" ").map((path, ind) => {
            return <Breadcrumb.Item key={ind}>{path}</Breadcrumb.Item>;
          })}
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BreadCrumb;

const bgImage = {
  backgroundImage: `url(${breadCrumbBg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};
