import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "/public/assets/slider/sample-1.jpg";
import Image2 from "/public/assets/slider/sample-2.jpg";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image src={Image1} alt="Slider One" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image2} alt="Slider Two" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
