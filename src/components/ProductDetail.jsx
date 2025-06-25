import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import CCTVSurveillanceCameras from "../assets/images/nexyos/CCTVSurveillanceCameras.jpg";
import miniCAmeraGroup from "../assets/images/nexyos/miniCAmeraGroup.png";
import PTZGROUPCAMERA from "../assets/images/nexyos/PTZGROUPCAMERA.png";
import './ProductDetail.css';

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

  return (
    <div className="product-detail-container mt-5">
      <div className="breadcrumb">Home / Network Cameras / Pro Series / {product.model}</div>
      <div className="top-section">
    
  {/* Image Section */}
<div className="image-section">
  <div className="carousel-wrapper">
    <button className="nav-btn left" onClick={handlePrev}>&lt;</button>
    <img src={mainImage} alt="Main" className="main-image" />
    <button className="nav-btn right" onClick={handleNext}>&gt;</button>
  </div>
  <div className="thumbnail-row">
    {product.images.slice(0, 4).map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Thumbnail ${index}`}
        className={`thumbnail ${mainImage === img ? "active" : ""}`}
        onClick={() => {
          setMainImage(img);
          setCurrentIndex(index);
        }}
      />
    ))}
  </div>
</div>


<div className="info-section mt-5">
  <h1>{product.title}</h1>
  <h3>Model: {product.model}</h3>
  <p className="description">{product.description}</p>
  <ul className="features">
    {product.features.map((f, index) => (
      <li key={index}>{f}</li>
    ))}
  </ul>

  {/* Action Buttons */}
<div className="action-buttons-row">
  <button className="half-btn primary-btn"> <a href="/downloads/datasheet.pdf" download className="primaryy-btn" >
     
      <span>Data Sheet</span>
    </a></button>
  <button className="half-btn secondary-btn">Sales Inquiry</button>
</div>


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
  
     <h3 className="mt-5">Specifications</h3>
      <div className="columns">
   
        {/* Left Menu */}
        <div className="menu-column">
          {sections.map((section) => (
            <button
              key={section}
              className={`menu-btn ${activeSection === section ? "active" : ""}`}
              onClick={() => handleScrollClick(section)}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Right Detail Section */}
        <div className="detail-column" id="detail-scroll">
          {sections.map((section) => (
            <div key={section} ref={sectionRefs[section]} className="spec-section">
              <h3>{section}</h3>
              <ul>
                {details[section].map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <hr />
            </div>
          ))}
        



        </div>
      </div>
</div>
      <div ref={resourceRef}>
{/* Resources Section */}
<h3 className="center-heading ">Resources</h3>
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
  <h3 className="center-heading">Accessories</h3>
<div ref={accessoriesRef} className="spec-section">

  <div className="accessory-grid container">
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
  );
};

export default ProductDetail;
