import React, { useState } from "react";

const ProductPage = () => {
  const products = Array.from({ length: 34 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    resolution: `${2 + (i % 4) * 2} MP`,
    image: "https://via.placeholder.com/120x120.png?text=Camera",
  }));

  const [openSections, setOpenSections] = useState({
    subseries: true,
    caseType: true,
    resolution: true,
    Lenstype:true,
    LowlightImaging:true,
    IlluminationDistance:true,
    WDR:true,
    EnvironmentalProtection:true,
    powersupply:true,
    StorageType:true,
    WirelessNetwork:true,
    AI:true,
    Localoutput:true,
    Other:true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="container">
      <h1 className="title">Product Categories</h1>
      <div className="main">
        <div className="filter">
          <div className="filter-group">
            <h3 onClick={() => toggleSection("subseries")}>
              {openSections.subseries ? "−" : "+"} Subseries
            </h3>
            {openSections.subseries && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" /> EasyIP 4.0 with ColorVu
                </label>
                <label>
                  <input type="checkbox" /> EasyIP 4.0 with AcuSense
                </label>
                <label>
                  <input type="checkbox" /> EasyIP 3.0
                </label>
                <label>
                  <input type="checkbox" /> EasyIP 2.0 Plus with AcuSense
                </label>
                <label>
                  <input type="checkbox" /> EasyIP 2.0 Plus
                </label>
                <label>
                  <input type="checkbox" /> EasyIP 1.0 Plus
                </label>
                <label>
                  <input type="checkbox" /> EasyIP 4.0 Plus with ColorVu
                </label>
                <label>
                  <input type="checkbox" /> EasyIP 4.0 Plus with AcuSense
                </label>
              </div>
            )}
          </div>

          <div className="filter-group">
            <h3 onClick={() => toggleSection("caseType")}>
              {openSections.caseType ? "−" : "+"} Case Type
            </h3>
            {openSections.caseType && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" /> Box
                </label>
                <label>
                  <input type="checkbox" /> Bullet
                </label>
                <label>
                  <input type="checkbox" /> Dome
                </label>
                <label>
                  <input type="checkbox" /> Turret
                </label>
                <label>
                  <input type="checkbox" /> Fisheye
                </label>
                <label>
                  <input type="checkbox" /> Cube
                </label>
              </div>
            )}
          </div>

          <div className="filter-group">
            <h3 onClick={() => toggleSection("resolution")}>
              {openSections.resolution ? "−" : "+"} Resolution
            </h3>
            {openSections.resolution && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" /> 2 MP
                </label>
                <label>
                  <input type="checkbox" /> 4 MP
                </label>
                <label>
                  <input type="checkbox" /> 5 MP
                </label>
                <label>
                  <input type="checkbox" /> 6 MP
                </label>
                <label>
                  <input type="checkbox" /> 8 MP
                </label>
              </div>
            )}
          </div>
          <div className="filter-group">
            <h3 onClick={() => toggleSection("Lenstype")}>
              {openSections.Lenstype ? "−" : "+"} Lens type
            </h3>
            {openSections.Lenstype && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" />
                  Fixed Lens
                </label>
                <label>
                  <input type="checkbox" /> Motorized Varifocal Lens
                </label>
                <label>
                  <input type="checkbox" /> Manual Varifocal Lens
                </label>
                <label>
                  <input type="checkbox" /> Multi-Lens
                </label>
              </div>
            )}
          </div>
          <div className="filter-group">
            <h3 onClick={() => toggleSection("LowlightImaging")}>
              {openSections.LowlightImaging ? "−" : "+"} Low-light Imaging
            </h3>
            {openSections.LowlightImaging && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" />
                  ColourVu
                </label>
                <label>
                  <input type="checkbox" /> Powerded by Darkfighter
                </label>
                <label>
                  <input type="checkbox" /> Normal
                </label>
              </div>
            )}
          </div>
          <div className="filter-group">
            <h3 onClick={() => toggleSection("IlluminationDistance")}>
              {openSections.IlluminationDistance ? "−" : "+"} Illumination
              Distance
            </h3>
            {openSections.IlluminationDistance && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" />
                  0-20m
                </label>
                <label>
                  <input type="checkbox" />
                  21-50m
                </label>
                <label>
                  <input type="checkbox" /> 51-100m
                </label>
                <label>
                  <input type="checkbox" />
                  N/A
                </label>
              </div>
            )}
          </div>
          <div className="filter-group">
            <h3 onClick={() => toggleSection("WDR")}>
              {openSections.WDR ? "−" : "+"} WDR
            </h3>
            {openSections.WDR && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" />
                  0-20m
                </label>
                <label>
                  <input type="checkbox" />
                  21-50m
                </label>
                <label>
                  <input type="checkbox" /> 51-100m
                </label>
                <label>
                  <input type="checkbox" />
                  N/A
                </label>
              </div>
            )}
          </div>
          <div className="filter-group">
            <h3 onClick={() => toggleSection("EnvironmentalProtection")}>
              {openSections.EnvironmentalProtection ? "−" : "+"} Environmental
              Protection
            </h3>
            {openSections.EnvironmentalProtection && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" />
                  IP66
                </label>
                <label>
                  <input type="checkbox" />
                  IP67
                </label>
                <label>
                  <input type="checkbox" />
                  IP68
                </label>
                <label>
                  <input type="checkbox" />
                  IK08
                </label>
                <label>
                  <input type="checkbox" />
                  IK10
                </label>
                <label>
                  <input type="checkbox" />
                  NEMA 4X
                </label>
                <label>
                  <input type="checkbox" />
                  N/A
                </label>
              </div>
            )}
          </div>
          <div className="filter-group">
            <h3 onClick={() => toggleSection("powersupply")}>
              {openSections.powersupply ? "−" : "+"} Power Supply
            </h3>
            {openSections.powersupply && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" />
                  PoE
                </label>
                <label>
                  <input type="checkbox" />
                  PoE+
                </label>
                <label>
                  <input type="checkbox" />
                  12 VDC
                </label>
                <label>
                  <input type="checkbox" />
                  24 VAC
                </label>
              </div>
            )}
          </div>
          <div className="filter-group">
            <h3 onClick={() => toggleSection("StorageType")}>
              {openSections.StorageType ? "−" : "+"} Storage Type
            </h3>
            {openSections.StorageType && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" />
                  SD Card
                </label>
                <label>
                  <input type="checkbox" />
                  N/A
                </label>
              </div>
            )}
          </div>
          <div className="filter-group">
            <h3 onClick={() => toggleSection("WirelessNetwork")}>
              {openSections.WirelessNetwork ? "−" : "+"} Wireless Network
            </h3>
            {openSections.WirelessNetwork && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" />
                  Wi-Fi
                </label>
                <label>
                  <input type="checkbox" />
                  N/A
                </label>
              </div>
            )}
          </div>
          <div className="filter-group">
            <h3 onClick={() => toggleSection("AI")}>
              {openSections.AI ? "−" : "+"} AI
            </h3>
            {openSections.AI && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" />
                  Yes
                </label>
                <label>
                  <input type="checkbox" />
                  Perimeter Protection
                </label>
                <label>
                  <input type="checkbox" />
                  Perimeter Protection(Strobe Light and Audio)
                </label>
                <label>
                  <input type="checkbox" />
                  Face Capture
                </label>
                <label>
                  <input type="checkbox" />
                  N/A
                </label>
              </div>
            )}
          </div>
          <div className="filter-group">
            <h3 onClick={() => toggleSection("Localoutput")}>
              {openSections.Localoutput ? "−" : "+"} Local Output
            </h3>
            {openSections.Localoutput && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" />
                  HDMI
                </label>
                <label>
                  <input type="checkbox" />
                  CVBS
                </label>
                
                <label>
                  <input type="checkbox" />
                  N/A
                </label>
              </div>
            )}
          </div>
           <div className="filter-group">
            <h3 onClick={() => toggleSection("Localoutput")}>
              {openSections.Localoutput ? "−" : "+"} Supplemental Light
            </h3>
            {openSections.Localoutput && (
              <div className="filter-options">
                <label>
                  <input type="checkbox" />
                  Smart Hybrid Light
                </label>
                <label>
                  <input type="checkbox" />
                  IR Light
                </label>
                <label>
                  <input type="checkbox" />
                  White Light
                </label>
                <label>
                  <input type="checkbox" />
                  N/A
                </label>
              </div>
            )}
          </div>
           <div className="filter-group">
            <h3 onClick={() => toggleSection("Other")}>
              {openSections.Other ? "−" : "+"} Other
            </h3>
            {openSections.Other && (
              <div className="filter-options">
                
                <label>
                  <input type="checkbox" />
                  N/A
                </label>
              </div>
            )}
          </div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>{product.resolution} AcuSense Camera</p>
              <button>Explore</button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .title {
          font-size: 28px;
          text-align: center;
          margin-bottom: 30px;
          font-weight: bold;
        }

        .container {
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        .main {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .filter {
          width: 250px;
          background-color: #f8f9fa;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 15px;
        }

        .filter-group {
          margin-bottom: 20px;
          text-align: left;
        }

        .filter-group h3 {
          margin: 0;
          font-size: 16px;
          cursor: pointer;
          color: #333;
          user-select: none;
        }

        .filter-options {
          margin-top: 10px;
          padding-left: 10px;
          text-align: left;
        }

        .filter-options label {
          display: block;
          font-size: 14px;
          margin-bottom: 6px;
          color: #333;
        }

        .product-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }

        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
          background-color: #fff;
          transition: box-shadow 0.2s ease;
        }

        .card:hover {
          box-shadow: 0 0 10px rgba(0,0,0,0.15);
        }

        .card img {
          width: 100px;
          height: 100px;
          object-fit: contain;
          margin-bottom: 10px;
        }

        .card h4 {
          margin: 8px 0;
          font-size: 16px;
          color: #222;
        }

        .card p {
          font-size: 14px;
          color: #555;
        }

        .card button {
          margin-top: 10px;
          padding: 6px 10px;
          background-color: #01667D;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .card button:hover {
          background-color: #2E535C;
          
        }

        @media screen and (max-width: 768px) {
          .main {
            flex-direction: column-reverse;
          }
          .filter {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductPage;
