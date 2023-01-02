import { Card, Tag } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styles from "./productCard.module.css";

const { Meta } = Card;

const ProductCards = ({ product }) => {
  const { title, price, description, thumbnail, category } = product;
  return (
    <>
      <Card
        style={{ width: "100%" }}
        cover={
          <img
            src={thumbnail}
            alt={title}
            style={{ width: "100%", height: "180px" }}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta title={title} description={description.slice(0, 50) + "..."} />
        <p className={styles.price}>${price}</p>
        <Tag color="#f50">Category: {category}</Tag>
      </Card>
    </>
  );
};

export default ProductCards;
