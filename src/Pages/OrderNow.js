import React from "react";
import "./OrderNow.css";
import "./OrderResponsive.css";
import Asparagus from "../ImageProducts/Asparagus.jpg";
import RangonChinese from "../ImageProducts/RangonChinese.jpg";
// import ShatavariPlant from "../ImageProducts/ShatavariPlant.jpg";
import TableKaini from "../ImageProducts/TableKaini.jpg";
import Araucariya5 from "../ImageProducts/Araucariya5.jpeg";
import BonsaiFicus35cm from "../ImageProducts/BonsaiFicus35cm.jpg";
import GoldenShrimp from "../ImageProducts/GoldenShrimp.jpeg";
import greenyonSyngonium from "../ImageProducts/greenyonSyngonium.jpg";
import LuckyBamboo from "../ImageProducts/LuckyBamboo.jpg";
import MoneyPlant from "../ImageProducts/MoneyPlant.jpeg";
import OrhulPune from "../ImageProducts/OrhulPune.jpeg";
import RubberPlant from "../ImageProducts/RubberPlant.jpeg";
import ShatavariPlant from "../ImageProducts/ShatavariPlant.jpg";
import DwarfRedNirum from "../ImageProducts/DwarfRedNirum.jpg";
import OrhulJabaMix from "../ImageProducts/OrhulJabaMix.jpg";
import MadhuMalti from "../ImageProducts/MadhuMalti.jpg";
import Rose from "../ImageProducts/Rose.jpg";


const products = [
  {
    id: 1,
    name: "Asparagus",
    price: 100,
    image: Asparagus,
  },
  {
    id: 2,
    name: "Rangon Chinese",
    price: 130,
    image: RangonChinese,
  },
  {
    id: 3,
    name: "Table Kaini",
    price: 130,
    image: TableKaini,
  },
  {
    id: 4,
    name: "Araucariya 5'",
    price: 150,
    image: Araucariya5,
  },
  {
    id: 5,
    name: "Bonsai Ficus (35cm)",
    price: 1400,
    image: BonsaiFicus35cm,
  },
  {
    id: 6,
    name: "Golden Shrimp",
    price: 100,
    image: GoldenShrimp,
  },
  {
    id: 7,
    name: "greenyon Syngonium",
    price: 100,
    image: greenyonSyngonium,
  },
  {
    id: 8,
    name: "Lucky Bamboo",
    price: 370,
    image: LuckyBamboo,
  },
  {
    id: 9,
    name: "Money Plant",
    price: 240,
    image: MoneyPlant,
  },
  {
    id: 10,
    name: "Orhul Pune",
    price: 70,
    image: OrhulPune,
  },
  {
    id: 11,
    name: "Rubber Plant",
    price: 200,
    image: RubberPlant,
  },
  {
    id: 12,
    name: "Shatavari Plant",
    price: 100,
    image: ShatavariPlant,
  },
  {
    id: 13,
    name: "Dwarf Red Nirum",
    price: 100,
    image: DwarfRedNirum,
  },
  {
    id: 14,
    name: "Orhul Jaba Mix7''",
    price: 100,
    image: OrhulJabaMix,
  },
  {
    id: 15,
    name: "Madhu Malti",
    price: 100,
    image: MadhuMalti,
  },
  {
    id: 16,
    name: "Rose",
    price: 100,
    image: Rose,
  },
];

function OrderNow() {
  const handleBuyNow = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>
      <div className="order-now">
        <h1 className="ord-h">Order Now</h1>
        <a href="/ProduuctsNew.xlsx" download className="download-link">
          Download Our Products
        </a>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p>Price: ₹{product.price}</p>
              <button
                className="order-button"
                onClick={() => handleBuyNow("1234567890")}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
      ;
    </>
  );
}

export default OrderNow;
