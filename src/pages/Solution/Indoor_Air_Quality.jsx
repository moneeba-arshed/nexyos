import React from 'react';
import Banner from '../../components/Banner';
import ImageRightText from '../../components/ImageRightText';
import CameraSolutions from '../../components/Solution/CameraSolutions';
import InterestedSection from '../../components/Solution/InterestedSection';
import { FaWind, FaThermometerHalf, FaLeaf, FaBell, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Indoor_Air_Quality = () => {
  const airQualitySolutions = [
    {
      title: "Multi-Sensor Air Quality Monitor",
      description:
        "Comprehensive IoT sensors monitoring CO2, VOCs, particulate matter, temperature, humidity, and more for complete air quality insights.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/people-counting/related-products/related-product-ws558.png?t=1755857473062",
      link: "#",
    },
    {
      title: "Smart HVAC Integration",
      description:
        "Intelligent HVAC control systems that automatically adjust based on real-time air quality data to optimize comfort and energy efficiency.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/smart-parking/related-products/related-product-ug65.png?t=1755857473062",
      link: "#",
    },
    {
      title: "HALO Smart Sensor",
      description:
        "Multi-purpose sensor detecting vaping, air quality issues, and environmental anomalies in privacy-sensitive areas.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/people-counting/related-products/related-product-uc500.png?t=1755857473062",
      link: "#",
    },
  ];

  const interestedItems = [
    {
      title: "Energy Efficiency",
      description:
        "Optimize HVAC operations and reduce energy costs while maintaining optimal air quality.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    },
    {
      title: "Smart Restroom",
      description:
        "Monitor restroom air quality, occupancy, and cleanliness for enhanced hygiene management.",
      image: "https://www.milesight.com/static/pc/en/solution/smart-restroom/smart-restroom-video-cover.jpg?t=1755742990548",
    },
    {
      title: "Education",
      description:
        "Create healthier learning environments with continuous air quality monitoring in schools.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    },
  ];

  return (
    <>
      <Banner
        title="Indoor Air Quality Solutions"
        description="Create healthier indoor environments with intelligent air quality monitoring. Real-time detection, automated alerts, and data-driven insights for optimal air quality management."
        backgroundImage="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&h=600&fit=crop"
        customClass="min-h-[70vh]"
        contentClass="max-w-3xl ps-28"
        h2Class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left text-white"
        pClass="text-lg md:text-xl text-left text-white"
      />

      {/* Main Introduction Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Breathe Easy with Smart Air Quality Management
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Poor indoor air quality affects health, productivity, and well-being. Our comprehensive IoT-based air quality monitoring 
          solutions provide real-time visibility into critical air quality parameters including CO2, VOCs, particulate matter, 
          temperature, and humidity. With automated alerts and intelligent HVAC integration, you can maintain optimal indoor 
          environments while reducing energy costs and ensuring compliance with health and safety standards.
        </p>
      </div>

      {/* Image and Text Sections */}
      <ImageRightText
        title="Real-Time Air Quality Monitoring"
        description="Monitor critical air quality parameters continuously with our advanced IoT sensor network. Track CO2 levels, volatile organic compounds (VOCs), PM2.5, PM10, temperature, humidity, and more. Our sensors provide laboratory-grade accuracy with easy installation and minimal maintenance. Access real-time data through intuitive dashboards on any device, anytime, anywhere."
        linkText="Explore Air Quality Sensors"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1581093458791-9d42e4d5dd6f?w=800&h=600&fit=crop"
        imageAlt="Air Quality Monitoring System"
        imageHeight="500px"
        reverse={false}
      />

      <ImageRightText
        title="Intelligent HVAC Automation"
        description="Automatically optimize your HVAC systems based on real-time air quality data. Our smart controllers adjust ventilation, filtration, and climate control to maintain optimal conditions while minimizing energy consumption. Reduce HVAC operating costs by up to 30% while improving indoor air quality and occupant comfort."
        linkText="Learn About HVAC Integration"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
        imageAlt="Smart HVAC Control"
        imageHeight="500px"
        reverse={true}
      />

      <ImageRightText
        title="Automated Alerts & Compliance"
        description="Receive instant notifications when air quality parameters exceed safe thresholds. Automated alerts enable rapid response to potential health hazards. Comprehensive reporting tools help demonstrate compliance with OSHA, EPA, ASHRAE, and other regulatory standards. Maintain detailed historical records for audits and continuous improvement initiatives."
        linkText="Discover Alert Features"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
        imageAlt="Air Quality Alerts Dashboard"
        imageHeight="500px"
        reverse={false}
      />

      {/* Key Features Section */}
      <div className="bg-gray-50 py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Key Features & Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaWind className="text-5xl text-blue-600 mb-4" />,
                title: "Multi-Parameter Monitoring",
                description: "Track CO2, VOCs, PM2.5, PM10, temperature, humidity, and more"
              },
              {
                icon: <FaThermometerHalf className="text-5xl text-blue-600 mb-4" />,
                title: "HVAC Integration",
                description: "Automatic HVAC control based on real-time air quality data"
              },
              {
                icon: <FaLeaf className="text-5xl text-blue-600 mb-4" />,
                title: "Energy Optimization",
                description: "Reduce energy costs while maintaining optimal air quality"
              },
              {
                icon: <FaBell className="text-5xl text-blue-600 mb-4" />,
                title: "Instant Alerts",
                description: "Real-time notifications for air quality threshold breaches"
              },
              {
                icon: <FaChartLine className="text-5xl text-blue-600 mb-4" />,
                title: "Advanced Analytics",
                description: "Comprehensive dashboards with historical trends and insights"
              },
              {
                icon: <FaShieldAlt className="text-5xl text-blue-600 mb-4" />,
                title: "Compliance Reporting",
                description: "Automated reports for regulatory compliance and audits"
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Air Quality Solutions Section */}
      <CameraSolutions
        heading="Air Quality Monitoring Technology"
        subheading="Advanced IoT sensors and intelligent automation for comprehensive indoor air quality management."
        items={airQualitySolutions}
      />

      {/* Health Impact Section */}
      <div className="bg-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Why Indoor Air Quality Matters
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Poor air quality impacts health, productivity, and overall well-being
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-gray-600">Of Time Spent Indoors</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">2-5x</div>
              <div className="text-gray-600">More Polluted Than Outdoors</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">15%</div>
              <div className="text-gray-600">Productivity Increase</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">30%</div>
              <div className="text-gray-600">Energy Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Monitored Parameters Section */}
      <div className="bg-gray-50 py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Key Air Quality Parameters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Carbon Dioxide (CO2)",
                description: "Monitor CO2 levels to ensure adequate ventilation and prevent drowsiness and reduced cognitive function"
              },
              {
                title: "Volatile Organic Compounds (VOCs)",
                description: "Detect harmful VOCs from building materials, furniture, and cleaning products that affect health"
              },
              {
                title: "Particulate Matter (PM2.5 & PM10)",
                description: "Track fine particles that can penetrate deep into lungs and cause respiratory issues"
              },
              {
                title: "Temperature & Humidity",
                description: "Maintain optimal thermal comfort and prevent mold growth with precise environmental monitoring"
              },
              {
                title: "Formaldehyde",
                description: "Detect this common indoor pollutant found in building materials and furnishings"
              },
              {
                title: "Nitrogen Dioxide (NO2)",
                description: "Monitor combustion byproducts from gas appliances that can irritate airways"
              },
            ].map((param, index) => (
              <div key={index} className="bg-white border-l-4 border-blue-600 pl-6 py-4 rounded shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{param.title}</h3>
                <p className="text-gray-600">{param.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Application Scenarios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Corporate Offices",
                description: "Improve employee productivity and well-being with optimal air quality"
              },
              {
                title: "Schools & Universities",
                description: "Create healthier learning environments for students and staff"
              },
              {
                title: "Healthcare Facilities",
                description: "Maintain strict air quality standards for patient safety and infection control"
              },
              {
                title: "Manufacturing Plants",
                description: "Monitor industrial air quality to protect worker health and ensure compliance"
              },
              {
                title: "Hotels & Hospitality",
                description: "Enhance guest comfort and satisfaction with superior indoor air quality"
              },
              {
                title: "Retail Stores",
                description: "Create pleasant shopping environments that encourage longer customer visits"
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-gray-50 border-l-4 border-green-600 pl-6 py-4 rounded shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Benefits of Air Quality Monitoring
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive advantages for health, productivity, and operational efficiency
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Health & Safety</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Reduced sick building syndrome</li>
                <li>• Fewer respiratory issues</li>
                <li>• Improved overall health</li>
                <li>• Better sleep quality</li>
                <li>• Lower allergen exposure</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Productivity & Performance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Enhanced cognitive function</li>
                <li>• Increased concentration</li>
                <li>• Better decision-making</li>
                <li>• Reduced absenteeism</li>
                <li>• Higher satisfaction scores</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Cost Savings</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Lower energy costs</li>
                <li>• Reduced HVAC maintenance</li>
                <li>• Extended equipment life</li>
                <li>• Regulatory compliance</li>
                <li>• ROI in 12-18 months</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Solutions */}
      <InterestedSection 
        sectionTitle="You may also be interested in" 
        items={interestedItems}
      />
    </>
  );
};

export default Indoor_Air_Quality;
