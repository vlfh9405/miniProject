import NaviMenu from "./NavMenu";
import Home from "./Home";
import NoticeList from "./NoticeList";
import ProductRouting from "./ProductRouting";
import { Routes,Route } from "react-router-dom";
import Cart from "./Cart";
import "../css/MainPage.css";
import NoticeDetail from "./NoticeDetail";
import MypageInfo from "./MyPageInfo";
import MypageMenuBar from "./MypageMenuBar";
const MainPage = ({isLoggedIn}) => {
  return(
    <div className="MainPage">
      <NaviMenu/> 
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/product/*" element={<ProductRouting isLoggedIn = {isLoggedIn}/>}/>
        <Route path="/cart" element = {<Cart />}/>
        <Route path="/notice" element={<NoticeList/>}/>
        <Route path="/notice/:id" element={<NoticeDetail />} />
        <Route path="/myPage" element = {<MypageMenuBar/>}/>
        <Route path="/myPage/info" element = {<MypageInfo/>}/>
      </Routes>
    </div>
  )
}

export default MainPage;