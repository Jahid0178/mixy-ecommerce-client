import Image from "next/image";
import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "/public/assets/slider/sample-1.jpg";
import Image2 from "/public/assets/slider/sample-2.jpg";
import "swiper/css/navigation";

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
        <SwiperSlide>
          <Image src={Image1} style={{ width: "100%" }} alt="Slider One" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image2} style={{ width: "100%" }} alt="Slider Two" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
