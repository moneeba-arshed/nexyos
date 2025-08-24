import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BannerModal from "../../components/Company/BannerModal";
import Contact from "../../components/Contact";
import "../../style/About.css";

const Partner = () => {
  const [currentImage, setCurrentImage] = useState("default");

  // Images data for Why Nexyos section
  const images = {
    default:
      "https://www.milesight.com/static/pc/en/company/partner-program/milesight-events.jpg?t=1746582988309",
    sensing:
      "https://www.milesight.com/static/pc/en/company/partner-program/milesight-events.jpg?t=1746582988309",
    exhibitions:
      "https://www.milesight.com/static/pc/en/company/partner-program/milesight-events.jpg?t=1746582988309",
    industries:
      "https://www.milesight.com/static/pc/en/company/partner-program/milesight-at-glance.png?t=1746582988309",
    sensors:
      "https://www.milesight.com/static/pc/en/company/partner-program/milesight-product-portfolio.png?t=1746582988309",
    experience:
      "https://www.milesight.com/static/pc/en/company/about-us/milesight-innovation.jpg?t=1746582955703",
  };

  // Technology innovations data
  const innovations = [
    {
      title: "AIGT",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
    },
    {
      title: "Advanced Analytics",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
    },
    {
      title: "IoT Integration",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
    },
    {
      title: "Smart Detection",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
    },
    {
      title: "Heat Mapping",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
    },
    {
      title: "Cloud AI",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
    },
    {
      title: "Video Intelligence",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
    },
    {
      title: "Edge Computing",
      image:
        "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
    },
  ];

  // Partner benefits data
  const partnerBenefits = [
    {
      title: "Sales Support",
      description: "Comprehensive sales training, marketing materials, and lead generation support",
      icon: "🤝"
    },
    {
      title: "Marketing Support",
      description: "Co-marketing campaigns, digital assets, and brand guidelines",
      icon: "📢"
    },
    {
      title: "Technical Support",
      description: "Expert technical assistance and product training for your team",
      icon: "⚙️"
    },
    {
      title: "Growth Support",
      description: "Business development strategies and market expansion guidance",
      icon: "📈"
    },
    {
      title: "Training Programs",
      description: "Regular training sessions and certification programs",
      icon: "🎓"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support for critical business needs",
      icon: "🕐"
    }
  ];

  // Partner types data
  const partnerTypes = [
    {
      title: "Channel Partners",
      description: "Resellers and distributors of our products and solutions",
      icon: "🏪"
    },
    {
      title: "Technology Partners",
      description: "Companies that integrate our technology into their platforms",
      icon: "🔧"
    },
    {
      title: "Solution Partners",
      description: "Partners who build complete solutions using our products",
      icon: "💡"
    },
    {
      title: "Developer Partners",
      description: "Software developers creating applications for our ecosystem",
      icon: "👨‍💻"
    },
    {
      title: "System Integrators",
      description: "Partners who implement and customize our solutions",
      icon: "🔗"
    },
    {
      title: "Consulting Partners",
      description: "Advisory services and implementation consulting",
      icon: "📋"
    }
  ];

  const handleHeadingClick = (imageKey) => {
    setCurrentImage(imageKey);
  };

  return (
    <>
      {/* Section 1: Hero Banner */}
      <BannerModal 
        title="Nexyos Partner Program"
        description="Join our comprehensive partner program designed to support profitable growth with sales, marketing, and technical expertise."
      />

      {/* Section 2: Partner Program Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="pe-lg-8">
                <h2 className="display-4 fw-bold mb-6 text-dark" data-aos="fade-right">
                  Partner with Nexyos
                </h2>
                <p className="lead mb-5 text-muted lh-lg">
                  Our comprehensive partner program is designed to provide a flexible 
                  and valuable platform that supports the profitable growth of our 
                  partners and distributors.
                </p>
                <p className="mb-5 text-muted lh-lg">
                  We offer committed support encompassing sales, marketing, and 
                  technical expertise, helping partners address challenges and 
                  outperform in competitive markets.
                </p>
                <p className="mb-0 text-muted lh-lg">
                  With over 15 years of experience in IoT and video surveillance, 
                  our partners gain access to cutting-edge technology and proven 
                  business models that drive success.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <img
                  src="https://www.milesight.com/static/pc/en/company/about-us/milesight-innovation.jpg?t=1746582955703"
                  alt="Nexyos Partner"
                  className="img-fluid rounded-4 shadow-lg"
                  data-aos="fade-left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Partner Benefits */}
      <section className="py-20 bg-white my-5">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="display-4 fw-bold mb-4 text-dark" data-aos="fade-up">
              Partner Benefits
            </h2>
            <p className="lead text-muted mb-0">
              Comprehensive support to help you succeed
            </p>
          </div>
          <div className="row g-5">
            {partnerBenefits.map((benefit, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div 
                  className="card h-100 border-0 shadow-sm hover-lift"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <div className="card-body text-center p-5">
                    <div className="display-2 mb-4">{benefit.icon}</div>
                    <h5 className="fw-semibold mb-4 text-dark">{benefit.title}</h5>
                    <p className="text-muted lh-base mb-0">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Nexyos */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 my-5">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="display-4 fw-bold mb-4 text-dark" data-aos="fade-up">
              Why Partner with Nexyos?
            </h2>
            <p className="lead text-muted mb-0">
              Discover the key advantages that make us the ideal partner
            </p>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="pe-lg-4">
                <div className="mb-4">
                  <div 
                    className="d-flex align-items-start p-4 rounded-4 cursor-pointer hover-lift"
                    onClick={() => handleHeadingClick("sensing")}
                    style={{ 
                      cursor: 'pointer', 
                      transition: 'all 0.3s ease',
                      backgroundColor: currentImage === "sensing" ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255, 255, 255, 0.9)',
                      border: currentImage === "sensing" ? '2px solid #3b82f6' : '2px solid transparent'
                    }}
                    data-aos="fade-right"
                  >
                    <div className="me-3 flex-shrink-0">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '48px', height: '48px'}}>
                        <i className="fas fa-globe fa-lg"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-2 text-dark fs-6">
                        Global Sensing Solutions
                      </h5>
                      <p className="text-muted mb-0 small lh-base">
                        Advanced sensing products for millions worldwide
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div 
                    className="d-flex align-items-start p-4 rounded-4 cursor-pointer hover-lift"
                    onClick={() => handleHeadingClick("exhibitions")}
                    style={{ 
                      cursor: 'pointer', 
                      transition: 'all 0.3s ease',
                      backgroundColor: currentImage === "exhibitions" ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255, 255, 255, 0.9)',
                      border: currentImage === "exhibitions" ? '2px solid #3b82f6' : '2px solid transparent'
                    }}
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <div className="me-3 flex-shrink-0">
                      <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '48px', height: '48px'}}>
                        <i className="fas fa-calendar-alt fa-lg"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-2 text-dark fs-6">
                        Industry Leadership
                      </h5>
                      <p className="text-muted mb-0 small lh-base">
                        Active participant in influential exhibitions and events
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-0">
                  <div 
                    className="d-flex align-items-start p-4 rounded-4 cursor-pointer hover-lift"
                    onClick={() => handleHeadingClick("industries")}
                    style={{ 
                      cursor: 'pointer', 
                      transition: 'all 0.3s ease',
                      backgroundColor: currentImage === "industries" ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255, 255, 255, 0.9)',
                      border: currentImage === "industries" ? '2px solid #3b82f6' : '2px solid transparent'
                    }}
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <div className="me-3 flex-shrink-0">
                      <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '48px', height: '48px'}}>
                        <i className="fas fa-industry fa-lg"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-2 text-dark fs-6">
                        Industry Presence
                      </h5>
                      <p className="text-muted mb-0 small lh-base">
                        Prominent presence across multiple industries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-7">
              <div className="ps-lg-4">
                <div className="position-relative">
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-4" style={{transform: 'rotate(-2deg)', zIndex: 1}}></div>
                  <div className="position-relative" style={{zIndex: 2}}>
                    <img
                      src={images[currentImage]}
                      alt="Nexyos content"
                      className="img-fluid rounded-4 shadow-lg"
                      data-aos="fade-left"
                      style={{transform: 'rotate(1deg)'}}
                    />
                  </div>
                  <div className="position-absolute top-0 end-0 bg-white rounded-circle d-flex align-items-center justify-content-center shadow-lg" 
                       style={{width: '80px', height: '80px', transform: 'translate(20px, -20px)', zIndex: 3}}>
                    <i className="fas fa-star text-warning fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Partner Types */}
      <section className="py-20 bg-white my-5">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="display-4 fw-bold mb-4 text-dark" data-aos="fade-up">
              Partner Types
            </h2>
            <p className="lead text-muted mb-0">
              Multiple partnership opportunities to fit your business model
            </p>
          </div>
          <div className="row g-5">
            {partnerTypes.map((type, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div 
                  className="card h-100 border-0 shadow-sm hover-lift"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <div className="card-body text-center p-5">
                    <div className="display-2 mb-4">{type.icon}</div>
                    <h5 className="fw-semibold mb-4 text-dark">{type.title}</h5>
                    <p className="text-muted lh-base mb-0">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Technology Innovations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 my-5">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="display-4 fw-bold mb-4 text-dark" data-aos="fade-up">
              Technology Innovations
            </h2>
            <p className="lead text-muted mb-0">
              Our strong R&D capabilities help partners develop competitive advantages
            </p>
          </div>
          <div className="position-relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
              }}
              className="pb-5"
            >
              {innovations.map((innovation, index) => (
                <SwiperSlide key={index}>
                  <div 
                    className="card border-0 shadow-sm h-100 hover-lift"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <img
                      src={innovation.image}
                      alt={innovation.title}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body text-center p-4">
                      <h5 className="fw-semibold text-dark mb-0">{innovation.title}</h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev swiper-button-prev-custom"></div>
            <div className="swiper-button-next swiper-button-next-custom"></div>
          </div>
        </div>
      </section>

      {/* Section 7: Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white my-5">
        <div className="container text-center">
          <h2 className="display-4 fw-bold mb-6" data-aos="fade-up">
            Ready to Partner with Nexyos?
          </h2>
          <p className="lead mb-6 opacity-90" data-aos="fade-up" data-aos-delay="100">
            Join our network of successful partners and distributors worldwide. 
            Let's grow together and transform the future of sensing technology.
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <button className="btn btn-light btn-lg px-5 py-3 fw-semibold hover-lift" data-aos="fade-up" data-aos-delay="200">
              Become a Partner
            </button>
            <button className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold hover-lift" data-aos="fade-up" data-aos-delay="300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Partner;
