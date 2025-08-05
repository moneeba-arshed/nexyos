import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import BannerAbout from "./BannerAbout";
import "./About.css";
import RPlayer from "./ReactPlayer";
import { useEffect,useState } from "react";
import axios from "axios";

const About = () => {
    const [data, setData] = useState(null);
  const strengthsData = [
    {
      title: "Professionalism",
      description:
        "Years of in-depth IoT and video security industry experience shape us as a professional.",
      icon: "https://www.milesight.com/static/pc/en/company/about-us/icons/milesight-professionalism-icon.png",
    },
    {
      title: "Reliability",
      description:
        "Dependable and qualified sensing devices meets the precise need.",
      icon: "https://www.milesight.com/static/pc/en/company/about-us/icons/milesight-responsiveness-icon.png",
    },
    {
      title: "Value-added",
      description:
        "Advanced industrial-leading technologies are all embedded in every Milesight sensing products.",
      icon: "https://www.milesight.com/static/pc/en/company/about-us/icons/milesight-value-added-icon.png",
    },
    {
      title: "Efficiency",
      description:
        "Exclusive technical support and training service well serve the customers.",
      icon: "https://www.milesight.com/static/pc/en/company/about-us/icons/milesight-efficiency-icon.png",
    },
    {
      title: "Innovation",
      description:
        "Up-to-the-minute technologies and strong R&D power keep in step with the fast-growing market.",
      icon: "https://www.milesight.com/static/pc/en/company/about-us/icons/milesight-innovation-icon.png",
    },
    {
      title: "Aesthetics",
      description:
        "Graceful and fluid Milesight style seamlessly blends into the environment.",
      icon: "https://www.milesight.com/static/pc/en/company/about-us/icons/milesight-aesthetics-icon.png",
    },
    {
      title: "Win-win",
      description:
        "Healthy distribution channel ensures sustainable and win-win partnership.",
      icon: "https://www.milesight.com/static/pc/en/company/about-us/icons/milesight-win-win-icon.png",
    },
    {
      title: "Customer Oriented",
      description:
        "Milesight takes customers' need as first priority to accelerate growth.",
      icon: "https://www.milesight.com/static/pc/en/company/about-us/icons/milesight-customer-oriented-icon.png",
    },
  ];
  

useEffect(() => {
axios.get('https://portal.nexyos.com/api/about/sec/three')
.then((response)=>{
      if (Array.isArray(response.data)) {
          setData(response.data);
        }
})   .catch((error) => {
        console.error("Error fetching banner data:", error);
      });
}, [])

  // Group strengths into arrays of 3 for each slide
  const groupedStrengths = [];
  for (let i = 0; i < strengthsData.length; i += 3) {
    groupedStrengths.push(strengthsData.slice(i, i + 3));
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
 if (data.length === 0) return null;
  return (
    <>
      <BannerAbout />
      <RPlayer />
      <section className="container superior">
        <div className="center-wrap">
          <div className="content wow animate__fadeInUp">
            <h2 className="title"  data-aos="fade-right">Superior Strength</h2>
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
                  delay: 333333000, // 3 seconds between slides
                  disableOnInteraction: false, // Continue autoplay after user interaction
                  pauseOnMouseEnter: true, // Pause when mouse hovers over slider
                }}
              >
                {groupedStrengths.map((group, groupIndex) => (
                  <SwiperSlide key={groupIndex}>
                    <div className="cards-group">
                      {group.map((item, index) => {
  const apiItem = data[groupIndex * 3 + index]; // match correct data item
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
