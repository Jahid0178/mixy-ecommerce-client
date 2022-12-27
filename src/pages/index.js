import { useState } from "react";
import Head from "next/head";

const Home = () => {
  const [status, setStatus] = useState("Online");
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <div className="container">
          <h1>{status}</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
