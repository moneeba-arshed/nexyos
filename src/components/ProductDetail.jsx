import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import CCTVSurveillanceCameras from "../assets/images/nexyos/CCTVSurveillanceCameras.jpg";
import miniCAmeraGroup from "../assets/images/nexyos/miniCAmeraGroup.png";
import PTZGROUPCAMERA from "../assets/images/nexyos/PTZGROUPCAMERA.png";
import "./ProductDetail.css";
import banner from "../assets/images/bg/banner.jpg";
import frontcamera from "../assets/images/nexyos/frontcamera.png";
import sidecamera1 from "../assets/images/nexyos/sidecamera1.png";
import HotProductSlider from "./HotProductSlider";
import Contact from "./Contact";
import axios from "axios";

const tabs = [
  'Camera',
  'Lens',
  'Illuminator',
  'PTZ',
  'Video',
  'Audio',
  'Network',
  'Image',
  'Interface',
  'Event',
];
const specsData = {
  Camera: [
    { label: 'Image Sensor', value: '1/2.8" progressive scan CMOS' },
    { label: 'Max. Resolution', value: '2560 × 1440' },
    { label: 'Min. Illumination', value: 'Color: 0.005 Lux @ (F1.6, AGC ON); B/W: 0.001Lux @ (F1.6, AGC ON), 0 Lux with IR' },
    { label: 'Shutter Speed', value: '1/1 s to 1/30000 s' },
    { label: 'Day & Night', value: 'IR cut filter' },
    { label: 'Zoom', value: '15x optical, 16x digital' },
    { label: 'Slow Shutter', value: 'Yes' },
  ],
  Lens: [
    { label: 'Focal Length', value: '5 mm to 75 mm' },
    {
      label: 'FOV', value: `Horizontal field of view: 55° to 4° (wide-tele),
Vertical field of view: 33° to 2.2° (wide-tele),
Diagonal field of view: 61.5° to 4.6° (wide-tele)` },
    { label: 'Focus', value: `Auto, semi-auto, manual` },
    { label: 'Aperture', value: 'Max. F1.6' },
    { label: 'Zoom Speed', value: 'Approx. 2.3 s' },
  ],
  Illuminator: [
    { label: 'Supplement Light Type', value: 'IR' },
    { label: 'Supplement Light Range', value: 'IR Distance: up to 100 m' },
  ],
  PTZ: [
    { label: 'Movement Range (Pan)', value: '360°' },
    { label: 'Movement Range (Tilt)', value: '-15° to 90° (auto flip)' },
    { label: 'Pan Speed', value: 'Pan speed: configurable from 0.1° to 80°/s; preset speed: 80°/s' },
    { label: 'Tilt Speed', value: 'Tilt speed: configurable from 0.1° to 80°/s, preset speed 80°/s' },
    { label: 'Proportional Pan', value: 'Yes' },
    { label: 'Presets', value: '300' },
    { label: 'Preset Freezing', value: 'Yes' },
    { label: 'Patrol Scan', value: '8 patrols, up to 32 presets for each patrol' },
    { label: 'Pattern Scan', value: '4 pattern scans' },
    { label: 'Park Action', value: 'Preset, pattern scan, patrol scan, auto scan, tilt scan, random scan, frame scan, panorama scan' },
    { label: '3D Positioning', value: 'Yes' },
    { label: 'PTZ Status Display', value: 'Yes' },
    { label: 'Scheduled Task', value: 'Preset, pattern scan, patrol scan, auto scan, tilt scan, random scan, frame scan, panorama scan, dome reboot, dome adjust, aux output' },
    { label: 'Power-off Memory', value: 'Yes' },
  ],
  Video: [
    { label: 'Main Stream', value: '50 Hz: 25 fps (2560 × 1440, 1920 × 1080, 1280 × 960, 1280 × 720)60 Hz: 30 fps (2560 × 1440, 1920 × 1080, 1280 × 960, 1280 × 720)' },
    { label: 'Sub-Stream', value: '50 Hz: 25 fps (704 × 576, 640 × 480, 352 × 288)60Hz: 30fps (704 × 480, 640 × 480, 352 × 240)' },
    { label: 'Third Stream', value: '50 Hz: 25 fps (1920 × 1080, 1280 × 960, 1280 × 720, 704 × 576, 640 × 480, 352 × 288)60 Hz: 30 fps (1920 × 1080, 1280 × 960, 1280 × 720, 704 × 480, 640 × 480, 352 × 240)' },
    { label: 'Video Compression', value: 'Main stream: H.265+/H.265/H.264+/H.264 Sub-stream: H.265/H.264/MJPEG Third stream: H.265/H.264/MJPEG' },
    { label: 'Video Bit Rate', value: '32 kbps to 16384 kbps' },
    { label: 'H.264 Type', value: 'Baseline profile/Main profile/High profile' },
    { label: 'H.265 Type', value: 'Main profile' },
    { label: 'Scalable Video Coding (SVC)', value: 'H.264 and H.265 encoding' },
    { label: 'Region of Interest (ROI)', value: '8 fixed regions for each stream' },
  ],
  Audio: [
    { label: 'Audio Compression', value: 'G.711/G.722.1/G.726/MP2L2/PCM' },
    { label: 'Audio Bit Rate', value: '64 Kbps (G.711)/16 Kbps (G.722.1)/16 Kbps (G.726)/32-192 Kbps (MP2L2)' },
    { label: 'Audio Sampling Rate', value: '8 kHz/16 kHz/32 kHz/48 kHz' },
    { label: 'Environment Noise Filtering', value: 'Yes' },
  ],
  Network: [
    { label: 'Protocols', value: 'IPv4/IPv6, HTTP, HTTPS, 802.1x, QoS, FTP, SMTP, UPnP, SNMP, DNS, DDNS, NTP, RTSP, RTCP, RTP, TCP/IP, UDP, IGMP, ICMP, DHCP, PPPoE, Bonjour' },
    { label: 'Simultaneous Live View', value: 'Up to 20 channels' },
    { label: 'API', value: 'Open Network Video Interface (Version 19.12, Profile S, Profile G, Profile T), ISAPI, SDK, ISUP' },
    { label: 'Smooth Streaming', value: 'Yes' },
    { label: 'User/Host', value: 'Up to 32 users, 3 user levels: administrator, operator, and user' },
    { label: 'Security', value: 'Password protection, complicated password, HTTPS encryption, 802.1X authentication (EAP-TLS, EAP-LEAP, EAP-MD5), watermark, IP address filter, basic and digest authentication for HTTP/HTTPS, RTP/RTSP over HTTPS, control timeout settings, security audit log, TLS 1.2, TLS 1.3, host authentication (MAC address)' },
    { label: 'Network Storage', value: 'NAS (NFS, SMB/CIFS), auto network replenishment (ANR)' },
    { label: 'Client', value: 'iVMS-4200, HikCentral Pro, Hik-Connect' },
    { label: 'Web Browser', value: 'Chrome 57.0+, Firefox 52.0+, Safari 11+, IE11' },
  ],
  Image: [
    { label: 'Image Parameters Switch', value: 'Yes' },
    { label: 'Image Settings', value: 'Saturation, brightness, contrast, sharpness, gain, and white balance adjustable by client software or web browser' },
    { label: 'Day/Night Switch', value: 'Day, Night, Auto, Schedule' },
    { label: 'Wide Dynamic Range (WDR)', value: '120 dB' },
    { label: 'SNR', value: '> 52 dB' },
    { label: 'Defog', value: 'Digital defog' },
    { label: 'Image Stabilization', value: 'EIS' },
    { label: 'Image Enhancement', value: 'BLC, HLC, 3D DNR' },
    { label: 'Privacy Mask', value: '24 programmable polygon privacy masks, mask color or mosaic configurable' },
    { label: 'Regional Focus', value: 'Yes' },
    { label: 'Regional Exposure', value: 'Yes' },
  ],
  Interface: [
    { label: 'Ethernet Interface', value: '1 RJ45 10M/100M self-adaptive Ethernet port' },
    { label: 'On-board Storage', value: 'Built-in memory card slot, support microSD/SDHC/SDXC card, up to 256 GB' },
    { label: 'Audio', value: '1 input (line in), max. input amplitude: 2-2.4 vpp, input impedance: 1 kΩ ± 10%;1 output (line out), line level, output impedance: 600 Ω' },
    { label: 'Alarm', value: '1 input, 1 output' },
    { label: 'Reset', value: 'Yes' },
  ],
};
const ProductDetail = () => {
    const product = {
    title:
      "4 MP Smart Hybrid Light with ColorVu Motorized Varifocal Bullet Camera",
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
  const { id } = useParams();
  const resourceRef = useRef(null);
  const accessoriesRef = useRef(null);
  const tabRef = useRef(null);
  const specRef = useRef(null);
  const accessoryRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Specifications");
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const [activeSpecTab, setActiveSpecTab] = useState("Camera");
  const sectionsRef = useRef({});
  const containerRef = useRef();
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const scrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(
        ref === specRef
          ? "Specifications"
          : ref === resourceRef
            ? "Resources"
            : ref === accessoryRef
              ? "Accessories"
              : ""
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
          { ref: accessoryRef, name: "Accessories" },
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
    "Camera",
    "Lens",
    "DORI",
    "Illuminator",
    "Video",
    "Audio",
    "Network",
    "Image",
    "Interface",
    "Event",
    "Deep Learning Function",
    "General",
    "Approval",
  ];

  const sectionRefs = sections.reduce((acc, section) => {
    acc[section] = useRef(null);
    return acc;
  }, {});

  const handleScrollClick = (section) => {
    sectionRefs[section].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(section);
  };

  const details = {
    Camera: [
      { label: "Image Sensor", value: '1/2.8" progressive scan CMOS' },
      { label: "Max. Resolution", value: "2560 × 1440" },
      {
        label: "Min. Illumination",
        value:
          "Color: 0.005 Lux @ (F1.6, AGC ON); B/W: 0.001 Lux @ (F1.6, AGC ON), 0 Lux with IR",
      },
      { label: "Shutter Speed", value: "1/1 s to 1/30000 s" },
      { label: "Day & Night", value: "IR cut filter" },
      { label: "Zoom", value: "15x optical, 16x digital" },
      { label: "Slow Shutter", value: "Yes" },
    ],
    Lens: [
      "Motorized varifocal lens",
      "Focal length: 2.8 to 12mm",
      "Auto focus capabilities",
    ],
    DORI: ["Detect: 100m", "Observe: 50m", "Recognize: 25m", "Identify: 12m"],
    Illuminator: [
      "Smart Hybrid Light",
      "Infrared range: 30m",
      "White light options",
    ],
    Video: [
      "H.265+ compression",
      "Max resolution: 4K",
      "Multiple stream support",
    ],
    Audio: [
      "Built-in microphone",
      "Audio input/output ports",
      "Noise filtering",
    ],
    Network: ["RJ45 Ethernet", "Support for ONVIF", "Secure remote access"],
    Image: ["Wide Dynamic Range (WDR)", "3D DNR", "Backlight compensation"],
    Interface: ["MicroSD card slot", "Alarm input/output", "RS485"],
    Event: ["Motion detection", "Tamper alarm", "Line crossing detection"],
    "Deep Learning Function": [
      "Person/vehicle classification",
      "Facial recognition",
      "Intrusion detection",
    ],
    General: [
      "Power supply: PoE/12VDC",
      "Operating temperature: -30°C to 60°C",
      "Weatherproof (IP67)",
    ],
    Approval: ["FCC certified", "CE certified", "RoHS compliant"],
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

  const specs = [
    { label: "Image Sensor", value: '1/2.8" progressive scan CMOS' },
    { label: "Max. Resolution", value: "2560 × 1440" },
    {
      label: "Min. Illumination",
      value:
        "Color: 0.005 Lux @ (F1.6, AGC ON); B/W: 0.001 Lux @ (F1.6, AGC ON), 0 Lux with IR",
    },
    { label: "Shutter Speed", value: "1/1 s to 1/30000 s" },
    { label: "Day & Night", value: "IR cut filter" },
    { label: "Zoom", value: "15x optical, 16x digital" },
    { label: "Slow Shutter", value: "Yes" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      if (tabRef.current) {
        const offsetTop = tabRef.current.offsetTop;
        const scrollPosition = window.scrollY + 10;

        setIsFixed(scrollPosition >= offsetTop);

        const sectionOffsets = [
          { ref: specRef, name: "Specifications" },
          { ref: resourceRef, name: "Resources" },
          { ref: accessoryRef, name: "Accessories" },
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

  const scrollToSection = (tab) => {
    sectionsRef.current[tab]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentTab(entry.target.getAttribute('data-tab'));
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6,
      }
    );

    tabs.forEach((tab) => {
      if (sectionsRef.current[tab]) {
        observer.observe(sectionsRef.current[tab]);
      }
    });

    return () => {
      tabs.forEach((tab) => {
        if (sectionsRef.current[tab]) {
          observer.unobserve(sectionsRef.current[tab]);
        }
      });
    };
  }, []);

  return (
    <>
      <div
        className="h-[350px] w-full bg-top bg-cover bg-no-repeat relative flex items-center "
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Title */}
        <div className="items-center w-[35%] flex-col" style={{ marginLeft: '100px' }}>
        <p className="text-left w-full text-orange-800">DS-2CD2647G3T-LIZSY</p>
          <h1 className="text-3xl text-left text-white "  data-aos="fade-right">
            4 MP Smart Hybrid Light with ColorVu Motorized Varifocal Bullet Camera
          </h1>
          
        </div>

        {/* Main Camera Image */}
        <div
          className="mainCamera absolute 
  right-[150px] 
  max-w-[px] 
  h-[30px] 

  transform 
  rotate-[5deg] 
  rounded-2xl"
        >
          <img
            src={selectedCam.img}
            alt={selectedCam.alt}
            className="w-[100%] h-full object-contain "
            style={{ transform: "rotate(-5deg)" }}
          />
        </div>

        {/* Circle Selectors */}
        <div className="flex flex-col space-y-8 absolute  right-16">
          {cameraOptions.map((cam) => (
            <button
              key={cam.id}
              className={`CircleSelector w-90 h-90 flex items-center border-2 justify-center transition-all duration-300 p-0 mb-8 rounded-full  ${selectedCam.id === cam.id ? "active" : ""
                }`}
              onClick={() => setSelectedCam(cam)}
              style={{
                borderRadius: "46px",
                background: "rgb(255, 255, 255, 0.5)",
              }}
            >
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
                <button className="half-btn primary-btn h-60">
                  {" "}
                  <a
                    href="/downloads/datasheet.pdf"
                    download
                    className="primaryy-btn"
                  >
                    <span>Data Sheet</span>
                  </a>
                </button>
                <button className="half-btn half-btn secondary-btn h-60 text-sm">
                  Sales Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Sticky Tabs */}
          <div ref={tabRef} className="tab-row">
            <button
              className={`tab-btn ${activeTab === "Specifications" ? "active" : ""
                }`}
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
              className={`tab-btn ${activeTab === "Accessories" ? "active" : ""
                }`}
              onClick={() => scrollTo(accessoryRef)}
            >
              Accessories
            </button>
          </div>


          {/* Specification */}
          <div ref={specRef}></div>
          <div className="bg-[#f5f5f5] min-h-screen py-10 px-4 md:px-20 md:block hidden">
            <h1 className="text-5xl font-bold text-center mb-12">Specification</h1>
            <div className="flex h-screen bg-gray-50">
              {/* Sidebar */}
              <nav className="w-1/4  overflow-y-auto">
                <ul className="space-y-2">
                  {tabs.map((tab) => (
                    <li
                      key={tab}
                      onClick={() => scrollToSection(tab)}
                      className={`flex items-center cursor-pointer px-12 justify-center py-12 rounded-l-lg transition-colors ${currentTab === tab ? 'bg-white font-semibold text-gray-900' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                      {currentTab === tab && <span className="w-6 h-6 bg-red-500 rounded-full " />}
                      <span className={currentTab === tab ? 'ms-12' : 'pl-4'}>{tab}</span>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Content */}
              <div className="flex-1 px-56 py-28 overflow-y-auto bg-white space-y-12  scroll-smooth" ref={containerRef}>
                {tabs.map((tab) => (
                  <section
                    key={tab}
                    data-tab={tab}
                    ref={(el) => (sectionsRef.current[tab] = el)}
                    className="scroll-mt-24"
                  >
                    <h2 className="text-md font-bold my-12 text-left ">{tab}</h2>
                    <div className="bg-white rounded-lg ">
                      {specsData[tab] ? (
                        <ul>
                          {specsData[tab].map((item, idx) => (
                            <li
                              key={idx}
                              className={`flex  py-12 px-20 items-start gap-4 ${idx % 2 === 0 ? 'bg-gray-50' : ''}`}
                            >
                              <span className="text-gray-700 w-[30%] text-left min-w-[220px] max-w-[220px] shrink-0  whitespace-nowrap" >{item.label}</span>
                              <span className="text-gray-700 text-left text-sm">{item.value}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 p-4">Specifications coming soon.</p>
                      )}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div ref={resourceRef}>
          {/* Resources Section */}
          <h3 className="center-heading " data-aos="fade-right">
            Resources
          </h3>
          <div ref={resourceRef} className="spec-section">
            <div className="resource-buttons">
              <a
                href="/downloads/datasheet.pdf"
                download
                className="download-btn"
              >
                <FaDownload className="icon" />
                <span>Data Sheet</span>
              </a>
              <a href="/downloads/manual.pdf" download className="download-btn">
                <FaDownload className="icon" />
                <span>User Manual</span>
              </a>
              <a
                href="/downloads/firmware.pdf"
                download
                className="download-btn"
              >
                <FaDownload className="icon" />
                <span>Firmware Guide</span>
              </a>
              <a
                href="/downloads/quickstart.pdf"
                download
                className="download-btn"
              >
                <FaDownload className="icon" />
                <span>Quick Start</span>
              </a>
              <a
                href="/downloads/datasheet.pdf"
                download
                className="download-btn"
              >
                <FaDownload className="icon" />
                <span>Data Sheet</span>
              </a>
              <a href="/downloads/manual.pdf" download className="download-btn">
                <FaDownload className="icon" />
                <span>User Manual</span>
              </a>
              <a
                href="/downloads/firmware.pdf"
                download
                className="download-btn"
              >
                <FaDownload className="icon" />
                <span>Firmware Guide</span>
              </a>
              <a
                href="/downloads/quickstart.pdf"
                download
                className="download-btn"
              >
                <FaDownload className="icon" />
                <span>Quick Start</span>
              </a>
            </div>
            <hr />
          </div>
        </div>
        <div ref={accessoryRef}>
          {/* Accessories Section */}
          <h3 className="center-heading" data-aos="fade-right">
            Accessories
          </h3>
          <div ref={accessoriesRef} className="spec-section">
            <div className="accessory-grid container">
              <div className="accessory-card">
                <img src="/images/ds1260zj.jpg" alt="Junction Box" />
                <div>
                  <h6 data-aos="fade-right">DS-1260ZJ</h6>
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
      <HotProductSlider />
      <Contact />
    </>
  );
};

export default ProductDetail;
