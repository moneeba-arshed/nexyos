import React from "react";
import { Link } from "react-router-dom";
import "../../style/pagecss.css";

const BannerCounting = () => {
  const bannerImage =
    "https://www.milesight.com/static/pc/en/partner/find-channel-partner/cp-list-channel-partners-pc-first-pic.png";

  return (
    <div
      className="BannerPSCS"
      style={{
        backgroundImage: ` url(${bannerImage})`,
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
            People Counting Solution
          </h2>
          <p className="mt-4">
            The Reliable People Counter Makes Decisions Smart
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerCounting;
