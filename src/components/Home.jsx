import MainImg from "./MainImg";
import HomeItemList from "./HomeItemList.jsx";
import "../css/Home.css";
import { useState } from "react";
import productData from "../data/productData.js";
const Home = () => {

  const [product] = useState(productData);
  
  return(
    <div className="Home">
      <MainImg/>
      <HomeItemList product={product}/>
    </div>
  )
}

export default Home;