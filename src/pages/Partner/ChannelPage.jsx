import React from "react";
import BannerModal from "../../components/Company/BannerModal";
import ChannelPartners from "../../components/Channel";
import Contact from "../../components/Contact";

const ChannelPage = () => {
  return (
    <>
      <BannerModal 
        title="Find Channel Partners"
        description="Connect with our trusted network of channel partners and distributors worldwide to grow your business together."
      />
      <ChannelPartners />
      <Contact />
    </>
  );
};

export default ChannelPage;
