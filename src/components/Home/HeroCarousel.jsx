import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";

const slides = [
  {
    id: 0,
    button: " Download The Report ",
    position: "left",
    ButtonImage: "https://example.com/icon.png",
    titlePosition: "top-48 left-36",
    ContentPosition: " md:left-36 left-12 ",
    miniTitleFont: "text-xl",
    ButtonMargin: " mt-16",
    image:
      "https://www.milesight.com/static/pc/en/solution/people-counting/occupancy-and-people-counting-solution.jpg?t=1752224588134",
    contentImage:
      "https://www.milesight.com/static/pc/en/iot/smart-building-iot-innovators-report/frost-radar-report-download-page-banner-title.png?t=1752224475592",
  },
  {
    id: 1,
    title: "Traffic Monitoring Cameras:",
    title1: "Milesight AI-powered Traffic",
    title2: "Surveillance Solution",
    button: "Learn More",
    position: "text-left",
    titlePosition: "top-96",
    ContentPosition: "top-28 md:left-36 left-8",
    miniTitleFont: "text-xl",
    ButtonMargin: " mt-28",
    image:
      "https://www.milesight.com/static/pc/en/security/solution/traffic-monitoring-cameras/banner.jpg?t=1752224475592",
    contentImage: "",
  },
  {
    id: 2,
    miniTitle: "WT303 & WT304",
    title: "Brand New",
    title1: "Smart Fan Coil Thermostat",
    title2: "",
    subtitle: "Smart Scheduling & Precise Climate Control.",
    subtitle1: "Redefines Energy Efficiency",
    titlePosition: "top-48",
    ContentPosition: "top-36 md:left-36 left-12",
    position: "text-left",
    button: "Learn More",
    miniTitleFont: "text-xl",
    image:
      "https://www.milesight.com/static/pc/en/index-new/hero/redefines-energy-efficiency.jpg?t=1752224475592",
    contentImage: "https://example.com/icon.png",
  },
  {
    id: 3,
    miniTitle: "Milesight AI Analytics",
    subtitle: "AI at the Edge, Intelligence in Every Frame.",
    ContentPosition: "md:top-16 top-24  ",
    position: "text-center",
    ButtonMargin: "mx-auto mt-40",
    button: "Discover Now",
        titleHeight1: "min-h-[28px]",
    miniTitleFont: "text-xl",
    image:
      "https://www.milesight.com/static/pc/en/security/technology/ai-technology/ai-page-banner.jpg?t=1752224475592",
    contentImage: "",
    overlayImageLeft:
      "https://www.milesight.com/static/pc/en/security/technology/ai-technology/text-left.png?t=1752224475592",
    overlayImageRight:
      "https://www.milesight.com/static/pc/en/security/technology/ai-technology/text-right.png?t=1752224475592",
  },
  {
    id: 4,
    title: "Co-created Innovation Program",
    title3: "Free Sample and More Benefits .",
    subtitle:
      "Stay a Step ahead to Enjoy Pioneering Products Through Co-created Innovation Program",
    titlePosition: "top-48 left-36",
    titleHeight: "min-h-[58px]",
    ContentPosition: "top-28 md:right-28 ",
    position: "text-right",
    button: "JOIN NOW!",
    ButtonMargin: "ms-auto mt-16",
    miniTitleFont: "text-xl",
    image:
      "https://www.milesight.com/static/pc/en/iot/product/co-created-innovation-program/co-created-innovation-program-banner.jpg?t=1752224475592",
    contentImage: "https://example.com/icon.png",
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      direction="horizontal"
      loop
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="w-full h-[80vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full flex  justify-between text-white">
            <div
              className={`absolute  space-y-4 SlideContent ${slide.ContentPosition}`}
            >
              {activeIndex === index && (
                <>
                  <motion.p
                    key={`miniTitle-${index}`}
                    className={`${slide.miniTitleFont} ${slide.position} ${slide.titleHeight1}`}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slide.miniTitle}
                  </motion.p>
                   {(index === 0 || index === 1 || index === 2 || index === 4) && (
                  <motion.h5
                    key={`title-${index}`}
                    className={`SlideTitle font-bold text-white ${slide.position} ${slide.titleHeight}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slide.title}
                    <br />
                    {slide.title1}
                    <br />
                    {slide.title2}
                  </motion.h5>)}
                  {(index === 0 || index === 3) && slide.contentImage && (
                    <motion.img
                      key={`image-${index}`}
                      src={slide.contentImage}
                      alt="Slide Icon"
                      className="SlideOneImage"
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  )}
                  {slide.id === 4 && (
                    <>
                      <motion.p
                        key={`subtitle-${index}`}
                        className={`text-xl text-[#b4ffcd] ${slide.position}`}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        {slide.title3}
                      </motion.p>
                      <motion.div
                        className="relative w-fit ms-auto mb-12"
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        {/* Bottom (base) image */}
                        <img
                          src="https://www.milesight.com/static/pc/en/iot/product/co-created-innovation-program/co-created-innovation-program-banner-icon.png?t=1752224475592"
                          alt="base icon"
                          className="HeroButtonImage1"
                        />

                        {/* Top (overlay) image */}
                        <img
                          src="https://www.milesight.com/static/pc/en/iot/product/co-created-innovation-program/vs321.png?t=1752224475592"
                          alt="overlay icon"
                          className="absolute top-0 right-12 HeroButtonImage2"
                        />
                      </motion.div>
                    </>
                  )}
                  <motion.p
                    key={`subtitle-${index}`}
                    className={`text-sm ${slide.position}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slide.subtitle}
                    <br />
                    {slide.subtitle1}
                  </motion.p>
                  {slide.id !== 2 &&
                    (slide.id == 0 ? (
                      <motion.button
                        key={`button-${index}`}
                        className={`pe-26 py-8 HeroButton rounded flex items-center ${slide.ButtonMargin}`}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <img
                          src="https://www.milesight.com/static/pc/en/iot/smart-building-iot-innovators-report/frost-radar-report-banner-icon.png?t=1752224475592"
                          alt="icon"
                          className="absolute -left-1 HeroButtonImage bottom-1 "
                        />
                        {slide.button}
                        <motion.div
                          className="ms-12"
                          animate={{ x: [0, 8, 0] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <FaArrowRightLong />
                        </motion.div>
                      </motion.button>
                    ) : (
                      <motion.button
                        key={`button-${index}`}
                        className={`px-26 py-8 HeroButton rounded flex items-center ${slide.ButtonMargin}`}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        {slide.button}
                        <motion.div
                          className="ms-12"
                          animate={{ x: [0, 8, 0] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <FaArrowRightLong />
                        </motion.div>
                      </motion.button>
                    ))}
                </>
              )}
            </div>

            <img
              src={slide.image}
              alt=""
              className="bg-image"
              style={{ borderRadius: "0px",objectFit:'cover' }}
            />

            {slide.id === 3 && activeIndex === index && (
              <>
                <motion.img
                  src={slide.overlayImageLeft}
                  alt="Left Overlay"
                  className="absolute top-64 left-52 transform -translate-y-1/2 z-20 left"
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{ width: "26%" }}
                />

                <motion.img
                  src={slide.overlayImageRight}
                  alt="Right Overlay"
                  className="absolute top-64 right-40 transform -translate-y-1/2  z-20 right"
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{ width: "30%",height: '307px' }}
                />
              </>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
