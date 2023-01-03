import Head from "next/head";
import React from "react";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <main>
        <div>
          <BreadCrumb />
        </div>

        <section>
          <div className="container">
            <h1>About Us Page</h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
