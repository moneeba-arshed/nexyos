import React, { useState, useRef, useEffect } from "react";
import "../style/ChannelPartners.css";

const Channel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const containerRef = useRef(null);

  const [partnerTab, setPartnerTab] = useState([
    { id: 0, name: "All Partners", status: 0 },
  ]);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="channel-partners-container" ref={containerRef}>
      {/* Banner Section */}
      <div className="channel-banner">
        <div className="banner-content">
          <div className="banner-text">
            <h1 className="banner-title" data-aos="fade-right">
              Find a Channel Partner
            </h1>
            <p className="banner-subtitle" data-aos="fade-right" data-aos-delay="200">
              Connect with our trusted network of channel partners worldwide. 
              Get expert support and local expertise for your business needs.
            </p>
            <div className="banner-stats" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Partners</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
          <div className="banner-visual" data-aos="fade-left" data-aos-delay="300">
            <div className="partner-network">
              <div className="network-node center-node">
                <span>NEXYOS</span>
              </div>
              <div className="network-node partner-1">
                <span>Partner 1</span>
              </div>
              <div className="network-node partner-2">
                <span>Partner 2</span>
              </div>
              <div className="network-node partner-3">
                <span>Partner 3</span>
              </div>
              <div className="network-node partner-4">
                <span>Partner 4</span>
              </div>
              <div className="network-node partner-5">
                <span>Partner 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default Channel;
