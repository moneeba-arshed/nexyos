import  { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import miniCAmeraGroup from "../assets/images/nexyos/miniCAmeraGroup.png"
import SliderTest from "./SliderTest";
import Tab from "./Tab";
import HotProductSlider from "./HotProductSlider";
import Contact from "./Contact";


const ProductPage = () => {

  const products = Array.from({ length: 34 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    resolution: `${2 + (i % 4) * 2} MP`,
    image: miniCAmeraGroup,
  }));
const [showMobileFilter, setShowMobileFilter] = useState(false);
const [searchTerm, setSearchTerm] = useState("");
const [compareItems, setCompareItems] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 12;

const handleCompareChange = (id) => {
  setCompareItems((prev) =>
    prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
  );
};
const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase())
);

const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
const displayedProducts = filteredProducts.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

  const [openSections, setOpenSections] = useState({
    subseries: false,
    caseType: false,
    resolution: false,
    Lenstype:false,
    LowlightImaging:false,
    IlluminationDistance:false,
    WDR:false,
    EnvironmentalProtection:false,
    powersupply:false,
    StorageType:false,
    WirelessNetwork:false,
    AI:false,
    Localoutput:false,
    Other:false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setShowMobileFilter(false); // auto-close on medium+
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <div className="container-fluid">
     

                                         {/* ROAD TRAFFIC MANAGMENT */}
  <Tab/>
                                         {/* SAFETY & eFFICIENCY */}
  <div className='container my-76 p-0 md:pb-40 md:pt-30 flex justify-center items-center flex-col'>
  <h5>For Better Road Safety & Efficient Traffic Management</h5>
  <div className='md:w-[70%] w-[90%] text-center'>
      <p className='text-sm'>With the growth of urban and rural populations, as well as the increasing number of vehicles on the roads, traffic congestion, accidents, and <br/> parking issues are constantly on the rise, presenting new challenges to traffic management agencies.</p>
  <p className='text-sm'>Milesight is delighted to introduce our Intelligent Traffic Solution.</p>
  <p className='text-sm'>We integrate powerful, high-quality cameras with back-end software, elevating intelligent traffic management to a new level with exceptional imagery and <br/> advanced AI-powered ANPR technology, ensuring road traffic safety and efficient traffic management.</p>
  </div>
  </div>
  <HotProductSlider/>
      <h1 className="title">Product Categories</h1>
 <button
  className="filter-toggle"
  onClick={() => setShowMobileFilter((prev) => !prev)}
>
  {showMobileFilter ? "✖ Close Filters" : "☰ Filter"}
</button>

      <div className="main">


<div className={`filter ${showMobileFilter ? "show" : ""}`}>
{showMobileFilter && (
  <button
    className="filter-close-btn"
    onClick={() => setShowMobileFilter(false)}
  >
    ✖
  </button>
)}
<input
  type="text"
  className="search-input"
  placeholder="Search for Product Models"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    width: "100%",
    padding: "8px",
    marginBottom: "20px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  }}
/>


          <div className={`filter-group ${openSections.subseries ? "open" : ""}`}>

            <h3 className="mb-10" onClick={() => toggleSection("subseries")} >
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

          <div className={`filter-group ${openSections.caseType ? "open" : ""}`}>
            <h3 className="mb-10" onClick={() => toggleSection("caseType")}>
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

          <div className={`filter-group ${openSections.resolution ? "open" : ""}`}>
            <h3 className="mb-10" onClick={() => toggleSection("resolution")}>
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
          <div className={`filter-group ${openSections.Lenstype ? "open" : ""}`}>
            <h3 className="mb-10" onClick={() => toggleSection("Lenstype")}>
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
          <div className={`filter-group ${openSections.LowlightImaging ? "open" : ""}`}>
            <h3 className="mb-10" onClick={() => toggleSection("LowlightImaging")}>
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
          <div className={`filter-group ${openSections.IlluminationDistance ? "open" : ""}`}>
            <h3 className="mb-10" onClick={() => toggleSection("IlluminationDistance")}>
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
          <div className={`filter-group ${openSections.WDR ? "open" : ""}`}>
            <h3 className="mb-10" onClick={() => toggleSection("WDR")}>
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
          <div className={`filter-group ${openSections.EnvironmentalProtection ? "open" : ""}`}>
            <h3 className="mb-10" onClick={() => toggleSection("EnvironmentalProtection")}>
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
          <div className={`filter-group ${openSections.powersupply ? "open" : ""}`}>
            <h3 className="mb-10" onClick={() => toggleSection("powersupply")}>
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
          <div className={`filter-group ${openSections.StorageType ? "open" : ""}`}>
            <h3 className="mb-10" onClick={() => toggleSection("StorageType")}>
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
          <div className={`filter-group ${openSections.WirelessNetwork ? "open" : ""}`}>
            <h3 className="mb-10" onClick={() => toggleSection("WirelessNetwork")}>
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
          <div className={`filter-group ${openSections.AI ? "open" : ""}`}>
            <h3 className="mb-10" onClick={() => toggleSection("AI")}>
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
          <div className={`filter-group ${openSections.Localoutput ? "open" : ""}`}>
            <h3 className="mb-10" onClick={() => toggleSection("Localoutput")}>
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
           <div className={`filter-group ${openSections.SupplementalLight ? "open" : ""}`}>
            <h3 className="mb-10" onClick={() => toggleSection("SupplementalLight")}>
              {openSections.SupplementalLight ? "−" : "+"} Supplemental Light
            </h3>
            {openSections.SupplementalLight && (
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
           <div className={`filter-group ${openSections.Other ? "open" : ""}`}>
            <h3 className="mb-10" onClick={() => toggleSection("Other")}>
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
  {displayedProducts.map((product) => (
    <div className="card" key={product.id}>
      <span className="new-badge">NEW</span>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.resolution} AcuSense Camera</p>
      <label>
        <input
          type="checkbox"
          checked={compareItems.includes(product.id)}
          onChange={() => handleCompareChange(product.id)}
        />
        Compare
      </label>
      <Link to={`/products/${product.id}`} className="card-link">
        <button>Explore</button>
      </Link>
    </div>
  ))}

  {/* ⬇ Pagination inside grid, spans all columns */}
  <div
    className="pagination"
    style={{
      gridColumn: "1 / -1",
      textAlign: "center",
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "8px",
    }}
  >
    <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
      Prev
    </button>
   {Array.from({ length: totalPages }, (_, i) => (
  <button
    key={i}
    onClick={() => setCurrentPage(i + 1)}
    className={currentPage === i + 1 ? "active" : ""}
  >
    {i + 1}
  </button>
))}

    <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
      Next
    </button>
  </div>
</div>

      </div>
      {compareItems.length > 0 && (
  <div
    style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "#d00",
      color: "white",
      padding: "10px 15px",
      borderRadius: "25px",
      fontWeight: "bold",
    }}
  >
    Compare ({compareItems.length})
  </div>
)}
<Contact/>
 <style>{`
  * {
    box-sizing: border-box;
  }

  .title {
    font-size: 28px;
    text-align: center;
  margin-top:50px;
  margin-bottom:50px;
    font-weight: bold;
  }

  .container {
    font-family: Arial, sans-serif;
    padding: 20px;
  }

.main {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

  .new-badge {
  position: absolute;
  top: 10px;
  left: 10px;

  color: #d00;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 20px;
  z-index: 1;
}
    .filter {
  width: 250px;
  min-width: 250px;
  max-width: 250px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  overflow-y: auto;
  flex-shrink: 0;
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
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
}

.filter-group.open .filter-options {
  max-height: 500px; /* adjust if needed */
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

  background-color: #fff;
  transition: box-shadow 0.2s ease;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden; /* prevent overflow */
}

  .card:hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
  }

.card img {
  width: 100%;
  height: 120px; /* already fixed height, keep it */
  object-fit: cover;
  border-radius: 6px;
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
    padding: 6px 40px;
    background-color: #01667D;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .card button:hover {
    background-color: #2E535C;
  }

  .filter-toggle {
    display: none;
    margin-bottom: 10px;
    padding: 8px 12px;
    background-color: #01667D;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
.pagination button {
  min-width: 40px;
  height: 36px;
  background-color: white;
  color: #000;
  border: 1px solid #ccc;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

.pagination button:hover {
  background-color: #eee;
}

.pagination button.active {
  background-color: #01667D !important;
  color: #fff !important;
}

  @media screen and (max-width: 1024px) {
    .filter-toggle {
      display: block;
    }

    .filter {
      position: fixed;
      top: 0;
      left: 0;
      width: 280px;
      height: 100%;
      background-color: #f8f9fa;
      border-right: 1px solid #ccc;
      border-radius: 0;
      padding: 20px;
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;
      z-index: 1000;
      overflow-y: auto;
    }

    .filter.show {
      transform: translateX(0);
    }

    .filter-close-btn {
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 24px;
      background: transparent;
      border: none;
      color: #333;
      cursor: pointer;
    }

    .main {
      flex-direction: column-reverse;
    }
  }

  @media screen and (min-width: 1025px) {
    .filter {
      position: relative;
      transform: none !important;
      width: 250px;
      height: auto;
    }

    .filter-toggle {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .filter {
      width: 100%;
    }
  }
`}</style>

    </div>
  );
};

export default ProductPage;
