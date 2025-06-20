import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import CCTVSurveillanceCameras from "../assets/images/nexyos/CCTVSurveillanceCameras.jpg";
import miniCAmeraGroup from "../assets/images/nexyos/miniCAmeraGroup.png";
import PTZGROUPCAMERA from "../assets/images/nexyos/PTZGROUPCAMERA.png"


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
   


 <style>{`
.action-buttons-row {
  display: flex;
  gap: 10px;
  margin-top: 40px;
}

.half-btn {
  flex: 1; /* Takes 50% width with gap adjustment */
  padding: 14px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

.primary-btn {
  background-color: #01667D;
  color: white;
}
  .primaryy-btn {

  color: white;
}

.primary-btn:hover {
  background-color: #014c5a;
}

.secondary-btn {
  background-color: #f1f1f1;
  color: #333;
  border: 1px solid #ccc;
}

.secondary-btn:hover {
  background-color: #e0e0e0;
}

.product-detail-container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.breadcrumb {
  font-size: 14px;
  color: #888;
  margin-bottom: 15px;
}

.top-section {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

/* Image Carousel */
.image-section {
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 400px;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(1, 102, 125, 0.8);
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 18px;
  z-index: 10;
  border-radius: 4px;
}

.nav-btn.left {
  left: 10px;
}

.nav-btn.right {
  right: 10px;
}

.thumbnail-row {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.thumbnail {
  width: 80px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 4px;
  transition: border 0.3s ease;
}

.thumbnail.active,
.thumbnail:hover {
  border-color: #01667D;
}

/* Info Section */
.info-section {
  flex: 1 1 45%;
  margin-bottom: 100px;
   text-align: left;
  
}

.info-section h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.info-section h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #01667D;
}

.description {
  font-size: 15px;
  color: #333;
  margin-bottom: 15px;
}

.features {
  list-style: disc;
  padding-left: 20px;
  color: #333;
  font-size: 14px;
}

/* Sticky Tabs */
.tab-row {
  display: flex;
  gap: 10px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  margin: 30px 0;
  justify-content: center;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
}

.tab-btn {
  padding: 10px 20px;
  border: 1px solid #ccc;
  background: #f9f9f9;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
}

.tab-btn.active,
.tab-btn:hover {
  background: #01667D;
  color: white;
}

/* Specifications */
.columns {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-top: 40px;
  margin-bottom: 40px;
}

.menu-column {
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f9f9f9;
  padding: 10px;
}

.menu-btn {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 6px;
  text-align: left;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.menu-btn:hover {
  background-color: #e6f5f9;
}

.menu-btn.active {
  background-color: #01667D;
  color: white;
}

.detail-column {
  flex: 1;
  max-width: calc(100% - 270px);
  height: 695px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 20px;
  background-color: #fff;
}

.spec-section {
  margin-bottom: 30px;
  text-align: left;
}

.spec-section h3 {
  color: #01667D;
  margin-bottom: 10px;
  text-align: left;
}

.spec-section ul {
  padding-left: 20px;
  list-style-type: disc;
  color: #333;
}

.spec-section li {
  margin-bottom: 6px;
}

.spec-section hr {
  margin-top: 15px;
  border: none;
  height: 1px;
  background-color: #ddd;
}

/* Resources */
.resource-buttons {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 60px;
}

.download-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1f8fb;
  color: #01667D;
  font-size: 14px;
  padding: 16px 12px;
  width: 120px;
  height: 100px;
  text-align: center;
  text-decoration: none;
  border-radius: 0px;
  border: 1px solid #d1e7ee;
  transition: all 0.3s ease;
}

.download-btn:hover {
  background-color: #e6f4f9;
  box-shadow: 0 0 8px rgba(0, 102, 125, 0.2);
}

.download-btn .icon {
  font-size: 24px;
  margin-bottom: 6px;
}

/* Accessories */
.accessory-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
  justify-content: center;
}

.accessory-card {
  display: flex;
  align-items: center;
  width: calc(33.333% - 20px);
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  gap: 10px;
  min-width: 250px;
}

.accessory-card img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
}

/* Responsive Design */
@media screen and (max-width: 992px) {
  .accessory-card {
    width: calc(50% - 20px);
  }
}

@media screen and (max-width: 600px) {
  .columns {
    flex-direction: column;
  }

  .menu-column,
  .detail-column {
    width: 100%;
    max-width: none;
    height: auto;
  }

  .detail-column {
    max-height: none;
  }

  .accessory-card {
    width: 100%;
  }

  .nav-btn {
    padding: 6px 10px;
    font-size: 16px;
  }

  .thumbnail {
    width: 60px;
    height: 45px;
  }
}

`}</style>

    </div>
  );
};

export default ProductDetail;
