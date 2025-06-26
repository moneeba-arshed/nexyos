import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Mega.css";

const Mega = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [subCategoriesMap, setSubCategoriesMap] = useState({});
  const [activeCategory, setActiveCategory] = useState(null); // Track the hovered category
  const [activeSubCategory, setActiveSubCategory] = useState(null); // Track the active subcategory
  const [thirdLevelMap, setThirdLevelMap] = useState({});

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await fetch(
          "https://portal.nexyos.com/api/product/categories"
        );
        const categoriesData = await res.json();
        setCategories(categoriesData);

        const subCategoriesObj = {};
        // Parallel fetching of all subcategories
        await Promise.all(
          categoriesData.map(async (category) => {
            const resSub = await fetch(
              `https://portal.nexyos.com/api/product/sub_categories/${category.id}`
            );
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

  // Handle hover on subcategory items to set the active subcategory
  const handleSubCategoryHover = async (subCategoryId) => {
    setActiveSubCategory(subCategoryId);

    // Avoid refetching if already fetched
    if (thirdLevelMap[activeCategory]?.[subCategoryId]) return;

    try {
      const res = await fetch(
        `https://portal.nexyos.com/api/product/third_level_cat/${activeCategory}/${subCategoryId}`
      );
      const data = await res.json();
      console.log("sub-sub-data", data);
      setThirdLevelMap((prev) => ({
        ...prev,
        [activeCategory]: {
          ...(prev[activeCategory] || {}),
          [subCategoryId]: data,
        },
      }));
    } catch (error) {
      console.error("Error fetching third-level subcategories:", error);
    }
  };

  // Set active category and default subcategory on hover
  const handleCategoryHover = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSubCategory(
      subCategoriesMap[categoryId] ? subCategoriesMap[categoryId][0].id : null
    ); // Set first subcategory as active
  };

  // Handle mouse leave to reset the active subcategory to the first one
  const handleMouseLeave = () => {
    if (activeCategory) {
      setActiveSubCategory(
        subCategoriesMap[activeCategory]
          ? subCategoriesMap[activeCategory][0].id
          : null
      ); // Reset to first subcategory
    }
  };

  return (
    <>
      <div id="menu-wrapper">
        <ul className="nav">
          <li>
            <Link className="title-Product" to="/products">
              Product
            </Link>
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
                className={`nav-column subcategory ${
                  activeCategory ? "active" : ""
                }`}
                onMouseLeave={handleMouseLeave} // Reset active subcategory on mouse leave
              >
                <ul>
                  {activeCategory && subCategoriesMap[activeCategory] ? (
                    subCategoriesMap[activeCategory].map((sub) => (
                      <li
                        key={sub.id}
                        className={sub.id === activeSubCategory ? "active" : ""} // Apply active class to the first subcategory item
                        onMouseEnter={() => handleSubCategoryHover(sub.id)} // Set the active subcategory on hover
                      >
                        <img src={sub.image} alt="" />
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
                <ul className="third-level">
                  {activeCategory &&
                  activeSubCategory &&
                  thirdLevelMap[activeCategory]?.[activeSubCategory] &&
                  thirdLevelMap[activeCategory][activeSubCategory].length >
                    0 ? (
                    thirdLevelMap[activeCategory][activeSubCategory].map(
                      (item) => (
                        <li key={item.id}>
                          <img
                            src={`https://portal.nexyos.com/${item.image}`}
                            alt={item.third_level}
                            style={{
                              height: "100px",
                              width: "100px",
                              marginRight: "8px",
                            }}
                          />
                          {item.third_level}
                        </li>
                      )
                    )
                  ) : (
                    <li>No sub-sub-categories</li>
                  )}
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Mega;
