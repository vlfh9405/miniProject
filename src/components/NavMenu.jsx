import "../css/NavMenu.css";
import { useNavigate } from "react-router-dom";
const NaviMenu = () => {
  const navigate = useNavigate();
  const onClickHome = () =>{
    navigate("/")
  }
  const onClickProduct = () => {
    navigate("/product");
  }
  const onClickNotice = () =>{
    navigate("/notice");
  }
  return(
    <div className="NavMenu">
        <div className="action" onClick={onClickHome}>Home</div>
        <div onClick={onClickProduct}>Product</div>
        <div onClick={onClickNotice}>Notice</div>
    </div>
  )
}

export default NaviMenu;