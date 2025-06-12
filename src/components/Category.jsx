import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
const Category = () => {
  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      let res = await fetch(`https://api.nexyos.com/get_all_products_cat_wise`);
      let response = await res.json();
      setProductDetail(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <div>
      <div className="category d-block on-hover-item">
        <button
          type="button"
          className="category__button flex-align fw-medium"
          style={{
            color: "#999999",
          }}
        >
          <span className="d-sm-flex"></span> Products
          <span className="arrow-icon text-xl d-flex">
          <RxCaretDown className="arrow-down" />
          </span>
        </button>
        <div className="responsive-dropdown on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper">
          <button
            type="button"
            className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
          >
            <i className="ph ph-x" />{" "}
          </button>
          <div className="logo px-16 d-lg-none d-block">
            <Link to="/" className="link">
              <img src="assets/images/logo/logo.png" alt="Logo" />
            </Link>
          </div>
          <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto">
            {loading ? (
              <div className="loader">Loading...</div>
            ) : (
              productDetail?.map(
                (item) =>
                  item.categories.length > 0 && (
                    <li className="has-submenus-submenu" key={item.id}>
                      <div>
                        <Link
                          to={`/parent-product-details/${item.id}/${item.parent_category_name}`}
                          className="text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0"
                        >
                          <span>{item.parent_category_name}</span>
                          <span className="icon text-md d-flex ms-auto">
                          <RxCaretRight />
                          </span>
                        </Link>
                        <div className="submenus-submenu py-16">
                          <h6 className="text-lg px-16 submenus-submenu__title">
                            {item.parent_category_name}
                          </h6>
                          <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                           {item.categories.map((subCategories)=>(
                            <li key={subCategories.id}>
                              <Link to={`/sub-product-details/${subCategories.id}/${false}/${subCategories.category_name}`}>{subCategories.category_name}</Link>
                            </li>
                           ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  )
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
