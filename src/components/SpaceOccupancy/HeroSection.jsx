import React from 'react';
import lorawan from '../../assets/images/icon/lorawan.png';
import TOF from '../../assets/images/icon/TOF.png';
import POE from '../../assets/images/icon/POE.png'
import AI from '../../assets/images/icon/AI.png'
const SpaceOccupancy = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[80vh] flex items-center px-8 py-16"
      style={{
        backgroundImage: `url('https://www.milesight.com/static/pc/en/solution/smart-space-occupancy/space-occupancy-banner-background.jpg?t=1752224588823')`,
      }}
    >
      {/* Overlay (optional for dark effect) */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative text-white max-w-2xl z-10 ms-48">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white text-left mb-4">
          Smart Space <br /> Occupancy Solution
        </h1>
        <p className="text-lg mb-6 text-left">
          Understand how your meeting room, workstations, <br />
          and other office spaces are being used.
        </p>
        <div className="flex flex-wrap gap-4 mb-6 mt-16">
          <div className="bg-white  px-12 py-8 rounded shadow font-semibold  flex items-center">
            <img src={lorawan} alt='lorawan' className='Lorawan' style={{width:'100%',  height:'23px'}}/>
          </div>
          <div className="bg-white  px-12 py-8 rounded shadow font-semibold flex items-center">
           <img src={POE} alt='poe' className='POE' style={{width:'100%',  height:'33px'}}/>
          </div>
          <div className="bg-white px-12 py-8 rounded shadow font-semibold  flex items-center">
             <img src={TOF} alt='tof' className='TOF' style={{width:'100%',  height:'33px'}}/>
          </div>
          <div className="bg-white px-12 py-8 rounded shadow font-semibold  flex items-center">
           <img src={AI} alt='Ai' className='AI' style={{width:'100%',  height:'33px'}}/>
          </div>
            <button className="bg-white text-black px-16 py-2 rounded transition" style={{fontSize:'12px'}}>
          Watch Video
        </button>
        </div>  
      </div>
    </div>
  );
};

export default SpaceOccupancy;
