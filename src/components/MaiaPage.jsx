import Header from "./Header";
import NaviMenu from "./NavMenu";
import Home from "./Home";
import Notice from "./Notice";
import Product from "./Product";
import HeaderItem from "./HeaderItem";
import { Routes,Route } from "react-router-dom";
import "../css/MainPage.css";
const MainPage = () => {
 
  
  return(
    <div className="MainPage">
      <div className="HeaderBox">
        <Header/>
        <HeaderItem/>
      </div>
      <NaviMenu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/notice" element={<Notice/>}/>
      </Routes>
    </div>
  )
}

export default MainPage;