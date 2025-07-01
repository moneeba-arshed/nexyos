import React, { useEffect, useState } from "react";

const Productcategory = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://portal.nexyos.com/api/product/third_level/${productId}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.third_level}</h2>
      <img src={`https://portal.nexyos.com/${product.image}`} alt={product.third_level} />
      <p>{product.description || "Description here..."}</p>
    </div>
  );
};

export default Productcategory;
