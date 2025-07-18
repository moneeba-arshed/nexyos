import React from "react";
import { Link } from "react-router-dom";

const DemoPageSlider = () => {
  const bannerImage =
    "https://www.milesight.com/static/pc/en/online-demo-collection/online-demo.jpg?t=1744162133350";

  return (
    <div
      className="BannerPSCS"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "70vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="banner-item-two__content text-white">
          <h2 className="banner-item-two__title bounce text-white"  data-aos="fade-right">
            Online Demo
          </h2>
          <p className="mt-4">
            Click to experience the powerful performance and explore more
            possibilities of IoT and Video Surveillance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoPageSlider;
