import React from "react";
import '../../style/HighlightsSection.css';

const highlights = [
    {
        image: 'https://www.milesight.com/static/pc/en/solution/people-counting/lorawan-and-poe-icon.png?t=1754899499415',
        title: "Multi-Transmission",
        description:
            "LoRaWAN®, Ethernet, Cellular, and Wi-Fi Halow transmission give easy access to different application requirements.",
    },
    {
        image: 'https://www.milesight.com/static/pc/en/solution/people-counting/ai-icon.png?t=1754899499415',
        title: "Advanced Technologies",
        description:
            "Applying AI, ToF, PIR, thermopile, and radar technologies to enhance counting accuracy and people counters performance.",
    },
    {
        image: 'https://www.milesight.com/static/pc/en/solution/people-counting/accuracy-icon.png?t=1754899499415',
        title: "Up to 99.8% Ultra-high Accuracy",
        description:
            "Increasing accuracy to 99.8% to satisfy application requirements.",
    },
    {
        image: 'https://www.milesight.com/static/pc/en/solution/people-counting/privacy-detection-icon.png?t=1754899499415',
        title: "100% Anonymous Detection",
        description:
            "It is GDPR compliant with no personally identifiable information caught.",
    },
    {
        image: 'https://www.milesight.com/static/pc/en/solution/people-counting/compatibility-icon.png?t=1754899499415',
        title: "Great Compatibility",
        description:
            "Our appliances easily connect with third-party platforms using open APIs and MQTT/HTTP(s), making integration with existing systems simple for customers.",
    },
    {
        image: 'https://www.milesight.com/static/pc/en/solution/people-counting/central-management-icon.png?t=1754899499415',
        title: "No Wiring, No Hassle",
        description:
            "Our wireless people counter requires no wiring, reducing installation costs and protecting heritage buildings while offering hassle-free and low-maintenance operation.",
    },
];

export default function HighlightsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto px-28">
        <h2 className="text-3xl font-bold text-center mb-12">
          Highlights of Milesight People Counting Sensors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-28">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6  duration-300 flex items-center hover:-translate-y-2 hover:shadow-lg mb-14 transition-all highlightSecCard"
            >
              {/* Column 1: Image */}
              <div className="items-start justify-items-start highlightSecCardImg">
                <img
                  src={item.image}
                  alt={item.title}
                  className=" "
                />
              </div>

              {/* Column 2: Title + Description */}
              <div className="ml-4" style={{width:'70%'}}>
                <h3 className="text-lg font-bold mb-2 text-left">{item.title}</h3>
                <p className="text-gray-600 text-xs text-left">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
