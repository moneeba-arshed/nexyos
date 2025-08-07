import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import BannerAbout from "./BannerAbout";
import "./About.css";
import RPlayer from "./ReactPlayer";
import { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://portal.nexyos.com/api/about/sec/three')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        }
      }).catch((error) => {
        console.error("Error fetching banner data:", error);
      });
  }, []);

  // ✅ Add a guard clause here
  if (!data || data.length === 0) return null;

  // Group strengths into arrays of 3 for each slide
  const groupedStrengths = [];
  for (let i = 0; i < data.length; i += 3) {
    groupedStrengths.push(data.slice(i, i + 3));
  }

  const creativeEffect = {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
      rotate: [0, 0, -30],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
      rotate: [0, 0, 30],
    },
  };

  return (
    <>
      <BannerAbout />
      <RPlayer />
      <section className="container superior">
        <div className="center-wrap">
          <div className="content wow animate__fadeInUp">
            <h2 className="title" data-aos="fade-right">Superior Strength</h2>
            <div className="swipers">
              <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={creativeEffect}
                modules={[EffectCreative, Autoplay]}
                className="swiper-superior swiper-creative swiper-3d"
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
              >
                {groupedStrengths.map((group, groupIndex) => (
                  <SwiperSlide key={groupIndex}>
                    <div className="cards-group">
                      {group.map((item, index) => {
                        const apiItem = data[groupIndex * 3 + index];
                        if (!apiItem) return null;

                        return (
                          <div className="card" key={index}>
                            <img
                              alt={`icon for ${item.title}`}
                              src={apiItem.image}
                              className="lazyloaded"
                              title={`icon for ${item.title}`}
                            />
                            <h3 className="card-title" data-aos="fade-right">{apiItem.head}</h3>
                            <p className="card-text">{apiItem.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
