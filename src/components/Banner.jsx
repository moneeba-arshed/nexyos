import React from "react";
import { Link } from "react-router-dom";
import '../style/Banner.css'
import { useEffect } from "react";

const  Banner = (  {
    title,
  description,  
  backgroundImage,
   backgroundVideo,
  containerClass= "",
  customClass = "",
  contentClass = "",
  h2Class = "",
pClass = "",}) => {

  return (
    <div
      className={`Banner relative BannerPSCS overflow-hidden ${customClass}`} >
           {/* Background Video or Image */}
      {backgroundVideo ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
      )}

      {/* Overlay (optional dark layer for readability) */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> */}
         {/* Content */}
      <div className={`container absolute ${containerClass}`}>
        <div className={` text-white ${contentClass}`}>
          <h2 className={` bounce ${h2Class}`}  data-aos="fade-right">
      {title}
          </h2>
          <p className={`mt-4 ${pClass}`}>
         {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
