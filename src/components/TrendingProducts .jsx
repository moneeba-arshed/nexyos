import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/TrendingProducts.css"; // Alag CSS file

// Reusable Product Card Component
const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleProductOpen = () => {
    navigate(
      `/sub-product-details/${product.id}/false/${product.category_name}`
    );
  };

  return (
    <div className="product-col" onClick={handleProductOpen}>
      <div className="product-card">
        <div className="product-thumb">
          <img
            src={
              product.category_image
                ? `https://portal.nexyos.com/${product.category_image}`
                : "../assets/images/nexyos/PTZGROUPCAMERA.png"
            }
            alt={product.category_name || "Product Image"}
          />
        </div>
        <div className="product-content">
          <h6 className="product-title"  data-aos="fade-right">{product.category_name}</h6>
        </div>
      </div>
    </div>
  );
};

// Main Component
const TrendingProducts = ({ selectedCategory, loading }) => {
  return (
    <div className="trending-products">
      {loading ? (
        <div className="loading-text">Loading...</div>
      ) : selectedCategory.length > 0 ? (
        <div className="product-grid">
          {selectedCategory.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-products">No Products Found</div>
      )}
    </div>
  );
};

export default TrendingProducts;
