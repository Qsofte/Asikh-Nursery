import React, { useState } from "react";
import "./OrderNow.css";
import "./OrderResponsive.css";

import Asparagus from "../ImageProducts/Asparagus marry.jpg";
import RangonChinese from "../ImageProducts/Rangon Chinease.jpg";
import TableKaini from "../ImageProducts/Table kaini.jpg";
import Araucariya5 from "../ImageProducts/Araucariya 5'.jpg";
import BonsaiFicus35cm from "../ImageProducts/Bonsai ficus 35 cm.jpg";
import SejoniomBig from "../ImageProducts/Sejoniom Big.jpg";
import Syzygium from "../ImageProducts/Syzygium.jpg";
import LuckyBamboo from "../ImageProducts/LuckyBamboo.jpeg";
import MoneyPlant from "../ImageProducts/Money plant (golden).jpg";
import OrhulPune from "../ImageProducts/OrhuL (pune).jpg";
import RubberPlant from "../ImageProducts/Rubber black.jpg";
// import ShatavariPlant from "../ImageProducts/ShatavariPlant.jpeg";
import Adenium from "../ImageProducts/Adenium.jpg";
import Crotonpetra from "../ImageProducts/Croton petra.jpg";
import FicusTapori from "../ImageProducts/Ficus tapori.jpg";
import AmrudhChineseGreen from "../ImageProducts/Amrudh chinese green.jpg";
import AmrudhPunjab from "../ImageProducts/Amrudh punjab.jpg";
import CoconutDesi from "../ImageProducts/Coconut Desi.jpg";
import MorpankhiJhau from "../ImageProducts/MorpankhiJhau.jpg";
import AGLONIMAMIX from "../ImageProducts/Aglonima mix.jpg";
import LemonGagarBafab from "../ImageProducts/Lemon Gagar (Bafab)7'.jpg";
import Sepotiyapalm from "../ImageProducts/Sepotiya palm.jpg";
import Alamanda from "../ImageProducts/Alamanda.jpg";
import AlloBhukara from "../ImageProducts/Allo Bhukara.jpg";
import pressuresprayer from "../ImageProducts/1.25 pressure sprayer.jpg";
import ApplePot from "../ImageProducts/Apple Pot 6'.jpg";
import ConcordeKhurpa from "../ImageProducts/Concorde Khurpa 1'.jpg";
import DependableDoubleTools from "../ImageProducts/Dependable Double Tools.jpg";
import Duropot from "../ImageProducts/Duro pot 10''.jpg";
import FalconCutterM2 from "../ImageProducts/Falcon Cutter M2.jpg";
import GardenPumpAndSpray from "../ImageProducts/Garden Pump And Spray 1200ml.jpg";
import GloryHookPot from "../ImageProducts/Glory Hook Pot 2.5L.jpg";
import HedgeCutter from "../ImageProducts/Hedge Cutter.jpg";
import JuhiPot from "../ImageProducts/Juhi Pot 4.3'.jpg";
import JuhiPot8 from "../ImageProducts/Juhi Pot 8'.jpg";
import KanhaMatki from "../ImageProducts/Kanha Matki 8'.jpg";
import Khurpa from "../ImageProducts/Khurpa.jpg";
import LeafBranchScissor from "../ImageProducts/Leaf & Branch Scissor.jpg";
import MossStick from "../ImageProducts/Moss stick 2ft.jpg";
import OmegaPot from "../ImageProducts/Omega Pot 12'.jpg";
import OmegaPot14 from "../ImageProducts/Omega Pot 14'.jpg";
import OsloHangingPot from "../ImageProducts/Oslo Hanging Pot 7.5'.jpg";
import OsloPot from "../ImageProducts/Oslo Pot 8L.jpg";
import PrimePlanter from "../ImageProducts/Prime Planter 10'.jpg";
import RattanHaggingPot from "../ImageProducts/Rattan Hagging Pot 7.1'.jpg";
import RoyalPanter from "../ImageProducts/Royal panter 3.jpg";
import SunshinePlanter from "../ImageProducts/Sunshine Planter 7.5L.jpg";
import SunshinePlanter15L from "../ImageProducts/Sunshine Planter 15'.jpg";
import WaterSprinklerCan5L from "../ImageProducts/Water Sprinkler Can 5L.jpg";


const products = [
  {
    id: 1,
    name: "Asparagus",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    // type: ["Home", "Garden"],
    price: 100,
    image: Asparagus,
  },
  {
    id: 2,
    name: "Rangon Chinese",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    // type: ["Home", "Garden"],
    price: 130,
    image: RangonChinese,
  },
  {
    id: 3,
    name: "Table Kaini",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    // type: ["Home", "Garden"],
    price: 130,
    image: TableKaini,
  },
  {
    id: 4,
    name: "Araucariya 5'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    // type: ["Home", "Garden"],
    price: 150,
    image: Araucariya5,
  },
  {
    id: 5,
    name: "Bonsai Ficus (35cm)",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    // type: ["Home", "Garden"],
    price: 1400,
    image: BonsaiFicus35cm,
  },
  {
    id: 6,
    name: "SejoniomBig",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    // type: ["Home", "Garden"],
    price: 0,
    image: SejoniomBig,
  },
  {
    id: 7,
    name: "Syzygium",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    type: "Home",
    price: 0,
    image: Syzygium,
  },
  {
    id: 8,
    name: "Lucky Bamboo",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 370,
    image: LuckyBamboo,
  },
  {
    id: 9,
    name: "Money plant (Golden)",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 240,
    image: MoneyPlant,
  },
  {
    id: 10,
    name: "Orhul Pune",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 70,
    image: OrhulPune,
  },
  {
    id: 11,
    name: "Rubber Plant",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 200,
    image: RubberPlant,
  },
  {
    id: 12,
    name: "Croton petra",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 0,
    image: Crotonpetra,
  },
  {
    id: 13,
    name: "Ficus Tapori",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 20000,
    image: FicusTapori,
  },
  {
    id: 14,
    name: "Lemon Gagar Bafabi 7'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 120,
    image: LemonGagarBafab,
  },
  {
    id: 15,
    name: "Sepotia Palm",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 120,
    image: Sepotiyapalm,
  },
  {
    id: 16,
    name: "Adenium",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 280,
    image: Adenium,
  },
  {
    id: 17,
    name: "Coroton Petra",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 100,
    image: Crotonpetra,
  },
  {
    id: 18,
    name: "Morpankhi (Jhau)",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 100,
    image: MorpankhiJhau,
  },
  {
    id: 19,
    name: "AGLONIMA MIX",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 100,
    image: AGLONIMAMIX,
  },
  // {
  //   id: 20,
  //   name: "AIR PLANT",
  //   description: "Helps in creating a refreshing environment, give serene and calmness to your home",
  //   category: "Plants",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 21,
  //   name: "AZALEA FLOWER",
  //   description: "Helps in creating a refreshing environment, give serene and calmness to your home",
  //   category: "Plants",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  {
    id: 22,
    name: "ALLAMANDA",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 0,
    image: Alamanda,
  },
  {
    id: 23,
    name: "ALOO BHUKHARA(FRUIT)",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 0,
    image: AlloBhukara,
  },
  {
    id: 24,
    name: "AMRUDH CHINESE GREEN",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 120,
    image: AmrudhChineseGreen,
  },
  {
    id: 25,
    name: "AMRUDH PUNJAB",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 100,
    image: AmrudhPunjab,
  },
  {
    id: 26,
    name: "ARAUCARIA 7'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 100,
    image: Araucariya5,
  },
  {
    id: 27,
    name: "COCONUT DESI",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Plants",
    price: 250,
    image: CoconutDesi,
  },
  // {
  //   id: 28,
  //   name: "AMRUDH BLACK (S)",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 29,
  //   name: "AMRUDH CHINESE BLACK",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 30,
  //   name: "ALPINA",
  //   description: "Helps in creating a refreshing environment, give serene and calmness to your home",
  //   category: "Plants",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 31,
  //   name: "AMRUDH KG",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 32,
  //   name: "AMALTAS",
  //   description: "Helps in creating a refreshing environment, give serene and calmness to your home",
  //   category: "Plants",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 33,
  //   name: "ANAR DESI",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 34,
  //   name: "ANAR GANESH",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 35,
  //   name: "APPLE (SEB)",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 36,
  //   name: "APPLE BLOW 6'",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 37,
  //   name: "APPLE BLOW 11'",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 38,
  //   name: "APPLE BLOW 8'",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 39,
  //   name: "ARDEN BAMBOO",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 40,
  //   name: "ARECA PALM 5'",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 41,
  //   name: "ARECA PALM 7'",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 42,
  //   name: "ASPARA MARY",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 43,
  //   name: "ASPRAGUS MARY",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 44,
  //   name: "BAILEY FLOWER",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 45,
  //   name: "BAKUL CHERRY",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 46,
  //   name: "BAMBOO GARDEN",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 47,
  //   name: "BAMBOO PALM",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 48,
  //   name: "BANANA",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 49,
  //   name: "BASMATI",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 50,
  //   name: "BEGAM BAHAR",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 51,
  //   name: "BEL FAL",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 52,
  //   name: "BER (APPLE)",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 53,
  //   name: "BLACK KRISTINA FICUS",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 54,
  //   name: "BLACK RUBBER",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 55,
  //   name: "BLACK VELVET ALOCASIA",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 56,
  //   name: "BONSAI FICUS BIG",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 57,
  //   name: "BONSAI FICUS_25 CM",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
//   {
//     id: 58,
//     name: "CLARENDON",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 59,
//     name: "BONSAI FICUS_60 CM",
//     price: 0,
//     image: ShatavariPlant,
//   },

//   {
//     id: 60,
//     name: "BONSAI FICUS_60 CM SPCL",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 61,
//     name: "BOTTLE BRUSH 4'(G)",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 62,
//     name: "BOTTLE BRUSH DESI 5",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 63,
//     name: "BOTTLE PALM 5",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 64,
//     name: "BOUGAINVILLEA FLOWER",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 65,
//     name: "CALADIUM",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 66,
//     name: "CHAMELI",
//     price: 0,
//     image: ShatavariPlant,
//   },  {
//     id: 67,
//     name: "CHAMPA GOLDEN",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 68,
//     name: "CHAMPA GRAFTED",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 69,
//     name: "CHANDAN RED",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 70,
//     name: "CHATIS PATIS",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 71,
//     name: "CHERRY",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 72,
//     name: "CHIKU 5",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 73,
//     name: "CHIKU VERIGATED",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 75,
//     name: "CHINA PALM",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 76,
//     name: "CHINESE BAMBOO",
//     price: 0,
//     image: ShatavariPlant,
//   },
  //  {
  //   id: 77,
  //   name: "AMRUDH BLACK",
      //  price: 0,
      //  image: ShatavariPlant,
  //  },
//   {
//     id: 78,
//     name: "COCONUT H.B",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 79,
//     name: "Concorde Hand Transplanter",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 80,
//     name: "Concorde Two Teeth Cum Hoe",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 81,
//     name: "CORFU HANGING 7'",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 82,
//     name: "CROTON 5'",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 83,
//     name: "CROTON BANGALORE",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 84,
//     name: "CROTON PETRA",
//     price: 100,
//     image: CrotonPetra,
//   },
//   {
//     id: 85,
//     name: "CREEPER YELLOW ALLMANDA",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 86,
//     name: "DALCHINI PLANT",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 87,
//     name: "Morpankhi (Jhau)",
//     price: 100,
//     image: MorpankhiJhau,
//   },
//   {
//     id: 88,
//     name: "DECO 9 VIPIN",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 89,
//     name: "DESI LILY",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 90,
//     name: "DIEFFENBACHIA",
//     price: 0,
//     image: ShatavariPlant,
//   },
  // {
  //   id: 91,
  //   name: "DRACAENA GREEN",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 92,
  //   name: "DRACAENA MIX",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 93,
  //   name: "DWARF RED NERIUM",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  // {
  //   id: 94,
  //   name: "DWARF WHITE NERIUM",
  //   price: 0,
  //   image: ShatavariPlant,
  // },
  {
    id: 95,
    name: "1.25 pressure sprayer",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: pressuresprayer,
  },
  {
    id: 96,
    name: "Apple Pot 6'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: ApplePot,
  },
  {
    id: 97,
    name: "Concorde Khurpa 1'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: ConcordeKhurpa,
  },
  {
    id: 98,
    name: "Dependable Double Tools",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: DependableDoubleTools,
  },
  {
    id: 99,
    name: "Duro pot 10'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: Duropot,
  },
  {
    id: 100,
    name: "Falcon Cutter M2",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: FalconCutterM2,
  },
  {
    id: 101,
    name: "Pump And Spray 1200ml",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: GardenPumpAndSpray,
  },
  {
    id: 102,
    name: "Glory Hook Pot 2.5L",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: GloryHookPot,
  },
  {
    id: 103,
    name: "Hedge Cutter",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: HedgeCutter,
  },
  {
    id: 104,
    name: "Juhi Pot 4.3'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: JuhiPot,
  },
  {
    id: 105,
    name: "Juhi Pot 8'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: JuhiPot8,
  },
  {
    id: 106,
    name: "Kanha Matki 8'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: KanhaMatki,
  },
  {
    id: 107,
    name: "Khurpa",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: Khurpa,
  },
  {
    id: 108,
    name: "Leaf & Branch Scissor",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: LeafBranchScissor,
  },
  {
    id: 109,
    name: "Moss stick 2ft",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: MossStick,
  },
  {
    id: 110,
    name: "Omega Pot 12'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: OmegaPot,
  },{
    id: 111,
    name: "Omega Pot 14'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: OmegaPot14,
  },
  {
    id: 112,
    name: "Oslo Hanging Pot 7.5'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: OsloHangingPot,
  },
  {
    id: 113,
    name: "Oslo Pot 8L",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: OsloPot,
  },
  {
    id: 114,
    name: "Prime Planter 10'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: PrimePlanter,
  },
  {
    id: 115,
    name: "Rattan Hagging Pot 7.1'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: RattanHaggingPot,
  },
  {
    id: 116,
    name: "Royal panter 3",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: RoyalPanter,
  },
  {
    id: 117,
    name: "Sunshine Planter 7.5L",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: SunshinePlanter,
  },
  {
    id: 118,
    name: "Sunshine Planter 15'",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: SunshinePlanter15L,
  },
  {
    id: 119,
    name: "Water Sprinkler Can 5L",
    description: "Helps in creating a refreshing environment, give serene and calmness to your home",
    category: "Tools",
    price: 100,
    image: WaterSprinklerCan5L,
  },
//   {
//     id: 120,
//     name: "Shatavari Plant",
//     price: 0,
//     image: ShatavariPlant,
//   },
//   {
//     id: 121,
//     name: "Shatavari Plant",
//     price: 0,
//     image: ShatavariPlant,
//   },
// {
//   id: 122,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 123,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 124,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 125,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 126,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 127,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 128,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 129,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 130,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 131,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 132,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 133,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 134,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 135,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 136,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 137,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 138,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 139,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },
// {
//   id: 140,
//   name: "Shatavari Plant",
//   price: 0,
//   image: ShatavariPlant,
// },

];

  const handleBuyNow = () => {
    const whatsappURL = `https://wa.me/917519935805?text=Hello, Hello, I’m interested in exploring more about the products and services offered by Asikh Nursery.`;
    window.open(whatsappURL, "_blank");
  };


  const OrderNow = () => {
    const [filters, setFilters] = useState({ categories: [], types: [], priceRange: [] });

    const handleFilterChange = (type, value) => {
      setFilters((prevFilters) => {
        if (type === "search") {
          return { ...prevFilters, search: value };
        }
        const currentFilter = prevFilters[type] || [];
        const updatedFilter = currentFilter.includes(value)
        ? currentFilter.filter((item) => item !== value)
        : [...currentFilter, value];
        return { ...prevFilters, [type]: updatedFilter };
      });
    };
  
    const filteredProducts = products.filter((product) => {
      const categoryMatch = filters.categories.length
      ? filters.categories.includes(product.category)
      : true;
    const typeMatch = filters.types.length ? filters.types.includes(product.type) : true;
    const priceMatch = filters.priceRange.length
      ? filters.priceRange.some(([min, max]) => product.price >= min && product.price <= max)
      : true;
    const searchMatch = filters.search
      ? product.name.toLowerCase().includes(filters.search.toLowerCase())
      : true;
    return categoryMatch && typeMatch && priceMatch && searchMatch;
  });

    return (
      <div className="Ordernow-container">

      <aside className="sidebar">
        <input type="text" placeholder="Search" className="search-box" value={filters.search}
          onChange={(e) => handleFilterChange("search", e.target.value)}
        />

        <h3>Categories</h3>
        <ul>
          {["Tools", "Plants"].map((cat) => (
            <li key={cat} className="filter-item">
              <input
                type="checkbox"
                onChange={() => handleFilterChange("categories", cat)}
              />
              <span className="filter-label">{cat}</span>
            </li>
          ))}
        </ul>

        <div className="ordernow-underline"></div>

        <h3 className="filter">Type</h3>
        <ul>
          {["Home", "Garden"].map((type) => (
            <li key={type} className="filter-item">
              <input
                type="checkbox"
                onChange={() => handleFilterChange("types", type)}
              />
               <span className="filter-label">{type}</span>
            </li>
          ))}
        </ul>

        <div className="ordernow-underline"></div>

        <h3 className="filter">Price Range</h3>
        <ul>
          {[
            [0, 400],
            [400, 800],
            [800, 1200],
            [1200, 1600],
            [1600, 2000],
            [2000, 2400],
            [2400, 2800],
            [2800, 10000]
          ].map(([min, max]) => (
            <li key={`${min}-${max}`} className="filter-item">
              <input
                type="checkbox"
                onChange={() => handleFilterChange("priceRange", [min, max])}
              />
              <span className="filter-label">₹{min} - ₹{max}</span>
            </li>
          ))}
        </ul>

        <div className="ordernow-underline"></div>

        <h3 className="filter">Language</h3>
        <ul>
          {["English", "Hindi"].map((lang) => (
            <li key={lang} className="filter-item">
              <input
                type="checkbox"
                onChange={() => handleFilterChange("languages", lang)}
              />
              <span className="filter-label">{lang}</span>
            </li>
          ))}
        </ul>
      </aside>

      <main className="product-grid">
        <div className="Ordernow-header">
          <span className="Ordernow-span">Showing {filteredProducts.length} results</span>
          <button className="sort-btn">Default Sorting ⬇️</button>
        </div>

        <div className="line-head"></div>

        <div className="products">
          {filteredProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <span className="price">₹{product.price}</span>
              <button className="cart-btn" onClick={handleBuyNow}>Buy Now</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default OrderNow;
