import MainImg from "./MainImg";
import HomeItemList from "./HomeItemList.jsx";
import "../css/Home.css";
import { useState } from "react";
import { dummyData } from "../util/DummyData";
const Home = () => {

  const [product] = useState(dummyData);
  
  return(
    <div className="Home">
      <MainImg/>
      <HomeItemList product={product}/>
    </div>
  )
}

export default Home;