import React from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import useAuth from "../../../hooks/useAuth";

const ForgetPassword = () => {
  const { passwordReset } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => passwordReset(data);
  return (
    <>
      <Head>
        <title>Forget Password</title>
      </Head>
      <main>
        <section>
          <div className="container">
            <form
              action="#"
              className={styles.formContainer}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Enter your email address"
                  {...register("email", { required: true })}
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className={styles.submitBtn}
              />
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default ForgetPassword;
