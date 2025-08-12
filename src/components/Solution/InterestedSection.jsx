import React from "react";
import retail_related_links from "../../assets/images/nexyos/retail_related_links.png";
import extrance from "../../assets/images/nexyos/extrance.jpg";
import Store1 from "../../assets/images/nexyos/Store1.jpg";
import '../../style/HighlightsSection.css';

const data = [
  {
    title: "Entrance & Exit Management",
    description:
      "Advanced deep learning technology achieves an industry-leading algorithm effect to bring convenience to users",
    image: extrance,
  },
  {
    title: "Store",
    description:
      "Secure your store with high definition video evidence and quick emergency response",
    image: Store1,
  },
  {
    title: "Retail",
    description:
      "Caters to businesses that may vary in size but share the need for smarter operations, better security, and more insightful business",
    image: retail_related_links,
  },
];

export default function InterestedSection() {
  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">
        You may also be interested in
      </h2>
  <div className="grid md:grid-cols-3 gap-20 max-w-7xl mx-auto px-48">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative shadow-lg overflow-hidden group IntrestedSecCardImg 
                       transform transition-transform duration-500 ease-in-out 
                       hover:scale-105 rounded-lg"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Text on top */}
            <div className="absolute bottom-0  text-white z-10 text-wrap px-20 py-30">
              <h3 className="text-xl font-bold text-left text-white">{item.title}</h3>
              <p className="text-sm mt-2 text-left">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
