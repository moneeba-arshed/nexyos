import React from 'react';
import { FaCarSide, FaTruck, FaBus, FaPalette, FaTachometerAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { MdDirections, MdGpsFixed } from 'react-icons/md';
import { GiRadarDish } from 'react-icons/gi';
import { BsPatchCheckFill } from 'react-icons/bs';
import { SiMercedes, SiBmw, SiAudi } from 'react-icons/si';
import { BiDotsHorizontal } from "react-icons/bi";
import { FaCar } from "react-icons/fa";

const Card = ({ title, icon, image, footerColors, children }) => (
  <div className="AI_Card flex flex-col bg-cover bg-center rounded-xl overflow-hidden shadow-md w-full md:w-1/5 relative" style={{ backgroundImage: `url(${image})` }}>
    <div className="bg-opacity-60 text-white p-5 flex flex-col justify-center mt-12" style={{height: '177px'}}>
      <h3 className="text-lg font-semibold mb-3 border-b border-blue-500 pb-1 text-center">{title}</h3>
      <div className="text-3xl mb-4 mt-60 justify-center ">{icon}</div>
      {children}
      {footerColors && (
        <div className="flex space-x-1 mt-4">
          {footerColors.map((color, i) => (
            <span key={i} className={`w-5 h-3 rounded-sm`} style={{ backgroundColor: color }}></span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const HighlightsCard = () => (
  <div className="bg-cover bg-center rounded-xl overflow-hidden shadow-md w-full md:w-1/5 relative" style={{ backgroundImage: `url('https://www.milesight.com/static/pc/en/page/technology/solution/anpr-solution/index-new/outstanding-features-more-highlights.jpg?t=1751621798627')` }}>
    <div className="bg-black bg-opacity-70 text-white p-5 h-full">
      <h3 className="text-lg font-semibold mb-3 border-b border-blue-500 pb-1 w-fit">More Highlights:</h3>
      <ul className="space-y-3 text-sm">
        <li className="flex items-center"><BsPatchCheckFill className="mr-2" /> High Confidence Level</li>
        <li className="flex items-center"><MdDirections className="mr-2" /> Direction Recognition</li>
        <li className="flex items-center"><GiRadarDish className="mr-2" /> 3D Radar Localization</li>
        <li className="flex items-center"><FaTachometerAlt className="mr-2" /> Speed Measurement</li>
        <li className="flex items-center"><MdGpsFixed className="mr-2" /> GPS</li>
      </ul>
    </div>
  </div>
);

const AI_Algorithm = () => {
  return (
    <div className=" py-12 px-4 md:px-12 mt-52 AI_Algorithm">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-32">AI-powered LPR Algorithm</h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Card
          title="Vehicle Type"
          icon={<div className="flex space-x-3 text-white text-2xl"><FaCarSide /><FaTruck /><FaBus /><BiDotsHorizontal /></div>}
          image="https://www.milesight.com/static/pc/en/page/technology/solution/anpr-solution/index-new/outstanding-features-vehicle-type.jpg?t=1751621798627"
        />
        <Card
          title="Vehicle Color"
          icon={<FaCar />}
          image="https://www.milesight.com/static/pc/en/page/technology/solution/anpr-solution/index-new/outstanding-features-vehicle-color.jpg?t=1751621798627"
          footerColors={['#000000', '#ffffff', '#f00', '#00f', '#ff0', '#008000']}
        />
        <Card
          title="Vehicle Make"
          icon={<div className="flex space-x-3 text-white text-2xl"><SiBmw /><SiMercedes /><SiAudi /><BiDotsHorizontal /></div>}
          image="https://www.milesight.com/static/pc/en/page/technology/solution/anpr-solution/index-new/outstanding-features-vehicle-make.jpg?t=1751621798627"
        />
        <Card
          title="Plate Color"
          icon={<FaPalette />}
          image="https://www.milesight.com/static/pc/en/page/technology/solution/anpr-solution/index-new/outstanding-features-plate-color.jpg?t=1751621798627"
          footerColors={['#000000', '#ffffff', '#f00', '#00f', '#ff0', '#008000']}
        />
        <HighlightsCard />
      </div>
    </div>
  );
};

export default AI_Algorithm;
