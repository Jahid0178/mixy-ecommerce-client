import Head from "next/head";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";

const Products = () => {
  return (
    <>
      <Head>
        <title>All Product</title>
      </Head>
      <main>
        <div>
          <BreadCrumb />
        </div>
        <section>
          <div className="container">
            <h1>Products Page</h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
