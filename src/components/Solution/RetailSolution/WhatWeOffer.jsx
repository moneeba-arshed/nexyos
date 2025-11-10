import React from 'react';

const WhatWeOffer = () => {
  const cardData = [
    {
      id: 1,
      image: "/src/assets/images/nexyos/Fashion-&-specialty-stores.png",
      alt: "Fashion & Specialty Store",
      title: "Fashion & specialty stores retail management solutions",
      className: "w-full hover:scale-105 transition-transform duration-300"
    },
    {
      id: 2,
      image: "/src/assets/images/nexyos/Convenience-stores-&-QSRs.png",
      alt: "Convenience Store & QSR",
      title: "Convenience stores & QSRs retail management solutions",
      className: "w-full  hover:scale-105 transition-transform duration-300"
    },
    {
      id: 3,
      image: "/src/assets/images/nexyos/Food-&-grocery-stores.png",
      alt: "Food & Grocery Store",
      title: "Food & grocery stores retail management solutions",
      className: "w-full  hover:scale-105 transition-transform duration-300"
    },
    
  ];

  return (
    <div className="py-16 bg-white">
      <div className=" px-12">
        {/* Top Section - Descriptive Text */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center">What We Offer</h2>
          <p className="text-gray-800 text-lg leading-relaxed  text-center">
            Hikvision's Smart Retail Solution digs into retailers' essential needs and untapped demands, and empowers them with unparalleled capabilities to Connect, Protect, and Perceive for smart, fluid security management and business operations. Hikvision's retail solution caters to businesses that may vary in size but share the need for smarter operations, better security, and more insightful business.
          </p>
        </div>

        {/* Bottom Section - Three Retail Solution Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-40 mt-20">
          {cardData.map((card) => (
            <div key={card.id} className="flex flex-col bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
              <div className="mb-4 overflow-hidden ">
                <img 
                  src={card.image}
                  alt={card.alt}
                  className={card.className}
                style={{borderRadius:'none'}}/>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-left py-16 px-12">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;