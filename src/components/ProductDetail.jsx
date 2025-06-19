import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FaDownload } from "react-icons/fa";


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
    id,
    title: `4 MP Smart Hybrid Light with ColorVu Motorized Varifocal Bullet Camera`,
    model: `DS-2CD2647G3T-LIZSY`,
    resolution: `2688 × 1520`,
    image: "https://via.placeholder.com/600x400.png?text=Camera+Image",
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
      "Water and dust resistant (IP67) and vandal resistant (IK10)"
    ]
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
        <div className="image-section">
          <img src={product.image} alt={product.title} />
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
.tab-row {
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 10;
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 15px 10px;
  border-bottom: 1px solid #ddd;
}
r-bottom: 1px solid #ddd;
}

.tab-row.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.tab-btn {
  background: none;
  border: none;
  font-size: 16px;
  color: #01667D;
  cursor: pointer;
  padding: 10px 15px;
  font-weight: 600;
  position: relative;
}

.tab-btn.active {
  border-bottom: 3px solid #01667D;
}

.tab-btn:hover {
  color: #014B60;
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
    gap: 40px;
    flex-wrap: wrap;
  }

  .image-section {
    flex: 1 1 45%;
  }

  .image-section img {
    width: 100%;
    border-radius: 8px;
  }

  .info-section {
    flex: 1 1 45%;
    margin-bottom: 100px;
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

  .columns {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    margin-top: 40px;
    margin-bottom:40px
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

  /* Resources Section */
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

  /* Accessories Section */
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
  }
`}</style>

    </div>
  );
};

export default ProductDetail;
