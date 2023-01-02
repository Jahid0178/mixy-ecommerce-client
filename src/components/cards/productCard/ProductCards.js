import { Card, Rate, Tag } from "antd";
import {
  EyeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import styles from "./productCard.module.css";

const { Meta } = Card;

const ProductCards = ({ product }) => {
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
          <ShoppingCartOutlined
            key="Cart"
            title="Cart"
            onClick={() => console.log("You clicked cart")}
          />,
          <EyeOutlined
            key="Quick View"
            title="Quick View"
            onClick={() => console.log("You clicked quick view")}
          />,
          <HeartOutlined
            key="Wishlist"
            title="Wishlist"
            onClick={() => console.log("You clicked wishlist")}
          />,
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
