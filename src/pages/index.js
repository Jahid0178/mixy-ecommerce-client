import Head from "next/head";
import Newsletter from "../components/common/Newsletter/Newsletter";
import HeroSlider from "../components/sliders/HeroSlider/HeroSlider";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <header>
          <HeroSlider />
        </header>
        <div>
          <h1>Home Page</h1>
        </div>
        <Newsletter />
      </main>
    </>
  );
};

export default Home;
