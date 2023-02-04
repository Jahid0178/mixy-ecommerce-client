import React from "react";
import { useForm } from "react-hook-form";
import { Col, Empty, Row, Typography } from "antd";
import styles from "./style.module.css";
import Image from "next/image";
import useAuth from "../../../hooks/useAuth";

const { Title } = Typography;
const { Paragraph } = Typography;

const Profile = () => {
  const { userInfo } = useAuth();
  const { email, photoURL, displayName } = userInfo;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(userInfo);
  return (
    <div>
      <Row gutter={[20, 20]}>
        <Col sm={24} md={12} lg={6} style={{ width: "100%" }}>
          <div className={styles.contentBox}>
            <Title level={4} style={{ marginBottom: 0, textAlign: "center" }}>
              User Profile Display
            </Title>
            <div className={styles.profileDisplayContent}>
              {email && photoURL && displayName !== undefined ? (
                <>
                  <Image
                    src={photoURL}
                    width={150}
                    height={150}
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
        <Col sm={24} md={12} lg={18} style={{ width: "100%" }}>
          <div className={styles.contentBox}>
            <Title level={4} style={{ marginBottom: 0 }}>
              Profile Information
            </Title>
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName">Full Name</label>
                  <br />
                  <input
                    {...register("fullName", {
                      required: true,
                    })}
                    placeholder="Full Name"
                    id="fullName"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <br />
                  <input
                    {...register("phoneNumber", { required: true })}
                    placeholder="Phone Number"
                    id="phone"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="address">Address</label>
                  <br />
                  <input
                    {...register("address", { required: true })}
                    placeholder="Address"
                    id="address"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="post">Post Code</label>
                  <br />
                  <input
                    {...register("postCode", { required: true })}
                    placeholder="Post Code"
                    id="post"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="state">State</label>
                  <br />
                  <input
                    {...register("state", { required: true })}
                    placeholder="State"
                    id="state"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    {...register("email", { required: true })}
                    placeholder="Email"
                    id="email"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="country">Country</label>
                  <br />
                  <input
                    {...register("country", { required: true })}
                    placeholder="Country"
                    id="country"
                  />
                </div>
                <input
                  className={styles.formSubmitBtn}
                  type="submit"
                  value="Update"
                />
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
