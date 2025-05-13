import Header from "./Header";
import NaviMenu from "./NavMenu";
import Home from "./Home";
import Notice from "./Notice";
import ProductRouting from "./ProductRouting";
import HeaderItem from "./HeaderItem";
import { Routes,Route } from "react-router-dom";
import Cart from "./Cart";
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
        <Route path="/*" element={<Home/>}/>
        <Route path="/product/*" element={<ProductRouting/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path="/notice" element={<Notice/>}/>
      </Routes>
    </div>
  )
}

export default MainPage;