import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./ProductCard.css";
import "./Resp.css";

const ProductCard = ({ product }) => {
  // const productURL = `http://test.qsofte.com/product/${product.id}`;
  const productURL = `http://localhost:3000/product/${product.id}`;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.price}</p>
      <p className="product-description">{product.description}</p>
      <div className="qr-code">
        <QRCodeCanvas value={productURL} size={100} />
      </div>
    </div>
  );
};

export default ProductCard;