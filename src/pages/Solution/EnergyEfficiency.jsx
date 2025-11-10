import React from 'react';
import Banner from '../../components/Banner';
import ImageRightText from '../../components/ImageRightText';
import CameraSolutions from '../../components/Solution/CameraSolutions';
import InterestedSection from '../../components/Solution/InterestedSection';
import { FaBolt, FaLeaf, FaChartLine, FaLightbulb, FaThermometerHalf, FaCoins } from 'react-icons/fa';

const EnergyEfficiency = () => {
  const energySolutions = [
    {
      title: "Smart Energy Meters",
      description:
        "IoT-enabled smart meters for real-time energy consumption monitoring, load profiling, and demand management across facilities.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/smart-parking/related-products/related-product-vs133.png?t=1755857473062",
      link: "#",
    },
    {
      title: "HVAC Optimization System",
      description:
        "Intelligent HVAC control with AI-powered optimization that reduces energy consumption while maintaining optimal comfort levels.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/smart-parking/related-products/related-product-ug65.png?t=1755857473062",
      link: "#",
    },
    {
      title: "Smart Lighting Controls",
      description:
        "Automated lighting systems with occupancy detection, daylight harvesting, and scheduling for maximum energy savings.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/people-counting/related-products/related-product-uc500.png?t=1755857473062",
      link: "#",
    },
  ];

  const interestedItems = [
    {
      title: "Indoor Air Quality",
      description:
        "Balance energy efficiency with healthy indoor environments through integrated air quality management.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
    },
    {
      title: "Manufacturing",
      description:
        "Optimize industrial energy consumption with real-time monitoring and intelligent automation.",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
    },
    {
      title: "Smart Spaces",
      description:
        "Create energy-efficient smart buildings with comprehensive facility management solutions.",
      image: "https://www.milesight.com/static/pc/en/solution/smart-office/cowork-smart-office-solutio-banner.png?t=1755854261655",
    },
  ];

  return (
    <>
      <Banner
        title="Energy Efficiency Solutions"
        description="Reduce costs and environmental impact with intelligent energy management. Real-time monitoring, automated optimization, and data-driven insights for sustainable operations."
        backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=600&fit=crop"
        customClass="min-h-[70vh]"
        contentClass="max-w-3xl ps-28"
        h2Class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left text-white"
        pClass="text-lg md:text-xl text-left text-white"
      />

      {/* Main Introduction Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Smart Energy Management for Sustainable Future
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Rising energy costs and environmental concerns demand intelligent energy management solutions. Our comprehensive 
          IoT platform provides real-time visibility into energy consumption across all building systems - HVAC, lighting, 
          equipment, and more. AI-powered analytics identify waste, predict consumption patterns, and automatically optimize 
          operations for maximum efficiency. Reduce energy costs by up to 40% while meeting sustainability goals and 
          regulatory requirements.
        </p>
      </div>

      {/* Image and Text Sections */}
      <ImageRightText
        title="Real-Time Energy Monitoring & Analytics"
        description="Gain complete visibility into your energy consumption with real-time monitoring across all systems and facilities. Our smart meters and IoT sensors track electricity, gas, water, and other utilities at granular levels. Advanced analytics identify anomalies, detect waste, and provide actionable insights. Interactive dashboards make it easy to understand consumption patterns, benchmark performance, and track progress toward energy goals."
        linkText="Explore Energy Monitoring"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
        imageAlt="Energy Monitoring Dashboard"
        imageHeight="500px"
        reverse={false}
      />

      <ImageRightText
        title="Intelligent HVAC Optimization"
        description="HVAC systems typically consume 40-60% of building energy. Our AI-powered optimization platform automatically adjusts heating, cooling, and ventilation based on occupancy, weather conditions, and usage patterns. Predictive algorithms anticipate demand and pre-condition spaces for maximum efficiency. Reduce HVAC energy consumption by 30-40% while maintaining or improving occupant comfort."
        linkText="Learn About HVAC Optimization"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
        imageAlt="Smart HVAC System"
        imageHeight="500px"
        reverse={true}
      />

      <ImageRightText
        title="Automated Demand Response & Load Management"
        description="Participate in demand response programs and reduce peak demand charges with automated load management. Our system automatically adjusts non-critical loads during peak periods, shifting consumption to off-peak hours when possible. Real-time price monitoring enables dynamic responses to time-of-use rates and grid conditions. Maximize savings while supporting grid stability."
        linkText="Discover Demand Response"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
        imageAlt="Demand Response System"
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
                icon: <FaBolt className="text-5xl text-blue-600 mb-4" />,
                title: "Real-Time Monitoring",
                description: "Track energy consumption across all systems with second-by-second accuracy"
              },
              {
                icon: <FaLeaf className="text-5xl text-blue-600 mb-4" />,
                title: "AI Optimization",
                description: "Machine learning algorithms continuously optimize energy usage"
              },
              {
                icon: <FaChartLine className="text-5xl text-blue-600 mb-4" />,
                title: "Predictive Analytics",
                description: "Forecast consumption and identify efficiency opportunities"
              },
              {
                icon: <FaLightbulb className="text-5xl text-blue-600 mb-4" />,
                title: "Smart Automation",
                description: "Automated control of lighting, HVAC, and equipment based on occupancy"
              },
              {
                icon: <FaThermometerHalf className="text-5xl text-blue-600 mb-4" />,
                title: "Comfort Management",
                description: "Maintain optimal comfort while minimizing energy waste"
              },
              {
                icon: <FaCoins className="text-5xl text-blue-600 mb-4" />,
                title: "Cost Reduction",
                description: "Reduce energy bills by 30-40% through intelligent optimization"
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

      {/* Energy Solutions Section */}
      <CameraSolutions
        heading="Energy Management Technology"
        subheading="Comprehensive IoT solutions for monitoring, analyzing, and optimizing energy consumption across all facility systems."
        items={energySolutions}
      />

      {/* Benefits Section */}
      <div className="bg-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Measurable Energy Savings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">30-40%</div>
              <div className="text-gray-600">Reduction in Energy Costs</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">35%</div>
              <div className="text-gray-600">Lower HVAC Consumption</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
              <div className="text-gray-600">Lighting Energy Savings</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">12-18</div>
              <div className="text-gray-600">Months Payback Period</div>
            </div>
          </div>
        </div>
      </div>

      {/* Energy Saving Strategies Section */}
      <div className="bg-gray-50 py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Comprehensive Energy Optimization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "HVAC Optimization",
                description: "Intelligent temperature control, occupancy-based conditioning, and predictive maintenance"
              },
              {
                title: "Smart Lighting",
                description: "Occupancy detection, daylight harvesting, dimming controls, and automated scheduling"
              },
              {
                title: "Peak Demand Management",
                description: "Reduce demand charges by shifting loads and managing consumption during peak periods"
              },
              {
                title: "Equipment Monitoring",
                description: "Track major equipment energy usage and identify inefficient or malfunctioning systems"
              },
              {
                title: "Renewable Integration",
                description: "Optimize solar, wind, and other renewable energy sources with battery storage"
              },
              {
                title: "Behavioral Insights",
                description: "Engage occupants with real-time feedback and gamification to encourage conservation"
              },
            ].map((strategy, index) => (
              <div key={index} className="bg-white border-l-4 border-blue-600 pl-6 py-4 rounded shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{strategy.title}</h3>
                <p className="text-gray-600">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Commercial Buildings",
                description: "Reduce operating costs in offices, retail, and mixed-use developments"
              },
              {
                title: "Manufacturing Facilities",
                description: "Optimize industrial processes and reduce production energy costs"
              },
              {
                title: "Healthcare Facilities",
                description: "Balance energy efficiency with critical 24/7 operations and patient comfort"
              },
              {
                title: "Educational Institutions",
                description: "Reduce campus energy costs while maintaining learning environments"
              },
              {
                title: "Hotels & Hospitality",
                description: "Optimize guest room energy use and common area systems"
              },
              {
                title: "Data Centers",
                description: "Maximize cooling efficiency and reduce power consumption"
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

      {/* Sustainability Benefits Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Triple Bottom Line Benefits
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Energy efficiency delivers economic, environmental, and social value
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Economic Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Lower utility bills</li>
                <li>• Reduced maintenance costs</li>
                <li>• Avoided equipment upgrades</li>
                <li>• Increased property value</li>
                <li>• Improved operational efficiency</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Environmental Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Reduced carbon footprint</li>
                <li>• Lower greenhouse gas emissions</li>
                <li>• Decreased resource consumption</li>
                <li>• Support sustainability goals</li>
                <li>• Regulatory compliance</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Social Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Improved occupant comfort</li>
                <li>• Enhanced productivity</li>
                <li>• Better indoor air quality</li>
                <li>• Corporate social responsibility</li>
                <li>• Positive brand image</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Calculator Section */}
      <div className="bg-blue-600 text-white py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Calculate Your Energy Savings
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            See how much you could save with our energy efficiency solutions. Most customers achieve 30-40% reduction 
            in energy costs with payback periods of 12-18 months.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Energy Audit
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Energy Experts
            </a>
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

export default EnergyEfficiency;






