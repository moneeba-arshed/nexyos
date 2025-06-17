import { useEffect, useState } from "react";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://portal.nexyos.com/api/product/categories"
        );
        const data = await res.json();
        if (Array.isArray(data)) {
          setCategories(data);
        } else if (Array.isArray(data.data)) {
          setCategories(data.data);
        } else {
          setCategories([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setCategories([]);
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
          {categories.map((item, index) => (
            <div
              key={item.id}
              className="card"
              onClick={() => window.open(`/category/${item.id}`, "_blank")}
            >
              <img
                src="https://via.placeholder.com/80"
                alt={item.category}
                className="card-img"
              />
              <h2 className="card-title">{item.category}</h2>
            </div>
          ))}
        </div>
      )}

      {/* Styling */}
      <style>{`
  .wrapper {
    background-color: white;
    min-height: 100vh;
    padding: 40px 20px;
  }

  .title {
    font-size: 28px;
    text-align: center;
    margin-bottom: 30px;
    font-weight: bold;
  }

  .loading {
    text-align: center;
    color: gray;
  }

  .custom-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .card {
    width: 220px;
    height: 160px;
    margin: 10px;
    background-color: #ffffff;
    border: 2px solid #01667D;
    text-align: center;
    padding: 20px 10px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .card:hover {
    background-color: #f0f9ff;
  }

  .card-img {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }

  .card-title {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
  }

  /* Responsive behavior: 1 card per row */
  @media (max-width: 768px) {
    .custom-grid {
      flex-direction: column;
      align-items: center;
    }

    .card {
      width: 100%;
      max-width: 90%;
    }
  }
`}</style>

    </div>
  );
};

export default Products;
