import React from "react";


import CategoryPage from "./CategoryPage";
import Breadcrumb from "./Breadcrumb";
import Slider from "./Slider";
import data from './data'
const Categorycall = () => {
  return (
    <div>


      <Slider data={data} activeSlide={2}/>
     <Breadcrumb/>
      <CategoryPage />
    </div>
  );
};

export default Categorycall;
