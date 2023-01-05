import React from "react";
import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const gridStyle = {
  width: "25%",
  textAlign: "center",
  cursor: "pointer",
};

const categories = [
  {
    id: "1",
    name: "Apples & Pears",
    productsCount: 19,
  },
  {
    id: "2",
    name: "Fresh Fruits",
    productsCount: 12,
  },
  {
    id: "3",
    name: "Spreads & Margarine",
    productsCount: 20,
  },
  {
    id: "4",
    name: "Eggs",
    productsCount: 19,
  },
  {
    id: "5",
    name: "Cookies & Biscuits",
    productsCount: 19,
  },
  {
    id: "6",
    name: "Fishes",
    productsCount: 29,
  },
  {
    id: "7",
    name: "Cold Drinks & Beverages",
    productsCount: 29,
  },
  {
    id: "8",
    name: "Baking & Cookies",
    productsCount: 29,
  },
];

const CategoriesCard = () => {
  return (
    <React.Fragment>
      <Card>
        {categories.map((category) => (
          <Card.Grid style={gridStyle} hoverable={false} key={category.id}>
            <Title level={5}>{category.name}</Title>
            <Paragraph>{category.productsCount} Products</Paragraph>
          </Card.Grid>
        ))}
      </Card>
    </React.Fragment>
  );
};

export default CategoriesCard;
