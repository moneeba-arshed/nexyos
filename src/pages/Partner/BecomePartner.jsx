// BecomePartner.jsx
import React, { useState, useEffect } from "react";
import styles from "../../style/PartnerProgram.module.css";
import Banner from "../../components/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Contact from "../../components/Contact";

const BecomePartner = () => {
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
    partnership:
      "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
    growth:
      "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
    success:
      "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
    support:
      "https://www.milesight.com/static/pc/en/company/partner-program/milesight-product-portfolio.png?t=1746582988309",
    future:
      "https://www.milesight.com/static/pc/en/company/about-us/milesight-innovation.jpg?t=1746582955703",
  };

  // Partnership Types data for Swiper
  const partnershipTypes = [
    {
      title: "Channel Partner",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
      description: "Resell and distribute our products",
      icon: "ph ph-storefront",
      color: "#3498db"
    },
    {
      title: "Technology Partner",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
      description: "Collaborate on innovative solutions",
      icon: "ph ph-lightbulb",
      color: "#e74c3c"
    },
    {
      title: "Developer Partner",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
      description: "Build applications and integrations",
      icon: "ph ph-code",
      color: "#f39c12"
    },
    {
      title: "CCTV Specialist",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
      description: "Focus on security solutions",
      icon: "ph ph-camera",
      color: "#27ae60"
    },
    {
      title: "IoT Integrator",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
      description: "Connect and manage IoT devices",
      icon: "ph ph-wifi",
      color: "#9b59b6"
    },
    {
      title: "Solution Provider",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
      description: "Deliver complete solutions",
      icon: "ph ph-puzzle-piece",
      color: "#e67e22"
    },
    {
      title: "System Integrator",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
      description: "Integrate multiple technologies",
      icon: "ph ph-gear",
      color: "#34495e"
    },
    {
      title: "Value Added Reseller",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
      description: "Add value through services",
      icon: "ph ph-plus-circle",
      color: "#1abc9c"
    },
  ];

  const handleHeadingClick = (imageKey) => {
    setCurrentImage(imageKey);
  };

  // In-page CSS styles with animations
  const pageStyles = {
    heroSection: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
      animation: 'fadeInUp 1.2s ease-out'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      textAlign: 'center',
      textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
      animation: 'slideInDown 1.5s ease-out 0.3s both'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      lineHeight: '1.8',
      marginBottom: '2.5rem',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 2.5rem auto',
      animation: 'slideInDown 1.5s ease-out 0.6s both'
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
      textAlign: 'center',
      animation: 'slideInDown 1s ease-out'
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
      border: '2px solid #e9ecef',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      height: '100%'
    },
    cardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
      borderColor: '#667eea'
    },
    cardTitle: {
      fontSize: '1.75rem',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '1rem'
    },
    cardText: {
      fontSize: '1rem',
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    interactiveHeading: {
      cursor: 'pointer',
      padding: '1.25rem',
      borderRadius: '12px',
      border: '2px solid #e9ecef',
      transition: 'all 0.3s ease',
      backgroundColor: '#ffffff',
      marginBottom: '1rem'
    },
    headingHover: {
      borderColor: '#667eea',
      backgroundColor: '#f8f9ff',
      transform: 'translateX(8px)',
      boxShadow: '0 4px 20px rgba(102, 126, 234, 0.15)'
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
      backgroundColor: '#667eea',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: '600',
      animation: 'pulse 2s infinite'
    },
    darkSection: {
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      color: 'white',
      padding: '80px 0'
    },
    darkSectionTitle: {
      color: '#ffffff',
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
      height: '100%',
      border: '2px solid rgba(255, 255, 255, 0.2)'
    },
    swiperCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
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
    processGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    processCard: {
      backgroundColor: '#ffffff',
      border: '2px solid #e9ecef',
      borderRadius: '16px',
      padding: '2rem',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    processCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
      borderColor: '#667eea'
    },
    processIcon: {
      fontSize: '3rem',
      color: '#667eea',
      marginBottom: '1rem'
    },
    processTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '0.75rem'
    },
    processText: {
      fontSize: '0.95rem',
      color: '#666',
      lineHeight: '1.6'
    },
    ctaSection: {
      backgroundColor: '#f8f9fa',
      padding: '80px 0'
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    ctaSubtitle: {
      fontSize: '1.1rem',
      color: '#666',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto 2rem auto',
      lineHeight: '1.7'
    },
    primaryButton: {
      backgroundColor: '#667eea',
      borderColor: '#667eea',
      color: 'white',
      padding: '0.875rem 2rem',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      border: 'none'
    },
    outlineButton: {
      backgroundColor: 'transparent',
      borderColor: '#667eea',
      color: '#667eea',
      padding: '0.875rem 2rem',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      border: '2px solid #667eea'
    },
    navigationButton: {
      backgroundColor: 'rgba(102, 126, 234, 0.2)',
      border: '2px solid #667eea',
      color: '#667eea',
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
      backgroundColor: 'rgba(102, 126, 234, 0.4)',
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
        <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 style={pageStyles.heroTitle}>
                  Become a Nexyos Partner
              </h1>
              <p style={pageStyles.heroSubtitle}>
                  Join the Nexyos Partner Network and become part of a global ecosystem driving 
                  innovation in IoT and video surveillance. Whether you're a technology company, 
                  system integrator, or solution provider, we offer multiple partnership models 
                  designed to accelerate your growth and expand your market reach.
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* Become a Partner Section */}
      <div style={pageStyles.section}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div style={pageStyles.imageContainer}>
                <img
                  src="https://www.milesight.com/static/pc/en/company/about-us/milesight-innovation.jpg?t=1746582955703"
                  alt="Become a Nexyos Partner"
                  className="img-fluid"
                  style={{ width: '100%', height: 'auto' }}
                />
                <div style={pageStyles.imageBadge}>Partnership Hub</div>
              </div>
            </div>
            <div className="col-lg-7">
              <div style={pageStyles.card}>
                <h3 style={pageStyles.cardTitle}>
                  <i className="ph ph-handshake me-2" style={{ color: '#667eea' }}></i>
                  Become a Nexyos Partner
                </h3>
                <p style={pageStyles.cardText}>
                  Join the Nexyos Partner Network and become part of a global ecosystem driving 
                  innovation in IoT and video surveillance. Whether you're a technology company, 
                  system integrator, or solution provider, we offer multiple partnership models 
                  designed to accelerate your growth and expand your market reach.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button style={pageStyles.primaryButton}>
                    <i className="ph ph-rocket me-2"></i>
                    Get Started
                  </button>
                  <button style={pageStyles.outlineButton}>
                    <i className="ph ph-info me-2"></i>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Partner with Nexyos Section */}
      <div style={pageStyles.sectionDark}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 style={pageStyles.sectionTitle}>
                <i className="ph ph-target me-2" style={{ color: '#667eea' }}></i>
                Why Partner with Nexyos?
              </h1>

              <div 
                style={pageStyles.interactiveHeading}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.backgroundColor = '#f8f9ff';
                  e.target.style.transform = 'translateX(8px)';
                  e.target.style.boxShadow = '0 4px 20px rgba(102, 126, 234, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e9ecef';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.transform = 'translateX(0)';
                  e.target.style.boxShadow = 'none';
                }}
                  onClick={() => handleHeadingClick("partnership")}
              >
                <i className="ph ph-handshake me-2" style={{ color: '#667eea' }}></i>
                  Proven Track Record of Partnership Success
              </div>

              <div 
                style={pageStyles.interactiveHeading}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.backgroundColor = '#f8f9ff';
                  e.target.style.transform = 'translateX(8px)';
                  e.target.style.boxShadow = '0 4px 20px rgba(102, 126, 234, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e9ecef';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.transform = 'translateX(0)';
                  e.target.style.boxShadow = 'none';
                }}
                  onClick={() => handleHeadingClick("growth")}
              >
                <i className="ph ph-trend-up me-2" style={{ color: '#667eea' }}></i>
                  Accelerated Business Growth Opportunities
              </div>

              <div 
                style={pageStyles.interactiveHeading}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.backgroundColor = '#f8f9ff';
                  e.target.style.transform = 'translateX(8px)';
                  e.target.style.boxShadow = '0 4px 20px rgba(102, 126, 234, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e9ecef';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.transform = 'translateX(0)';
                  e.target.style.boxShadow = 'none';
                }}
                  onClick={() => handleHeadingClick("success")}
              >
                <i className="ph ph-star me-2" style={{ color: '#667eea' }}></i>
                  Comprehensive Support and Resources
              </div>
            </div>

            <div className="col-md-7">
              <div style={pageStyles.imageContainer}>
                <img
                  src={images[currentImage]}
                  alt="Partnership content"
                  className="img-fluid"
                  style={{ width: '100%', height: 'auto' }}
                />
                <div style={pageStyles.imageBadge}>Interactive Preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Types Section with Swiper */}
      <div style={pageStyles.darkSection}>
        <div className="container">
          <h1 style={pageStyles.darkSectionTitle}>
            <i className="ph ph-users me-2"></i>
                Partnership Types & Opportunities
              </h1>
          <p style={pageStyles.darkSectionSubtitle}>
                Nexyos offers diverse partnership models to suit different business types and 
                expertise levels. From channel partnerships for resellers to technology 
                partnerships for innovators, we provide tailored programs that align with 
                your business goals and market focus.
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
                {partnershipTypes.map((type, index) => (
                  <SwiperSlide key={index}>
                  <div 
                    style={{
                      ...pageStyles.swiperCard,
                      border: `2px solid ${type.color}`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
                      e.currentTarget.style.borderColor = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = type.color;
                    }}
                  >
                    <div style={{
                      ...pageStyles.swiperIcon,
                      backgroundColor: type.color,
                      boxShadow: `0 0 20px ${type.color}40`
                    }}>
                      <i className={type.icon}></i>
                      </div>
                    <h5 style={pageStyles.swiperTitle}>{type.title}</h5>
                    <p style={pageStyles.swiperDescription}>{type.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            <button 
              className="swiper-button-prev"
              style={pageStyles.navigationButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(102, 126, 234, 0.4)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(102, 126, 234, 0.2)';
                e.target.style.transform = 'scale(1)';
              }}
            >
                <i className="ph ph-caret-left"></i>
              </button>
            <button 
              className="swiper-button-next"
              style={pageStyles.navigationButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(102, 126, 234, 0.4)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(102, 126, 234, 0.2)';
                e.target.style.transform = 'scale(1)';
              }}
            >
                <i className="ph ph-caret-right"></i>
              </button>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div style={pageStyles.section}>
        <div className="container">
          <h2 style={pageStyles.sectionTitle}>
            <i className="ph ph-flow-arrow me-2"></i>
              How to Become a Partner
            </h2>
          <p style={pageStyles.sectionSubtitle}>
            Follow these simple steps to start your partnership journey with Nexyos
          </p>

          <div style={pageStyles.processGrid}>
            <div 
              style={pageStyles.processCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div style={pageStyles.processIcon}>
                <i className="ph ph-1-circle"></i>
          </div>
              <h5 style={pageStyles.processTitle}>Initial Contact</h5>
              <p style={pageStyles.processText}>Reach out to our partnership team to discuss opportunities</p>
        </div>

            <div 
              style={pageStyles.processCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div style={pageStyles.processIcon}>
                <i className="ph ph-2-circle"></i>
              </div>
              <h5 style={pageStyles.processTitle}>Assessment</h5>
              <p style={pageStyles.processText}>We evaluate your business fit and partnership potential</p>
            </div>

            <div 
              style={pageStyles.processCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div style={pageStyles.processIcon}>
                <i className="ph ph-3-circle"></i>
          </div>
              <h5 style={pageStyles.processTitle}>Agreement</h5>
              <p style={pageStyles.processText}>Sign partnership agreement and begin onboarding process</p>
              </div>

            <div 
              style={pageStyles.processCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <div style={pageStyles.processIcon}>
                <i className="ph ph-4-circle"></i>
            </div>
              <h5 style={pageStyles.processTitle}>Launch</h5>
              <p style={pageStyles.processText}>Start your partnership journey with full support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div style={pageStyles.ctaSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 style={pageStyles.ctaTitle}>
                Ready to Join Our Partner Network?
              </h2>
              <p style={pageStyles.ctaSubtitle}>
                Take the first step towards a successful partnership with Nexyos. 
                Our team is ready to help you explore opportunities and build a 
                mutually beneficial relationship.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button style={pageStyles.primaryButton}>
                  <i className="ph ph-envelope me-2"></i>
                  Contact Partnership Team
                </button>
                <button style={pageStyles.outlineButton}>
                  <i className="ph ph-download me-2"></i>
                  Download Partner Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default BecomePartner;
