import {  useState, forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SuperiorHighlights.css";


const cards = [
  {
    id: 1,
    name: "Flexible LoRaWAN® and PoE Versions",
    description:
      "Alternative LoRaWAN® and Ethernet transmission give easy access to different application requirements.",
    image: "https://www.milesight.com/static/pc/en/solution/smart-space-occupancy/lorawan-and-poe-icon.png?t=1752826692624",
  },
  {
      id: 2,
    name: "Versatile People Counting Technology for Diverse Scenarios",
    description:
      "Applying AI, PIR, and ToF recognition technologies tailored to different application needs",
    image: "https://www.milesight.com/static/pc/en/solution/smart-space-occupancy/ai-tof-and-pir-icon.png?t=1752826692624",
  },
  {
      id: 3,
    name: "Up to 99.8% Ultra-high Accuracy",
    description:
      "Increasing accuracy to 99.8% with AI and ToF technologies.",
    image: "https://www.milesight.com/static/pc/en/solution/smart-space-occupancy/accuracy-icon.png?t=1752826692624",
  },
  {
      id: 4,
    name: "100% Anonymous Detection",
    description:
      "Being GDPR-compliant, no PII is involved with the help of privacy-featured technologies and LoRaWAN® transmission.",
    image: "https://www.milesight.com/static/pc/en/solution/smart-space-occupancy/anonymous-detection-icon.png?t=1752826692624",
  },
  {
      id: 5,
    name: "Staff Detection and Adults/Children Differentiation",
    description:
      "Giving direct access to recognize specific categories of individuals including staff detection and adults/children differentiation.",
    image: "https://www.milesight.com/static/pc/en/solution/smart-space-occupancy/staff-detection-and-adults-and-children-differentiation.png?t=1752826692624",
  },
    {
      id: 6,
    name: "Bi-Directional Smart People Counting",
    description:
      "Bi-Directional people counting with smart U-turn filtering to improve accuracy and performance.",
    image: "https://www.milesight.com/static/pc/en/solution/smart-space-occupancy/bi-directional-people-counting-and-smart-u-turn.png?t=1752826692624",
  },
    {
      id: 7,
    name: "Large Detection Area",
    description:
      "Covering a wide area of 78 square meters.",
    image: "https://www.milesight.com/static/pc/en/solution/smart-space-occupancy/large-detection-area.png?t=1752826692624",
  },
    {
      id: 8,
    name: "Milesight D2D Communication",
    description:
      "Allow for easily communicate between Milesight LoRaWAN® devices within 1 second.",
    image: "https://www.milesight.com/static/pc/en/solution/smart-space-occupancy/milesight-d2d-communication.png?t=1752826692624",
  },
    {
      id: 9,
    name: "Great Compatibility",
    description:
      "The strong scalable capacity unlocks the potential of the premises.",
    image: "https://www.milesight.com/static/pc/en/solution/smart-space-occupancy/compatibility-icon.png?t=1752826692624",
  },
];


const SuperiorHighlights = forwardRef((props, ref) => {

const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
  <div className="slide-container relative" ref={ref}>
    <h3 data-aos="fade-right">Superior Highlights</h3>
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={3}
        spaceBetween={25}
        loop={false}
        grabCursor={true}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        }}
        className="slide-content"
      >
        {cards.map((card, idx) => {
          const visibleSlides = [activeIndex, (activeIndex + 1) % cards.length];
          const isVisible = visibleSlides.includes(idx);

          return (
            <SwiperSlide key={idx}>
              <div className="card">
                <div className="image-content">
                  <div className="card-image">
                    <img src={card.image} alt="img" className="card-img" />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">{card.name}</h2>
                  <AnimatePresence mode="wait">
                    {isVisible ? (
                      <motion.p
                        key={`desc-${idx}-${activeIndex}`}
                        className="description"
                      >
                        {card.description}
                      </motion.p>
                    ) : (
                      <p className="description">{card.description}</p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className={`custom-swiper-button-prev swiper-button-prev ${isBeginning ? "disabled" : ""}`}
        disabled={isBeginning}
      ></button>
      <button
        className={`custom-swiper-button-next swiper-button-next ${isEnd ? "disabled" : ""}`}
        disabled={isEnd}
      ></button>
    </div>
  );
});

export default SuperiorHighlights;
