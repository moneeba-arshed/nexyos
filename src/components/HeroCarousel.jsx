import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Traffic Monitoring Cameras:",
    title1: "Milesight AI-powered Traffic",
    title2: "Surveillance Solution",
    button: "Discover Now",
    image:
      "https://www.milesight.com/static/pc/en/iot/smart-building-iot-innovators-report/frost-radar-report-banner-rader-chart-bg.jpg?t=1752224475592",
  },
  {
    title: "Traffic Monitoring Cameras:",
    title1: "Milesight AI-powered Traffic",
    title2: "Surveillance Solution",
    button: "Learn More",
    image:
      "https://www.milesight.com/static/pc/en/security/solution/traffic-monitoring-cameras/banner.jpg?t=1752224475592",
  },
  {
    title: "Traffic Monitoring Cameras:",
    title1: "Milesight AI-powered Traffic",
    title2: "Surveillance Solution",
    button: "Learn More",
    image:
      "https://www.milesight.com/static/pc/en/index-new/hero/ai-truecolor-dual-sensor-panoramic/bg.jpg?t=1752224475592",
  },
  {
    title: "Traffic Monitoring Cameras:",
    title1: "Milesight AI-powered Traffic",
    title2: "Surveillance Solution",
    button: "Learn More",
    image:
      "https://www.milesight.com/static/pc/en/index-new/hero/redefines-energy-efficiency.jpg?t=1752224475592",
  },
  {
    title: "Traffic Monitoring Cameras:",
    title1: "Milesight AI-powered Traffic",
    title2: "Surveillance Solution",
    button: "Learn More",
    image:
      "https://www.milesight.com/static/pc/en/security/technology/ai-technology/ai-page-banner.jpg?t=1752224475592",
  },
  {
    title: "Traffic Monitoring Cameras:",
    title1: "Milesight AI-powered Traffic",
    title2: "Surveillance Solution",
    button: "Learn More",
    image:
      "https://www.milesight.com/static/pc/en/iot/product/co-created-innovation-program/co-created-innovation-program-banner.jpg?t=1752224475592",
  },
  {
    title: "Traffic Monitoring Cameras:",
    title1: "Milesight AI-powered Traffic",
    title2: "Surveillance Solution",
    button: "Learn More",
    image:
      "https://www.milesight.com/static/pc/en/security/solution/traffic-monitoring-cameras/banner.jpg?t=1752224475592",
  },
  {
    title: "Traffic Monitoring Cameras:",
    title1: "Milesight AI-powered Traffic",
    title2: "Surveillance Solution",
    button: "Learn More",
    image:
      "https://www.milesight.com/static/pc/en/iot/smart-building-iot-innovators-report/frost-radar-report-banner-rader-chart-bg.jpg?t=1752224475592",
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true, }}
      autoplay={{ delay: 4000 }}
        direction="horizontal"
      loop
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="w-full h-[600px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full flex  justify-between text-white">
            <div className="absolute max-w-lg space-y-4">
              {activeIndex === index && (
                <>
                  <motion.h2
                    key={`title-${index}`}
                    className="text-5xl font-bold text-white"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slide.title}
                    {slide.title1}
                    {slide.title2}
                  </motion.h2>

                  <motion.p
                    key={`subtitle-${index}`}
                    className="text-xl"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.button
                    key={`button-${index}`}
                    className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {slide.button}
                  </motion.button>
                </>
              )}
            </div>

            <img
              src={slide.image}
              alt=""
              className=""
            style={{borderRadius:'0px'}}/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
