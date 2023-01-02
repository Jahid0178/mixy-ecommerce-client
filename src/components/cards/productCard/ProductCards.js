import { Card, Rate, Tag } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styles from "./productCard.module.css";

const { Meta } = Card;

const ProductCards = ({ product }) => {
  console.log(product);
  const { title, price, description, thumbnail, category, rating } = product;
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
        <Rate disabled allowHalf value={rating} style={{ fontSize: "16px" }} />
        <Meta title={title} description={description.slice(0, 50) + "..."} />
        <p className={styles.price}>${price}</p>
        <Tag color="#f50">Category: {category ? category : null}</Tag>
      </Card>
    </>
  );
};

export default ProductCards;
