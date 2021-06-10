import React from "react";
import { getAnalytics, getCountDayBeforeMoney } from "../../..";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

const ShowAnalytics = (props) => {
  SwiperCore.use([Pagination]);
  return (
    <div className="block-analytics">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        <SwiperSlide>
          <h4>
            на <b>{getCountDayBeforeMoney()}</b> дней
          </h4>
          <h3>{getAnalytics(props.moneyCount)} руб/день</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h4>
            остаток на день
          </h4>
          <h3>{props.balance} руб</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShowAnalytics;
