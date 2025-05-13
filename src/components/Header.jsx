import {useNavigate} from "react-router-dom";
import logo from "../img/Preview.png";
import "../css/Header.css"
const Header = () => {
  const navigate = useNavigate();
  const onClickGoHome = () =>{
    navigate("/");
  }
  return(
    <div className="Header">
      <div className="logo">
        <img src={logo} onClick={onClickGoHome}/>
      </div>
    </div>
  )
}

export default Header;