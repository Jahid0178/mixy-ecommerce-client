import Image from "next/image";
import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image1 from "/public/assets/slider/sample-1.jpg";
import Image2 from "/public/assets/slider/sample-2.jpg";
import styles from "./styles.module.css";
import "swiper/css/navigation";
import Button from "../../common/Buttons/Button";
import Link from "next/link";

const sliderContents = [
  {
    imageSrc: Image1,
    alt: "Slide 1",
    caption: "100% ORGANIC POTATO",
    title: "Potato Chips & Pepper With Onion",
    starting: "Starting At",
    price: "18.36",
    btn: <Button value="Shop Now" icon={<ArrowRightOutlined />} />,
  },
  {
    imageSrc: Image2,
    alt: "Slide 2",
    caption: "ONLINE GROCERY SHOP",
    title: "Nutritious Healthy Nuts & Dried Fruits",
    starting: "Starting At",
    price: "45.32",
    btn: <Button value="Shop Now" icon={<ArrowRightOutlined />} />,
  },
];

const HeroSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Autoplay, Navigation]}
        autoHeight={true}
        navigation={true}
      >
        {sliderContents.map((slide, ind) => {
          const { caption, title, price, imageSrc, alt, starting, btn } = slide;
          return (
            <SwiperSlide key={ind}>
              <Image src={imageSrc} style={{ width: "100%" }} alt={alt} />
              <div className={styles.sliderContent}>
                <p className={styles.caption}>{caption}</p>
                <h1>{title}</h1>
                <p>{starting}</p>
                <p className={styles.price}>${price}</p>
                <Link href="/products">{btn}</Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HeroSlider;
