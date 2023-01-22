import React from "react";
import { DeleteFilled } from "@ant-design/icons";
import { InputNumber } from "antd";
import styles from "./styles.module.css";

const ProductTable = () => {
  const productQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
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
                <InputNumber min={1} max={100} defaultValue={1} size="large" />
              </td>
              <td>Product</td>
              <td>
                <DeleteFilled
                  style={{
                    fontSize: "1.3rem",
                    cursor: "pointer",
                    color: "#ff4d4f",
                  }}
                  title="Remove"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
