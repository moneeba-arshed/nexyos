import React from 'react';
import Banner from '../../components/Banner';
import ImageRightText from '../../components/ImageRightText';
import CameraSolutions from '../../components/Solution/CameraSolutions';
import InterestedSection from '../../components/Solution/InterestedSection';
import { FaDesktop, FaMobileAlt, FaClock, FaShieldAlt, FaCloudUploadAlt, FaChartLine } from 'react-icons/fa';

const DisplayControl = () => {
  const displaySolutions = [
    {
      title: "Digital Signage Solutions",
      description:
        "Advanced digital signage technology for dynamic content display and real-time information distribution across your organization.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/people-counting/related-products/related-product-vs350.png?t=1755857473062",
      link: "#",
    },
    {
      title: "Smart Display Controllers",
      description:
        "Intelligent display control systems that enable centralized management of multiple displays with seamless content synchronization.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/people-counting/related-products/related-product-uc500.png?t=1755857473062",
      link: "#",
    },
    {
      title: "Interactive Display Systems",
      description:
        "Touch-enabled interactive displays for enhanced user engagement, perfect for retail, education, and corporate environments.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/people-counting/related-products/related-product-ws558.png?t=1755857473062",
      link: "#",
    },
  ];

  const interestedItems = [
    {
      title: "Video Surveillance",
      description:
        "Integrate advanced video surveillance systems with your display infrastructure for comprehensive security monitoring.",
      image: "https://pelco-891395695.imgix.net/50-50-module-images/Healthcare-50-50-media-text-container-850x850-1.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=800&q=80&w=800&s=cd1e383435bdfcfb9bbf59e180c43a30",
    },
    {
      title: "Smart Parking",
      description:
        "Enhance parking management with integrated display solutions showing real-time parking availability and guidance.",
      image: "https://www.milesight.com/static/pc/en/solution/smart-parking/smart-parking-video-cover.jpg?t=1755742990548",
    },
    {
      title: "Energy Efficiency",
      description:
        "Optimize energy consumption with smart display controls that automatically adjust based on usage patterns and ambient conditions.",
      image: "https://www.milesight.com/static/pc/en/solution/smart-office/cowork-smart-office-solutio-banner.png?t=1755854261655",
    },
  ];

  return (
    <>
      <Banner
        title="Display & Control Solutions"
        description="Transform your visual communication with intelligent display control systems. Manage, monitor, and optimize digital displays across your entire organization from a single platform."
        backgroundImage="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&h=600&fit=crop"
        customClass="min-h-[70vh]"
        contentClass="max-w-3xl ps-28"
        h2Class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left text-white"
        pClass="text-lg md:text-xl text-left text-white"
      />

      {/* Main Introduction Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Next-Generation Display Control Technology
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Our display control solutions empower businesses to deliver engaging visual experiences through intelligent content management, 
          real-time updates, and centralized control. From digital signage to interactive displays, we provide comprehensive solutions 
          that enhance communication, improve customer engagement, and streamline operations.
        </p>
      </div>

      {/* Image and Text Sections */}
      <ImageRightText
        title="Centralized Display Management"
        description="Take control of your entire display network from a single, intuitive dashboard. Schedule content, monitor display status, and manage multiple locations effortlessly. Our cloud-based platform ensures your displays are always up-to-date with the latest content and operating at peak performance."
        linkText="Learn More About Display Management"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
        imageAlt="Centralized Display Management Dashboard"
        imageHeight="500px"
        reverse={false}
      />

      <ImageRightText
        title="Real-Time Content Distribution"
        description="Deliver dynamic content to your displays instantly. Whether it's promotional materials, emergency alerts, or informational updates, our system ensures your message reaches the right audience at the right time. Support for multiple content formats including video, images, web pages, and live data feeds."
        linkText="Explore Content Management Features"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
        imageAlt="Real-Time Content Distribution"
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
                icon: <FaDesktop className="text-5xl text-blue-600 mb-4" />,
                title: "Multi-Display Support",
                description: "Manage unlimited displays across multiple locations with ease"
              },
              {
                icon: <FaMobileAlt className="text-5xl text-blue-600 mb-4" />,
                title: "Mobile Control",
                description: "Control and monitor your displays from anywhere using mobile devices"
              },
              {
                icon: <FaClock className="text-5xl text-blue-600 mb-4" />,
                title: "Smart Scheduling",
                description: "Automate content updates based on time, date, or custom triggers"
              },
              {
                icon: <FaShieldAlt className="text-5xl text-blue-600 mb-4" />,
                title: "Enterprise Security",
                description: "Advanced security features ensure your content and system remain protected"
              },
              {
                icon: <FaCloudUploadAlt className="text-5xl text-blue-600 mb-4" />,
                title: "Cloud-Based Platform",
                description: "Access your display network from anywhere with our reliable cloud infrastructure"
              },
              {
                icon: <FaChartLine className="text-5xl text-blue-600 mb-4" />,
                title: "Analytics & Reporting",
                description: "Gain insights into display performance and content effectiveness"
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

      {/* Display Solutions Section */}
      <CameraSolutions
        heading="Display & Control Solutions"
        subheading="Comprehensive display management solutions designed for various applications and industries, from retail to corporate environments."
        items={displaySolutions}
      />

      {/* Use Cases Section */}
      <div className="bg-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Retail & Shopping Centers",
                description: "Drive sales with engaging product displays, promotions, and wayfinding solutions"
              },
              {
                title: "Corporate Offices",
                description: "Enhance internal communications with digital bulletin boards and meeting room displays"
              },
              {
                title: "Healthcare Facilities",
                description: "Improve patient experience with clear wayfinding and important health information"
              },
              {
                title: "Education Institutions",
                description: "Keep students and staff informed with campus announcements and event schedules"
              },
              {
                title: "Transportation Hubs",
                description: "Provide real-time updates on arrivals, departures, and important travel information"
              },
              {
                title: "Hospitality & Hotels",
                description: "Welcome guests with interactive displays showcasing amenities and local attractions"
              },
            ].map((useCase, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 py-4">
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

export default DisplayControl;