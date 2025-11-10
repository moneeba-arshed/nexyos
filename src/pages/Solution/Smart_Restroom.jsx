import React from 'react'
import Banner from '../../components/Banner'
import ReshapRestrom from '../../components/Solution/SmartRestroom/ReshapRestrom'
import ImageRightText from '../../components/ImageRightText'
import RestroomCard from '../../components/Solution/SmartRestroom/RestroomCard'
import InterestedSection from '../../components/Solution/InterestedSection'
import retail_related_links from "../../assets/images/nexyos/retail_related_links.png";
import extrance from "../../assets/images/nexyos/extrance.jpg";
import Store1 from "../../assets/images/nexyos/Store1.jpg";

const Smart_Restroom = () => {
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
  return (
    <>
      <Banner 
        title="Smart Restroom Solutions"
        description="Revolutionary IoT-powered restroom management systems for enhanced hygiene, efficiency, and user experience"
        backgroundImage="https://www.dahuasecurity.com/asset/upload/banner/20171227/solutions.jpg"
        customClass="h-96"
        contentClass="text-center px-36"
        h2Class="text-6xl font-bold mb-4 text-left"
        pClass="text-2xl text-left w-2xl"
      />
      
      <div className="mt-5">
        <ReshapRestrom/>
      </div>
      
      <ImageRightText
        title="Smart Restroom Management System"
        description="Our advanced IoT-powered restroom management solution provides real-time monitoring, automated cleaning alerts, and intelligent resource management. Experience enhanced hygiene standards and operational efficiency with our comprehensive smart restroom technology."
        linkText="Explore Smart Features"
        linkHref="/smart-restroom-features"
        imageSrc="https://www.milesight.com/static/pc/en/solution/smart-restroom/smart-restroom-video-cover.jpg?t=1755742990548"
        imageAlt="Smart Restroom Management System Interface"
        imageHeight="500px"
        reverse={false}
              />
        
        {/* Milesight Smart Restroom Solution Section */}
        <div className="bg-white py-20 mt-28">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Yes! Get Nexyos Smart Restroom Solution
                </h2>
                <p className="text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed">
                  Nexyos Smart Restroom Solution seamlessly integrates advanced operational and environmental sensors and IoT technologies breaking the limitations of traditional restrooms. It intelligently replaces the sensory systems of manpower to convert what is supposed to be 'detected', 'smelled', 'touched', 'connected' and 'told' into visible and easy-to-get information, realizing real-time monitoring and quick response for supreme user experience and the most efficient management.
                </p>
              </div>
              
              {/* Visual Section with Smart Interface Overlay */}
              <div className="relative">
                {/* Restroom Background */}
                <div className="rounded-xl h-96 relative overflow-hidden">
                  <img 
                    src="https://www.milesight.com/static/pc/en/solution/smart-office/cowork-smart-office-solutio-banner.png?t=1755854261655"
                    alt="Milesight Smart Office Solution Banner"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
        </div>
      </div>
    </div>
        <RestroomCard/>
        <InterestedSection sectionTitle="You may also be interested in" items={data}/>
      </>
  )
}

export default Smart_Restroom
