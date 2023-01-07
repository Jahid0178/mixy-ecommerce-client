import React from "react";
import { Typography } from "antd";
import Button from "../../components/common/Buttons/Button";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";

const { Title } = Typography;

const Test = () => {
  return (
    <div className="container">
      <div>
        <Title level={2}>Buttons</Title>
        <Button value={"Save Here"} />
      </div>
      <div>
        <Title level={2}>Section Header</Title>
        <SectionTitle
          title="Popular Categories"
          description="Some of our popular categories include grocery"
        />
      </div>
    </div>
  );
};

export default Test;
