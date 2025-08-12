import React,{useState} from 'react'
import cctvBg from '../../../assets/images/nexyos/CCTVSurveillanceCamerasBg.jpg';
import retailSecurity from '../../../assets/images/nexyos/RetailSecurityEASSystem.jpg';
import entranceManagement from '../../../assets/images/nexyos/Entrance Management Solutions (1).jpg';
import audioVideo from '../../../assets/images/nexyos/AudioVideo Door Phone System.jpg';
import recorders from '../../../assets/images/nexyos/Recorders and Video Management Systems.jpg';
import peripheral from '../../../assets/images/nexyos/Peripheral Accessories.jpg';

const SolutionTab = () => {
    const [activeIndustryTab, setActiveIndustryTab] = useState("retail");
    const Industrytabs = [
        { 
            id: "retail", 
            label: "Retail Security", 
            image: retailSecurity, 
            Subtitle: "Comprehensive surveillance solutions for retail environments", 
            buttons: ["CCTV Cameras", "EAS Systems", "Loss Prevention"], 
        },
        { 
            id: "entrance", 
            label: "Entrance Management", 
            image: entranceManagement, 
            Subtitle: "Advanced access control and visitor management", 
            buttons: ["Access Control", "Visitor Management", "Biometric Systems"], 
        },
        { 
            id: "intercom", 
            label: "Audio/Video Intercom", 
            image: audioVideo, 
            Subtitle: "Integrated communication and surveillance systems", 
            buttons: ["Door Phone Systems", "Video Intercoms", "Access Integration"], 
        },
        { 
            id: "vms", 
            label: "Video Management", 
            image: recorders, 
            Subtitle: "Professional video recording and management solutions", 
            buttons: ["NVR Systems", "DVR Systems", "Cloud Storage"], 
        },
        { 
            id: "accessories", 
            label: "Peripheral Accessories", 
            image: peripheral, 
            Subtitle: "Complete surveillance system accessories and components", 
            buttons: ["Mounting Kits", "Cables", "Power Supplies"], 
        },
        { 
            id: "surveillance", 
            label: "CCTV Surveillance", 
            image: cctvBg, 
            Subtitle: "Professional CCTV cameras for all surveillance needs", 
            buttons: ["IP Cameras", "Analog Cameras", "PTZ Cameras"], 
        },
      ];
  return (
    <div className='px-36'>
         {/* Scrollable Tabs */}
         <div className="overflow-x-auto">
          <div className="flex space-x-6 min-w-max px-2 border-b border-gray-300 justify-center">
            {Industrytabs.map((tab) => {
              const isActive = activeIndustryTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveIndustryTab(tab.id);
                  }}
                  className={`IndustryTabButton relative py-12 px-24 text-base whitespace-nowrap font-medium transition-all duration-300 ${isActive
                    ? "active "
                    : "text-black"
                    }`}
                  style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Background Image Section with Overlay */}
        <div className="relative mt-10 h-[400px] w-full rounded-xl overflow-hidden ">
          {Industrytabs.filter(tab => tab.id === activeIndustryTab).map((tab) => (
            <div key={tab.id} className="relative h-full w-full">
              <img
                src={tab.image}
                alt={tab.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center ps-52">
                <h3 className="text-white text-4xl md:text-5xl font-bold mb-4 text-left">
                  {tab.label}
                </h3>
                <p className="text-white text-lg mb-6 text-left">{tab.Subtitle}</p>
                <h5 className="text-white text-2xl md:text-3xl font-semibold mb-4 text-left">
                  Related solutions:
                </h5>
                <div className="flex flex-wrap gap-4">
                  {tab.buttons.map((btnLabel, idx) => (
                    <button
                      key={idx}
                      className="border border-white text-white px-20 py-4 rounded-full hover:bg-white hover:text-black transition"
                      style={{ borderRadius: "15px" }}
                    >
                      {btnLabel}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}</div>
    </div>
  )
}

export default SolutionTab