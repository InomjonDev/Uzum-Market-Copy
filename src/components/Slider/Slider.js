import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import bg1 from "../../assets/slider/bg1.jpg";
import bg2 from "../../assets/slider/bg2.jpg";
import bg3 from "../../assets/slider/bg3.jpg";
import bg4 from "../../assets/slider/bg4.jpg";
import "./Slider.css";
import "swiper/css";
import "swiper/css/pagination";

function Slider() {
  return (
    <div className="container">
      <div className="slider__container">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img src={bg1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
