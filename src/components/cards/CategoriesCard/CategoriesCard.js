import React from "react";
import { Card, Typography } from "antd";
import thumb1 from "/public/assets/thumb/thumb-1.png";
import thumb2 from "/public/assets/thumb/thumb-2.png";
import thumb3 from "/public/assets/thumb/thumb-3.png";
import thumb4 from "/public/assets/thumb/thumb-4.png";
import thumb5 from "/public/assets/thumb/thumb-5.png";
import thumb6 from "/public/assets/thumb/thumb-6.png";
import thumb7 from "/public/assets/thumb/thumb-7.png";
import thumb8 from "/public/assets/thumb/thumb-8.png";
import Image from "next/image";

const { Title, Paragraph } = Typography;

const gridStyle = {
  width: "25%",
  cursor: "pointer",
};

const categories = [
  {
    id: "1",
    name: "Apples & Pears",
    productsCount: 19,
    image: thumb1,
  },
  {
    id: "2",
    name: "Fresh Fruits",
    productsCount: 12,
    image: thumb2,
  },
  {
    id: "3",
    name: "Spreads & Margarine",
    productsCount: 20,
    image: thumb3,
  },
  {
    id: "4",
    name: "Eggs",
    productsCount: 19,
    image: thumb4,
  },
  {
    id: "5",
    name: "Cookies & Biscuits",
    productsCount: 19,
    image: thumb5,
  },
  {
    id: "6",
    name: "Fishes",
    productsCount: 29,
    image: thumb6,
  },
  {
    id: "7",
    name: "Cold Drinks & Beverages",
    productsCount: 29,
    image: thumb7,
  },
  {
    id: "8",
    name: "Baking & Cookies",
    productsCount: 29,
    image: thumb8,
  },
];

const CategoriesCard = () => {
  return (
    <React.Fragment>
      <Card>
        {categories.map((category) => (
          <Card.Grid style={gridStyle} hoverable={false} key={category.id}>
            <div
              style={{
                display: "flex",
                gap: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "100%" }}>
                <Title level={5}>{category.name}</Title>
                <Paragraph style={{ marginBottom: 0 }}>
                  {category.productsCount} Products
                </Paragraph>
              </div>
              <div>
                <Image src={category.image} alt={category.name} />
              </div>
            </div>
          </Card.Grid>
        ))}
      </Card>
    </React.Fragment>
  );
};

export default CategoriesCard;
