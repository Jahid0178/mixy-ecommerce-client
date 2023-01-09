import React, { useState, useEffect } from "react";
import Head from "next/head";
import ProductCards from "../components/cards/productCard/ProductCards";
import Newsletter from "../components/common/Newsletter/Newsletter";
import HeroSlider from "../components/sliders/HeroSlider/HeroSlider";
import BannerOne from "/public/assets/banners/home_banner1.jpg";
import BannerTwo from "/public/assets/banners/home_banner2.jpg";
import BannerThree from "/public/assets/banners/home_banner3.jpg";
import BannerFour from "/public/assets/banners/home_banner4.jpg";
import { Col, Row, Spin } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SmallBanner from "../components/common/SmallBanner/SmallBanner";
import CategoriesCard from "../components/cards/CategoriesCard/CategoriesCard";
import SectionTitle from "../components/common/SectionTitle/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { loadingStart } from "../redux/actions/productAction";
import { loadProductData } from "../redux/thunk/products/fetchProducts";
import { LoadingOutlined } from "@ant-design/icons";

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

const loadingIcon = (
  <LoadingOutlined style={{ fontSize: 30, color: "#15bd68" }} />
);

const Home = () => {
  const dispatch = useDispatch();
  const [newArrivals, setNewArrivals] = useState([]);

  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(loadingStart());
    dispatch(loadProductData());
  }, [dispatch]);

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
            <SectionTitle
              title="best sellers"
              description="Add bestselling products to weekly line up"
            />

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
                  {loading ? <Spin indicator={loadingIcon} /> : null}
                  {products?.length &&
                    products.map((product) => (
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
            <SectionTitle
              title="deals of the days"
              description="Dont miss this opportunity at a special discount just for this week"
            />
          </div>
        </section>

        <section>
          <div className="container">
            <SectionTitle
              title="new arrivals"
              description="Add new products to weekly line up"
            />
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
            <SectionTitle
              title="popular categories"
              description="Some of our popular categories include grocery"
            />
            <CategoriesCard />
          </div>
        </section>

        <Newsletter />
      </main>
    </>
  );
};

export default Home;
