import React from 'react';
import Banner from '../../components/Banner';
import ImageRightText from '../../components/ImageRightText';
import CameraSolutions from '../../components/Solution/CameraSolutions';
import InterestedSection from '../../components/Solution/InterestedSection';
import { FaIndustry, FaRobot, FaChartLine, FaShieldAlt, FaTools, FaClipboardCheck } from 'react-icons/fa';

const Manufacturing = () => {
  const manufacturingSolutions = [
    {
      title: "Industrial IoT Sensors",
      description:
        "Advanced IoT sensors for monitoring equipment performance, environmental conditions, and production metrics in real-time.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/smart-parking/related-products/related-product-vs133.png?t=1755857473062",
      link: "#",
    },
    {
      title: "AI-Powered Quality Inspection",
      description:
        "Machine vision systems with AI algorithms for automated quality control, defect detection, and product inspection.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/people-counting/related-products/related-product-vs350.png?t=1755857473062",
      link: "#",
    },
    {
      title: "Smart Manufacturing Gateway",
      description:
        "Edge computing gateway for data aggregation, processing, and real-time analytics from multiple production systems.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/smart-parking/related-products/related-product-ug65.png?t=1755857473062",
      link: "#",
    },
  ];

  const interestedItems = [
    {
      title: "Energy Efficiency",
      description:
        "Optimize energy consumption in manufacturing facilities with smart monitoring and automated control systems.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    },
    {
      title: "Video Surveillance",
      description:
        "Enhance security and safety in manufacturing facilities with comprehensive video surveillance solutions.",
      image: "https://pelco-891395695.imgix.net/50-50-module-images/Healthcare-50-50-media-text-container-850x850-1.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=800&q=80&w=800&s=cd1e383435bdfcfb9bbf59e180c43a30",
    },
    {
      title: "Indoor Air Quality",
      description:
        "Monitor and maintain optimal air quality in production environments for worker safety and product quality.",
      image: "https://www.milesight.com/static/pc/en/solution/smart-office/cowork-smart-office-solutio-banner.png?t=1755854261655",
    },
  ];

  return (
    <>
      <Banner
        title="Smart Manufacturing Solutions"
        description="Transform your production facilities with Industry 4.0 technologies. Real-time monitoring, predictive maintenance, and data-driven insights for optimized manufacturing operations."
        backgroundImage="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&h=600&fit=crop"
        customClass="min-h-[70vh]"
        contentClass="max-w-3xl ps-28"
        h2Class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left text-white"
        pClass="text-lg md:text-xl text-left text-white"
      />

      {/* Main Introduction Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Industry 4.0 for Modern Manufacturing
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Our smart manufacturing solutions leverage IoT, AI, and advanced analytics to revolutionize industrial operations. 
          From predictive maintenance and quality control to supply chain optimization and worker safety, we help manufacturers 
          increase productivity, reduce downtime, and improve product quality. Our comprehensive platform integrates seamlessly 
          with existing production systems while providing the flexibility to scale as your operations grow.
        </p>
      </div>

      {/* Image and Text Sections */}
      <ImageRightText
        title="Predictive Maintenance & Equipment Monitoring"
        description="Prevent costly equipment failures with AI-powered predictive maintenance. Our IoT sensors continuously monitor machine health, vibration, temperature, and performance metrics. Advanced analytics identify potential issues before they cause downtime, enabling proactive maintenance scheduling and extending equipment lifespan while reducing maintenance costs."
        linkText="Explore Predictive Maintenance"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
        imageAlt="Predictive Maintenance System"
        imageHeight="500px"
        reverse={false}
      />

      <ImageRightText
        title="Automated Quality Control & Inspection"
        description="Ensure consistent product quality with AI-powered visual inspection systems. Our machine vision technology detects defects, measures dimensions, and verifies assembly accuracy at production speed. Reduce human error, increase inspection throughput, and maintain comprehensive quality records for compliance and continuous improvement."
        linkText="Learn About Quality Control"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
        imageAlt="Quality Control System"
        imageHeight="500px"
        reverse={true}
      />

      <ImageRightText
        title="Production Monitoring & Analytics"
        description="Gain real-time visibility into your entire production process. Track OEE (Overall Equipment Effectiveness), monitor production rates, identify bottlenecks, and optimize resource allocation. Our comprehensive analytics platform provides actionable insights that drive continuous improvement and operational excellence."
        linkText="Discover Production Analytics"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
        imageAlt="Production Analytics Dashboard"
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
                icon: <FaIndustry className="text-5xl text-blue-600 mb-4" />,
                title: "Real-Time Monitoring",
                description: "Monitor all aspects of production in real-time from equipment to inventory"
              },
              {
                icon: <FaRobot className="text-5xl text-blue-600 mb-4" />,
                title: "Automation Integration",
                description: "Seamlessly integrate with robots, PLCs, and automated production systems"
              },
              {
                icon: <FaChartLine className="text-5xl text-blue-600 mb-4" />,
                title: "Advanced Analytics",
                description: "Comprehensive dashboards with predictive analytics and KPI tracking"
              },
              {
                icon: <FaShieldAlt className="text-5xl text-blue-600 mb-4" />,
                title: "Safety Monitoring",
                description: "Ensure worker safety with environmental monitoring and hazard detection"
              },
              {
                icon: <FaTools className="text-5xl text-blue-600 mb-4" />,
                title: "Maintenance Management",
                description: "Predictive and preventive maintenance scheduling with work order management"
              },
              {
                icon: <FaClipboardCheck className="text-5xl text-blue-600 mb-4" />,
                title: "Quality Assurance",
                description: "Automated quality control with defect detection and traceability"
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

      {/* Manufacturing Solutions Section */}
      <CameraSolutions
        heading="Smart Manufacturing Technology"
        subheading="Comprehensive IoT and AI solutions designed to optimize every aspect of your manufacturing operations."
        items={manufacturingSolutions}
      />

      {/* Benefits Section */}
      <div className="bg-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Measurable Business Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">35%</div>
              <div className="text-gray-600">Reduction in Downtime</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">25%</div>
              <div className="text-gray-600">Increase in Productivity</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
              <div className="text-gray-600">Lower Maintenance Costs</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">50%</div>
              <div className="text-gray-600">Fewer Quality Defects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-gray-50 py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Manufacturing Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Automotive Manufacturing",
                description: "Optimize assembly lines, track components, and ensure quality in automotive production"
              },
              {
                title: "Electronics Assembly",
                description: "Monitor precise manufacturing processes with automated defect detection"
              },
              {
                title: "Food & Beverage Production",
                description: "Maintain safety standards, track batches, and ensure consistent quality"
              },
              {
                title: "Pharmaceutical Manufacturing",
                description: "Ensure compliance with strict regulations and maintain detailed production records"
              },
              {
                title: "Metal Fabrication",
                description: "Monitor equipment performance and optimize cutting, welding, and finishing processes"
              },
              {
                title: "Textile Manufacturing",
                description: "Track production metrics and maintain quality across weaving and finishing operations"
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

      {/* Implementation Benefits Section */}
      <div className="bg-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Transform Your Manufacturing Operations
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Achieve operational excellence with our comprehensive smart manufacturing solution
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Operational Efficiency</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Reduce equipment downtime</li>
                <li>• Optimize production schedules</li>
                <li>• Improve resource utilization</li>
                <li>• Streamline workflows</li>
                <li>• Minimize waste and rework</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Quality & Compliance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Automated quality inspection</li>
                <li>• Complete product traceability</li>
                <li>• Regulatory compliance tracking</li>
                <li>• Defect pattern analysis</li>
                <li>• Quality documentation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Cost Reduction</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Lower maintenance costs</li>
                <li>• Reduced energy consumption</li>
                <li>• Minimize material waste</li>
                <li>• Optimize inventory levels</li>
                <li>• Improve yield rates</li>
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

export default Manufacturing;

