import React, { useEffect, useRef, useState } from "react";
import Hammer from "hammerjs";
import CCTVSurveillanceCamerasBg from '../assets/images/nexyos/CCTVSurveillanceCamerasBg.jpg'
import CCTVSurveillanceCameras from '../assets/images/nexyos/CCTVSurveillanceCameras.jpg'
import ProGROUPCAMERA from '../assets/images/nexyos/ProGROUPCAMERA.png'
import PTZGROUPCAMERA from '../assets/images/nexyos/PTZGROUPCAMERA.png'
import panaromic from '../assets/images/nexyos/panaromic.png'

const imageArray = [CCTVSurveillanceCamerasBg, CCTVSurveillanceCameras, ProGROUPCAMERA, PTZGROUPCAMERA, panaromic];

const SwipeSlider = () => {
  const [items, setItems] = useState(imageArray);
  const [currentIndex, setCurrentIndex] = useState(2);
  const swipeRef = useRef(null);

  useEffect(() => {
    const hammer = new Hammer(swipeRef.current);

    hammer.on("swipeleft", () => {
      handleNext();
    });

    hammer.on("swiperight", () => {
      handlePrev();
    });

    return () => {
      hammer.destroy();
    };
  }, []);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
  };

  const slide = (index) => {
    if (index === currentIndex - 1 || (currentIndex === 0 && index === items.length - 1)) {
      handlePrev();
    } else if (index === currentIndex + 1 || (currentIndex === items.length - 1 && index === 0)) {
      handleNext();
    }
  };

  const getClassName = (index) => {
    const total = items.length;
    const offset = (index - currentIndex + total) % total;

    if (offset === total - 2) return "opacity-0 -translate-x-[420px] scale-85";
    if (offset === total - 1) return "opacity-25 -translate-x-[220px] scale-85 cursor-pointer";
    if (offset === 0) return "opacity-100 scale-100 z-10";
    if (offset === 1) return "opacity-25 translate-x-[220px] scale-85 cursor-pointer";
    if (offset === 2) return "opacity-0 translate-x-[420px] scale-85";
    return "hidden";
  };

  return (
    <div className="relative w-full mt-48 overflow-hidden flex items-center justify-center bg-white" style={{height:'220px'}}>
   

      {/* Slide container */}
      <ul className="relative flex items-center justify-center h-[200px] w-full max-w-[1000px]">
        {items.map((item, index) => (
          <li
            key={index}
            className={`absolute transition-all duration-500 ease-in-out w-[200px] h-[200px] -ml-[100px] rounded shadow-md transform ${getClassName(index)}`}
            onClick={() => slide(index)}
          >
            <img
              src={item}
              alt={`Slide ${index}`}
              className="w-full h-full rounded"
            />
          </li>
        ))}
      </ul>
         {/* Swipe area */}
        <div
        ref={swipeRef}
        className="swipe absolute w-[270px] h-[200px] bg-green-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
      ></div>
    </div>
  );
};

export default SwipeSlider;
