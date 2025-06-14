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
  // const [partners, setPartners] = useState([]);
  // const [allPartners, setAllPartners] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const regions = [
  //   { value: "all", label: "All Regions" },
  //   { value: "APAC", label: "APAC" },
  //   { value: "EMEA", label: "EMEA" },
  //   { value: "North America", label: "North America" },
  //   { value: "Latin America", label: "Latin America" },
  // ];

  // const filteredPartners = partners.filter((partner) => {
  //   const matchesSearch =
  //     (partner.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     (partner.country || "")
  //       .toLowerCase()
  //       .includes(searchTerm.toLowerCase()) ||
  //     (partner.phone || "").toLowerCase().includes(searchTerm.toLowerCase());

  //   const matchesCategory =
  //     activeTab === "all" || partner.category?.includes(activeTab);

  //   const matchesRegion =
  //     selectedRegion === "all" || partner.region === selectedRegion;

  //   return matchesSearch && matchesCategory && matchesRegion;
  // });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const categories = ["all", "Video Surveillance", "IoT"];

  // const isLastInRow = (index) => {
  //   if (windowWidth < 768) return false; // Single column on mobile

  //   const containerWidth = containerRef.current?.offsetWidth || 1200;
  //   const cardsPerRow = Math.floor(containerWidth / 300); // Assuming ~300px per card
  //   return (index + 1) % cardsPerRow === 0;
  // };

  // const fetchPartners = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("https://portal.nexyos.com/getPartners");
  //     const res = await response.json();
  //     setPartners(res?.data);
  //     makeTabData(res?.data);
  //     cardData(res?.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching partners:", error);
  //   }
  // };

  // const makeTabData = (data) => {
  //   const tabData = [];
  //   data.forEach((partner, index) => {
  //     tabData.push({
  //       parentName: data[index].parent_category?.parent_category_name,
  //       id: partner.parent_category.id,
  //       name: partner.parent_category.parent_category_name,
  //       status: partner.parent_category.parent_category_status,
  //     });
  //   });

  //   setPartnerTab((prev) => [...prev, ...tabData]);
  // };

  // const cardData = (data) => {
  //   const cardData = [];

  //   data.forEach((cats) => {
  //     cats?.categories.forEach((category) => {
  //       category?.partners.forEach((partner) => {
  //         cardData.push({
  //           id: partner?.id,
  //           partner_name: partner?.partner_name,
  //           partner_image: partner?.partner_image,
  //           country: partner?.country,
  //           region: partner?.region,
  //           partner_contact_number: partner?.partner_contact_number,
  //           description: partner?.description,
  //           website: partner?.website,
  //           parentName: cats.parent_category?.parent_category_name,
  //         });
  //       });
  //     });
  //   });

  //   setAllPartners(cardData);
  //   setPartners(cardData);
  // };

  // useEffect(() => {
  //   fetchPartners();
  // }, []);

// const handleCardData = (category) => {
//   setActiveTab(category.id);

//   if (category.name === "All Partners") {
//     setPartners(allPartners);
//   } else {
//     const filtered = allPartners.filter(
//       (partner) => partner?.parentName === category.parentName
//     );
//     setPartners(filtered);
//   }
// };

  return (
    <div className="channel-partners-container" ref={containerRef}>
      <h1 className="main-title">Find a Channel Partner</h1>

      {/* <div className="controls-container">
        <div className="filters-left">
          <div className="tabs">
            {loading ? (
              <div>Laoding...</div>
            ) : (
              partnerTab.map((category, index) => (
                <button
                  key={category.id}
                  className={`tab-btn ${activeTab === index ? "active" : ""}`}
                  onClick={() => handleCardData(category)}
                >
                  {category.name}
                </button>
              ))
            )}
          </div>
        </div>
      </div> */}

      {/* <div className="partners-grid bg-gray-100 text-black rounded-md font-medium">
        {partners.length > 0 ? (
          partners.map((partner, index) => (
            <div
              key={partner.id}
              className="partner-card-container"
              onMouseEnter={() => setHoveredPartner(partner.id)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              <div className="partner-card">
                <div className="card-content">
                  <img
                    src={`https://portal.nexyos.com/${partner.partner_image}`}
                    alt={partner.partner_name}
                  />
                  <h3 className="partner-name">{partner.partner_name}</h3>
                  <p className="partner-phone">
                    Tel.: {partner.partner_contact_number}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            No partners found matching your criteria.
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Channel;
