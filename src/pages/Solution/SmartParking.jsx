import React from 'react';
import Banner from '../../components/Banner';
import ImageRightText from '../../components/ImageRightText';
import CameraSolutions from '../../components/Solution/CameraSolutions';
import InterestedSection from '../../components/Solution/InterestedSection';
import { FaParking, FaMobileAlt, FaChartBar, FaMapMarkedAlt, FaCreditCard, FaClock } from 'react-icons/fa';

const SmartParking = () => {
  const parkingSolutions = [
    {
      title: "LoRaWAN Parking Sensors",
      description:
        "Ultra-low power wireless parking sensors with long battery life and wide coverage area. Perfect for outdoor and underground parking facilities.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/smart-parking/related-products/related-product-vs133.png?t=1755857473062",
      link: "#",
    },
    {
      title: "Smart Parking Gateway",
      description:
        "Centralized gateway solution for managing multiple parking sensors and processing real-time parking data with edge computing capabilities.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/smart-parking/related-products/related-product-ug65.png?t=1755857473062",
      link: "#",
    },
    {
      title: "AI-Powered Parking Cameras",
      description:
        "Advanced camera systems with AI algorithms for automatic license plate recognition, parking occupancy detection, and vehicle tracking.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/people-counting/related-products/related-product-vs350.png?t=1755857473062",
      link: "#",
    },
  ];

  const interestedItems = [
    {
      title: "Intelligent Traffic Solution",
      description:
        "Integrate smart parking with intelligent traffic management systems for optimized urban mobility and reduced congestion.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    },
    {
      title: "Smart Spaces",
      description:
        "Extend smart parking capabilities to building management systems for comprehensive facility optimization.",
      image: "https://www.milesight.com/static/pc/en/solution/smart-office/cowork-smart-office-solutio-banner.png?t=1755854261655",
    },
    {
      title: "Display Control",
      description:
        "Real-time parking availability displays and digital signage to guide drivers to available spots efficiently.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
  ];

  return (
    <>
      <Banner
        title="Smart Parking Solutions"
        description="Revolutionize parking management with IoT-enabled smart parking systems. Real-time monitoring, automated guidance, and data-driven insights for efficient parking operations."
        backgroundImage="https://www.milesight.com/static/pc/en/solution/smart-parking/smart-parking-video-cover.jpg?t=1755742990548"
        customClass="min-h-[70vh]"
        contentClass="max-w-3xl ps-28"
        h2Class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left text-white"
        pClass="text-lg md:text-xl text-left text-white"
      />

      {/* Main Introduction Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Transform Parking Management with Smart Technology
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Our smart parking solutions leverage advanced IoT sensors, AI-powered cameras, and real-time data analytics to optimize 
          parking operations. From shopping malls and airports to city streets and corporate campuses, we help reduce congestion, 
          improve driver experience, and maximize parking space utilization while generating valuable insights for better decision-making.
        </p>
      </div>

      {/* Image and Text Sections */}
      <ImageRightText
        title="Real-Time Parking Occupancy Detection"
        description="Monitor every parking space in real-time with our advanced sensor network. LoRaWAN-based parking sensors provide accurate occupancy data with minimal power consumption and maintenance requirements. Drivers can easily locate available spots through mobile apps or digital signage, reducing search time and vehicle emissions."
        linkText="Explore Parking Sensors"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&h=600&fit=crop"
        imageAlt="Smart Parking Sensors"
        imageHeight="500px"
        reverse={false}
      />

      <ImageRightText
        title="Intelligent Parking Guidance System"
        description="Guide drivers to available parking spots efficiently with our intelligent guidance system. Dynamic signage displays real-time availability, turn-by-turn navigation, and zone-based parking information. Reduce traffic congestion within parking facilities and improve overall customer satisfaction with seamless parking experiences."
        linkText="Learn About Guidance Systems"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&h=600&fit=crop"
        imageAlt="Parking Guidance System"
        imageHeight="500px"
        reverse={true}
      />

      {/* Key Features Section */}
      <div className="bg-gray-50 py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Key Features & Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaParking className="text-5xl text-blue-600 mb-4" />,
                title: "Real-Time Availability",
                description: "Monitor parking space occupancy in real-time with 99% accuracy"
              },
              {
                icon: <FaMobileAlt className="text-5xl text-blue-600 mb-4" />,
                title: "Mobile Integration",
                description: "Seamless mobile app integration for finding and reserving parking spots"
              },
              {
                icon: <FaChartBar className="text-5xl text-blue-600 mb-4" />,
                title: "Analytics Dashboard",
                description: "Comprehensive analytics on usage patterns, peak hours, and revenue optimization"
              },
              {
                icon: <FaMapMarkedAlt className="text-5xl text-blue-600 mb-4" />,
                title: "Smart Navigation",
                description: "Turn-by-turn guidance to available parking spaces within facilities"
              },
              {
                icon: <FaCreditCard className="text-5xl text-blue-600 mb-4" />,
                title: "Automated Payments",
                description: "Cashless payment integration with multiple payment gateway support"
              },
              {
                icon: <FaClock className="text-5xl text-blue-600 mb-4" />,
                title: "Violation Detection",
                description: "Automatic detection of parking violations and overstay alerts"
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

      {/* Parking Solutions Section */}
      <CameraSolutions
        heading="Smart Parking Technology"
        subheading="Advanced IoT sensors and AI-powered solutions for comprehensive parking management across various environments."
        items={parkingSolutions}
      />

      {/* Benefits Section */}
      <div className="bg-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Benefits for Different Stakeholders
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Smart parking solutions deliver value to everyone involved in the parking ecosystem
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">For Drivers</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Save time finding parking spots</li>
                <li>✓ Reserve spots in advance</li>
                <li>✓ Seamless mobile payment</li>
                <li>✓ Navigate directly to available spaces</li>
                <li>✓ Reduce fuel consumption and emissions</li>
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">For Operators</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Maximize space utilization</li>
                <li>✓ Increase revenue opportunities</li>
                <li>✓ Reduce operational costs</li>
                <li>✓ Data-driven decision making</li>
                <li>✓ Automated enforcement</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-purple-800">For Cities</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Reduce traffic congestion</li>
                <li>✓ Lower carbon emissions</li>
                <li>✓ Improve urban mobility</li>
                <li>✓ Better city planning insights</li>
                <li>✓ Enhanced citizen satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-gray-50 py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Application Scenarios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Shopping Malls & Retail Centers",
                description: "Enhance customer experience with easy parking and improve foot traffic during peak hours"
              },
              {
                title: "Airports & Transportation Hubs",
                description: "Manage high-volume parking with real-time tracking and automated payment systems"
              },
              {
                title: "Corporate Campuses",
                description: "Optimize employee parking allocation and visitor management with smart reservations"
              },
              {
                title: "City Street Parking",
                description: "Maximize on-street parking efficiency with enforcement and dynamic pricing"
              },
              {
                title: "Hospitals & Healthcare",
                description: "Provide stress-free parking for patients and visitors with guidance and reservations"
              },
              {
                title: "Universities & Education",
                description: "Manage student, faculty, and visitor parking with permit tracking and enforcement"
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-white border-l-4 border-blue-600 pl-6 py-4 rounded shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
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

export default SmartParking;