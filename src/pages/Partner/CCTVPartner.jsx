// CCTVPartner.jsx
import React, { useState } from "react";
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
    },
    {
      title: "NVR Systems",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
    },
    {
      title: "Video Analytics",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
    },
    {
      title: "Access Control",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
    },
    {
      title: "Cloud Storage",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
    },
    {
      title: "Mobile Apps",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
    },
    {
      title: "AI Detection",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
    },
    {
      title: "Integration APIs",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
    },
  ];

  const handleHeadingClick = (imageKey) => {
    setCurrentImage(imageKey);
  };

  return (
    <>
      <Banner />

      {/* CCTV Channel Partner Program Section */}
      <div className={`${styles.programSection} container`}>
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <img
              src="https://www.milesight.com/static/pc/en/company/about-us/milesight-innovation.jpg?t=1746582955703"
              alt="Nexyos CCTV Partner"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-7">
            <div className={`${styles.programCard} p-4 p-md-5`}>
              <div className="card-body">
                <h3 className={`${styles.programSubtitle} mb-4`} data-aos="fade-right">
                  CCTV Channel Partner Program
                </h3>
                <p className={styles.programText}>
                  The Nexyos CCTV Channel Partner Program is designed for security system 
                  integrators, distributors, and resellers who specialize in video surveillance 
                  solutions. Our channel partners receive comprehensive training, marketing support, 
                  and competitive pricing to deliver cutting-edge security solutions to their 
                  customers while building profitable, long-term relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Nexyos CCTV Section */}
      <div className={`${styles.section} container-fluid py-5`}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className={styles.mainTitle} data-aos="fade-right">Why Choose Nexyos CCTV?</h1>

              <div className={`${styles.headingGroup} mb-4`} data-aos="fade-right">
                <h5
                  className={styles.heading}
                  onClick={() => handleHeadingClick("surveillance")}
                  data-aos="fade-right">
                  Industry-Leading Video Surveillance Technology
                </h5>
              </div>

              <div className={`${styles.headingGroup} mb-4`}>
                <h5
                  className={styles.heading}
                  onClick={() => handleHeadingClick("security")}
                  data-aos="fade-right">
                  Comprehensive Security Solution Portfolio
                </h5>
              </div>

              <div className={`${styles.headingGroup} mb-4`}>
                <h5
                  className={styles.heading}
                  onClick={() => handleHeadingClick("monitoring")}
                  data-aos="fade-right">
                  Advanced AI-Powered Monitoring Capabilities
                </h5>
              </div>
            </div>

            <div className="col-md-7">
              <div className={styles.imageContainer}>
                <img
                  src={images[currentImage]}
                  alt="CCTV Partner content"
                  className={`${styles.mainImage} img-fluid rounded`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CCTV Solutions Section with Swiper */}
      <div className={`${styles.innovationSection} container-fluid`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className={styles.mainTitle} data-aos="fade-right">
                CCTV Solutions & Products
              </h1>
              <p className={styles.description}>
                Our comprehensive CCTV portfolio includes high-definition IP cameras, advanced 
                NVR systems, intelligent video analytics, and cloud-based solutions. From 
                small business installations to enterprise-grade security systems, we provide 
                scalable solutions that meet diverse customer requirements.
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
                {cctvSolutions.map((solution, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.innovationCard}>
                      <div className={styles.innovationImage}>
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="img-fluid"
                        />
                      </div>
                      <div className={styles.innovationContent}>
                        <h5 className={styles.innovationTitle}>{solution.title}</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className={`${styles.swiperButtonPrev} ${styles.swiperButton}`}>
                <i className="ph ph-caret-left"></i>
              </button>
              <button className={`${styles.swiperButtonNext} ${styles.swiperButton}`}>
                <i className="ph ph-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Channel Partner Benefits Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className={styles.programTitle} data-aos="fade-up">
              Channel Partner Benefits
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center">
              <div className="mb-3">
                <i className="ph ph-graduation-cap text-primary" style={{ fontSize: '3rem' }}></i>
              </div>
              <h5>Training & Certification</h5>
              <p>Comprehensive product and technical training programs</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center">
              <div className="mb-3">
                <i className="ph ph-megaphone text-primary" style={{ fontSize: '3rem' }}></i>
              </div>
              <h5>Marketing Support</h5>
              <p>Co-marketing materials and lead generation support</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center">
              <div className="mb-3">
                <i className="ph ph-headset text-primary" style={{ fontSize: '3rem' }}></i>
              </div>
              <h5>Technical Support</h5>
              <p>Pre-sales and post-sales technical assistance</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="400">
            <div className="text-center">
              <div className="mb-3">
                <i className="ph ph-trend-up text-primary" style={{ fontSize: '3rem' }}></i>
              </div>
              <h5>Competitive Pricing</h5>
              <p>Attractive margins and volume-based incentives</p>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default CCTVPartner;
