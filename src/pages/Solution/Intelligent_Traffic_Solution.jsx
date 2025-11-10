import React from 'react';
import Banner from '../../components/Banner';
import ImageRightText from '../../components/ImageRightText';
import CameraSolutions from '../../components/Solution/CameraSolutions';
import InterestedSection from '../../components/Solution/InterestedSection';
import { FaTrafficLight, FaCamera, FaCar, FaChartLine, FaRoad, FaBrain } from 'react-icons/fa';

const Intelligent_Traffic_Solution = () => {
  const trafficSolutions = [
    {
      title: "AI Traffic Monitoring Cameras",
      description:
        "Advanced AI-powered cameras with automatic vehicle detection, classification, speed measurement, and traffic flow analysis capabilities.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/people-counting/related-products/related-product-vs350.png?t=1755857473062",
      link: "#",
    },
    {
      title: "Smart Traffic Controllers",
      description:
        "Intelligent traffic signal controllers that adapt to real-time traffic conditions, optimizing signal timing for improved traffic flow.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/smart-parking/related-products/related-product-ug65.png?t=1755857473062",
      link: "#",
    },
    {
      title: "License Plate Recognition System",
      description:
        "High-accuracy ANPR/LPR systems for vehicle identification, toll collection, parking management, and security applications.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/people-counting/related-products/related-product-uc500.png?t=1755857473062",
      link: "#",
    },
  ];

  const interestedItems = [
    {
      title: "Smart Parking",
      description:
        "Integrate traffic management with smart parking systems to reduce congestion caused by vehicles searching for parking spaces.",
      image: "https://www.milesight.com/static/pc/en/solution/smart-parking/smart-parking-video-cover.jpg?t=1755742990548",
    },
    {
      title: "City Surveillance",
      description:
        "Comprehensive city-wide surveillance infrastructure combined with traffic monitoring for enhanced public safety.",
      image: "https://pelco-566282893.imgix.net/hero-images/Safe-Cities-mobile-hero-1200x1503-v2_2025-04-22-131531_csrv.jpg?auto=format&fit=clip&q=80&w=1280&s=f1df9d777b7da85a1209dc089ad86173",
    },
    {
      title: "Video Surveillance",
      description:
        "Advanced video surveillance solutions for traffic incident detection and evidence collection.",
      image: "https://pelco-891395695.imgix.net/50-50-module-images/Healthcare-50-50-media-text-container-850x850-1.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=800&q=80&w=800&s=cd1e383435bdfcfb9bbf59e180c43a30",
    },
  ];

  return (
    <>
      <Banner
        title="Intelligent Traffic Solutions"
        description="Transform urban mobility with AI-powered traffic management systems. Real-time monitoring, adaptive signal control, and predictive analytics for safer, more efficient transportation networks."
        backgroundImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=600&fit=crop"
        customClass="min-h-[70vh]"
        contentClass="max-w-3xl ps-28"
        h2Class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left text-white"
        pClass="text-lg md:text-xl text-left text-white"
      />

      {/* Main Introduction Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Smart City Traffic Management for the Future
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Our intelligent traffic solutions leverage cutting-edge AI, IoT sensors, and big data analytics to revolutionize urban 
          traffic management. From adaptive traffic signal control to real-time incident detection, we help cities reduce congestion, 
          improve safety, and create more sustainable transportation systems. Our comprehensive platform integrates seamlessly with 
          existing infrastructure while providing scalability for future smart city initiatives.
        </p>
      </div>

      {/* Image and Text Sections */}
      <ImageRightText
        title="AI-Powered Traffic Flow Optimization"
        description="Harness the power of artificial intelligence to optimize traffic flow in real-time. Our adaptive traffic signal control system analyzes traffic patterns, predicts congestion, and automatically adjusts signal timing to minimize wait times and maximize throughput. Machine learning algorithms continuously improve performance based on historical data and current conditions."
        linkText="Discover Traffic Optimization"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1502101872923-d48509bff386?w=800&h=600&fit=crop"
        imageAlt="AI Traffic Flow Optimization"
        imageHeight="500px"
        reverse={false}
      />

      <ImageRightText
        title="Comprehensive Vehicle Monitoring & Analytics"
        description="Track and analyze vehicle movements across your entire transportation network. Our advanced camera systems provide automatic vehicle detection, classification, speed measurement, and traffic volume counting. Generate actionable insights on traffic patterns, peak hours, and bottlenecks to inform infrastructure planning and policy decisions."
        linkText="Learn About Vehicle Monitoring"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
        imageAlt="Vehicle Monitoring System"
        imageHeight="500px"
        reverse={true}
      />

      <ImageRightText
        title="Incident Detection & Emergency Response"
        description="Detect traffic incidents instantly and respond faster to emergencies. Our AI-powered system identifies accidents, stopped vehicles, wrong-way drivers, and other hazardous situations in real-time. Automatic alerts notify traffic management centers and emergency services, enabling rapid response and minimizing traffic disruption."
        linkText="Explore Incident Detection"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop"
        imageAlt="Incident Detection System"
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
                icon: <FaTrafficLight className="text-5xl text-blue-600 mb-4" />,
                title: "Adaptive Signal Control",
                description: "Real-time traffic signal optimization based on current traffic conditions"
              },
              {
                icon: <FaCamera className="text-5xl text-blue-600 mb-4" />,
                title: "AI Video Analytics",
                description: "Advanced computer vision for vehicle detection, classification, and tracking"
              },
              {
                icon: <FaCar className="text-5xl text-blue-600 mb-4" />,
                title: "License Plate Recognition",
                description: "High-accuracy ANPR for toll collection, parking, and security applications"
              },
              {
                icon: <FaChartLine className="text-5xl text-blue-600 mb-4" />,
                title: "Predictive Analytics",
                description: "Machine learning models predict traffic patterns and potential congestion"
              },
              {
                icon: <FaRoad className="text-5xl text-blue-600 mb-4" />,
                title: "Traffic Violation Detection",
                description: "Automatic detection of speeding, red light running, and other violations"
              },
              {
                icon: <FaBrain className="text-5xl text-blue-600 mb-4" />,
                title: "Smart Integration",
                description: "Seamless integration with existing traffic infrastructure and city systems"
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

      {/* Traffic Solutions Section */}
      <CameraSolutions
        heading="Intelligent Traffic Technology"
        subheading="Comprehensive suite of AI-powered solutions for modern traffic management and smart city infrastructure."
        items={trafficSolutions}
      />

      {/* Benefits Section */}
      <div className="bg-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Benefits of Intelligent Traffic Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Reduction in Traffic Congestion</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">25%</div>
              <div className="text-gray-600">Decrease in Travel Time</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
              <div className="text-gray-600">Reduction in Emissions</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">50%</div>
              <div className="text-gray-600">Faster Incident Response</div>
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
                title: "Urban Intersections",
                description: "Optimize signal timing at busy intersections to reduce wait times and improve traffic flow"
              },
              {
                title: "Highway Management",
                description: "Monitor highway conditions, detect incidents, and manage variable message signs"
              },
              {
                title: "Toll Collection",
                description: "Enable electronic toll collection with automatic license plate recognition"
              },
              {
                title: "Parking Enforcement",
                description: "Automate parking violation detection and streamline enforcement operations"
              },
              {
                title: "Traffic Analytics",
                description: "Generate comprehensive traffic studies for urban planning and infrastructure development"
              },
              {
                title: "Emergency Vehicle Priority",
                description: "Provide green light corridors for emergency vehicles to reduce response times"
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

      {/* Technology Stack Section */}
      <div className="bg-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Advanced Technology Stack
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our intelligent traffic solutions leverage the latest technologies for optimal performance
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">AI & Machine Learning</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Deep learning for vehicle detection</li>
                <li>• Neural networks for pattern recognition</li>
                <li>• Predictive modeling for traffic flow</li>
                <li>• Continuous learning and optimization</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-800">IoT & Sensors</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• High-resolution traffic cameras</li>
                <li>• Vehicle detection sensors</li>
                <li>• Environmental monitoring</li>
                <li>• Edge computing capabilities</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Big Data Analytics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Real-time data processing</li>
                <li>• Historical traffic analysis</li>
                <li>• Interactive dashboards</li>
                <li>• Custom reporting tools</li>
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

export default Intelligent_Traffic_Solution;
