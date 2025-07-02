import React from "react";
import { useParams } from "react-router-dom";
import BannerPSCS from "./BannerSuccess";
import Productcategory from "./Productcategory";
import Contact from "./Contact";

const Productcall = () => {
  const { id } = useParams();

  return (
    <div>
      <BannerPSCS />
      <Productcategory productId={id} />
      <Contact />
    </div>
  );
};

export default Productcall;
