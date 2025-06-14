import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [subCategoriesMap, setSubCategoriesMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const fetchCategories = async () => {
    try {
      const res = await fetch("https://portal.nexyos.com/api/product/categories");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  const fetchSubCategories = async (categoryId) => {
    try {
      if (subCategoriesMap[categoryId]) return;
      const res = await fetch(`https://portal.nexyos.com/api/product/sub_categories/${categoryId}`);
      const data = await res.json();
      setSubCategoriesMap((prev) => ({
        ...prev,
        [categoryId]: data,
      }));
    } catch (err) {
      console.error("Error fetching subcategories:", err);
    }
  };

  useEffect(() => {
    fetchCategories().finally(() => setLoading(false));
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredCategory(id);
    fetchSubCategories(id);
  };

  return (
      <>
        <Link type="button" className="category__button flex-align fw-medium" style={{ color: "#999999" }}>
          Products
          <span className="arrow-icon text-xl d-flex">
            <RxCaretDown className="arrow-down" />
          </span>
        </Link>

        <div className=" on-hover-dropdown common-dropdown nav-megamenu">
          <div className="grid grid-cols-2 gap-6 p-6">
            <div>
          {/* <button
            type="button"
            className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
          >
            <i className="ph ph-x" />
          </button> */}

          {/* <div className="logo px-16 d-lg-none d-block">
            <Link to="/" className="link">
              <img src="assets/images/logo/logo.png" alt="Logo" />
            </Link>
          </div> */}
            {loading ? (
              <div className="loader">Loading...</div>
            ) : (
              categories.map((item) => (
                <li
                  key={item.id}
                  className="has-submenus-submenu position-relative"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <Link
                    to={`/parent-product-details/${item.id}/${item.category}`}
                    className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                  >
                    <span>{item.category}</span>
                    {item.id === 10 && (
                      <span className="icon text-md d-flex ms-auto">
                        <RxCaretRight />
                      </span>
                    )}
                  </Link>

                  {/* Submenu for subcategories - positioned outside the parent dropdown */}
                 
                </li>
              ))
            )}
          </div>
          </div>
        </div>
      </>
  );
};

export default Category;
