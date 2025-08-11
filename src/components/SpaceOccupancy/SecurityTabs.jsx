import React, { useState } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { PiSecurityCamera } from "react-icons/pi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { LuNewspaper } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrShieldSecurity } from "react-icons/gr";

const tabs = [
  {
    label: "Safer communities",
    title: "Improve visibility and security",
    description:
      "Enhance your video security for public safety with city security cameras that meet the needs of an evolving city environment while fostering future growth opportunities.",
    points: [
      {
        icon: <HiOutlineExclamationTriangle size={60}  className="text-xl" />,
        title: "Prevent crime",
        desc: "Real-time alerts and video analytics help you detect threats, identify suspicious activity and respond.",
      },
      {
        icon: <PiSecurityCamera size={60} className="text-xl" />,
        title: "Cover more areas",
        desc: "From fixed, PTZ and panoramic, our street security cameras cover wide areas and provide clear video 24/7.",
      },
      {
        icon: <TiWeatherPartlySunny size={60} className="text-xl" />,
        title: " Protect your investments",
        desc: "Our public security cameras are designed to withstand extreme temperatures, harsh weather and tampering.",
      },
    ],
    image:
      "https://pelco-566282893.imgix.net/50-50-module-images/Safe-Cities-50-50-media-text-container-850x850-1.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=800&q=80&w=800&s=662a0baa601ea6c0a7969a3681319d2b", 
  },
  {
    label: "Real-time responsiveness",
    title: "Take action when it’s needed most",
    description:
      "Our city surveillance camera system is designed to assist city agencies, support responses in both man-made and natural disasters and encourage collaboration between private and public agencies.",
    points: [
      {
        icon: <BsGraphUpArrow size={60} className="text-xl" />,
        title: "Gain real-time insights",
        desc: "Stay focused on critical tasks and effective responses with reports that can provide timely information.",
      },
      {
        icon: <LuNewspaper size={60} className="text-xl" />,
        title: "Proactively detect threats",
        desc: "Real-time alerts enable citywide surveillance teams to detect threats and guide responses.",
      },
       {
        icon: <LiaShippingFastSolid size={60} className="text-xl" />,
        title: " Respond faster",
        desc: "City camera systems with Pelco Smart Analytics accurately detect objects and critical events.",
      },
    ],
    image:
      "https://pelco-566282893.imgix.net/50-50-module-images/Safe-Cities-50-50-media-text-container-850x850-2.jpg?auto=format&fit=clip&q=80&w=800&s=f4c336d73a87badf3cb5f09cd08fc6c8",
  },
  {
    label: "Flexible and trusted",
    title: "Elevated systems through integration",
    description:
      "Centralize data from video security for public safety as well as third-party public surveillance cameras, physical security systems and other solutions to deliver citywide situational awareness.",
    points: [
      {
        icon: <FaBalanceScaleLeft size={60} className="text-xl" />,
        title: "Scale your security",
        desc: "Integration with other IT and town video surveillance systems allows easy expansion as cities grow.",
      },
      {
        icon: <RiSecurePaymentLine  size={60} className="text-xl" />,
        title: "Secure your streets",
        desc: "Obtain data by linking license plate monitoring, detection and recognition to find cars and individuals.",
      },
            {
        icon: <GrShieldSecurity  size={60} className="text-xl" />,
        title: "Compliant solutions",
        desc: "Our street security camera systems are trusted globally and meet regulatory requirements, including NDAA",
      },
    ],
    image:
      "https://pelco-566282893.imgix.net/50-50-module-images/Safe-Cities-50-50-media-text-container-850x850-3.jpg?auto=format&fit=clip&q=80&w=800&s=e4647adb37edc98768ff0a28b08f8756",
  },
];

export default function SecurityTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white py-10">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-36 py-12 border rounded-2xl text-lg font-medium relative ${
              activeTab === index
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            {tab.label}
            {activeTab === index && (
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-900"></span>
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-lg shadow py-40 px-28 mt-16 flex flex-col md:flex-row gap-52">
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-left">{tabs[activeTab].title}</h2>
          <p className="text-gray-700 mb-6 text-left text-sm ">{tabs[activeTab].description}</p>
          <div className="space-y-6 mt-36">
            {tabs[activeTab].points.map((point, idx) => (
              <div key={idx} className="flex gap-4 mb-28">
                <div className="text-[#121535] me-14">{point.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-left">{point.title}</h3>
                  <p className="text-black text-left text-sm">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            className="rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
}
