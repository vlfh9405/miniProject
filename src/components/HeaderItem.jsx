import { useNavigate } from "react-router-dom";
import "../css/HearderItem.css";

const HeaderItem = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate("/login");
  };

  const onClickSignup = () => {
    navigate("/signup");
  };

  const onClickLogout = () => {
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다.");
    navigate("/"); // 홈으로 이동
  };

  const onClickMypage = () => {
    navigate("/myPage"); 
  };

  return (
    <div className="HearderItem">
      {isLoggedIn ? (
        <>
          <div className="login" onClick={onClickLogout}>로그아웃</div>
          <div className="signup" onClick={onClickMypage}>마이페이지</div>
        </>
      ) : (
        <>
          <div className="login" onClick={onClickLogin}>로그인</div>
          <div className="signup" onClick={onClickSignup}>회원가입</div>
        </>
      )}
    </div>
  );
};

export default HeaderItem;