import Head from "next/head";
import Newsletter from "../components/common/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <div className="container">
          <h1>Home Page</h1>
        </div>
        <Newsletter />
      </main>
    </>
  );
};

export default Home;
