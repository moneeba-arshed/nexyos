import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Mega.css';

const Mega = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [subCategoriesMap, setSubCategoriesMap] = useState({});
  const [activeCategory, setActiveCategory] = useState(null); // Track the hovered category
  const [activeSubCategory, setActiveSubCategory] = useState(null); // Track the active subcategory

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await fetch("https://portal.nexyos.com/api/product/categories");
        const categoriesData = await res.json();
        setCategories(categoriesData);

        const subCategoriesObj = {};
        // Parallel fetching of all subcategories
        await Promise.all(
          categoriesData.map(async (category) => {
            const resSub = await fetch(`https://portal.nexyos.com/api/product/sub_categories/${category.id}`);
            const subData = await resSub.json();
            subCategoriesObj[category.id] = subData;
          })
        );
        setSubCategoriesMap(subCategoriesObj);
      } catch (err) {
        console.error("Error fetching categories or subcategories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // Set active category and default subcategory on hover
  const handleCategoryHover = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSubCategory(subCategoriesMap[categoryId] ? subCategoriesMap[categoryId][0].id : null); // Set first subcategory as active
  };

  // Handle hover on subcategory items to set the active subcategory
  const handleSubCategoryHover = (subCategoryId) => {
    setActiveSubCategory(subCategoryId);
  };

  // Handle mouse leave to reset the active subcategory to the first one
  const handleMouseLeave = () => {
    if (activeCategory) {
      setActiveSubCategory(subCategoriesMap[activeCategory] ? subCategoriesMap[activeCategory][0].id : null); // Reset to first subcategory
    }
  };

  return (
    <>
      <div id="menu-wrapper">
        <ul className="nav">
          <li>
            <Link className='title-Product' to="/products">Product</Link>
            <div>
              <div className="nav-column categories">
                <ul>
                  {loading ? (
                    <div className="loader">Loading...</div>
                  ) : categories && categories.length > 0 ? (
                    categories.map((item) => (
                      <li
                        key={item.id}
                        onMouseEnter={() => handleCategoryHover(item.id)} // Set the active category on hover
                      >
                        <Link to="#"> {item.category} </Link>
                      </li>
                    ))
                  ) : null}
                </ul>
              </div>

              <div
                className={`nav-column subcategory ${activeCategory ? 'active' : ''}`}
                onMouseLeave={handleMouseLeave} // Reset active subcategory on mouse leave
              >
                <ul>
                  {activeCategory && subCategoriesMap[activeCategory] ? (
                    subCategoriesMap[activeCategory].map((sub) => (
                      <li
                        key={sub.id}
                        className={sub.id === activeSubCategory ? 'active' : ''} // Apply active class to the first subcategory item
                        onMouseEnter={() => handleSubCategoryHover(sub.id)} // Set the active subcategory on hover
                      >
                        <Link to="#">{sub.sub_category}</Link>
                      </li>
                    ))
                  ) : (
                    <li>No subcategories available</li>
                  )}
                </ul>
              </div>

              {/* You can keep your static sections here for Home1 */}
              <div className="nav-column-sub-sub-category">
                <h3>Sub Categories of sub categories</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Mega;
