import { Col, Row } from "antd";
import Head from "next/head";
import React from "react";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import styles from "./styles.module.css";
import Button from "../../components/common/Buttons/Button";
import ProductTable from "../../components/Table/ProductTable";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <main>
        <BreadCrumb />
        <section className="container">
          <Row gutter={[20, 20]}>
            <Col sm={24} md={12} lg={16}>
              <div style={{ maxHeight: "335px", overflowY: "scroll" }}>
                <ProductTable />
              </div>
              <div style={{ margin: "1rem 0" }}>
                <Button value="Continue Shipping" />
              </div>
            </Col>
            <Col sm={24} md={12} lg={8}>
              <div className={styles.amountContainer}>
                <h2>Total Amount</h2>
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
};

export default Cart;
