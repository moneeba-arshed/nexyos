import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import miniCAmeraGroup from "../assets/images/nexyos/miniCAmeraGroup.png"


const Products = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://portal.nexyos.com/api/product/categories");
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
      <h1 className="title">Product Categories</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : categories.length === 0 ? (
        <p className="loading">No categories found.</p>
      ) : (
        <div className="custom-grid">
          {categories.map((item) => (
            <div key={item.id} className="card" onClick={() => navigate(`/category/${item.category}`, { state: { categoryId: item.id } })}>
              <img src={miniCAmeraGroup} alt={item.category} className="card-img" />
              <h2 className="card-title">{item.category}</h2>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .wrapper { background-color: white; min-height: 100vh; padding: 40px 20px; }
        .title { font-size: 28px; text-align: center; margin-bottom: 30px; font-weight: bold; }
        .loading { text-align: center; color: gray; }
        .custom-grid { display: flex; flex-wrap: wrap; justify-content: center; max-width: 800px; margin: 0 auto; }
       .card {
  width: 220px;
  margin: 10px;
  background-color: #ffffff;
  border: 2px solid #01667D;
  text-align: center;
  padding: 10px;
  transition: 0.3s ease;
  cursor: pointer;
}

        .card:hover { background-color: #f0f9ff; }
       .card-img {
  width: 100%;
object-fit: cover;
height: 120px;
  margin-bottom: 10px;
}

        .card-title { font-size: 16px; font-weight: 600; color: #111827; }
        @media (max-width: 768px) {
          .custom-grid { flex-direction: column; align-items: center; }
          .card { width: 100%; max-width: 90%; }
        }
      `}</style>
    </div>
  );
};

export default Products;
