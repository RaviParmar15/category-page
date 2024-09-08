import React, { useState } from "react";
import "./css/slide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Slide = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  let appendNumber = 6;
  let prependNumber = 3;

  return (
    <div className="card-div">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={9}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <button>Coctail Invitation</button>
        </SwiperSlide>
        <SwiperSlide>
          <button>Wedding invites</button>
        </SwiperSlide>
        <SwiperSlide>
          <button>Party Invitation</button>
        </SwiperSlide>
        <SwiperSlide>
          <button>Engag Invitation</button>
        </SwiperSlide>
        <SwiperSlide>
          <button>Marathi Invitation</button>
        </SwiperSlide>
        <SwiperSlide>
          <button>Bangali Invitation</button>
        </SwiperSlide>
        <SwiperSlide>
          <button>Birthday Invitation</button>
        </SwiperSlide>
        <SwiperSlide>
          <button>Baby Shower </button>
        </SwiperSlide>
        <SwiperSlide>
          <button>Tamil Invitation </button>
        </SwiperSlide>
        <SwiperSlide>
          <button>Coctail Invitation</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
