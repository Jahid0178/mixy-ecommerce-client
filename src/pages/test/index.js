import React from "react";
import { Typography } from "antd";
import Button from "../../components/common/Buttons/Button";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import RoundButton from "../../components/common/Buttons/RoundButton";
import { GoogleOutlined } from "@ant-design/icons";

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
      <div>
        <RoundButton
          value="Google Login"
          icon={<GoogleOutlined style={{ color: "#EA4335" }} />}
        />
      </div>
    </div>
  );
};

export default Test;
