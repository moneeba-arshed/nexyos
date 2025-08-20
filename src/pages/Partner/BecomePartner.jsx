// BecomePartner.jsx
import React, { useState } from "react";
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
    },
    {
      title: "Technology Partner",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
    },
    {
      title: "Developer Partner",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
    },
    {
      title: "CCTV Specialist",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
    },
    {
      title: "IoT Integrator",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
    },
    {
      title: "Solution Provider",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
    },
    {
      title: "System Integrator",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
    },
    {
      title: "Value Added Reseller",
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

      {/* Become a Partner Section */}
      <div className={`${styles.programSection} container`}>
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <img
              src="https://www.milesight.com/static/pc/en/company/about-us/milesight-innovation.jpg?t=1746582955703"
              alt="Become a Nexyos Partner"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-7">
            <div className={`${styles.programCard} p-4 p-md-5`}>
              <div className="card-body">
                <h3 className={`${styles.programSubtitle} mb-4`} data-aos="fade-right">
                  Become a Nexyos Partner
                </h3>
                <p className={styles.programText}>
                  Join the Nexyos Partner Network and become part of a global ecosystem driving 
                  innovation in IoT and video surveillance. Whether you're a technology company, 
                  system integrator, or solution provider, we offer multiple partnership models 
                  designed to accelerate your growth and expand your market reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Partner with Nexyos Section */}
      <div className={`${styles.section} container-fluid py-5`}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className={styles.mainTitle} data-aos="fade-right">Why Partner with Nexyos?</h1>

              <div className={`${styles.headingGroup} mb-4`} data-aos="fade-right">
                <h5
                  className={styles.heading}
                  onClick={() => handleHeadingClick("partnership")}
                  data-aos="fade-right">
                  Proven Track Record of Partnership Success
                </h5>
              </div>

              <div className={`${styles.headingGroup} mb-4`}>
                <h5
                  className={styles.heading}
                  onClick={() => handleHeadingClick("growth")}
                  data-aos="fade-right">
                  Accelerated Business Growth Opportunities
                </h5>
              </div>

              <div className={`${styles.headingGroup} mb-4`}>
                <h5
                  className={styles.heading}
                  onClick={() => handleHeadingClick("success")}
                  data-aos="fade-right">
                  Comprehensive Support and Resources
                </h5>
              </div>
            </div>

            <div className="col-md-7">
              <div className={styles.imageContainer}>
                <img
                  src={images[currentImage]}
                  alt="Partnership content"
                  className={`${styles.mainImage} img-fluid rounded`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Types Section with Swiper */}
      <div className={`${styles.innovationSection} container-fluid`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className={styles.mainTitle} data-aos="fade-right">
                Partnership Types & Opportunities
              </h1>
              <p className={styles.description}>
                Nexyos offers diverse partnership models to suit different business types and 
                expertise levels. From channel partnerships for resellers to technology 
                partnerships for innovators, we provide tailored programs that align with 
                your business goals and market focus.
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
                {partnershipTypes.map((type, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.innovationCard}>
                      <div className={styles.innovationImage}>
                        <img
                          src={type.image}
                          alt={type.title}
                          className="img-fluid"
                        />
                      </div>
                      <div className={styles.innovationContent}>
                        <h5 className={styles.innovationTitle}>{type.title}</h5>
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

      {/* Application Process Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className={styles.programTitle} data-aos="fade-up">
              How to Become a Partner
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center">
              <div className="mb-3">
                <i className="ph ph-1-circle text-primary" style={{ fontSize: '3rem' }}></i>
              </div>
              <h5>Initial Contact</h5>
              <p>Reach out to our partnership team to discuss opportunities</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center">
              <div className="mb-3">
                <i className="ph ph-2-circle text-primary" style={{ fontSize: '3rem' }}></i>
              </div>
              <h5>Assessment</h5>
              <p>We evaluate your business fit and partnership potential</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center">
              <div className="mb-3">
                <i className="ph ph-3-circle text-primary" style={{ fontSize: '3rem' }}></i>
              </div>
              <h5>Agreement</h5>
              <p>Sign partnership agreement and begin onboarding process</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="400">
            <div className="text-center">
              <div className="mb-3">
                <i className="ph ph-4-circle text-primary" style={{ fontSize: '3rem' }}></i>
              </div>
              <h5>Launch</h5>
              <p>Start your partnership journey with full support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className={styles.programTitle} data-aos="fade-up">
                Ready to Join Our Partner Network?
              </h2>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="100">
                Take the first step towards a successful partnership with Nexyos. 
                Our team is ready to help you explore opportunities and build a 
                mutually beneficial relationship.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap" data-aos="fade-up" data-aos-delay="200">
                <button className="btn btn-primary btn-lg">
                  <i className="ph ph-envelope me-2"></i>
                  Contact Partnership Team
                </button>
                <button className="btn btn-outline-primary btn-lg">
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
