import Head from "next/head";
import Link from "next/link";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import styles from "./login.module.css";

const Register = () => {
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
            <h1>Register your account</h1>
            <Link href="/login">
              <button className={styles.buttonPrimary}>
                Back To Login Page
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Register;
