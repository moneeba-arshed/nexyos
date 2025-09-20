// DeveloperPartner.jsx
import React, { useState, useEffect } from "react";
import styles from "../../style/PartnerProgram.module.css";
import Banner from "../../components/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Contact from "../../components/Contact";
import BannerIOT from "../../components/BannerIOT";

const DeveloperPartner = () => {
  const [currentImage, setCurrentImage] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  // Images data
  const images = {
    default:
      "https://www.milesight.com/static/pc/en/company/partner-program/milesight-events.jpg?t=1746582988309",
    development:
      "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
    api:
      "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
    sdk:
      "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
    integration:
      "https://www.milesight.com/static/pc/en/company/partner-program/milesight-product-portfolio.png?t=1746582988309",
    support:
      "https://www.milesight.com/static/pc/en/company/about-us/milesight-innovation.jpg?t=1746582955703",
  };

  // Developer Tools data for Swiper
  const developerTools = [
    {
      title: "API Documentation",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
      description: "Comprehensive REST API documentation with examples",
      icon: "ph ph-code"
    },
    {
      title: "SDK Libraries",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
      description: "Multi-language SDKs for seamless integration",
      icon: "ph ph-package"
    },
    {
      title: "Code Examples",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
      description: "Ready-to-use code snippets and templates",
      icon: "ph ph-code-simple"
    },
    {
      title: "Testing Tools",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
      description: "Comprehensive testing and debugging utilities",
      icon: "ph ph-bug"
    },
    {
      title: "Development Kits",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
      description: "Hardware and software development kits",
      icon: "ph ph-cpu"
    },
    {
      title: "Cloud APIs",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
      description: "Cloud-native APIs for scalable solutions",
      icon: "ph ph-cloud"
    },
    {
      title: "IoT Frameworks",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
      description: "IoT development frameworks and libraries",
      icon: "ph ph-wifi"
    },
    {
      title: "Analytics APIs",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
      description: "Data analytics and visualization APIs",
      icon: "ph ph-chart-line"
    },
  ];

  const handleHeadingClick = (imageKey) => {
    setCurrentImage(imageKey);
  };

  // Animation effects
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // In-page CSS styles with animations
  const pageStyles = {
    heroSection: {
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      color: 'white',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
      animation: 'fadeInUp 1s ease-out'
    },
    heroTitle: {
      color: '#00d4ff',
      fontSize: '3.5rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
      animation: 'slideInLeft 1.2s ease-out 0.3s both'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      lineHeight: '1.8',
      marginBottom: '2.5rem',
      color: '#e0e0e0',
      animation: 'slideInLeft 1.2s ease-out 0.6s both'
    },
    codeTerminal: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      border: '2px solid #00d4ff',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
      backdropFilter: 'blur(10px)',
      animation: 'slideInRight 1.2s ease-out 0.3s both',
      transition: 'all 0.3s ease'
    },
    codeText: {
      color: '#00d4ff',
      fontSize: '0.9rem',
      margin: '0',
      fontFamily: 'monospace'
    },
    liveBadge: {
      backgroundColor: '#00d4ff',
      color: '#000',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: '600',
      animation: 'pulse 2s infinite'
    },
    primaryButton: {
      backgroundColor: '#00d4ff',
      borderColor: '#00d4ff',
      color: '#000',
      padding: '0.875rem 2rem',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      border: 'none',
      animation: 'slideInUp 1s ease-out 0.9s both'
    },
    outlineButton: {
      backgroundColor: 'transparent',
      borderColor: '#00d4ff',
      color: '#00d4ff',
      padding: '0.875rem 2rem',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      border: '2px solid #00d4ff',
      animation: 'slideInUp 1s ease-out 1.2s both'
    },
    section: {
      padding: '80px 0',
      backgroundColor: '#ffffff',
      animation: 'fadeIn 1s ease-out'
    },
    sectionDark: {
      padding: '80px 0',
      backgroundColor: '#f8f9fa',
      animation: 'fadeIn 1s ease-out'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#0f3460',
      marginBottom: '1rem',
      textAlign: 'center',
      animation: 'slideInDown 1s ease-out'
    },
    sectionSubtitle: {
      fontSize: '1.1rem',
      color: '#666',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 3rem auto',
      lineHeight: '1.7',
      animation: 'slideInDown 1s ease-out 0.3s both'
    },
    card: {
      backgroundColor: '#ffffff',
      border: '2px solid #e9ecef',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      height: '100%',
      animation: 'slideInUp 1s ease-out 0.3s both'
    },
    cardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
      borderColor: '#00d4ff'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#0f3460',
      marginBottom: '1rem'
    },
    cardText: {
      fontSize: '1rem',
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: '2rem'
    },
    statItem: {
      textAlign: 'center',
      animation: 'fadeInUp 1s ease-out 0.6s both'
    },
    statIcon: {
      fontSize: '2.5rem',
      color: '#00d4ff',
      marginBottom: '0.5rem',
      transition: 'all 0.3s ease'
    },
    statNumber: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#0f3460',
      marginBottom: '0.25rem'
    },
    statLabel: {
      fontSize: '0.875rem',
      color: '#666'
    },
    interactiveHeading: {
      cursor: 'pointer',
      padding: '1.25rem',
      borderRadius: '12px',
      border: '2px solid #e9ecef',
      transition: 'all 0.3s ease',
      backgroundColor: '#ffffff',
      marginBottom: '1rem',
      animation: 'slideInLeft 1s ease-out'
    },
    headingHover: {
      borderColor: '#00d4ff',
      backgroundColor: '#f0f8ff',
      transform: 'translateX(8px)',
      boxShadow: '0 4px 20px rgba(0, 212, 255, 0.15)'
    },
    headingIcon: {
      color: '#00d4ff',
      marginRight: '0.75rem'
    },
    imageContainer: {
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
      animation: 'slideInRight 1s ease-out 0.3s both'
    },
    imageBadge: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      backgroundColor: '#00d4ff',
      color: '#000',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: '600'
    },
    swiperContainer: {
      padding: '2rem 0',
      animation: 'fadeIn 1s ease-out 0.3s both'
    },
    swiperCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      border: '2px solid #e9ecef',
      borderRadius: '16px',
      padding: '2rem',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      height: '100%'
    },
    swiperCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
      borderColor: '#00d4ff'
    },
    swiperIcon: {
      width: '80px',
      height: '80px',
      backgroundColor: '#00d4ff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem auto',
      fontSize: '2rem',
      color: '#ffffff',
      transition: 'all 0.3s ease'
    },
    swiperTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#0f3460',
      marginBottom: '0.75rem'
    },
    swiperDescription: {
      fontSize: '0.9rem',
      color: '#666',
      lineHeight: '1.5'
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    benefitCard: {
      backgroundColor: '#ffffff',
      border: '2px solid #e9ecef',
      borderRadius: '16px',
      padding: '2rem',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      animation: 'fadeInUp 1s ease-out'
    },
    benefitCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
      borderColor: '#00d4ff'
    },
    benefitIcon: {
      fontSize: '3rem',
      color: '#00d4ff',
      marginBottom: '1rem',
      transition: 'all 0.3s ease'
    },
    benefitTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#0f3460',
      marginBottom: '0.75rem'
    },
    benefitText: {
      fontSize: '0.95rem',
      color: '#666',
      lineHeight: '1.6'
    },
    darkSection: {
      background: 'linear-gradient(135deg, #0f3460 0%, #16213e 100%)',
      color: 'white',
      padding: '80px 0',
      animation: 'fadeIn 1s ease-out'
    },
    darkSectionTitle: {
      color: '#00d4ff',
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
      textAlign: 'center',
      animation: 'slideInDown 1s ease-out'
    },
    darkSectionSubtitle: {
      color: '#e0e0e0',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 3rem auto',
      fontSize: '1.1rem',
      lineHeight: '1.7',
      animation: 'slideInDown 1s ease-out 0.3s both'
    },
    navigationButton: {
      backgroundColor: 'rgba(0, 212, 255, 0.2)',
      border: '2px solid #00d4ff',
      color: '#00d4ff',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.25rem'
    },
    navigationButtonHover: {
      backgroundColor: 'rgba(0, 212, 255, 0.4)',
      transform: 'scale(1.1)'
    }
  };

  // CSS animations
  const animations = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes fadeInUp {
      from { 
        opacity: 0; 
        transform: translateY(30px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
    
    @keyframes slideInLeft {
      from { 
        opacity: 0; 
        transform: translateX(-50px); 
      }
      to { 
        opacity: 1; 
        transform: translateX(0); 
      }
    }
    
    @keyframes slideInRight {
      from { 
        opacity: 0; 
        transform: translateX(50px); 
      }
      to { 
        opacity: 1; 
        transform: translateX(0); 
      }
    }
    
    @keyframes slideInDown {
      from { 
        opacity: 0; 
        transform: translateY(-30px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
    
    @keyframes slideInUp {
      from { 
        opacity: 0; 
        transform: translateY(30px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
      40%, 43% { transform: translate3d(0,-30px,0); }
      70% { transform: translate3d(0,-15px,0); }
      90% { transform: translate3d(0,-4px,0); }
    }
    
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease-out;
    }
    
    .animate-on-scroll.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .hover-lift {
      transition: all 0.3s ease;
    }
    
    .hover-lift:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
  `;

  return (
    <>
      <style>{animations}</style>
   {/* <BannerIOT/> */}
      {/* Hero Section */}
      <div style={pageStyles.heroSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={pageStyles.codeTerminal}>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ color: '#00ff00', marginRight: '0.5rem' }}>●</span>
                  <span style={{ color: '#ffff00', marginRight: '0.5rem' }}>●</span>
                  <span style={{ color: '#ff0000', marginRight: '0.5rem' }}>●</span>
                  <span style={{ color: '#888', fontSize: '0.875rem' }}>Developer Terminal</span>
                </div>
                <pre style={pageStyles.codeText}>
                  {`// Nexyos Developer Partner Program
const developerPartner = {
  name: "Your Company",
  expertise: ["IoT", "AI", "Video Analytics"],
  benefits: ["API Access", "SDK Support", "Technical Guidance"]
};

// Join our ecosystem
developerPartner.join();`}
                </pre>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  <span style={pageStyles.liveBadge}>Live</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 style={pageStyles.heroTitle}>
                Developer Partner Program
              </h1>
              <p style={pageStyles.heroSubtitle}>
                Build innovative solutions with our cutting-edge IoT and video surveillance technologies.
                Access comprehensive APIs, SDKs, and developer resources.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button style={pageStyles.outlineButton}>
                  <i className="ph ph-github me-2"></i>
                  View on GitHub
                </button>
                <button style={pageStyles.primaryButton}>
                  <i className="ph ph-rocket me-2"></i>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Partner Program Section */}
      <div style={pageStyles.section}>
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-5">
              <div style={pageStyles.imageContainer}>
            <img
              src="https://www.milesight.com/static/pc/en/company/about-us/milesight-innovation.jpg?t=1746582955703"
              alt="Nexyos Developer Partner"
                  className="img-fluid"
                  style={{ width: '100%', height: 'auto' }}
            />
                <div style={pageStyles.imageBadge}>Developer Zone</div>
              </div>
          </div>
          <div className="col-lg-7">
              <div style={pageStyles.card}>
                <h3 style={pageStyles.cardTitle}>
                  <i className="ph ph-code me-2" style={pageStyles.headingIcon}></i>
                  Nexyos Developer Partner Program
                </h3>
                <p style={pageStyles.cardText}>
                  The Nexyos Developer Partner Program empowers developers and technology companies 
                  to build innovative solutions using our cutting-edge IoT and video surveillance 
                  technologies. With comprehensive API access, SDK libraries, and dedicated support, 
                  our developer partners can create powerful applications that integrate seamlessly 
                  with Nexyos platforms and reach global markets.
                </p>
                <div style={pageStyles.statsContainer}>
                  <div style={pageStyles.statItem}>
                    <div style={pageStyles.statIcon}>
                      <i className="ph ph-code-simple"></i>
                    </div>
                    <div style={pageStyles.statNumber}>100+</div>
                    <div style={pageStyles.statLabel}>APIs</div>
                  </div>
                  <div style={pageStyles.statItem}>
                    <div style={pageStyles.statIcon}>
                      <i className="ph ph-books"></i>
                    </div>
                    <div style={pageStyles.statNumber}>50+</div>
                    <div style={pageStyles.statLabel}>SDKs</div>
                  </div>
                  <div style={pageStyles.statItem}>
                    <div style={pageStyles.statIcon}>
                      <i className="ph ph-users"></i>
                    </div>
                    <div style={pageStyles.statNumber}>24/7</div>
                    <div style={pageStyles.statLabel}>Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Become a Developer Partner Section */}
      <div style={pageStyles.sectionDark}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 style={pageStyles.sectionTitle}>
                <i className="ph ph-lightbulb me-2" style={pageStyles.headingIcon}></i>
                Why Become a Developer Partner?
              </h1>

              <div
                style={pageStyles.interactiveHeading}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#00d4ff';
                  e.target.style.backgroundColor = '#f0f8ff';
                  e.target.style.transform = 'translateX(8px)';
                  e.target.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e9ecef';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.transform = 'translateX(0)';
                  e.target.style.boxShadow = 'none';
                }}
                  onClick={() => handleHeadingClick("development")}
              >
                <i className="ph ph-code-simple me-2" style={pageStyles.headingIcon}></i>
                  Access to Advanced Development Tools and APIs
              </div>

              <div
                style={pageStyles.interactiveHeading}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#00d4ff';
                  e.target.style.backgroundColor = '#f0f8ff';
                  e.target.style.transform = 'translateX(8px)';
                  e.target.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e9ecef';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.transform = 'translateX(0)';
                  e.target.style.boxShadow = 'none';
                }}
                  onClick={() => handleHeadingClick("api")}
              >
                <i className="ph ph-books me-2" style={pageStyles.headingIcon}></i>
                  Comprehensive SDK and Documentation Support
              </div>

              <div
                style={pageStyles.interactiveHeading}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#00d4ff';
                  e.target.style.backgroundColor = '#f0f8ff';
                  e.target.style.transform = 'translateX(8px)';
                  e.target.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e9ecef';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.transform = 'translateX(0)';
                  e.target.style.boxShadow = 'none';
                }}
                  onClick={() => handleHeadingClick("sdk")}
              >
                <i className="ph ph-rocket me-2" style={pageStyles.headingIcon}></i>
                  Early Access to New Features and Technologies
              </div>
            </div>

            <div className="col-md-7">
              <div style={pageStyles.imageContainer}>
                <img
                  src={images[currentImage]}
                  alt="Developer Partner content"
                  className="img-fluid"
                  style={{ width: '100%', height: 'auto' }}
                />
                <div style={pageStyles.imageBadge}>Interactive Preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Tools Section with Swiper */}
      <div style={pageStyles.darkSection}>
        <div className="container">
          <h1 style={pageStyles.darkSectionTitle}>
            <i className="ph ph-toolbox me-2"></i>
                Developer Tools & Resources
              </h1>
          <p style={pageStyles.darkSectionSubtitle}>
                Nexyos provides comprehensive development resources including APIs, SDKs, 
                documentation, and testing tools to help developer partners build innovative 
                solutions quickly and efficiently. Our developer ecosystem supports multiple 
                programming languages and platforms.
              </p>

          <div style={pageStyles.swiperContainer}>
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              >
                {developerTools.map((tool, index) => (
                  <SwiperSlide key={index}>
                  <div
                    style={pageStyles.swiperCard}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
                      e.currentTarget.style.borderColor = '#00d4ff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                      e.currentTarget.style.borderColor = '#e9ecef';
                    }}
                  >
                    <div style={pageStyles.swiperIcon}>
                      <i className={tool.icon}></i>
                      </div>
                    <div style={pageStyles.swiperTitle}>{tool.title}</div>
                    <p style={pageStyles.swiperDescription}>{tool.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            <button
              className="swiper-button-prev"
              style={pageStyles.navigationButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.4)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.2)';
                e.target.style.transform = 'scale(1)';
              }}
            >
                <i className="ph ph-caret-left"></i>
              </button>
            <button
              className="swiper-button-next"
              style={pageStyles.navigationButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.4)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.2)';
                e.target.style.transform = 'scale(1)';
              }}
            >
                <i className="ph ph-caret-right"></i>
              </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div style={pageStyles.section}>
        <div className="container">
          <h2 style={pageStyles.sectionTitle}>
            <i className="ph ph-star me-2"></i>
              Developer Partner Benefits
            </h2>
          <p style={pageStyles.sectionSubtitle}>
            Join our developer ecosystem and unlock exclusive benefits designed to accelerate your growth
          </p>

          <div style={pageStyles.benefitsGrid}>
            <div
              style={pageStyles.benefitCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#00d4ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div style={pageStyles.benefitIcon}>
                <i className="ph ph-code-simple"></i>
          </div>
              <h5 style={pageStyles.benefitTitle}>API Access</h5>
              <p style={pageStyles.benefitText}>Full access to REST APIs and real-time data streams</p>
        </div>

            <div
              style={pageStyles.benefitCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#00d4ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div style={pageStyles.benefitIcon}>
                <i className="ph ph-books"></i>
              </div>
              <h5 style={pageStyles.benefitTitle}>Documentation</h5>
              <p style={pageStyles.benefitText}>Comprehensive guides, tutorials, and code examples</p>
            </div>

            <div
              style={pageStyles.benefitCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#00d4ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div style={pageStyles.benefitIcon}>
                <i className="ph ph-headset"></i>
          </div>
              <h5 style={pageStyles.benefitTitle}>Technical Support</h5>
              <p style={pageStyles.benefitText}>Dedicated developer support and consultation</p>
              </div>

            <div
              style={pageStyles.benefitCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#00d4ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div style={pageStyles.benefitIcon}>
                <i className="ph ph-globe"></i>
            </div>
              <h5 style={pageStyles.benefitTitle}>Global Reach</h5>
              <p style={pageStyles.benefitText}>Access to Nexyos global partner network</p>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default DeveloperPartner;
