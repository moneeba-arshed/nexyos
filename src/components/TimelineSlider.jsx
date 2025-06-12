import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/navigation";
import "swiper/css/pagination";


const sliderData = [
  {
    img: "https://www.milesight.com/static/pc/en/index-new/success-stories/story3-bg.jpg?t=1744161961765",
    title: "Nexyos Surveillance Solution in Thailand",
    desc: "The excellent performance of Nexyos products and the ease of implementation of Nexyos system greatly meet the high standard requirements.",
  },
  {
    img: "https://www.milesight.com/static/pc/en/index-new/success-stories/story1-bg.jpg?t=1744161961765",
    title: "Nexyos Security System in Vietnam",
    desc: "At the luxury Sunwah Pearl Binh Thanh Apartment, Vietnam, Nexyos products are deployed to protect safety of residents and employees.",
  },
  {
    img: "https://www.milesight.com/static/pc/en/index-new/success-stories/story2-bg.jpg?t=1744161961765",
    title: "SCHOOL IAO MONITORING",
    desc: "Nexyos 47,000 IAQ sensors create a healthier learning environment in Canadian schools.",
  },
];

const TimelineSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="bdt-timeline-container">
      <div className="contenttimeline">
        <h2 className="text-center">Success Stories</h2>
        <p className="text-center">
          Mexyos has earned a lot of fame and built a strong reputation with a
          ton of success stories in various industries.
        </p>
      </div>

      <div className="upk-salf-slider-wrapper">
        <Swiper
          modules={[Parallax, Navigation, Pagination, Autoplay]}
          direction="vertical"
          parallax={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          navigation={{
            prevEl: ".upk-button-prev",
            nextEl: ".upk-button-next",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          onInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="swiper-container mySwiper2"
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index} className="upk-salf-item">
              <div className="upk-salf-image-wrap">
                <img
                  className="upk-xanc-img"
                  style={{ height: "100%" }}
                  src={item.img}
                  alt="slide"
                />
              </div>
              <div className="upk-salf-content-wrap">
                <h3
                  className="upk-salf-title"
                  data-swiper-parallax-y="-150"
                  data-swiper-parallax-duration="1200"
                >
                  {item.title}
                </h3>
                <div
                  className="upk-salf-desc"
                  data-swiper-parallax-y="-200"
                  data-swiper-parallax-duration="1400"
                >
                  {item.desc}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev upk-button-prev"></div>
        <div className="swiper-button-next upk-button-next"></div>

        {/* Custom Pagination */}
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default TimelineSlider;
