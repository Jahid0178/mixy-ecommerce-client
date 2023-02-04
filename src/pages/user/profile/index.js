import React from "react";
import { Col, Empty, Row, Typography } from "antd";
import styles from "./style.module.css";
import Image from "next/image";
import useAuth from "../../../hooks/useAuth";

const { Title } = Typography;
const { Paragraph } = Typography;

const Profile = () => {
  const { userInfo } = useAuth();
  const { email, photoURL, displayName } = userInfo;
  return (
    <div>
      <Row gutter={20}>
        <Col sm={24} md={12} lg={6}>
          <div className={styles.contentBox}>
            <Title level={4} style={{ marginBottom: 0, textAlign: "center" }}>
              User Profile Display
            </Title>
            <div className={styles.profileDisplayContent}>
              {email && photoURL && displayName !== undefined ? (
                <>
                  <Image
                    src={photoURL}
                    width={100}
                    height={100}
                    alt={displayName + " " + "Profile Image"}
                  />
                  <Paragraph
                    strong={true}
                    style={{ fontSize: 20, marginBottom: 0 }}
                  >
                    {displayName}
                  </Paragraph>
                  <Paragraph strong={true}>{email}</Paragraph>
                </>
              ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              )}
            </div>
          </div>
        </Col>
        <Col sm={24} md={12} lg={18}>
          <div className={styles.contentBox}>
            <Title level={4} style={{ marginBottom: 0 }}>
              Profile Information
            </Title>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
