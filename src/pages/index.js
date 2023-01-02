import React, { useState, useEffect } from "react";
import Head from "next/head";
import ProductCards from "../components/cards/productCard/ProductCards";
import Newsletter from "../components/common/Newsletter/Newsletter";
import HeroSlider from "../components/sliders/HeroSlider/HeroSlider";
import Image from "next/image";
import BannerOne from "/public/assets/banners/top_banner_1.jpg";
import BannerTwo from "/public/assets/banners/top_banner_2.jpg";
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

        <Newsletter />
      </main>
    </>
  );
};

export default Home;
