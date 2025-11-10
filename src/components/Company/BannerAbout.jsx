import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../style/pagecss.css";

const BannerAbout = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    axios
      .get("https://portal.nexyos.com/api/about/sec/one")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setBannerData(res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching banner data:", err);
      });
  }, []);

  if (!bannerData || bannerData.length === 0) return null;

  return (
    <>
      {bannerData.map((item, index) => (
        <div
          key={index}
          className="BannerPSCS"
          style={{
            backgroundImage: `url(${item.image})`,
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
              <h2
                className="banner-item-two__title bounce text-black"
                data-aos="fade-right"
              >
                {item.head}
              </h2>
              <p className="mt-4 text-black text-lg">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BannerAbout;
