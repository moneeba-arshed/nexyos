import React from "react";
import { useParams } from "react-router-dom";
import BannerPSCS from "./BannerSuccess";

import Contact from "./Contact";
import Productcategory from "./productcategory";

const Productcall = () => {
  const { id } = useParams();

  return (
    <div>
      <BannerPSCS />
      <Productcategory/>
      <Contact />
    </div>
  );
};

export default Productcall;
