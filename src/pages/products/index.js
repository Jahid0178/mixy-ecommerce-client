import { Breadcrumb } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Products = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <Head>
        <title>All Product</title>
      </Head>
      <main>
        <section>
          <div className="container">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link href="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{pathname}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </section>
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
