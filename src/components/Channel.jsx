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
      <h1 className="main-title "  data-aos="fade-right">Find a Channel Partner</h1>
    </div>
  );
};

export default Channel;
