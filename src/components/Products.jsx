import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import miniCAmeraGroup from "../assets/images/nexyos/miniCAmeraGroup.png";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const itemsPerPage = 8; // 4 products per row × 2 rows
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://portal.nexyos.com/api/product/categories"
        );
        const data = await res.json();
        setCategories(Array.isArray(data) ? data : data.data || []);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return categories.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="wrapper">
      <h1 className="title" data-aos="fade-right">Product Categories</h1>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : categories.length === 0 ? (
        <p className="loading">No categories found.</p>
      ) : (
        <div className="products-container">
          {totalPages > 1 && (
            <button className="nav-button prev-button" onClick={prevPage}>
              <ChevronLeft />
            </button>
          )}
          
          <div className="custom-grid">
            {getCurrentItems().map((item) => (
              <div
                key={item.id}
                className="card"
                onClick={() => navigate(`/category/${item.category}`, { state: { categoryId: item.id } })}
              >
                <img
                  src={miniCAmeraGroup}
                  alt={item.category}
                  className="card-img"
                />
                <h2 className="card-title">
                  {item.category}
                  <ChevronRight className="arrow-icon" />
                </h2>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <button className="nav-button next-button" onClick={nextPage}>
              <ChevronRight />
            </button>
          )}
        </div>
      )}

      {totalPages > 1 && (
        <div className="pagination-dots">
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index}
              className={`dot ${index === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      )}

      <style>{`
        .wrapper {
          background-color: white;
          min-height: 100vh;
          padding: 40px 0; /* No side spacing */
        }

        .title {
          font-size: 32px;
          text-align: center;
          margin-bottom: 40px;
          font-weight: 700;
          color: #014455;
          padding: 0 20px;
        }

        .loading {
          text-align: center;
          color: gray;
        }

        .products-container {
          position: relative;
          display: flex;
          align-items: center;
          max-width: 100%;
          margin: 0 auto;
          width: 100%;
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #01667D;
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .nav-button:hover {
          background: #014455;
          transform: translateY(-50%) scale(1.1);
        }

        .prev-button {
          left: 10px;
        }

        .next-button {
          right: 10px;
        }

        .custom-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 100%;
          padding: 0 60px; /* Space for navigation buttons */
          margin: 0 auto;
          grid-auto-rows: minmax(140px, auto);
        }

        .card {
          background: 
            linear-gradient(135deg, #ffffff 0%, #f0f8ff 50%, #e6f3ff 100%),
            radial-gradient(circle at 20% 80%, rgba(135, 206, 250, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(173, 216, 230, 0.08) 0%, transparent 50%),
            linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.3) 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(240, 248, 255, 0.2) 50%, transparent 60%);
          background-size: 100% 100%, 60px 60px, 80px 80px, 40px 40px, 50px 50px;
          border: 2px solid #01667D;
          text-align: center;
          padding: 20px 12px; /* Increased top/bottom padding */
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(1, 102, 125, 0.1), 0 2px 4px rgba(0,0,0,0.05);
          overflow: hidden;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 140px;
          position: relative;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(45deg, transparent 30%, rgba(135, 206, 250, 0.05) 40%, transparent 50%),
            linear-gradient(-45deg, transparent 30%, rgba(173, 216, 230, 0.03) 40%, transparent 50%),
            radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 70% 30%, rgba(240, 248, 255, 0.08) 0%, transparent 30%);
          background-size: 60px 60px, 80px 80px, 40px 40px, 50px 50px;
          pointer-events: none;
          z-index: 1;
        }

        .card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #01667D, #87CEEB, #01667D);
          border-radius: 12px 12px 0 0;
        }

        .card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 8px 20px rgba(1, 102, 125, 0.15), 0 4px 8px rgba(0,0,0,0.1);
          background: 
            linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 50%, #d4edda 100%),
            radial-gradient(circle at 20% 80%, rgba(135, 206, 250, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(173, 216, 230, 0.12) 0%, transparent 50%),
            linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.4) 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(240, 248, 255, 0.3) 50%, transparent 60%);
          background-size: 100% 100%, 60px 60px, 80px 80px, 40px 40px, 50px 50px;
        }

        .card:hover::before {
          background: 
            linear-gradient(45deg, transparent 30%, rgba(135, 206, 250, 0.08) 40%, transparent 50%),
            linear-gradient(-45deg, transparent 30%, rgba(173, 216, 230, 0.06) 40%, transparent 50%),
            radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.15) 0%, transparent 30%),
            radial-gradient(circle at 70% 30%, rgba(240, 248, 255, 0.12) 0%, transparent 30%);
          background-size: 60px 60px, 80px 80px, 40px 40px, 50px 50px;
        }

        .card-img {
          width: 100%;
          height: 90px; /* Reduced height */
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 8px;
          transition: transform 0.4s ease-in-out;
          flex-shrink: 0;
          background-color: #f8f9fa; /* Clean background for image */
        }

        .card:hover .card-img {
          transform: scale(1.3);
        }

        .card-title {
          font-size: 14px; /* Reduced font size */
          font-weight: 600;
          color: #111827;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin: 0;
          flex-grow: 1;
          line-height: 1.3;
          position: relative;
          z-index: 2;
          background: transparent;
        }

        .arrow-icon {
          width: 14px; /* Reduced size */
          height: 14px;
          color: #01667D;
          flex-shrink: 0;
        }

        .pagination-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #ccc;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .dot.active {
          background-color: #01667D;
        }

        .dot:hover {
          background-color: #01667D;
        }

        @media (max-width: 1024px) {
          .custom-grid {
            grid-template-columns: repeat(3, 1fr);
            padding: 0 50px;
          }
        }

        @media (max-width: 768px) {
          .custom-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            padding: 0 40px;
          }

          .card {
            padding: 10px;
          }

          .card-img {
            height: 70px;
          }

          .card-title {
            font-size: 12px;
          }

          .arrow-icon {
            width: 12px;
            height: 12px;
          }

          .nav-button {
            width: 35px;
            height: 35px;
          }
        }

        @media (max-width: 480px) {
          .custom-grid {
            grid-template-columns: repeat(1, 1fr);
            padding: 0 30px;
          }

          .card-img {
            height: 100px;
          }

          .card-title {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Products;
