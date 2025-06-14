import React, { useEffect, useState } from "react";
import query from "jquery";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./Searchbar";
import "select2";
import "../index.css";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategoriesMap, setSubCategoriesMap] = useState({});
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isAlignOpen, setIsAlignOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleAlignMenu = () => {
    setIsAlignOpen(!isAlignOpen);
  };
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
    setTimeout(() => {
      const selectElement = query(".js-example-basic-single");
      if (selectElement.length) {
        selectElement.select2();
      }
    }, 100);
    return () => {
      const selectElement = query(".js-example-basic-single");
      if (selectElement.data("select2")) {
        selectElement.select2("destroy");
      }
    };
  }, []);

  // Set the default language
  const [selectedLanguage, setSelectedLanguage] = useState("EngLish");
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  const handleCategoryLeave = () => {
    setHoveredCategory(null);
  };

  // Set the default currency
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  // Mobile menu support
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  // Search control support
  const [activeSearch, setActiveSearch] = useState(false);
  const handleSearchToggle = () => {
    setActiveSearch(!activeSearch);
  };

  // category control support
  const [activeCategory, setActiveCategory] = useState(false);
  const handleCategoryToggle = () => {
    setActiveCategory(!activeCategory);
  };
  const [activeIndexCat, setActiveIndexCat] = useState(null);
  const handleCatClick = (index) => {
    setActiveIndexCat(activeIndexCat === index ? null : index);
  };

  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await fetch(
        "https://portal.nexyos.com/api/product/categories"
      );
      const data = await res.json();
      console.log("main", data);
      setCategories(data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

const fetchSubCategories = async (categoryId) => {
  try {
    if (subCategoriesMap[categoryId]) return; // If subcategories already fetched, no need to fetch again
    const res = await fetch(
      `https://portal.nexyos.com/api/product/sub_categories/${categoryId}`
    );
    const data = await res.json();
    console.log(`Fetched subcategories for category ${categoryId}:`, data); // Log to see the subcategories data
    setSubCategoriesMap((prev) => ({
      ...prev,
      [categoryId]: data, // Store subcategories for the given category ID
    }));
  } catch (err) {
    console.error("Error fetching subcategories:", err);
  }
};


  useEffect(() => {
    fetchCategories().finally(() => setLoading(false));
  }, []);

const handleMouseEnter = (categoryId) => {
  console.log("Hovered over category ID:", categoryId); // Check if hover is triggered
  setHoveredCategory(categoryId);
  fetchSubCategories(categoryId); // Fetch subcategories for the hovered category
};

  return (
    <>
      {/*==================== Overlay Start ====================*/}
      <div className="overlay" />
      {/*==================== Overlay End ====================*/}
      {/*==================== Sidebar Overlay End ====================*/}
      <div
        className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
      />
      {/*==================== Sidebar Overlay End ====================*/}

      {/* ==================== Search Box Start Here ==================== */}
      <form action="#" className={`search-box ${activeSearch && "active"}`}>
        <button
          onClick={handleSearchToggle}
          type="button"
          className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
        >
          <i className="ph ph-x" />
        </button>
        <div className="container">
          <div className="position-relative">
            <input
              type="text"
              className="form-control py-16 px-24 text-xl rounded-pill pe-64"
              placeholder="Search for a product or brand"
            />
            <button
              type="submit"
              className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
            >
              <i className="ph ph-magnifying-glass" />
            </button>
          </div>
        </div>
      </form>
      {/* ==================== Search Box End Here ==================== */}
      {/* ==================== Mobile Menu Start Here  ==================== done */}

      {/* ==================== Mobile Menu End Here ==================== */}
      {/* ======================= Middle Header Two Start ========================= */}

      {/* ======================= Middle Header Two End ========================= */}
      {/* ==================== Header Two Start Here ==================== */}
      <header
        className={`header bg-white border-bottom border-gray-100 py-4  ${
          scroll && "fixed-header"
        }`}
      >
        <div className="container">
          <nav className="header-inner d-flex justify-content-between gap-8">
            <div className="ps-4 logo d-lg-none">
              <Link to="/" className="link">
                <img src="/assets/images/logo/logo-two.png" alt="Logo" />
              </Link>
            </div>
            <div className="w-100 ">
              {/* Menu Start  */}

              <div className="header-menu d-lg-block d-none">
                <div className="row d-flex justify-content-between">
                  <div className="col-2">
                    <div className="logo">
                      <Link to="/" className="link">
                        <img
                          src="/assets/images/logo/logo-two.png"
                          alt="Logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-10">
                    <ul className="nav-menu flex-align justify-content-start">
                      <li className="on-hover-item nav-menu__item activePage">
                        <Link to="/" className="nav-menu__link">
                          Home
                        </Link>
                      </li>
                       <li className="on-hover-item nav-menu__item has-megamenu has-submenu">
                         <div>
                          
            <Dropdown title="Product">
                <Dropdown.Item>Database</Dropdown.Item>
                <Dropdown.Menu title="DSA">
                    <Dropdown.Item disabled>C++</Dropdown.Item>
                    <Dropdown.Item>Java</Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Item >Blockchain Technology</Dropdown.Item>
                <Dropdown.Menu title="Web Technology">
                    <Dropdown.Menu title="React" disabled>
                        <Dropdown.Item >Material UI</Dropdown.Item>
                        <Dropdown.Item>React Suite</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Item>HTML</Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown>
        </div>
                      </li>
                      <li className="on-hover-item nav-menu__item has-megamenu has-submenu">
                        <Link to="#" className="nav-menu__link">
                          Solutions
                        </Link>
                        <div className="on-hover-dropdown common-dropdown nav-megamenu">
                          <div className="grid grid-cols-3 gap-6 p-6">
                            {/* Column 1 */}

                            <ul className="space-y-2">
                              <li>
                                <NavLink
                                  to="/solutions/video-surveillance"
                                  className="common-dropdown__link"
                                >
                                  Video Surveillance
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/SmartRoom"
                                  className="common-dropdown__link"
                                >
                                  Smart Restroom
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/SmartSpace"
                                  className="common-dropdown__link"
                                >
                                  Smart Space
                                </NavLink>
                              </li>
                            </ul>

                            {/* Column 2 */}
                            <ul className="space-y-2">
                              <li>
                                <NavLink
                                  to="/SmartHVAC"
                                  className="common-dropdown__link"
                                >
                                  Smart HVAC Management
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/TrafficSolution"
                                  className="common-dropdown__link"
                                >
                                  Intelligent Traffic Solution
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/AirQuality"
                                  className="common-dropdown__link"
                                >
                                  Indoor Air Quality
                                </NavLink>
                              </li>
                            </ul>
                            <ul className="space-y-2">
                              <li>
                                <NavLink
                                  to="/PeopleCounting"
                                  className="common-dropdown__link"
                                >
                                  People Counting
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/SmartSpaceOccupancy"
                                  className="common-dropdown__link"
                                >
                                  Space Occupancy
                                </NavLink>
                              </li>
                            </ul>

                            {/* Column 3 */}
                            {/* <ul className="space-y-2">
                              <li>
                                <NavLink
                                  to="/solutions/smart-building"
                                  className="common-dropdown__link"
                                >
                                  Smart Building
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/solutions/energy-efficiency"
                                  className="common-dropdown__link"
                                >
                                  Energy Efficiency
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/solutions/smart-city"
                                  className="common-dropdown__link"
                                >
                                  Smart City
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/solutions/waste-management"
                                  className="common-dropdown__link"
                                >
                                  Waste Management
                                </NavLink>
                              </li>
                            </ul> */}
                            {/* Column 4 */}
                            {/* <ul className="space-y-2">
                              <li>
                                <NavLink
                                  to="#"
                                  className="common-dropdown__link"
                                >
                                  <div className="col-span-3 flex justify-end mt-4">
                                    <img
                                      src="https://www.milesight.com/static/pc/en/nav/roadmap.jpg?t=1742785802216"
                                      alt="2025 H1 IoT Roadmap"
                                      className="w-100 rounded-md shadow-md"
                                    />
                                  </div>
                                </NavLink>
                              </li>
                            </ul> */}
                          </div>
                        </div>
                      </li>
                      <li className="nav-menu__item">
                        <NavLink to="/success" className="nav-menu__link">
                          Success Stories
                        </NavLink>
                      </li>
                      <li className="on-hover-item nav-menu__item has-megamenu has-submenu">
                        <Link to="#" className="nav-menu__link">
                          Company
                        </Link>
                        <div className="on-hover-dropdown common-dropdown nav-megamenu">
                          <div className="grid grid-cols-2 gap-6 p-6">
                            {/* Column 1 - Milesight Partner Ecosystem & Corporate Info */}

                            {/* Column 2 - Developer Zone & Library */}
                            <div>
                              <h6 className="fs-6 pt-3">Corporate Info</h6>
                              <ul>
                                <li>
                                  <NavLink
                                    to="/About"
                                    className="common-dropdown__link"
                                  >
                                    About Us
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/Brand"
                                    className="common-dropdown__link"
                                  >
                                    Our Brand
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/Events"
                                    className="common-dropdown__link"
                                  >
                                    Events
                                  </NavLink>
                                </li>
                              </ul>

                              {/* Library Section */}
                              <h6 className="fs-6 pt-6">Library</h6>
                              <ul>
                                <li>
                                  <NavLink
                                    to="/Blog"
                                    className="common-dropdown__link"
                                  >
                                    Blog
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/News"
                                    className="common-dropdown__link"
                                  >
                                    News
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="on-hover-item nav-menu__item has-megamenu has-submenu">
                        <Link to="#" className="nav-menu__link">
                          Partner
                        </Link>
                        <div className="on-hover-dropdown common-dropdown nav-megamenu">
                          <div className="grid grid-cols-2 gap-6 p-6">
                            {/* Column 1 - Milesight Partner Ecosystem */}
                            <div>
                              <h6 className="fs-6 pt-3">
                                Nexyos Partner Ecosystem
                              </h6>
                              <ul className="">
                                <li>
                                  <NavLink
                                    to="/channel"
                                    className="common-dropdown__link"
                                  >
                                    Find a Channel Partner
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/PartnerProgram"
                                    className="common-dropdown__link"
                                  >
                                    Channel Partner Program
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/ProjectRegistration"
                                    className="common-dropdown__link"
                                  >
                                    Project Registration
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to="/Iot"
                                    className="common-dropdown__link"
                                  >
                                    IoT Collaboration Start Guide
                                  </NavLink>
                                </li>
                              </ul>
                            </div>

                          </div>
                        </div>
                      </li>
                      <li className="nav-menu__item">
                        <SearchBar />
                      </li>
                      <li className="nav-menu__item">
                        <NavLink to="/contact" className="nav-menu__link">
                          Contact Us
                        </NavLink>
                      </li>
                      <li className="nav-menu__item">
                        <Link
                          to="/demo"
                          className="nav-menu__link d-flex align-items-center gap-2"
                        >
                          <span className="icon">
                            <i className="ph ph-play-circle" />{" "}
                            {/* Play Icon using Phosphor Icons */}
                          </span>
                          Online Demo
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-center h-100">
                <button
                  onClick={handleMenuToggle}
                  type="button"
                  className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
                >
                  {" "}
                  <i className="ph ph-list" />{" "}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* ==================== Header End Here ==================== */}
    </>
  );
};

export default Header;
