import React from "react";
import { Link } from "react-router-dom";

const BannerProduct = () => {
  const bannerImage =
    "https://www.milesight.com/static/pc/en/security/product/pro-camera-series/pro-series-banner.jpg?t=1750413670258";

  return (
    <div
      className="BannerPSCS"
      style={{
        backgroundImage: ` url(${bannerImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="banner-item-two__content text-white">
          <h2 className="banner-item-two__title bounce text-white">
            Subcategories
          </h2>
          <p className="mt-4">
            Explore various solution categories where Nexyos has empowered clients across industries—helping them tackle complex challenges and drive meaningful results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
