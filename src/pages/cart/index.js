import { Col, InputNumber, Row } from "antd";
import Head from "next/head";
import React from "react";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import styles from "./styles.module.css";

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
              <div>
                <table className={styles.productTable}>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Product</td>
                      <td>$120</td>
                      <td>
                        <InputNumber
                          min={1}
                          max={100}
                          defaultValue={1}
                          size="large"
                        />
                      </td>
                      <td>Product</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
            <Col sm={24} md={12} lg={8}>
              <h2>Total Amount</h2>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
};

export default Cart;
