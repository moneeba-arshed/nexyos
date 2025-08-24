// CCTVPartner.jsx
import React, { useState, useEffect } from "react";
import styles from "../../style/PartnerProgram.module.css";
import Banner from "../../components/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Contact from "../../components/Contact";

const CCTVPartner = () => {
  const [currentImage, setCurrentImage] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  // Animation effects
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Images data
  const images = {
    default:
      "https://www.milesight.com/static/pc/en/company/partner-program/milesight-events.jpg?t=1746582988309",
    surveillance:
      "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
    security:
      "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
    monitoring:
      "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
    analytics:
      "https://www.milesight.com/static/pc/en/company/partner-program/milesight-product-portfolio.png?t=1746582988309",
    integration:
      "https://www.milesight.com/static/pc/en/company/about-us/milesight-innovation.jpg?t=1746582955703",
  };

  // CCTV Solutions data for Swiper
  const cctvSolutions = [
    {
      title: "IP Cameras",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
      description: "High-definition surveillance cameras",
      icon: "ph ph-camera",
      color: "#2c3e50"
    },
    {
      title: "NVR Systems",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
      description: "Network video recording solutions",
      icon: "ph ph-hard-drives",
      color: "#34495e"
    },
    {
      title: "Video Analytics",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
      description: "AI-powered video intelligence",
      icon: "ph ph-brain",
      color: "#e74c3c"
    },
    {
      title: "Access Control",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
      description: "Secure entry management systems",
      icon: "ph ph-key",
      color: "#f39c12"
    },
    {
      title: "Cloud Storage",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
      description: "Scalable cloud video storage",
      icon: "ph ph-cloud",
      color: "#3498db"
    },
    {
      title: "Mobile Apps",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
      description: "Remote monitoring applications",
      icon: "ph ph-mobile",
      color: "#9b59b6"
    },
    {
      title: "AI Detection",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
      description: "Intelligent threat detection",
      icon: "ph ph-shield-check",
      color: "#27ae60"
    },
    {
      title: "Integration APIs",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
      description: "Seamless system integration",
      icon: "ph ph-plug",
      color: "#e67e22"
    },
  ];

  const handleHeadingClick = (imageKey) => {
    setCurrentImage(imageKey);
  };

  // In-page CSS styles with animations
  const pageStyles = {
    heroSection: {
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2c3e50 25%, #34495e 50%, #2c3e50 75%, #1a1a1a 100%)',
      color: 'white',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
      animation: 'fadeInUp 1.2s ease-out'
    },
    heroTitle: {
      color: '#3498db',
      fontSize: '3.5rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      textShadow: '0 0 20px rgba(52, 152, 219, 0.5)',
      animation: 'slideInDown 1.5s ease-out 0.3s both'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      lineHeight: '1.8',
      marginBottom: '2.5rem',
      color: '#ecf0f1',
      animation: 'slideInDown 1.5s ease-out 0.6s both'
    },
    terminal: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      border: '2px solid #3498db',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 0 30px rgba(52, 152, 219, 0.3)',
      backdropFilter: 'blur(10px)',
      animation: 'slideInRight 1.2s ease-out 0.3s both'
    },
    terminalHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    terminalDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      marginRight: '0.5rem'
    },
    terminalText: {
      color: '#00ff00',
      fontSize: '0.9rem',
      margin: '0',
      fontFamily: 'monospace'
    },
    secureBadge: {
      backgroundColor: '#e74c3c',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: '600',
      animation: 'pulse 2s infinite'
    },
    primaryButton: {
      backgroundColor: '#e74c3c',
      borderColor: '#e74c3c',
      color: 'white',
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
      borderColor: '#3498db',
      color: '#3498db',
      padding: '0.875rem 2rem',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      border: '2px solid #3498db',
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
      color: '#2c3e50',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    sectionSubtitle: {
      fontSize: '1.1rem',
      color: '#666',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 3rem auto',
      lineHeight: '1.7'
    },
    card: {
      backgroundColor: '#ffffff',
      border: '3px solid transparent',
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      height: '100%',
      backgroundImage: 'linear-gradient(white, white), linear-gradient(45deg, #3498db, #e74c3c, #f39c12)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box'
    },
    cardTitle: {
      fontSize: '1.75rem',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '1rem',
      background: 'linear-gradient(45deg, #3498db, #e74c3c)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    cardText: {
      fontSize: '1rem',
      color: '#555',
      lineHeight: '1.8',
      marginBottom: '2rem'
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: '2rem'
    },
    statItem: {
      textAlign: 'center'
    },
    statIcon: {
      width: '50px',
      height: '50px',
      backgroundColor: '#3498db',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 0.5rem auto',
      fontSize: '1.5rem',
      color: '#ffffff'
    },
    statNumber: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#3498db',
      marginBottom: '0.25rem'
    },
    statLabel: {
      fontSize: '0.875rem',
      color: '#666'
    },
    interactiveHeading: {
      cursor: 'pointer',
      padding: '1.5rem',
      borderRadius: '15px',
      border: '2px solid #e9ecef',
      transition: 'all 0.3s ease',
      backgroundColor: '#ffffff',
      marginBottom: '1rem',
      position: 'relative',
      overflow: 'hidden'
    },
    headingHover: {
      borderColor: '#3498db',
      backgroundColor: '#f0f8ff',
      transform: 'translateX(10px)',
      boxShadow: '0 5px 20px rgba(52, 152, 219, 0.2)'
    },
    headingIcon: {
      color: '#3498db',
      marginRight: '0.75rem'
    },
    imageContainer: {
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
    },
    imageBadge: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      backgroundColor: '#e74c3c',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: '600'
    },
    cameraButton: {
      position: 'absolute',
      bottom: '1rem',
      right: '1rem',
      width: '50px',
      height: '50px',
      backgroundColor: '#000000',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: '1.25rem'
    },
    darkSection: {
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%)',
      color: 'white',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden'
    },
    darkSectionTitle: {
      color: '#3498db',
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    darkSectionSubtitle: {
      color: '#ecf0f1',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 3rem auto',
      fontSize: '1.1rem',
      lineHeight: '1.7'
    },
    swiperContainer: {
      padding: '2rem 0'
    },
    swiperCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(15px)',
      borderRadius: '20px',
      padding: '2rem',
      textAlign: 'center',
      transition: 'all 0.4s ease',
      position: 'relative',
      overflow: 'hidden',
      height: '100%'
    },
    swiperCardHover: {
      transform: 'translateY(-15px) scale(1.02)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      borderColor: '#fff'
    },
    swiperIcon: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem auto',
      fontSize: '2rem',
      color: '#ffffff',
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
    },
    swiperTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '0.75rem'
    },
    swiperDescription: {
      fontSize: '0.9rem',
      color: '#ecf0f1',
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
      position: 'relative',
      overflow: 'hidden',
      height: '100%'
    },
    benefitCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      borderColor: '#3498db'
    },
    benefitIcon: {
      fontSize: '3rem',
      color: '#3498db',
      marginBottom: '1rem'
    },
    benefitTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '0.75rem'
    },
    benefitText: {
      fontSize: '0.95rem',
      color: '#666',
      lineHeight: '1.6'
    },
    navigationButton: {
      backgroundColor: 'rgba(52, 152, 219, 0.2)',
      border: '2px solid #3498db',
      color: '#3498db',
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
      backgroundColor: 'rgba(52, 152, 219, 0.4)',
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
      {/* <Banner /> */}

      {/* Hero Section */}
      <div style={pageStyles.heroSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={pageStyles.terminal}>
                <div style={pageStyles.terminalHeader}>
                  <div style={{ ...pageStyles.terminalDot, backgroundColor: '#00ff00' }}></div>
                  <div style={{ ...pageStyles.terminalDot, backgroundColor: '#ffff00' }}></div>
                  <div style={{ ...pageStyles.terminalDot, backgroundColor: '#ff0000' }}></div>
                  <span style={{ color: '#888', fontSize: '0.875rem', marginLeft: '0.5rem' }}>Security Command Center</span>
                </div>
                <pre style={pageStyles.terminalText}>
{`> Nexyos CCTV Partner Program
> Security Level: MAXIMUM
> Surveillance Status: ACTIVE
> AI Detection: ENABLED
> Access Control: SECURED

Welcome to the future of security!`}
                </pre>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  <span style={pageStyles.secureBadge}>SECURE</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 style={pageStyles.heroTitle}>
                CCTV Channel Partner Program
              </h1>
              <p style={pageStyles.heroSubtitle}>
                Join Nexyos as a CCTV Channel Partner and deliver cutting-edge security 
                solutions to your customers. Access our comprehensive portfolio of 
                surveillance technologies and build a profitable security business.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button style={pageStyles.outlineButton}>
                  <i className="ph ph-shield-check me-2"></i>
                  Security Solutions
                </button>
                <button style={pageStyles.primaryButton}>
                  <i className="ph ph-handshake me-2"></i>
                  Become Partner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CCTV Channel Partner Program Section */}
      <div style={pageStyles.section}>
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-5">
              <div style={{...pageStyles.imageContainer, animation: 'slideInLeft 1.2s ease-out 0.3s both'}}>
            <img
              src="https://www.milesight.com/static/pc/en/company/about-us/milesight-innovation.jpg?t=1746582955703"
              alt="Nexyos CCTV Partner"
                  className="img-fluid"
                  style={{ width: '100%', height: 'auto' }}
            />
                <div style={{...pageStyles.imageBadge, animation: 'pulse 2s infinite'}}>Security Zone</div>
                <div style={{...pageStyles.cameraButton, animation: 'bounce 2s infinite'}}>
                  <i className="ph ph-camera"></i>
                </div>
              </div>
          </div>
          <div className="col-lg-7">
              <div style={{...pageStyles.card, animation: 'slideInRight 1.2s ease-out 0.6s both'}}>
                <h3 style={{...pageStyles.cardTitle, animation: 'fadeIn 1s ease-out 0.9s both'}}>
                  <i className="ph ph-shield-check me-2"></i>
                  CCTV Channel Partner Program
                </h3>
                <p style={{...pageStyles.cardText, animation: 'fadeIn 1s ease-out 1.2s both'}}>
                  The Nexyos CCTV Channel Partner Program is designed for security system 
                  integrators, distributors, and resellers who specialize in video surveillance 
                  solutions. Our channel partners receive comprehensive training, marketing support, 
                  and competitive pricing to deliver cutting-edge security solutions to their 
                  customers while building profitable, long-term relationships.
                </p>
                <div style={pageStyles.statsContainer}>
                  <div style={{...pageStyles.statItem, animation: 'fadeInUp 1s ease-out 0.3s both'}}>
                    <div style={pageStyles.statIcon}>
                      <i className="ph ph-camera"></i>
                    </div>
                    <div style={pageStyles.statNumber}>1000+</div>
                    <div style={pageStyles.statLabel}>Cameras</div>
                  </div>
                  <div style={{...pageStyles.statItem, animation: 'fadeInUp 1s ease-out 0.6s both'}}>
                    <div style={pageStyles.statIcon}>
                      <i className="ph ph-globe"></i>
                    </div>
                    <div style={pageStyles.statNumber}>50+</div>
                    <div style={pageStyles.statLabel}>Countries</div>
                  </div>
                  <div style={{...pageStyles.statItem, animation: 'fadeInUp 1s ease-out 0.9s both'}}>
                    <div style={pageStyles.statIcon}>
                      <i className="ph ph-users"></i>
                    </div>
                    <div style={pageStyles.statNumber}>500+</div>
                    <div style={pageStyles.statLabel}>Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Nexyos CCTV Section */}
      <div style={pageStyles.sectionDark}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 style={pageStyles.sectionTitle}>
                <i className="ph ph-target me-2" style={pageStyles.headingIcon}></i>
                Why Choose Nexyos CCTV?
              </h1>

              <div 
                style={pageStyles.interactiveHeading}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#3498db';
                  e.target.style.backgroundColor = '#f0f8ff';
                  e.target.style.transform = 'translateX(10px)';
                  e.target.style.boxShadow = '0 5px 20px rgba(52, 152, 219, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e9ecef';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.transform = 'translateX(0)';
                  e.target.style.boxShadow = 'none';
                }}
                  onClick={() => handleHeadingClick("surveillance")}
              >
                <i className="ph ph-camera me-2" style={pageStyles.headingIcon}></i>
                  Industry-Leading Video Surveillance Technology
              </div>

              <div 
                style={pageStyles.interactiveHeading}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#e74c3c';
                  e.target.style.backgroundColor = '#fff5f5';
                  e.target.style.transform = 'translateX(10px)';
                  e.target.style.boxShadow = '0 5px 20px rgba(231, 76, 60, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e9ecef';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.transform = 'translateX(0)';
                  e.target.style.boxShadow = 'none';
                }}
                  onClick={() => handleHeadingClick("security")}
              >
                <i className="ph ph-shield-check me-2" style={pageStyles.headingIcon}></i>
                  Comprehensive Security Solution Portfolio
              </div>

              <div 
                style={pageStyles.interactiveHeading}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#f39c12';
                  e.target.style.backgroundColor = '#fffbf0';
                  e.target.style.transform = 'translateX(10px)';
                  e.target.style.boxShadow = '0 5px 20px rgba(243, 156, 18, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e9ecef';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.transform = 'translateX(0)';
                  e.target.style.boxShadow = 'none';
                }}
                  onClick={() => handleHeadingClick("monitoring")}
              >
                <i className="ph ph-eye me-2" style={pageStyles.headingIcon}></i>
                  Advanced AI-Powered Monitoring Capabilities
              </div>
            </div>

            <div className="col-md-7">
              <div style={pageStyles.imageContainer}>
                <img
                  src={images[currentImage]}
                  alt="CCTV Partner content"
                  className="img-fluid"
                  style={{ width: '100%', height: 'auto' }}
                />
                <div style={pageStyles.imageBadge}>Live Preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CCTV Solutions Section with Swiper */}
      <div style={pageStyles.darkSection}>
        <div className="container">
          <h1 style={pageStyles.darkSectionTitle}>
            <i className="ph ph-camera me-2"></i>
                CCTV Solutions & Products
              </h1>
          <p style={pageStyles.darkSectionSubtitle}>
                Our comprehensive CCTV portfolio includes high-definition IP cameras, advanced 
                NVR systems, intelligent video analytics, and cloud-based solutions. From 
                small business installations to enterprise-grade security systems, we provide 
                scalable solutions that meet diverse customer requirements.
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
                {cctvSolutions.map((solution, index) => (
                  <SwiperSlide key={index}>
                  <div 
                    style={{
                      ...pageStyles.swiperCard,
                      border: `2px solid ${solution.color}`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                      e.currentTarget.style.borderColor = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = solution.color;
                    }}
                  >
                    <div style={{
                      ...pageStyles.swiperIcon,
                      backgroundColor: solution.color,
                      boxShadow: `0 0 20px ${solution.color}40`
                    }}>
                      <i className={solution.icon}></i>
                      </div>
                    <h5 style={pageStyles.swiperTitle}>{solution.title}</h5>
                    <p style={pageStyles.swiperDescription}>{solution.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            <button 
              className="swiper-button-prev"
              style={pageStyles.navigationButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(52, 152, 219, 0.4)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
                e.target.style.transform = 'scale(1)';
              }}
            >
                <i className="ph ph-caret-left"></i>
              </button>
            <button 
              className="swiper-button-next"
              style={pageStyles.navigationButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(52, 152, 219, 0.4)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
                e.target.style.transform = 'scale(1)';
              }}
            >
                <i className="ph ph-caret-right"></i>
              </button>
          </div>
        </div>
      </div>

      {/* Channel Partner Benefits Section */}
      <div style={pageStyles.section}>
        <div className="container">
          <h2 style={pageStyles.sectionTitle}>
            <i className="ph ph-star me-2"></i>
              Channel Partner Benefits
            </h2>
          <p style={pageStyles.sectionSubtitle}>
            Discover the advantages of becoming a Nexyos CCTV channel partner
          </p>

          <div style={pageStyles.benefitsGrid}>
            <div 
              style={pageStyles.benefitCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#3498db';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div style={pageStyles.benefitIcon}>
                <i className="ph ph-graduation-cap"></i>
          </div>
              <h5 style={pageStyles.benefitTitle}>Training & Certification</h5>
              <p style={pageStyles.benefitText}>Comprehensive product and technical training programs</p>
        </div>

            <div 
              style={pageStyles.benefitCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#e74c3c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div style={pageStyles.benefitIcon}>
                <i className="ph ph-megaphone"></i>
              </div>
              <h5 style={pageStyles.benefitTitle}>Marketing Support</h5>
              <p style={pageStyles.benefitText}>Co-marketing materials and lead generation support</p>
            </div>

            <div 
              style={pageStyles.benefitCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#f39c12';
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
              <p style={pageStyles.benefitText}>Pre-sales and post-sales technical assistance</p>
              </div>

            <div 
              style={pageStyles.benefitCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#27ae60';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div style={pageStyles.benefitIcon}>
                <i className="ph ph-trend-up"></i>
            </div>
              <h5 style={pageStyles.benefitTitle}>Competitive Pricing</h5>
              <p style={pageStyles.benefitText}>Attractive margins and volume-based incentives</p>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default CCTVPartner;
