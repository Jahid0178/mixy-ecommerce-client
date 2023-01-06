import { Card, Rate, Tag, Typography } from "antd";
import {
  EyeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import styles from "./productCard.module.css";
import { useRouter } from "next/router";

const { Meta } = Card;
const { Text } = Typography;

const ProductCards = ({ product }) => {
  const router = useRouter();
  const { push } = router;
  const {
    id,
    title,
    price,
    description,
    thumbnail,
    category,
    rating,
    discountPercentage,
  } = product;
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
            onClick={() => push(`/products/${id}`)}
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
        <div>
          <span className={styles.price}>${price}</span>
          <Text delete className={styles.discountPrice}>
            {discountPercentage}
          </Text>
        </div>
        <Tag color="#f50">Category: {category ? category : null}</Tag>
      </Card>
    </>
  );
};

export default ProductCards;
