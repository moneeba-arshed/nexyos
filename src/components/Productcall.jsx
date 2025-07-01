import React from "react";
import BannerProduct from "./BannerProduct";
import CategoryPage from "./CategoryPage";
import Breadcrumb from "./Breadcrumb";
import Slider from "./Slider";
import data from './data'
const Productcall = () => {
  return (
    <div>
      {/* <BannerProduct/> */}
      <Slider data={data} activeSlide={2}/>
     <Breadcrumb/>
      <CategoryPage />
    </div>
  );
};

export default Productcall;
