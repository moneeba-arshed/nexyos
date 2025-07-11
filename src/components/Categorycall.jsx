import React from "react";


import CategoryPage from "./CategoryPage";
import Breadcrumb from "./Breadcrumb";
import Slider from "./Slider";
import data from './data'
import SliderTest from "./SliderTest";
import Contact from "./Contact";
import Tab from "./Tab";
import HotProductSlider from "./HotProductSlider";
const Categorycall = () => {
  return (
    <div>
      {/* <Slider data={data} activeSlide={2}/> */}
      <SliderTest/>
     <Breadcrumb/>
      <CategoryPage />
      <Tab/>
      <HotProductSlider/>
      <Contact/>
    </div>
  );
};

export default Categorycall;
