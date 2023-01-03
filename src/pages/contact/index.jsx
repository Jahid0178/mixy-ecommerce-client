import Head from "next/head";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main>
        <div>
          <BreadCrumb />
        </div>

        <section>
          <div className="container">
            <h1>Contact Us Page</h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
