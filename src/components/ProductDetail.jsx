import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import CCTVSurveillanceCameras from "../assets/images/nexyos/CCTVSurveillanceCameras.jpg";
import miniCAmeraGroup from "../assets/images/nexyos/miniCAmeraGroup.png";
import PTZGROUPCAMERA from "../assets/images/nexyos/PTZGROUPCAMERA.png";
import './ProductDetail.css';
import banner from "../assets/images/bg/banner.jpg";
import frontcamera from "../assets/images/nexyos/frontcamera.png";
import sidecamera1 from "../assets/images/nexyos/sidecamera1.png";
import HotProductSlider from "./HotProductSlider";
import Contact from "./Contact";


const ProductDetail = () => {
  const { id } = useParams();
  const resourceRef = useRef(null);
  const accessoriesRef = useRef(null);
  const tabRef = useRef(null);
  const specRef = useRef(null);
  const accessoryRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Specifications");


  const scrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(
        ref === specRef ? "Specifications" :
          ref === resourceRef ? "Resources" :
            ref === accessoryRef ? "Accessories" : ""
      );
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (tabRef.current) {
        const offsetTop = tabRef.current.offsetTop;
        const scrollPosition = window.scrollY + 10;

        setIsFixed(scrollPosition >= offsetTop);

        const sectionOffsets = [
          { ref: specRef, name: "Specifications" },
          { ref: resourceRef, name: "Resources" },
          { ref: accessoryRef, name: "Accessories" }
        ];

        for (const sec of sectionOffsets) {
          if (sec.ref.current) {
            const top = sec.ref.current.offsetTop;
            const height = sec.ref.current.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveTab(sec.name);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const product = {
    title: "4 MP Smart Hybrid Light with ColorVu Motorized Varifocal Bullet Camera",
    model: "DS-2CD2647G3T-LIZSY",
    resolution: "2688 × 1520",
    images: [

      miniCAmeraGroup,
      PTZGROUPCAMERA,
      miniCAmeraGroup,
      CCTVSurveillanceCameras,
    ],
    description:
      "Hikvision's 4 MP Smart Hybrid Light Bullet Camera combines cutting-edge ColorVu technology with advanced AI to deliver vivid, accurate surveillance in all lighting conditions.",
    features: [
      "HikAI-ISP for excellent noise reduction effect",
      "24/7 colorful imaging via ColorVu technology",
      "Scene-adaptive WDR",
      "Focus on Person and Vehicle classification based on deep learning",
      "Motorized varifocal lens for easy installation and monitoring",
      "Anti-corrosion design, NEMA 4X equivalent",
      "Smart Hybrid Light: IR and White light with 3 modes",
      "Water and dust resistant (IP67) and vandal resistant (IK10)",
    ],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % product.images.length;
    setMainImage(product.images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + product.images.length) % product.images.length;
    setMainImage(product.images[prevIndex]);
    setCurrentIndex(prevIndex);
  };
  const sections = [
    "Camera", "Lens", "DORI", "Illuminator", "Video", "Audio",
    "Network", "Image", "Interface", "Event",
    "Deep Learning Function", "General", "Approval"
  ];

  const [activeSection, setActiveSection] = useState(null);

  const sectionRefs = sections.reduce((acc, section) => {
    acc[section] = useRef(null);
    return acc;
  }, {});

  const handleScrollClick = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(section);
  };

  const details = {
    "Camera": ["High resolution image sensor", "Advanced noise reduction", "Infrared night vision support"],
    "Lens": ["Motorized varifocal lens", "Focal length: 2.8 to 12mm", "Auto focus capabilities"],
    "DORI": ["Detect: 100m", "Observe: 50m", "Recognize: 25m", "Identify: 12m"],
    "Illuminator": ["Smart Hybrid Light", "Infrared range: 30m", "White light options"],
    "Video": ["H.265+ compression", "Max resolution: 4K", "Multiple stream support"],
    "Audio": ["Built-in microphone", "Audio input/output ports", "Noise filtering"],
    "Network": ["RJ45 Ethernet", "Support for ONVIF", "Secure remote access"],
    "Image": ["Wide Dynamic Range (WDR)", "3D DNR", "Backlight compensation"],
    "Interface": ["MicroSD card slot", "Alarm input/output", "RS485"],
    "Event": ["Motion detection", "Tamper alarm", "Line crossing detection"],
    "Deep Learning Function": ["Person/vehicle classification", "Facial recognition", "Intrusion detection"],
    "General": ["Power supply: PoE/12VDC", "Operating temperature: -30°C to 60°C", "Weatherproof (IP67)"],
    "Approval": ["FCC certified", "CE certified", "RoHS compliant"]
  };
  const cameraOptions = [
    {
      id: 1,
      img: miniCAmeraGroup,
      alt: "miniCAmeraGroup",
    },
    {
      id: 2,
      img: PTZGROUPCAMERA,
      alt: "PTZGROUPCAMERA",
    },
    {
      id: 3,
      img: miniCAmeraGroup,
      alt: "miniCAmeraGroup",
    },
  ];
  const [selectedCam, setSelectedCam] = useState(cameraOptions[0]);
  return (
    <>
      <div
        className="h-[350px] w-full bg-top bg-cover bg-no-repeat relative flex items-center "
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Title */}
        <div className="items-center w-[35%] flex-col" style={{ marginLeft: '100px' }}>

          <h1 className="text-3xl text-left text-white "  data-aos="fade-right">
            4 MP Smart Hybrid Light with ColorVu Motorized Varifocal Bullet Camera
          </h1>
          <p className="text-left w-full text-white">DS-2CD2647G3T-LIZSY</p>
        </div>

        {/* Main Camera Image */}
        <div className="mainCamera absolute 
  right-[150px] 
  max-w-[px] 
  h-[30px] 

  transform 
  rotate-[5deg] 
  rounded-2xl">

          <img src={selectedCam.img} alt={selectedCam.alt} className="w-[100%] h-full object-contain "
            style={{ transform: "rotate(-5deg)" }} />
        </div>

        {/* Circle Selectors */}
        <div className="flex flex-col space-y-8 absolute  right-16">
          {cameraOptions.map((cam) => (
            <button
              key={cam.id}
              className={`CircleSelector w-90 h-90 flex items-center border-2 justify-center transition-all duration-300 p-0 mb-8 rounded-full  ${selectedCam.id === cam.id
                  ? "active"
                  : ""
                }`}
              onClick={() => setSelectedCam(cam)}
              style={{ borderRadius: '46px', background: 'rgb(255, 255, 255, 0.5)' }}>
              <img src={cam.img} alt={cam.alt} className="object-contain" />
            </button>
          ))}
        </div>
      </div>
      <div className="product-detail-container mt-5">
        {/* <div className="breadcrumb">Home / Network Cameras / Pro Series / {product.model}</div> */}
        <div className="top-section">

          {/* Image Section */}



          <div className="info-section mt-36">
            <p className="description ms-20">{product.description}</p>
            <div className="flex flex-col lg:flex-row gap-6">
              <ul className="features flex-1 list-disc pl-5 space-y-1 ms-20">
                {product.features.slice(0, 4).map((f, index) => (
                  <li key={index}>{f}</li>
                ))}
              </ul>
              {/* Column 2 */}
              <ul className="features flex-1 list-disc pl-5 space-y-1 ms-20">
                {product.features.slice(4, 8).map((f, index) => (
                  <li key={index + 4}>{f}</li>
                ))}
              </ul>
              {/* Action Buttons */}
              <div className="action-buttons-row flex-1 flex flex-row gap-3 me-30">
                <button className="half-btn primary-btn h-60"> <a href="/downloads/datasheet.pdf" download className="primaryy-btn" >

                  <span>Data Sheet</span>
                </a></button>
                <button className="half-btn half-btn secondary-btn h-60 text-sm">Sales Inquiry</button>
              </div></div>


          </div>
        </div>
        <div>
          {/* Sticky Tabs */}
          <div ref={tabRef} className="tab-row">

            <button
              className={`tab-btn ${activeTab === "Specifications" ? "active" : ""}`}
              onClick={() => scrollTo(specRef)}
            >
              Specifications
            </button>
            <button
              className={`tab-btn ${activeTab === "Resources" ? "active" : ""}`}
              onClick={() => scrollTo(resourceRef)}
            >
              Resources
            </button>
            <button
              className={`tab-btn ${activeTab === "Accessories" ? "active" : ""}`}
              onClick={() => scrollTo(accessoryRef)}
            >
              Accessories
            </button>
          </div>

          {/* Content Sections */}
          <div ref={specRef}>
          </div>

          <h3 className="mt-5"  data-aos="fade-right">Specifications</h3>

          <div className="specifications-area">
            {/* Section Tabs */}
            <div className="section-tab-row">
              {sections.map((section) => (
                <button
                  key={section}
                  className={`section-tab-btn ${activeSection === section ? "active" : ""}`}
                  onClick={() => handleScrollClick(section)}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Detail Section */}
<div className="detail-column">
  {sections.map((section) => (
    <div key={section} ref={sectionRefs[section]} className="spec-section">
      <h3  data-aos="fade-right">{section}</h3>
      <ul>
        {details[section].map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  ))}
</div>


          </div>




        </div>
        <div ref={resourceRef}>
          {/* Resources Section */}
          <h3 className="center-heading "  data-aos="fade-right">Resources</h3>
          <div ref={resourceRef} className="spec-section">

            <div className="resource-buttons">
              <a href="/downloads/datasheet.pdf" download className="download-btn">
                <FaDownload className="icon" />
                <span>Data Sheet</span>
              </a>
              <a href="/downloads/manual.pdf" download className="download-btn">
                <FaDownload className="icon" />
                <span>User Manual</span>
              </a>
              <a href="/downloads/firmware.pdf" download className="download-btn">
                <FaDownload className="icon" />
                <span>Firmware Guide</span>
              </a>
              <a href="/downloads/quickstart.pdf" download className="download-btn">
                <FaDownload className="icon" />
                <span>Quick Start</span>
              </a>
              <a href="/downloads/datasheet.pdf" download className="download-btn">
                <FaDownload className="icon" />
                <span>Data Sheet</span>
              </a>
              <a href="/downloads/manual.pdf" download className="download-btn">
                <FaDownload className="icon" />
                <span>User Manual</span>
              </a>
              <a href="/downloads/firmware.pdf" download className="download-btn">
                <FaDownload className="icon" />
                <span>Firmware Guide</span>
              </a>
              <a href="/downloads/quickstart.pdf" download className="download-btn">
                <FaDownload className="icon" />
                <span>Quick Start</span>
              </a>
            </div>
            <hr />
          </div>

        </div>
        <div ref={accessoryRef}>
          {/* Accessories Section */}
          <h3 className="center-heading"  data-aos="fade-right">Accessories</h3>
          <div ref={accessoriesRef} className="spec-section">

            <div className="accessory-grid container">
              <div className="accessory-card">
                <img src="/images/ds1260zj.jpg" alt="Junction Box" />
                <div>
                  <h6  data-aos="fade-right">DS-1260ZJ</h6>
                  <p>Junction Box for Camera Installation</p>
                </div>
              </div>
              <div className="accessory-card">
                <img src="/images/ds1275zj.jpg" alt="Vertical Pole Mount" />
                <div>
                  <h6>DS-1275ZJ-S-SUS</h6>
                  <p>Vertical Pole Mount – Stainless Steel</p>
                </div>
              </div>
              <div className="accessory-card">
                <img src="/images/ds1276zj.jpg" alt="Corner Mount" />
                <div>
                  <h6>DS-1276ZJ-SUS</h6>
                  <p>Corner Mount – Heavy Duty Bracket</p>
                </div>
              </div>
              <div className="accessory-card">
                <img src="/images/ds1260zj.jpg" alt="Junction Box" />
                <div>
                  <h6>DS-1260ZJ</h6>
                  <p>Junction Box for Camera Installation</p>
                </div>
              </div>
              <div className="accessory-card">
                <img src="/images/ds1275zj.jpg" alt="Vertical Pole Mount" />
                <div>
                  <h6>DS-1275ZJ-S-SUS</h6>
                  <p>Vertical Pole Mount – Stainless Steel</p>
                </div>
              </div>
              <div className="accessory-card">
                <img src="/images/ds1276zj.jpg" alt="Corner Mount" />
                <div>
                  <h6>DS-1276ZJ-SUS</h6>
                  <p>Corner Mount – Heavy Duty Bracket</p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        </div>
        <HotProductSlider/>
        <Contact/></>
  );
};

export default ProductDetail;
