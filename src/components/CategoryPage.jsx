import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const { id } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const res = await fetch(`https://portal.nexyos.com/api/product/sub_categories/${id}`);
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
    <div className="wrapper">
      <h1 className="title">Subcategories</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : subcategories.length === 0 ? (
        <p className="loading">No subcategories found.</p>
      ) : (
        <div className="custom-grid">
          {subcategories.map((item) => (
            <div key={item.id} className="card">
              <img
                src="https://via.placeholder.com/80"
                alt={item.sub_category}
                className="card-img"
              />
              <h2 className="card-title">{item.sub_category}</h2>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .wrapper { background-color: white; min-height: 100vh; padding: 40px 20px; }
        .title { font-size: 28px; text-align: center; margin-bottom: 30px; font-weight: bold; }
        .loading { text-align: center; color: gray; }
        .custom-grid { display: flex; flex-wrap: wrap; justify-content: center; max-width: 800px; margin: 0 auto; }
        .card { width: 220px; height: 160px; margin: 10px; background-color: #ffffff; border: 2px solid #01667D;
          text-align: center; padding: 20px 10px; transition: 0.3s ease; }
        .card:hover { background-color: #f0f9ff; }
        .card-img { width: 60px; height: 60px; margin-bottom: 10px; }
        .card-title { font-size: 16px; font-weight: 600; color: #111827; }
        @media (max-width: 768px) {
          .custom-grid { flex-direction: column; align-items: center; }
          .card { width: 100%; max-width: 90%; }
        }
      `}</style>
    </div>
  );
};

export default CategoryPage;
