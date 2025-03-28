import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/images/products.json") // ✅ JSON ko fetch kar rahe hain
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((p) => p.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch((err) => console.error("Error loading JSON:", err)); // ✅ Error handling
  }, [id]);

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetails;
