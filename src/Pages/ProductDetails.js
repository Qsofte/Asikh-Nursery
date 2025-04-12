import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  console.log("Product ID from URL:", id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json")  
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data); 
        console.log("Scanned Product id:", id, typeof id);
  
        const foundProduct = data.find((p) => String(p.id) === String(id));
  
        console.log("Matched Product:", foundProduct); 
        setProduct(foundProduct);
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, [id]);
  

  if (!product) return <h2>Product Not Found</h2>;
  if (!product.image) return <h2>We are working on this product, you will see the result soon.</h2>;

  return (
    <div className="prdt-open-card-qr">
      <h1 className="prdt-open-name-qr">{product.name}</h1>
      <img src={product.image} alt={product.name} className="prdt-opn-img-qr"/>
      <p className="prdt-open-description-qr">{product.description}</p>
      <p className="prdt-open-price-qr"><b>Price: </b>{product.price}</p>
    </div>
  );
};

export default ProductDetails;
