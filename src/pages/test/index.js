import React from "react";
import { Typography } from "antd";
import Button from "../../components/common/Buttons/Button";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import RoundButton from "../../components/common/Buttons/RoundButton";
import { GoogleOutlined, ArrowRightOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Test = () => {
  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <div className="container">
      <div>
        <Title level={2}>Buttons</Title>
        <Button
          value={"Save Here"}
          icon={<ArrowRightOutlined />}
          onClick={() => clickHandler()}
        />
      </div>
      <div>
        <Title level={2}>Section Header</Title>
        <SectionTitle
          title="Popular Categories"
          description="Some of our popular categories include grocery"
        />
      </div>
      <div>
        <RoundButton
          value="Google Login"
          icon={<GoogleOutlined style={{ color: "#fff" }} />}
          onClick={() => console.log("clicked rounded button")}
        />
      </div>
    </div>
  );
};

export default Test;
