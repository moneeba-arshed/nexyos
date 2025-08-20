// TechnologyPartner.jsx
import React, { useState } from "react";
import styles from "../../style/PartnerProgram.module.css";
import Banner from "../../components/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Contact from "../../components/Contact";

const TechnologyPartner = () => {
  const [currentImage, setCurrentImage] = useState("default");

  // Images data
  const images = {
    default:
      "https://www.milesight.com/static/pc/en/company/partner-program/milesight-events.jpg?t=1746582988309",
    innovation:
      "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
    collaboration:
      "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
    research:
      "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
    development:
      "https://www.milesight.com/static/pc/en/company/partner-program/milesight-product-portfolio.png?t=1746582988309",
    integration:
      "https://www.milesight.com/static/pc/en/company/about-us/milesight-innovation.jpg?t=1746582955703",
  };

  // Technology Solutions data for Swiper
  const technologySolutions = [
    {
      title: "AI & Machine Learning",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
      description: "Advanced AI algorithms and ML frameworks",
      icon: "ph ph-brain",
      color: "#ff6b6b"
    },
    {
      title: "IoT Platforms",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
      description: "Connected device management and analytics",
      icon: "ph ph-wifi",
      color: "#4ecdc4"
    },
    {
      title: "Cloud Solutions",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
      description: "Scalable cloud infrastructure and services",
      icon: "ph ph-cloud",
      color: "#45b7d1"
    },
    {
      title: "Edge Computing",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
      description: "Real-time processing at the network edge",
      icon: "ph ph-cpu",
      color: "#96ceb4"
    },
    {
      title: "Data Analytics",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
      description: "Big data processing and insights",
      icon: "ph ph-chart-line",
      color: "#feca57"
    },
    {
      title: "Security Solutions",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
      description: "Cybersecurity and threat protection",
      icon: "ph ph-shield-check",
      color: "#ff9ff3"
    },
    {
      title: "5G & Connectivity",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
      description: "Next-generation network technologies",
      icon: "ph ph-signal",
      color: "#54a0ff"
    },
    {
      title: "Smart City Tech",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
      description: "Urban infrastructure and automation",
      icon: "ph ph-buildings",
      color: "#5f27cd"
    },
  ];

  const handleHeadingClick = (imageKey) => {
    setCurrentImage(imageKey);
  };

  return (
    <>
      <Banner />

      {/* Hero Section with Futuristic Design */}
      <div className="container-fluid py-5 position-relative" style={{ 
        background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
        color: 'white',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.1 }}>
          <div className="position-absolute" style={{ top: '10%', left: '5%', width: '100px', height: '100px', border: '2px solid #00d4ff', transform: 'rotate(45deg)' }}></div>
          <div className="position-absolute" style={{ top: '20%', right: '10%', width: '150px', height: '150px', border: '2px solid #ff6b6b', borderRadius: '50%' }}></div>
          <div className="position-absolute" style={{ bottom: '15%', left: '15%', width: '80px', height: '80px', border: '2px solid #4ecdc4', transform: 'rotate(30deg)' }}></div>
          <div className="position-absolute" style={{ bottom: '25%', right: '20%', width: '120px', height: '120px', border: '2px solid #feca57', transform: 'rotate(60deg)' }}></div>
        </div>

        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="bg-dark p-4 rounded" style={{ 
                  border: '2px solid #00d4ff',
                  boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center me-3" 
                         style={{ width: '12px', height: '12px' }}></div>
                    <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center me-3" 
                         style={{ width: '12px', height: '12px' }}></div>
                    <div className="bg-danger rounded-circle d-inline-flex align-items-center justify-content-center me-3" 
                         style={{ width: '12px', height: '12px' }}></div>
                    <span className="text-muted small">Technology Partner Terminal</span>
                  </div>
                  <pre className="text-success mb-0" style={{ fontSize: '0.9rem' }}>
{`> Nexyos Technology Partner Program
> Initializing partnership protocols...
> Status: READY
> Available technologies: 8
> Connection: ESTABLISHED

Welcome to the future of collaboration!`}
                  </pre>
                </div>
                <div className="position-absolute top-0 end-0 mt-2 me-2">
                  <span className="badge" style={{ backgroundColor: '#00d4ff', color: '#000' }}>Live</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ 
                color: '#00d4ff',
                textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Technology Partner Program
              </h1>
              <p className="lead mb-4" style={{ color: '#e0e0e0' }}>
                Join forces with Nexyos to create the next generation of IoT and video surveillance 
                technologies. Collaborate, innovate, and shape the future together.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-outline-light btn-lg" style={{ 
                  borderColor: '#00d4ff',
                  color: '#00d4ff',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#00d4ff';
                  e.target.style.color = '#000';
                  e.target.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#00d4ff';
                  e.target.style.boxShadow = 'none';
                }}>
                  <i className="ph ph-rocket me-2"></i>
                  Explore Opportunities
                </button>
                <button className="btn btn-lg" style={{ 
                  backgroundColor: '#ff6b6b',
                  borderColor: '#ff6b6b',
                  color: 'white',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 5px 20px rgba(255, 107, 107, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}>
                  <i className="ph ph-handshake me-2"></i>
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Partner Program Section */}
      <div className={`${styles.programSection} container py-5`}>
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="position-relative">
              <img
                src="https://www.milesight.com/static/pc/en/company/about-us/milesight-innovation.jpg?t=1746582955703"
                alt="Nexyos Technology Partner"
                className="img-fluid rounded shadow-lg"
                style={{ filter: 'brightness(1.1) contrast(1.1)' }}
              />
              <div className="position-absolute top-0 start-0 m-3">
                <span className="badge fs-6" style={{ 
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px'
                }}>Tech Innovation Hub</span>
              </div>
              <div className="position-absolute bottom-0 end-0 m-3">
                <div className="bg-dark rounded-circle d-inline-flex align-items-center justify-content-center" 
                     style={{ width: '50px', height: '50px' }}>
                  <i className="ph ph-play text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className={`${styles.programCard} p-4 p-md-5`} style={{ 
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
              border: '3px solid transparent',
              borderRadius: '20px',
              backgroundImage: 'linear-gradient(white, white), linear-gradient(45deg, #00d4ff, #ff6b6b, #4ecdc4)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="card-body">
                <h3 className={`${styles.programSubtitle} mb-4`} data-aos="fade-right" style={{ 
                  color: '#0f3460',
                  background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  <i className="ph ph-lightbulb me-2"></i>
                  Technology Partner Program
                </h3>
                <p className={styles.programText} style={{ color: '#555', lineHeight: '1.8' }}>
                  The Nexyos Technology Partner Program brings together innovative technology 
                  companies to collaborate on cutting-edge solutions in IoT, AI, and video 
                  surveillance. Our technology partners benefit from joint development opportunities, 
                  shared intellectual property, and access to our global customer base while 
                  contributing their expertise to create next-generation solutions.
                </p>
                <div className="mt-4">
                  <div className="row text-center">
                    <div className="col-4">
                      <div className="text-center">
                        <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-2" 
                             style={{ width: '50px', height: '50px' }}>
                          <i className="ph ph-lightbulb text-white" style={{ fontSize: '1.5rem' }}></i>
                        </div>
                        <div className="fw-bold" style={{ color: '#00d4ff' }}>50+</div>
                        <small className="text-muted">Innovations</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-center">
                        <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-2" 
                             style={{ width: '50px', height: '50px' }}>
                          <i className="ph ph-globe text-white" style={{ fontSize: '1.5rem' }}></i>
                        </div>
                        <div className="fw-bold" style={{ color: '#ff6b6b' }}>25+</div>
                        <small className="text-muted">Countries</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-center">
                        <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-2" 
                             style={{ width: '50px', height: '50px' }}>
                          <i className="ph ph-users text-white" style={{ fontSize: '1.5rem' }}></i>
                        </div>
                        <div className="fw-bold" style={{ color: '#4ecdc4' }}>100+</div>
                        <small className="text-muted">Partners</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Partner with Nexyos Section */}
      <div className={`${styles.section} container-fluid py-5`} style={{ 
        backgroundColor: '#f8f9fa',
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className={styles.mainTitle} data-aos="fade-right" style={{ 
                color: '#0f3460',
                background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                <i className="ph ph-target me-2"></i>
                Why Partner with Nexyos?
              </h1>

              <div className={`${styles.headingGroup} mb-4`} data-aos="fade-right">
                <h5
                  className={styles.heading}
                  onClick={() => handleHeadingClick("innovation")}
                  data-aos="fade-right"
                  style={{ 
                    cursor: 'pointer',
                    padding: '20px',
                    borderRadius: '15px',
                    border: '2px solid #e9ecef',
                    transition: 'all 0.3s ease',
                    backgroundColor: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#00d4ff';
                    e.target.style.backgroundColor = '#f0f8ff';
                    e.target.style.transform = 'translateX(10px)';
                    e.target.style.boxShadow = '0 5px 20px rgba(0, 212, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#e9ecef';
                    e.target.style.backgroundColor = 'white';
                    e.target.style.transform = 'translateX(0)';
                    e.target.style.boxShadow = 'none';
                  }}>
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
                    background: 'linear-gradient(45deg, transparent, rgba(0, 212, 255, 0.1), transparent)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.6s ease'
                  }}></div>
                  <i className="ph ph-lightbulb me-2" style={{ color: '#00d4ff' }}></i>
                  Joint Innovation and Co-Development Opportunities
                </h5>
              </div>

              <div className={`${styles.headingGroup} mb-4`}>
                <h5
                  className={styles.heading}
                  onClick={() => handleHeadingClick("collaboration")}
                  data-aos="fade-right"
                  style={{ 
                    cursor: 'pointer',
                    padding: '20px',
                    borderRadius: '15px',
                    border: '2px solid #e9ecef',
                    transition: 'all 0.3s ease',
                    backgroundColor: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#ff6b6b';
                    e.target.style.backgroundColor = '#fff5f5';
                    e.target.style.transform = 'translateX(10px)';
                    e.target.style.boxShadow = '0 5px 20px rgba(255, 107, 107, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#e9ecef';
                    e.target.style.backgroundColor = 'white';
                    e.target.style.transform = 'translateX(0)';
                    e.target.style.boxShadow = 'none';
                  }}>
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
                    background: 'linear-gradient(45deg, transparent, rgba(255, 107, 107, 0.1), transparent)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.6s ease'
                  }}></div>
                  <i className="ph ph-globe-hemisphere-east me-2" style={{ color: '#ff6b6b' }}></i>
                  Access to Global Markets and Customer Base
                </h5>
              </div>

              <div className={`${styles.headingGroup} mb-4`}>
                <h5
                  className={styles.heading}
                  onClick={() => handleHeadingClick("research")}
                  data-aos="fade-right"
                  style={{ 
                    cursor: 'pointer',
                    padding: '20px',
                    borderRadius: '15px',
                    border: '2px solid #e9ecef',
                    transition: 'all 0.3s ease',
                    backgroundColor: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#4ecdc4';
                    e.target.style.backgroundColor = '#f0fffd';
                    e.target.style.transform = 'translateX(10px)';
                    e.target.style.boxShadow = '0 5px 20px rgba(78, 205, 196, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#e9ecef';
                    e.target.style.backgroundColor = 'white';
                    e.target.style.transform = 'translateX(0)';
                    e.target.style.boxShadow = 'none';
                  }}>
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
                    background: 'linear-gradient(45deg, transparent, rgba(78, 205, 196, 0.1), transparent)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.6s ease'
                  }}></div>
                  <i className="ph ph-microscope me-2" style={{ color: '#4ecdc4' }}></i>
                  Shared R&D Resources and Technical Expertise
                </h5>
              </div>
            </div>

            <div className="col-md-7">
              <div className={styles.imageContainer}>
                <img
                  src={images[currentImage]}
                  alt="Technology Partner content"
                  className={`${styles.mainImage} img-fluid rounded shadow-lg`}
                  style={{ 
                    transition: 'all 0.3s ease',
                    filter: 'brightness(1.05) contrast(1.05)'
                  }}
                />
                <div className="position-absolute top-0 start-0 m-3">
                  <span className="badge fs-6" style={{ 
                    backgroundColor: '#4ecdc4',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px'
                  }}>Interactive Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Solutions Section with Swiper */}
      <div className={`${styles.innovationSection} container-fluid py-5`} style={{ 
        background: 'linear-gradient(135deg, #0f3460 0%, #16213e 50%, #533483 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.05 }}>
          <div className="position-absolute" style={{ top: '5%', left: '10%', width: '200px', height: '200px', border: '1px solid #00d4ff', transform: 'rotate(45deg)' }}></div>
          <div className="position-absolute" style={{ top: '15%', right: '15%', width: '150px', height: '150px', border: '1px solid #ff6b6b', borderRadius: '50%' }}></div>
          <div className="position-absolute" style={{ bottom: '10%', left: '20%', width: '180px', height: '180px', border: '1px solid #4ecdc4', transform: 'rotate(30deg)' }}></div>
        </div>

        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-12">
              <h1 className={styles.mainTitle} data-aos="fade-right" style={{ 
                color: '#00d4ff',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <i className="ph ph-cube me-2"></i>
                Technology Solutions & Capabilities
              </h1>
              <p className={styles.description} style={{ 
                textAlign: 'center',
                fontSize: '1.1rem',
                maxWidth: '800px',
                margin: '0 auto 3rem auto',
                color: '#e0e0e0'
              }}>
                Our technology partners bring diverse expertise across emerging technologies, 
                enabling us to deliver comprehensive solutions that address complex business 
                challenges. From AI and IoT to cloud computing and edge processing, we 
                collaborate to create innovative, scalable solutions.
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
                {technologySolutions.map((solution, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.innovationCard} style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(15px)',
                      border: `2px solid ${solution.color}`,
                      borderRadius: '20px',
                      padding: '25px',
                      textAlign: 'center',
                      transition: 'all 0.4s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                      e.currentTarget.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.3)`;
                      e.currentTarget.style.borderColor = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = solution.color;
                    }}>
                      {/* Hover Effect Background */}
                      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
                        background: `linear-gradient(45deg, transparent, ${solution.color}20, transparent)`,
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.6s ease'
                      }}></div>
                      
                      <div className="mb-4 position-relative">
                        <div className="rounded-circle d-inline-flex align-items-center justify-content-center" 
                             style={{ 
                               width: '80px', 
                               height: '80px',
                               backgroundColor: solution.color,
                               boxShadow: `0 0 20px ${solution.color}40`
                             }}>
                          <i className={`${solution.icon} text-white`} style={{ fontSize: '2rem' }}></i>
                        </div>
                      </div>
                      <div className={styles.innovationContent} className="position-relative">
                        <h5 className={styles.innovationTitle} style={{ 
                          color: solution.color,
                          fontSize: '1.2rem',
                          marginBottom: '0.5rem'
                        }}>{solution.title}</h5>
                        <p className="text-light small" style={{ 
                          color: '#e0e0e0',
                          lineHeight: '1.5'
                        }}>{solution.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className={`${styles.swiperButtonPrev} ${styles.swiperButton}`} style={{
                backgroundColor: 'rgba(0, 212, 255, 0.2)',
                border: '2px solid #00d4ff',
                color: '#00d4ff',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.4)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.2)';
                e.target.style.transform = 'scale(1)';
              }}>
                <i className="ph ph-caret-left"></i>
              </button>
              <button className={`${styles.swiperButtonNext} ${styles.swiperButton}`} style={{
                backgroundColor: 'rgba(0, 212, 255, 0.2)',
                border: '2px solid #00d4ff',
                color: '#00d4ff',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.4)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.2)';
                e.target.style.transform = 'scale(1)';
              }}>
                <i className="ph ph-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Benefits Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className={styles.programTitle} data-aos="fade-up" style={{ 
              color: '#0f3460',
              background: 'linear-gradient(45deg, #00d4ff, #ff6b6b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              <i className="ph ph-star me-2"></i>
              Partnership Benefits
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center p-4 rounded h-100" style={{ 
              backgroundColor: '#f8f9fa',
              border: '2px solid #e9ecef',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00d4ff';
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div className="mb-3">
                <i className="ph ph-lightbulb text-primary" style={{ fontSize: '3rem', color: '#00d4ff' }}></i>
              </div>
              <h5 style={{ color: '#0f3460' }}>Co-Innovation</h5>
              <p className="text-muted">Joint development of new products and solutions</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center p-4 rounded h-100" style={{ 
              backgroundColor: '#f8f9fa',
              border: '2px solid #e9ecef',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#ff6b6b';
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div className="mb-3">
                <i className="ph ph-globe-hemisphere-east text-primary" style={{ fontSize: '3rem', color: '#ff6b6b' }}></i>
              </div>
              <h5 style={{ color: '#0f3460' }}>Global Reach</h5>
              <p className="text-muted">Access to international markets and customers</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center p-4 rounded h-100" style={{ 
              backgroundColor: '#f8f9fa',
              border: '2px solid #e9ecef',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#4ecdc4';
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(78, 205, 196, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div className="mb-3">
                <i className="ph ph-users text-primary" style={{ fontSize: '3rem', color: '#4ecdc4' }}></i>
              </div>
              <h5 style={{ color: '#0f3460' }}>Technical Support</h5>
              <p className="text-muted">Shared expertise and collaborative problem-solving</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="400">
            <div className="text-center p-4 rounded h-100" style={{ 
              backgroundColor: '#f8f9fa',
              border: '2px solid #e9ecef',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#feca57';
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(254, 202, 87, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e9ecef';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div className="mb-3">
                <i className="ph ph-chart-line-up text-primary" style={{ fontSize: '3rem', color: '#feca57' }}></i>
              </div>
              <h5 style={{ color: '#0f3460' }}>Revenue Growth</h5>
              <p className="text-muted">Shared success through joint go-to-market strategies</p>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default TechnologyPartner;
