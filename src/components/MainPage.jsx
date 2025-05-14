import NaviMenu from "./NavMenu";
import Home from "./Home";
import Notice from "./Notice";
import ProductRouting from "./ProductRouting";
import { Routes,Route } from "react-router-dom";
import Cart from "./Cart";
import "../css/MainPage.css";
const MainPage = ({isLoggedIn}) => {
  return(
    <div className="MainPage">
      <NaviMenu/> 
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/product/*" element={<ProductRouting isLoggedIn = {isLoggedIn}/>}/>
        <Route path = "/cart" element = {<Cart />}/>
        <Route path="/notice" element={<Notice/>}/>
      </Routes>
    </div>
  )
}

export default MainPage;