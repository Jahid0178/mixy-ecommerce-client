import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const SectionTitle = ({ title, description }) => {
  return (
    <div className="pos-title">
      <Title level={3} style={{ marginBottom: 0, textTransform: "capitalize" }}>
        {title}
      </Title>
      <Paragraph style={{ marginBottom: 0 }}>{description}</Paragraph>
    </div>
  );
};

export default SectionTitle;
