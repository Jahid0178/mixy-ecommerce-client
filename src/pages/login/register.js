import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Col, Row, Typography } from "antd";
import { useForm } from "react-hook-form";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import secureLogin from "/public/svg/secure_login.svg";
import styles from "./login.module.css";

const { Title } = Typography;

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Login" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <div>
          <BreadCrumb />
        </div>
        <section>
          <div className="container">
            <Title level={2}>Register your account</Title>
            <Row gutter={[20, 20]}>
              <Col sm={24} md={12} lg={12} style={{ width: "100%" }}>
                <div>
                  <Image
                    src={secureLogin}
                    alt="login icons"
                    style={{ width: "100%" }}
                  />
                </div>
                <Link href="/login">
                  <button className={styles.buttonPrimary}>
                    Back To Login Page
                  </button>
                </Link>
              </Col>
              <Col sm={24} md={12} lg={12} style={{ width: "100%" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name:</label>
                    <br />
                    <input
                      id="firstName"
                      placeholder="Enter your first name"
                      {...register("firstName", {
                        required: true,
                        maxLength: 20,
                      })}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name:</label>
                    <br />
                    <input
                      id="lastName"
                      placeholder="Enter your last name"
                      {...register("lastName", { required: true })}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input
                      id="email"
                      placeholder="Enter your email address"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input
                      id="password"
                      placeholder="Enter your password"
                      {...register("password", { required: true })}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <br />
                    <input
                      id="confirmPassword"
                      placeholder="Enter your confirm password"
                      {...register("confirmPassword", { required: true })}
                    />
                  </div>
                  <input
                    className={styles.buttonPrimary}
                    type="submit"
                    value="Register"
                  />
                </form>
              </Col>
            </Row>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Register;
