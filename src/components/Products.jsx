import React, { useEffect, useState } from "react";
import TrendingProducts from "./TrendingProducts ";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const Products = () => {
  const [productDetail, setProductDetail] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);

const fetchProductDetails = async () => {
  try {
    setLoading(true);
    let res = await fetch(`https://portal.nexyos.com/api/product/categories`);
    let response = await res.json();
    setProductDetail(response);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};


  const handleClick = (item, index) => {
    setSelectedCategory(item.categories);
    setSelectedIndex(index);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <section className="trending-productss pt-80">
      <div>
        <style>
          {`
          .category-hero {
            transition: all 0.3s ease;
            margin-bottom: 32px;
            padding: 24px;
            border-radius: 16px;
            position: relative;
            overflow: hidden;
          }
          .series-tag {
            font-size: 72px;
            font-weight: bold;
            opacity: 0.1;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
          }
          .green-series { background-color: #f0f9eb; }
          .red-series { background-color: #fef6f6; }
          .blue-series { background-color: #f0f5ff; }
        `}
        </style>
      </div>
      <div className="container container-lg">
        <div className="border border-gray-100 p-24 rounded-16">
          <div className="section-heading mb-24">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">Products</h5>
              <ul
                className="nav common-tab style-two nav-pills"
                id="pills-tab"
                role="tablist"
              >
                {loading ? (
                  <div>
                    <h6>Loading...</h6>
                  </div>
                ) : (
                  productDetail.map((item, index) => (
                    <li className="nav-item" role="presentation" key={index}>
                      <button
                        className={`nav-link ${
                          selectedIndex === index ? "active" : ""
                        }`}
                        id="pills-mobile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-mobile"
                        type="button"
                        role="tab"
                        aria-controls="pills-mobile"
                        aria-selected="false"
                        onClick={() => handleClick(item, index)}
                      >
                        {item.category}
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>

          {!loading && selectedCategory.length > 0 && (
            <div
              className="category-hero mb-32 p-32 rounded-16"
              style={{
                backgroundColor:
                  selectedIndex === 0
                    ? "#f0f9eb"
                    : selectedIndex === 1
                    ? "#fef6f6"
                    : "#f0f5ff",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h2
                    className="mb-16"
                    style={{
                      fontSize: "30px",
                    }}
                  >
                    {selectedCategory[0]?.series_title ||
                      productDetail[selectedIndex]?.parent_category_name}
                  </h2>

                  {selectedIndex === productDetail.length - 1 && (
                    <button className="btn btn-primary">Contact Us</button>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-all"
              role="tabpanel"
              aria-labelledby="pills-all-tab"
              tabIndex={0}
            >
              <TrendingProducts
                selectedCategory={selectedCategory}
                loading={loading}
              />
            </div>
          </div>
          <div className="text-center mt-4">
          <Link to="/products" className=" flex btn-outline-primary">
            View All Products <FaArrowRight className="mx-4"/>
          </Link>
      </div>
        </div>
        </div>
    </section>
  );
};

export default Products;
