import React from 'react';
import Banner from '../../components/Banner';
import ImageRightText from '../../components/ImageRightText';
import CameraSolutions from '../../components/Solution/CameraSolutions';
import InterestedSection from '../../components/Solution/InterestedSection';
import { FaGraduationCap, FaShieldAlt, FaUsers, FaChalkboardTeacher, FaBell, FaChartLine } from 'react-icons/fa';

const Education = () => {
  const educationSolutions = [
    {
      title: "Campus Security Cameras",
      description:
        "High-definition surveillance cameras with AI analytics for comprehensive campus security, student safety, and emergency response.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/people-counting/related-products/related-product-vs350.png?t=1755857473062",
      link: "#",
    },
    {
      title: "Smart Classroom Solutions",
      description:
        "IoT-enabled classroom management systems with occupancy detection, environmental monitoring, and resource optimization.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/people-counting/related-products/related-product-uc500.png?t=1755857473062",
      link: "#",
    },
    {
      title: "HALO Smart Sensor",
      description:
        "Multi-sensor device for detecting vaping, air quality issues, and security events in privacy-sensitive areas like restrooms.",
      img: "https://www.milesight.com/static/pc/en/page/technology/solution/people-counting/related-products/related-product-ws558.png?t=1755857473062",
      link: "#",
    },
  ];

  const interestedItems = [
    {
      title: "Smart Parking",
      description:
        "Streamline campus parking with real-time availability tracking for students, faculty, and visitors.",
      image: "https://www.milesight.com/static/pc/en/solution/smart-parking/smart-parking-video-cover.jpg?t=1755742990548",
    },
    {
      title: "Indoor Air Quality",
      description:
        "Monitor and maintain healthy learning environments with advanced air quality monitoring systems.",
      image: "https://www.milesight.com/static/pc/en/solution/smart-office/cowork-smart-office-solutio-banner.png?t=1755854261655",
    },
    {
      title: "Video Surveillance",
      description:
        "Comprehensive video surveillance solutions for enhanced campus security and incident investigation.",
      image: "https://pelco-891395695.imgix.net/50-50-module-images/Healthcare-50-50-media-text-container-850x850-1.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=800&q=80&w=800&s=cd1e383435bdfcfb9bbf59e180c43a30",
    },
  ];

  return (
    <>
      <Banner
        title="Smart Education Solutions"
        description="Transform learning environments with intelligent technology. Create safer campuses, optimize resources, and enhance educational experiences through IoT and AI-powered solutions."
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=600&fit=crop"
        customClass="min-h-[70vh]"
        contentClass="max-w-3xl ps-28"
        h2Class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left text-white"
        pClass="text-lg md:text-xl text-left text-white"
      />

      {/* Main Introduction Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Building Safer, Smarter Learning Environments
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Our comprehensive education solutions address the unique challenges of K-12 schools, universities, and educational 
          institutions. From campus security and student safety to classroom optimization and resource management, we provide 
          integrated technology that creates secure, efficient, and engaging learning environments. Our solutions comply with 
          privacy regulations while delivering the visibility and insights needed to protect students and enhance operations.
        </p>
      </div>

      {/* Image and Text Sections */}
      <ImageRightText
        title="Campus Security & Student Safety"
        description="Protect students, faculty, and staff with comprehensive security solutions designed for educational environments. Our AI-powered cameras provide real-time monitoring, automatic threat detection, and rapid emergency response capabilities. Integration with access control, emergency systems, and local law enforcement ensures a coordinated approach to campus safety."
        linkText="Explore Campus Security"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop"
        imageAlt="Campus Security System"
        imageHeight="500px"
        reverse={false}
      />

      <ImageRightText
        title="Smart Classroom Management"
        description="Optimize classroom utilization and create better learning environments with IoT-enabled smart classroom solutions. Monitor occupancy, track attendance, control environmental conditions, and manage resources efficiently. Real-time analytics help administrators make data-driven decisions about space allocation, energy usage, and facility maintenance."
        linkText="Learn About Smart Classrooms"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
        imageAlt="Smart Classroom Technology"
        imageHeight="500px"
        reverse={true}
      />

      <ImageRightText
        title="Vaping & Air Quality Detection"
        description="Address vaping concerns and maintain healthy indoor environments with our HALO Smart Sensor. This privacy-compliant device detects vaping, monitors air quality, and identifies security events in restrooms, locker rooms, and other privacy-sensitive areas. Receive instant alerts and respond proactively to health and safety issues."
        linkText="Discover HALO Smart Sensor"
        linkHref="/contact"
        imageSrc="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop"
        imageAlt="Air Quality Monitoring"
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
                icon: <FaShieldAlt className="text-5xl text-blue-600 mb-4" />,
                title: "Enhanced Security",
                description: "AI-powered surveillance with real-time threat detection and emergency alerts"
              },
              {
                icon: <FaUsers className="text-5xl text-blue-600 mb-4" />,
                title: "Attendance Tracking",
                description: "Automated attendance monitoring and visitor management systems"
              },
              {
                icon: <FaChalkboardTeacher className="text-5xl text-blue-600 mb-4" />,
                title: "Classroom Optimization",
                description: "Smart space utilization and resource allocation for better efficiency"
              },
              {
                icon: <FaBell className="text-5xl text-blue-600 mb-4" />,
                title: "Emergency Response",
                description: "Integrated emergency notification and lockdown systems"
              },
              {
                icon: <FaGraduationCap className="text-5xl text-blue-600 mb-4" />,
                title: "Student Well-being",
                description: "Air quality monitoring and health-focused environmental controls"
              },
              {
                icon: <FaChartLine className="text-5xl text-blue-600 mb-4" />,
                title: "Analytics Dashboard",
                description: "Comprehensive insights on safety, utilization, and operational metrics"
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

      {/* Education Solutions Section */}
      <CameraSolutions
        heading="Smart Education Technology"
        subheading="Comprehensive solutions designed specifically for educational institutions, from K-12 schools to universities."
        items={educationSolutions}
      />

      {/* Benefits Section */}
      <div className="bg-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Creating Safer, More Efficient Campuses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-gray-600">Faster Emergency Response</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-600">Reduction in Security Incidents</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
              <div className="text-gray-600">Improved Space Utilization</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">45%</div>
              <div className="text-gray-600">Lower Operational Costs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-gray-50 py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Education Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "K-12 Schools",
                description: "Enhance student safety with comprehensive security, visitor management, and emergency response systems"
              },
              {
                title: "Universities & Colleges",
                description: "Secure large campuses with integrated surveillance, access control, and analytics"
              },
              {
                title: "Student Dormitories",
                description: "Protect residential areas with 24/7 monitoring and controlled building access"
              },
              {
                title: "Athletic Facilities",
                description: "Monitor sports complexes, stadiums, and recreation centers for safety and operations"
              },
              {
                title: "Parking Management",
                description: "Optimize campus parking with real-time availability and automated enforcement"
              },
              {
                title: "Library & Study Spaces",
                description: "Track occupancy, manage resources, and ensure secure quiet study environments"
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

      {/* Safety Features Section */}
      <div className="bg-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Comprehensive Campus Safety Solutions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Protect your educational community with multi-layered security technology
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Physical Security</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AI-powered video surveillance</li>
                <li>• Access control integration</li>
                <li>• Perimeter monitoring</li>
                <li>• License plate recognition</li>
                <li>• Visitor management</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Student Well-being</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Vaping detection</li>
                <li>• Air quality monitoring</li>
                <li>• Sound anomaly detection</li>
                <li>• Temperature monitoring</li>
                <li>• Health compliance tracking</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Emergency Response</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Panic button integration</li>
                <li>• Mass notification systems</li>
                <li>• Lockdown procedures</li>
                <li>• First responder integration</li>
                <li>• Incident reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="bg-gray-50 py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Privacy & Compliance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our solutions are designed with privacy in mind, complying with FERPA, state privacy laws, and educational 
            institution requirements. We provide the security you need while respecting student privacy rights.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="bg-white px-8 py-4 rounded-lg shadow-md">
              <span className="font-semibold text-gray-800">FERPA Compliant</span>
            </div>
            <div className="bg-white px-8 py-4 rounded-lg shadow-md">
              <span className="font-semibold text-gray-800">NDAA Compliant</span>
            </div>
            <div className="bg-white px-8 py-4 rounded-lg shadow-md">
              <span className="font-semibold text-gray-800">Privacy by Design</span>
            </div>
            <div className="bg-white px-8 py-4 rounded-lg shadow-md">
              <span className="font-semibold text-gray-800">Cybersecurity Standards</span>
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

export default Education;






