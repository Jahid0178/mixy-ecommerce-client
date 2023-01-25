import React from "react";
import { Typography } from "antd";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsBox, BsHouseDoor, BsHandbag } from "react-icons/bs";
import { FaShuttleVan } from "react-icons/fa";
import styles from "./style.module.css";
import Step from "../../../components/Step/Step";
import Head from "next/head";

const { Title, Paragraph } = Typography;

const steps = [
  {
    title: "Order Processed",
    status: "finish",
    icon: <BsHandbag style={{ color: "#15bd68" }} size={30} />,
  },
  {
    title: "Order Design",
    status: "finish",
    icon: <MdOutlineDesignServices style={{ color: "#15bd68" }} size={30} />,
  },
  {
    title: "Order Shipping",
    status: "finish",
    icon: <BsBox style={{ color: "#15bd68" }} size={30} />,
  },
  {
    title: "Order Enroute",
    status: "process",
    icon: <FaShuttleVan style={{ color: "#15bd68" }} size={30} />,
  },
  {
    title: "Order Arrived",
    status: "wait",
    icon: <BsHouseDoor style={{ color: "#15bd68" }} size={30} />,
  },
];

const TrackOder = () => {
  return (
    <>
      <Head>
        <title>Track Order</title>
      </Head>
      <main>
        <section className={styles.orderTrackContainer}>
          <div className={styles.orderTitle}>
            <Title level={2}>Order #6152</Title>
            <div>
              <Paragraph>Expected arrival 14-02-2023</Paragraph>
              <Paragraph>Grasshopper V534HB</Paragraph>
            </div>
          </div>
          <div style={{ margin: "2rem 0" }}>
            <Step items={steps} />
          </div>
        </section>
      </main>
    </>
  );
};

export default TrackOder;
