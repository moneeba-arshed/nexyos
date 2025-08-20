// DeveloperPartner.jsx
import React, { useState } from "react";
import styles from "../../style/PartnerProgram.module.css";
import Banner from "../../components/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Contact from "../../components/Contact";

const DeveloperPartner = () => {
  const [currentImage, setCurrentImage] = useState("default");

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

  return (
    <>
      <Banner />

      {/* Hero Section with Code Background */}
      <div className="container-fluid py-5" style={{ 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="bg-dark p-4 rounded" style={{ border: '1px solid #00d4ff' }}>
                  <pre className="text-success mb-0" style={{ fontSize: '0.9rem' }}>
{`// Nexyos Developer Partner Program
const developerPartner = {
  name: "Your Company",
  expertise: ["IoT", "AI", "Video Analytics"],
  benefits: ["API Access", "SDK Support", "Technical Guidance"]
};

// Join our ecosystem
developerPartner.join();`}
                  </pre>
                </div>
                <div className="position-absolute top-0 end-0 mt-2 me-2">
                  <span className="badge bg-success">Live Code</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#00d4ff' }}>
                Developer Partner Program
              </h1>
              <p className="lead mb-4">
                Build innovative solutions with our cutting-edge IoT and video surveillance technologies. 
                Access comprehensive APIs, SDKs, and developer resources.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-outline-light btn-lg">
                  <i className="ph ph-github me-2"></i>
                  View on GitHub
                </button>
                <button className="btn btn-primary btn-lg" style={{ backgroundColor: '#00d4ff', borderColor: '#00d4ff' }}>
                  <i className="ph ph-rocket me-2"></i>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Partner Program Section */}
      <div className={`${styles.programSection} container py-5`}>
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="position-relative">
              <img
                src="https://www.milesight.com/static/pc/en/company/about-us/milesight-innovation.jpg?t=1746582955703"
                alt="Nexyos Developer Partner"
                className="img-fluid rounded shadow-lg"
              />
              <div className="position-absolute top-0 start-0 m-3">
                <span className="badge bg-primary fs-6">Developer Zone</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className={`${styles.programCard} p-4 p-md-5`} style={{ 
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
              border: '2px solid #00d4ff',
              borderRadius: '15px'
            }}>
              <div className="card-body">
                <h3 className={`${styles.programSubtitle} mb-4`} data-aos="fade-right" style={{ color: '#0f3460' }}>
                  <i className="ph ph-code me-2"></i>
                  Nexyos Developer Partner Program
                </h3>
                <p className={styles.programText}>
                  The Nexyos Developer Partner Program empowers developers and technology companies 
                  to build innovative solutions using our cutting-edge IoT and video surveillance 
                  technologies. With comprehensive API access, SDK libraries, and dedicated support, 
                  our developer partners can create powerful applications that integrate seamlessly 
                  with Nexyos platforms and reach global markets.
                </p>
                <div className="mt-4">
                  <div className="row text-center">
                    <div className="col-4">
                      <div className="text-primary">
                        <i className="ph ph-code-simple" style={{ fontSize: '2rem' }}></i>
                      </div>
                      <small className="text-muted">100+ APIs</small>
                    </div>
                    <div className="col-4">
                      <div className="text-primary">
                        <i className="ph ph-books" style={{ fontSize: '2rem' }}></i>
                      </div>
                      <small className="text-muted">50+ SDKs</small>
                    </div>
                    <div className="col-4">
                      <div className="text-primary">
                        <i className="ph ph-users" style={{ fontSize: '2rem' }}></i>
                      </div>
                      <small className="text-muted">24/7 Support</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Become a Developer Partner Section */}
      <div className={`${styles.section} container-fluid py-5`} style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className={styles.mainTitle} data-aos="fade-right" style={{ color: '#0f3460' }}>
                <i className="ph ph-lightbulb me-2"></i>
                Why Become a Developer Partner?
              </h1>

              <div className={`${styles.headingGroup} mb-4`} data-aos="fade-right">
                <h5
                  className={styles.heading}
                  onClick={() => handleHeadingClick("development")}
                  data-aos="fade-right"
                  style={{ 
                    cursor: 'pointer',
                    padding: '15px',
                    borderRadius: '10px',
                    border: '2px solid #e9ecef',
                    transition: 'all 0.3s ease',
                    backgroundColor: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#00d4ff';
                    e.target.style.backgroundColor = '#f0f8ff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#e9ecef';
                    e.target.style.backgroundColor = 'white';
                  }}>
                  <i className="ph ph-code-simple me-2 text-primary"></i>
                  Access to Advanced Development Tools and APIs
                </h5>
              </div>

              <div className={`${styles.headingGroup} mb-4`}>
                <h5
                  className={styles.heading}
                  onClick={() => handleHeadingClick("api")}
                  data-aos="fade-right"
                  style={{ 
                    cursor: 'pointer',
                    padding: '15px',
                    borderRadius: '10px',
                    border: '2px solid #e9ecef',
                    transition: 'all 0.3s ease',
                    backgroundColor: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#00d4ff';
                    e.target.style.backgroundColor = '#f0f8ff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#e9ecef';
                    e.target.style.backgroundColor = 'white';
                  }}>
                  <i className="ph ph-books me-2 text-primary"></i>
                  Comprehensive SDK and Documentation Support
                </h5>
              </div>

              <div className={`${styles.headingGroup} mb-4`}>
                <h5
                  className={styles.heading}
                  onClick={() => handleHeadingClick("sdk")}
                  data-aos="fade-right"
                  style={{ 
                    cursor: 'pointer',
                    padding: '15px',
                    borderRadius: '10px',
                    border: '2px solid #e9ecef',
                    transition: 'all 0.3s ease',
                    backgroundColor: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#00d4ff';
                    e.target.style.backgroundColor = '#f0f8ff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#e9ecef';
                    e.target.style.backgroundColor = 'white';
                  }}>
                  <i className="ph ph-rocket me-2 text-primary"></i>
                  Early Access to New Features and Technologies
                </h5>
              </div>
            </div>

            <div className="col-md-7">
              <div className={styles.imageContainer}>
                <img
                  src={images[currentImage]}
                  alt="Developer Partner content"
                  className={`${styles.mainImage} img-fluid rounded shadow-lg`}
                />
                <div className="position-absolute top-0 start-0 m-3">
                  <span className="badge bg-success fs-6">Interactive Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Tools Section with Swiper */}
      <div className={`${styles.innovationSection} container-fluid py-5`} style={{ 
        background: 'linear-gradient(135deg, #0f3460 0%, #16213e 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className={styles.mainTitle} data-aos="fade-right" style={{ color: '#00d4ff' }}>
                <i className="ph ph-toolbox me-2"></i>
                Developer Tools & Resources
              </h1>
              <p className={styles.description}>
                Nexyos provides comprehensive development resources including APIs, SDKs, 
                documentation, and testing tools to help developer partners build innovative 
                solutions quickly and efficiently. Our developer ecosystem supports multiple 
                programming languages and platforms.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 position-relative">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: `.${styles.swiperButtonNext}`,
                  prevEl: `.${styles.swiperButtonPrev}`,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                className={styles.swiper}
              >
                {developerTools.map((tool, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.innovationCard} style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '15px',
                      padding: '20px',
                      textAlign: 'center',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      <div className="mb-3">
                        <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center" 
                             style={{ width: '60px', height: '60px' }}>
                          <i className={`${tool.icon} text-white`} style={{ fontSize: '1.5rem' }}></i>
                        </div>
                      </div>
                      <div className={styles.innovationContent}>
                        <h5 className={styles.innovationTitle} style={{ color: '#00d4ff' }}>{tool.title}</h5>
                        <p className="text-light small">{tool.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className={`${styles.swiperButtonPrev} ${styles.swiperButton}`} style={{
                backgroundColor: 'rgba(0, 212, 255, 0.2)',
                border: '1px solid #00d4ff',
                color: '#00d4ff'
              }}>
                <i className="ph ph-caret-left"></i>
              </button>
              <button className={`${styles.swiperButtonNext} ${styles.swiperButton}`} style={{
                backgroundColor: 'rgba(0, 212, 255, 0.2)',
                border: '1px solid #00d4ff',
                color: '#00d4ff'
              }}>
                <i className="ph ph-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className={styles.programTitle} data-aos="fade-up" style={{ color: '#0f3460' }}>
              <i className="ph ph-star me-2"></i>
              Developer Partner Benefits
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center p-4 rounded" style={{ 
              backgroundColor: '#f8f9fa',
              border: '2px solid #e9ecef',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00d4ff';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div className="mb-3">
                <i className="ph ph-code-simple text-primary" style={{ fontSize: '3rem' }}></i>
              </div>
              <h5 style={{ color: '#0f3460' }}>API Access</h5>
              <p className="text-muted">Full access to REST APIs and real-time data streams</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center p-4 rounded" style={{ 
              backgroundColor: '#f8f9fa',
              border: '2px solid #e9ecef',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00d4ff';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div className="mb-3">
                <i className="ph ph-books text-primary" style={{ fontSize: '3rem' }}></i>
              </div>
              <h5 style={{ color: '#0f3460' }}>Documentation</h5>
              <p className="text-muted">Comprehensive guides, tutorials, and code examples</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center p-4 rounded" style={{ 
              backgroundColor: '#f8f9fa',
              border: '2px solid #e9ecef',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00d4ff';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div className="mb-3">
                <i className="ph ph-headset text-primary" style={{ fontSize: '3rem' }}></i>
              </div>
              <h5 style={{ color: '#0f3460' }}>Technical Support</h5>
              <p className="text-muted">Dedicated developer support and consultation</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="400">
            <div className="text-center p-4 rounded" style={{ 
              backgroundColor: '#f8f9fa',
              border: '2px solid #e9ecef',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00d4ff';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div className="mb-3">
                <i className="ph ph-globe text-primary" style={{ fontSize: '3rem' }}></i>
              </div>
              <h5 style={{ color: '#0f3460' }}>Global Reach</h5>
              <p className="text-muted">Access to Nexyos global partner network</p>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default DeveloperPartner;
