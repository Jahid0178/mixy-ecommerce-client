import { Col, InputNumber, Row } from "antd";
import Head from "next/head";
import React from "react";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import styles from "./styles.module.css";
import { DeleteFilled } from "@ant-design/icons";
import Button from "../../components/common/Buttons/Button";

const Cart = () => {
  const productQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
                <table className={styles.productTable}>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total Price</th>
                      <th>Remove Product</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productQuantity.map((_product, ind) => (
                      <tr key={ind}>
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
                        <td>
                          <DeleteFilled
                            style={{ fontSize: "1.3rem", cursor: "pointer" }}
                            title="Remove"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
