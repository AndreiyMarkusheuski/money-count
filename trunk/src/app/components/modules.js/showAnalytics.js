import React from "react";
import { getAnalytics, getCountDayBeforeMoney } from "../../utils";
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
        {props.balance && <SwiperSlide>
          <h4>остаток на день</h4>
          <h3>{props.balance} руб</h3>
        </SwiperSlide>}
        {props.moneyValue && <SwiperSlide>
          <h4>
            на <b>{getCountDayBeforeMoney()}</b> дней
          </h4>
          <h3>{getAnalytics(props.moneyValue)} руб/день</h3>
        </SwiperSlide>}
      </Swiper>
    </div>
  );
};

export default ShowAnalytics;
