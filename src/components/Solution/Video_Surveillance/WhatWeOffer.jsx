import React from "react";
import { FaVideo, FaEye, FaShieldAlt, FaCog } from "react-icons/fa";
import { MdSecurity, MdAnalytics } from "react-icons/md";

const WhatWeOffer = () => {
  return (
    <section className=" bg-white py-40">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6">What we offer</h2>

        {/* Description */}
        <p className=" text-gray-700 mb-12">
          Our comprehensive video surveillance solutions provide advanced CCTV systems 
          with intelligent video analytics, real-time monitoring, and cutting-edge 
          security features. From high-definition cameras to AI-powered detection 
          systems, we deliver complete surveillance solutions for businesses, 
          institutions, and smart cities.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {/* Card 1 - HD Cameras */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-blue-100 p-6 rounded-full mb-4">
              <FaVideo className="text-blue-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              HD Video Cameras
            </h3>
            <p className="text-gray-600">
              High-definition cameras with night vision and wide-angle coverage
            </p>
          </div>

          {/* Card 2 - Real-time Monitoring */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-green-100 p-6 rounded-full mb-4">
              <FaEye className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Real-time Monitoring
            </h3>
            <p className="text-gray-600">
              24/7 live video streaming with remote access capabilities
            </p>
          </div>

          {/* Card 3 - AI Analytics */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-purple-100 p-6 rounded-full mb-4">
              <MdAnalytics className="text-purple-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              AI Video Analytics
            </h3>
            <p className="text-gray-600">
              Intelligent detection of motion, faces, and suspicious activities
            </p>
          </div>

          {/* Card 4 - Security Management */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-red-100 p-6 rounded-full mb-4">
              <MdSecurity className="text-red-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Security Management
            </h3>
            <p className="text-gray-600">
              Comprehensive security dashboard with alert systems
            </p>
          </div>

          {/* Card 5 - Cloud Storage */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-orange-100 p-6 rounded-full mb-4">
              <FaShieldAlt className="text-orange-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Cloud Storage
            </h3>
            <p className="text-gray-600">
              Secure cloud-based video storage with easy retrieval
            </p>
          </div>

          {/* Card 6 - System Integration */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-indigo-100 p-6 rounded-full mb-4">
              <FaCog className="text-indigo-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              System Integration
            </h3>
            <p className="text-gray-600">
              Seamless integration with existing security infrastructure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
