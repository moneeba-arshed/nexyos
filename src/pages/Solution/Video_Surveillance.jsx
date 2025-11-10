import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner'
import WhatWeOffer from '../../components/Solution/Video_Surveillance/WhatWeOffer'
import SolutionTab from '../../components/Solution/Video_Surveillance/SolutionTab';
import SuperiorHighlights from '../../components/SpaceOccupancy/SuperiorHighlights';
import RelatedProduct from '../../components/Solution/Video_Surveillance/RelatedProduct';


const Video_Surveillance = () => {
  const products = [
    {
      image:
        "https://www.milesight.com/static/pc/en/page/technology/solution/ptz-series/related-products-bullet.png?t=1754966591917",
      tags: ["5MP", "2MP"],
      title: "AI 12X PTZ Bullet Camera",
      link: "#",
    },
    {
      image:
        "https://www.milesight.com/static/pc/en/page/technology/solution/ptz-series/related-products-dome.png?t=1754966591917",
      tags: ["5MP", "2MP"],
      title: "AI 12X/20X/23X PTZ Dome Camera",
      link: "#",
    },
    {
      image:
        "https://www.milesight.com/static/pc/en/page/technology/solution/ptz-series/related-products-speed-dome.png?t=1754966591917",
      tags: ["5MP", "2MP"],
      title: "AI 23X/30X Speed Dome Camera",
      link: "#",
    },
    {
      image:
        "https://www.milesight.com/static/pc/en/page/technology/solution/ptz-series/related-products-speed-dome.png?t=1754966591917",
      tags: ["4K", "5MP", "2MP"],
      title: "AI 36X/42X Speed Dome Camera",
      link: "#",
    },
  ];
  return (
    <div>
      <Banner
        title="Video Surveillance Solution"
        description="Advanced CCTV systems for comprehensive security monitoring and intelligent video analytics"
        backgroundImage="https://pelco-566282893.imgix.net/hero-images/Safe-Cities-mobile-hero-1200x1503-v2_2025-04-22-131531_csrv.jpg?auto=format&fit=clip&q=80&w=1280&s=f1df9d777b7da85a1209dc089ad86173"
        containerClass="top-1/2 transform -translate-y-1/2"
        contentClass="max-w-2xl"
        h2Class="text-4xl md:text-5xl font-bold mb-4 text-[#121535] text-left"
        pClass="text-lg md:text-xl opacity-90 text-[#121535] text-left"
      />
    <WhatWeOffer/>
    <SolutionTab/>
    <SuperiorHighlights/>
    <div>
    <h2 className="text-center text-2xl font-bold mb-6">
          Related Products
        </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 px-36">
          {products.map((product, idx) => (
            <RelatedProduct key={idx} {...product} />
          ))}
        </div> 
    </div>
    
    </div>
  )
}

export default Video_Surveillance
