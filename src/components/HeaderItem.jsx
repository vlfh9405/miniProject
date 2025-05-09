import { useNavigate } from "react-router-dom";
import "../css/HearderItem.css"

const HeaderItem = () => {
  const navigate = useNavigate();
  const onClicklogin = () => {
    navigate("/login");
  }
  const onClickSigup = () => {
    navigate("/signup");
  }
  return(
    <div className="HearderItem">
      <div className="login" onClick={onClicklogin}>로그인</div>
      <div className="signup"onClick={onClickSigup}>회원가입</div>
    </div>
  )
}

export default HeaderItem;