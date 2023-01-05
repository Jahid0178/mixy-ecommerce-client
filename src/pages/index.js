import React, { useState, useEffect } from "react";
import Head from "next/head";
import ProductCards from "../components/cards/productCard/ProductCards";
import Newsletter from "../components/common/Newsletter/Newsletter";
import HeroSlider from "../components/sliders/HeroSlider/HeroSlider";
import BannerOne from "/public/assets/banners/home_banner1.jpg";
import BannerTwo from "/public/assets/banners/home_banner2.jpg";
import BannerThree from "/public/assets/banners/home_banner3.jpg";
import BannerFour from "/public/assets/banners/home_banner4.jpg";
import { Col, Row } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SmallBanner from "../components/common/SmallBanner/SmallBanner";
import CategoriesCard from "../components/cards/CategoriesCard/CategoriesCard";

const bannerContentOne = [
  {
    name: "Chocolate Cookies",
    title: "Best sweet in town",
    discount: "From 20% Off",
    image: BannerOne,
  },
  {
    name: "Capture the",
    title: "Delicious Moments",
    discount: "Up To 30% Off",
    image: BannerTwo,
  },
];

const bannerContentTwo = [
  {
    name: "100% Natural Organic",
    title: "Strawberry Velvet Cake",
    image: BannerThree,
    price: "30.66",
  },
  {
    name: "Organic",
    title: "Nuts",
    image: BannerFour,
    price: "26.88",
  },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  useEffect(() => {
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
            <SmallBanner contents={bannerContentOne} />
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
            <SmallBanner contents={bannerContentTwo} />
          </div>
        </section>

        <section>
          <div className="container">
            <div className="pos-title">
              <h2>Popular Categories</h2>
              <p>Some of our popular categories include products</p>
            </div>
            <CategoriesCard />
          </div>
        </section>

        <Newsletter />
      </main>
    </>
  );
};

export default Home;
