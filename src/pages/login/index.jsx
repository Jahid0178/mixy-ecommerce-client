import Head from "next/head";
import { Col, Row, Typography } from "antd";
import { useForm } from "react-hook-form";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import styles from "./login.module.css";
import Link from "next/link";

const { Title, Paragraph } = Typography;

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Head>
        <title>Login</title>
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
            <Row gutter={[20, 20]}>
              <Col className="gutter-row" sm={24} md={12} lg={12}>
                <Title level={2}>Registered Customers</Title>
                <Paragraph>
                  If you have an account, sign in with your email address.
                </Paragraph>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input
                      id="email"
                      placeholder="Enter your email address"
                      {...register("email", {
                        required: true,
                        maxLength: 20,
                      })}
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
                  <input className={styles.buttonPrimary} type="submit" />
                </form>
              </Col>
              <Col sm={24} md={12} lg={12}>
                <Title level={2}>New Customers</Title>
                <Paragraph>
                  Creating an account has many benefits: check out faster, keep
                  more than one address, track orders and more.
                </Paragraph>
                <Link href="/login/register">
                  <button className={styles.buttonPrimary}>
                    Create An Account
                  </button>
                </Link>
              </Col>
            </Row>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
