import React from 'react'
import Banner from '../components/Banner'
import Tab from '../components/Tab'
import HotProductSlider from '../components/HotProductSlider'
import Contact from '../components/Contact'
import { FiDownload } from 'react-icons/fi';

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
<Tab/>
<div className='container my-48 flex justify-center items-center flex-col'>
<h5>For Better Road Safety & Efficient Traffic Management</h5>
<div className='w-[90%]'>
    <p className='text-sm'>With the growth of urban and rural populations, as well as the increasing number of vehicles on the roads, traffic congestion, accidents, and <br/> parking issues are constantly on the rise, presenting new challenges to traffic management agencies.</p>
<p className='text-sm'>Milesight is delighted to introduce our Intelligent Traffic Solution.</p>
<p className='text-sm'>We integrate powerful, high-quality cameras with back-end software, elevating intelligent traffic management to a new level with exceptional imagery and <br/> advanced AI-powered ANPR technology, ensuring road traffic safety and efficient traffic management.</p>
</div>
</div>
<HotProductSlider/>
 <div className="bg-gray-100 min-h-screen py-10">
      <h2 className="text-4xl font-bold text-center mb-10">Downloads</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {downloads.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-28 bg-white rounded-xl shadow px-12 py-24"
          >
            {/* PDF Icon Placeholder */}
            <div className="flex-shrink-0">
              <img
                src="https://www.milesight.com/static/pc/en/page/technology/solution/anpr-solution/index-new/downloads.png?t=1751621798627"
                alt="PDF Icon"
                
              />
            </div>

            {/* Title and Download */}
            <div>
              <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
              <button className="mt-2 flex items-center gap-1 px-8 py-8 border text-sm font-medium hover:bg-gray-100 transition" style={{borderRadius: '8px'}}>
                Download <FiDownload />
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
