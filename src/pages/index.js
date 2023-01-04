import React, { useState, useEffect } from "react";
import Head from "next/head";
import ProductCards from "../components/cards/productCard/ProductCards";
import Newsletter from "../components/common/Newsletter/Newsletter";
import HeroSlider from "../components/sliders/HeroSlider/HeroSlider";
import Image from "next/image";
import BannerOne from "/public/assets/banners/home_banner1.jpg";
import BannerTwo from "/public/assets/banners/home_banner2.jpg";
import BannerThree from "/public/assets/banners/home_banner3.jpg";
import BannerFour from "/public/assets/banners/home_banner4.jpg";
import styles from "../styles/Home.module.css";
import { Col, Row } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));

    fetch("https://dummyjson.com/products/category/groceries")
      .then((res) => res.json())
      .then((data) => setNewArrivals(data.products));
  }, []);

  console.log(products);

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
        <section>
          <div className="container">
            <div className={styles.topBannerContainer}>
              <div className={styles.topBannerContent}>
                <Image src={BannerOne} alt="Banner One" />
                <div className={styles.topBannerText}>
                  <p>Chocolate Cookies</p>
                  <h2>Best Sweets In Town</h2>
                  <h3>From 20% Off</h3>
                </div>
              </div>
              <div className={styles.topBannerContent}>
                <Image src={BannerTwo} alt="Banner Two" />
                <div className={styles.topBannerText}>
                  <p>Capture The</p>
                  <h2>Delicious Moments</h2>
                  <h3>Up To 30% Off</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="pos-title">
              <h2>Best Sellers</h2>
              <p>Add bestselling products to weekly line up</p>
            </div>
            <Row gutter={[15, 15]} justify="center">
              <Col>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={5}
                  navigation={true}
                  modules={[Navigation]}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 5,
                    },
                  }}
                >
                  {products.map((product) => (
                    <SwiperSlide key={product.id}>
                      <ProductCards product={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Col>
            </Row>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="pos-title">
              <h2>Deals Of The Days</h2>
              <p>
                Dont miss this opportunity at a special discount just for this
                week
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="pos-title">
              <h2>New Arrivals</h2>
              <p>Add new products to weekly line up</p>
            </div>
            <Row gutter={[15, 15]} justify="center">
              <Col>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={5}
                  navigation={true}
                  modules={[Navigation]}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 5,
                    },
                  }}
                >
                  {newArrivals.map((product) => (
                    <SwiperSlide key={product.id}>
                      <ProductCards product={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Col>
            </Row>
          </div>
        </section>

        <section>
          <div className="container">
            <Row gutter={[20, 20]}>
              <Col sm={24} md={12} lg={16} className={styles.homeBanner}>
                <Image src={BannerThree} alt="Bottom Banner" />
                <div className={styles.homeBannerContent}>
                  <p>100% Natural Organic</p>
                  <h2>Strawberry Velvet Cake</h2>
                  <h3>$30.66</h3>
                </div>
              </Col>
              <Col sm={24} md={12} lg={8} className={styles.homeBanner}>
                <Image src={BannerFour} alt="Bottom Banner" />
                <div className={styles.homeBannerContent}>
                  <p>Organic</p>
                  <h2>Nuts</h2>
                  <h3>$26.88</h3>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="pos-title">
              <h2>Popular Categories</h2>
              <p>Some of our popular categories include products</p>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
    </>
  );
};

export default Home;
