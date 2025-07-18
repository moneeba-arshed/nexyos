import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import miniCAmeraGroup from "../assets/images/nexyos/miniCAmeraGroup.png";
import { ChevronRight } from "lucide-react"; // Add this import at the top
const Products = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  return (
    <div className="wrapper">
      <h1 className="title "  data-aos="fade-right" >Product Categories</h1>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : categories.length === 0 ? (
        <p className="loading">No categories found.</p>
      ) : (
        <div className="custom-grid">
          {categories.map((item) => (
            <div
              key={item.id}
              className="card "
              onClick={() => navigate(`/category/${item.category}`, { state: { categoryId: item.id } })}
            >
              <img
                src={miniCAmeraGroup}
                alt={item.category}
                className="card-img"
              />
              <h2 className="card-title" >
                {item.category}
                <ChevronRight className="arrow-icon" />
              </h2>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .wrapper {
          background-color: white;
          min-height: 100vh;
          padding: 40px 20px;
        }

        .title {
          font-size: 32px;
          text-align: center;
          margin-bottom: 40px;
          font-weight: 700;
          color: #014455;
        }

        .loading {
          text-align: center;
          color: gray;
        }
.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.arrow-icon {
  width: 18px;
  height: 18px;
  color: #01667D;
  flex-shrink: 0;
}

        .custom-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card {
          width: 220px;
          background-color: #ffffff;
          border: 2px solid #01667D;
          text-align: center;
          padding: 16px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        .card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          background-color: #f0f9ff;
        }

        .card-img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 12px;
          transition: transform 0.4s ease-in-out;
        }

        .card:hover .card-img {
  transform: scale(1.5); /* You can tweak this value */
}

        .card-title {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
        }

        /* Entry animation */
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s ease forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .custom-grid {
            flex-direction: column;
            align-items: center;
          }

          .card {
            width: 100%;
          }
        }
          @media (max-width: 768px) {
  .custom-grid {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .card {
    padding: 20px;
  }

  .card-img {
    height: 160px;
  }

  .card-title {
    font-size: 18px;
    margin-top: 10px;
  }
}

      `}</style>
    </div>
  );
};

export default Products;
