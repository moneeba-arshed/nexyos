import React from 'react'
import Banner from '../components/Banner'
import Tab from '../components/Tab'
import HotProductSlider from '../components/HotProductSlider'
import Contact from '../components/Contact'
import { FiDownload } from 'react-icons/fi';
import Features from '../components/Features'
import TrafficFunctionsAndScenarios from '../components/TrafficFunctionsAndScenarios'
import SolutionVideo from '../components/SolutionVideo'

const Solution = () => {
    const downloads = [
  {
    title: 'Supported Regions List',
  },
  {
    title: 'White Paper: Intelligent Traffic Camera',
  },
  {
    title: 'Troubleshooting ANPR Solution',
  },
  {
    title: 'Brochure: Milesight Intelligent Traffic Camera',
  },
   {
    title: 'Supported Regions List',
  },
  {
    title: 'White Paper: Intelligent Traffic Camera',
  },
  {
    title: 'Troubleshooting ANPR Solution',
  },
  {
    title: 'Brochure: Milesight Intelligent Traffic Camera',
  },
];
  return (
    <div>
      <Banner
  title="Powering Smart Surveillance"
  description="Explore how cutting-edge AI and IoT solutions transform security landscapes globally."
   backgroundVideo="https://static.vecteezy.com/system/resources/previews/011/389/863/mp4/moving-cars-on-the-motorway-during-sunset-busy-traffic-on-a-freeway-or-highway-top-view-of-the-road-the-golden-rays-of-the-evening-sun-illuminate-the-transport-ukraine-kyiv-october-3-2021-free-video.mp4"
  customClass="my-custom-banner"
  contentClass="text-center "
  titleClass="text-4xl font-bold justify-center items-center flex"
  descriptionClass="text-lg"
/>
                                       {/* ROAD TRAFFIC MANAGMENT */}
<Tab/>
                                       {/* SAFETY & eFFICIENCY */}
<div className='container my-76 p-0 md:pb-40 md:pt-30 flex justify-center items-center flex-col'>
<h5>For Better Road Safety & Efficient Traffic Management</h5>
<div className='md:w-[70%] w-[90%] text-center'>
    <p className='text-sm'>With the growth of urban and rural populations, as well as the increasing number of vehicles on the roads, traffic congestion, accidents, and <br/> parking issues are constantly on the rise, presenting new challenges to traffic management agencies.</p>
<p className='text-sm'>Milesight is delighted to introduce our Intelligent Traffic Solution.</p>
<p className='text-sm'>We integrate powerful, high-quality cameras with back-end software, elevating intelligent traffic management to a new level with exceptional imagery and <br/> advanced AI-powered ANPR technology, ensuring road traffic safety and efficient traffic management.</p>
</div>
</div>
                                       {/* HOT PRODUCTS */}
<HotProductSlider/>
                                       {/* OUTSTANDING FEATURES */}
<div className='OutStanding_features'>
   <h2 className="text-4xl font-bold mb-4 mt-32">Outstanding Features</h2>
   <Features/>
</div>
                                        {/* TRAFFIC FUNCTIONS & SCENARIOS */}
<TrafficFunctionsAndScenarios/>
                                         {/* Videos */}
<SolutionVideo/>
                                        {/* DOWNLOADS */}
{/* DOWNLOADS */}
<div className="bg-gray-100 py-40">
  <h2 className="text-4xl font-bold text-center mb-20">Downloads</h2>

  <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8 px-6">
    {downloads.map((item, idx) => (
      <div
        key={idx}
        className="flex items-center gap-6 bg-white rounded-xl shadow px-6 py-6"
      >
        {/* Bigger Image */}
        <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center">
          <img
            src="https://www.milesight.com/static/pc/en/page/technology/solution/anpr-solution/index-new/downloads.png?t=1751621798627"
            alt="PDF Icon"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title + Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
          <p className="text-gray-800 font-semibold text-sm sm:text-base mb-2 sm:mb-0">
            {item.title}
          </p>

          <button className="flex items-center gap-2 text-[#00667C] font-medium text-sm hover:underline">
            <FiDownload size={20} />
            Download
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


<Contact/>
    </div>
  )
}

export default Solution
