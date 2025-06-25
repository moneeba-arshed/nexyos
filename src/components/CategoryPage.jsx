import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import PTZGROUPCAMERA from "../assets/images/nexyos/PTZGROUPCAMERA.png";

const CategoryPage = () => {
  const { id } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const res = await fetch(
          `https://portal.nexyos.com/api/product/sub_categories/${id}`
        );
        const data = await res.json();
        setSubcategories(Array.isArray(data) ? data : data.data || []);
      } catch (error) {
        console.error("Error:", error);
        setSubcategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSubCategories();
  }, [id]);

  return (
    <>
      <div className="wrapper">
        <h1 className="title">Subcategories</h1>

        <div className="layout">
          {/* Left fixed card */}
          <div className="left-panel">
            <div className="left-card">
              <h2 className="left-title">Main Category</h2>
              <p className="left-desc">
                You can add more details or image here if needed.
              </p>
            </div>
          </div>

          {/* Right side subcategories */}
          <div className="right-panel">
            {loading ? (
              <p className="loading">Loading...</p>
            ) : subcategories.length === 0 ? (
              <p className="loading">No subcategories found.</p>
            ) : (
              <div className="grid">
                {subcategories.map((item) => (
                  <div key={item.id} className="card">
                    <img
                      src={PTZGROUPCAMERA}
                      alt={item.sub_category}
                      className="card-img"
                    />
                    <h2 className="card-title">
                      {item.sub_category}

                      <ChevronRight className="arrow-icon" />
                    </h2>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Styles */}
        <style>{`
        .wrapper {
          background-color: white;
          min-height: 100vh;
          padding: 20px;
        }

        .title {
          font-size: 28px;
          text-align: center;
          margin-bottom: 30px;
          font-weight: bold;
        }

        .layout {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .left-panel {
          width: 260px;
        }

 .left-card {
  background-color: #f1f5f9;
  border: 2px solid #01667D;
  text-align: center;
  padding: 30px 10px;
  min-height: 600px; /* This stays for large screens */
  display: flex;
  flex-direction: column;
  justify-content: center;
}


        .left-img {
          width: 80px;
          height: 80px;
          margin-bottom: 10px;
        }

        .left-title {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 10px;
        }

        .left-desc {
          font-size: 14px;
          color: #555;
          padding: 0 10px;
        }

        .right-panel {
          flex: 1;
        }

        .loading {
          text-align: center;
          color: gray;
        }


.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px; /* ✅ Add spacing between cards */
  padding: 10px;
  box-sizing: border-box;
}

 
.card {
  width: 100%;
  background-color: #ffffff;
  border: 2px solid #01667D;
  text-align: center;
  padding: 10px;
  transition: 0.3s ease;
  cursor: pointer;
  box-sizing: border-box;
}

        .card:hover {
          background-color: #f0f9ff;
        }

        .card-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 10px;
}

        .card-title {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6;
}

.arrow-icon {
  width: 18px;
  height: 18px;
  color: #01667D;
  flex-shrink: 0;
}

        @media (max-width: 1024px) {
  .layout {
    flex-direction: column;
  }

  .left-panel {
    width: 100%;
    margin-bottom: 20px;
  }

  .left-card {
  min-height: auto;
  padding: 20px 10px;
}


  .grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    justify-items: center;
  }
}

      `}</style>
      </div>
    </>
  );
};

export default CategoryPage;
