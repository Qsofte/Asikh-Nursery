import React, { useState } from "react";
import "./OrderNow.css";
import "./OrderResponsive.css";
import Asparagus from "../ImageProducts/Asparagus.jfif";
import RangonChinese from "../ImageProducts/RangonChinese.jfif";
import TableKaini from "../ImageProducts/TableKaini.jfif";
import Araucariya5 from "../ImageProducts/Araucariya5.jpeg";
import BonsaiFicus35cm from "../ImageProducts/BonsaiFicus35cm.jpeg";
import GoldenShrimp from "../ImageProducts/GoldenShrimp.jpeg";
import greenyonSyngonium from "../ImageProducts/greenyonSyngonium.jpeg";
import LuckyBamboo from "../ImageProducts/LuckyBamboo.jpeg";
import MoneyPlant from "../ImageProducts/MoneyPlant.jpeg";
import OrhulPune from "../ImageProducts/OrhulPune.jpeg";
import RubberPlant from "../ImageProducts/RubberPlant.jpeg";
import ShatavariPlant from "../ImageProducts/ShatavariPlant.jpeg";
import Adenium from "../ImageProducts/Adenium.jpg";
import CrotonPetra from "../ImageProducts/CrotonPetra.jpg";
import FicusTapori from "../ImageProducts/FicusTapori.jpg";
import AmrudhChineseGreen from "../ImageProducts/AmrudhChineseGreen.jpg";
import AmrudhPunjab from "../ImageProducts/AmrudhPunjab.jpg";
import CoconutDesi from "../ImageProducts/CoconutDesi.jpg";
import MorpankhiJhau from "../ImageProducts/MorpankhiJhau.jpg";

const products = [
  {
    id: 1,
    name: "Asparagus",
    price: 0,
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
    price: 0,
    image: GoldenShrimp,
  },
  {
    id: 7,
    name: "greenyon Syngonium",
    price: 0,
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
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 13,
    name: "Ficus Tapori",
    price: 20000,
    image: FicusTapori,
  },
  {
    id: 14,
    name: "Lemon Gagar Bafabi 7'",
    price: 120,
    image: ShatavariPlant,
  },
  {
    id: 15,
    name: "Sepotia Palm",
    price: 120,
    image: ShatavariPlant,
  },
  {
    id: 16,
    name: "Adenium Flower",
    price: 280,
    image: Adenium,
  },
  {
    id: 17,
    name: "Coroton Petra",
    price: 100,
    image: ShatavariPlant,
  },
  {
    id: 18,
    name: "Morpankhi (Jhau)",
    price: 100,
    image: ShatavariPlant,
  },
  {
    id: 19,
    name: "AGLONIMA MIX",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 20,
    name: "AIR PLANT",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 21,
    name: "AZALEA FLOWER",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 22,
    name: "ALLAMANDA",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 23,
    name: "ALOO BHUKHARA(FRUIT)",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 24,
    name: "ALPINA",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 25,
    name: "AMALTAS",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 26,
    name: "ARAUCARIA 7'",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 27,
    name: "AMRUDH BLACK",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 28,
    name: "AMRUDH BLACK (S)",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 29,
    name: "AMRUDH CHINESE BLACK",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 30,
    name: "AMRUDH CHINESE GREEN",
    price: 120,
    image: AmrudhChineseGreen,
  },
  {
    id: 31,
    name: "AMRUDH KG",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 32,
    name: "AMRUDH PUNJAB",
    price: 100,
    image: AmrudhPunjab,
  },
  {
    id: 33,
    name: "ANAR DESI",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 34,
    name: "ANAR GANESH",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 35,
    name: "APPLE (SEB)",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 36,
    name: "APPLE BLOW 6'",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 37,
    name: "APPLE BLOW 11'",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 38,
    name: "APPLE BLOW 8'",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 39,
    name: "ARDEN BAMBOO",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 40,
    name: "ARECA PALM 5'",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 41,
    name: "ARECA PALM 7'",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 42,
    name: "ASPARA MARY",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 43,
    name: "ASPRAGUS MARY",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 44,
    name: "BAILEY FLOWER",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 45,
    name: "BAKUL CHERRY",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 46,
    name: "BAMBOO GARDEN",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 47,
    name: "BAMBOO PALM",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 48,
    name: "BANANA",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 49,
    name: "BASMATI",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 50,
    name: "BEGAM BAHAR",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 51,
    name: "BEL FAL",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 52,
    name: "BER (APPLE)",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 53,
    name: "BLACK KRISTINA FICUS",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 54,
    name: "BLACK RUBBER",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 55,
    name: "BLACK VELVET ALOCASIA",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 56,
    name: "BONSAI FICUS BIG",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 57,
    name: "BONSAI FICUS_25 CM",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 58,
    name: "CLARENDON",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 59,
    name: "BONSAI FICUS_60 CM",
    price: 0,
    image: ShatavariPlant,
  },

  {
    id: 60,
    name: "BONSAI FICUS_60 CM SPCL",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 61,
    name: "BOTTLE BRUSH 4'(G)",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 62,
    name: "BOTTLE BRUSH DESI 5",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 63,
    name: "BOTTLE PALM 5",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 64,
    name: "BOUGAINVILLEA FLOWER",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 65,
    name: "CALADIUM",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 66,
    name: "CHAMELI",
    price: 0,
    image: ShatavariPlant,
  },  {
    id: 67,
    name: "CHAMPA GOLDEN",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 68,
    name: "CHAMPA GRAFTED",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 69,
    name: "CHANDAN RED",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 70,
    name: "CHATIS PATIS",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 71,
    name: "CHERRY",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 72,
    name: "CHIKU 5",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 73,
    name: "CHIKU VERIGATED",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 75,
    name: "CHINA PALM",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 76,
    name: "CHINESE BAMBOO",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 77,
    name: "COCONUT DESI",
    price: 250,
    image: CoconutDesi,
  },
  {
    id: 78,
    name: "COCONUT H.B",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 79,
    name: "Concorde Hand Transplanter",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 80,
    name: "Concorde Two Teeth Cum Hoe",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 81,
    name: "CORFU HANGING 7'",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 82,
    name: "CROTON 5'",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 83,
    name: "CROTON BANGALORE",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 84,
    name: "CROTON PETRA",
    price: 100,
    image: CrotonPetra,
  },
  {
    id: 85,
    name: "CREEPER YELLOW ALLMANDA",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 86,
    name: "DALCHINI PLANT",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 87,
    name: "Morpankhi (Jhau)",
    price: 100,
    image: MorpankhiJhau,
  },
  {
    id: 88,
    name: "DECO 9 VIPIN",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 89,
    name: "DESI LILY",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "DIEFFENBACHIA",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 91,
    name: "DRACAENA GREEN",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 92,
    name: "DRACAENA MIX",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 93,
    name: "DWARF RED NERIUM",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "DWARF WHITE NERIUM",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },{
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },
  {
    id: 90,
    name: "Shatavari Plant",
    price: 0,
    image: ShatavariPlant,
  },

];

function OrderNow() {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleBuyNow = () => {
    const whatsappURL = `https://wa.me/917519935805?text=Hello, Hello, I’m interested in exploring more about the products and services offered by Asikh Nursery.`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <div className="order-now">
        <h1 className="ord-h">Order Now</h1>
        <a href="/ProduuctsNew.pdf" download className="download-link">
          Download Our Products List
        </a>
        
      <div className="search-bar-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Your Product"
          className="search-input"/>

        {/* <button className="search-button">
          Search
        </button> */}
      </div>

        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"/>

                  <h2>{product.name}</h2>
                  <p>Price: ₹{product.price}</p>

                <button
                  className="order-button"
                  onClick={() => handleBuyNow()}>
                    Buy Now
                </button>
              </div>
            ))
          ) : (
            <p>No products found!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default OrderNow;
