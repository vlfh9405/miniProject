import "../css/NavMenu.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


const NaviMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getInitialMenu = () => {
    if (location.pathname === "/product") return "product";
    if (location.pathname === "/notice") return "notice";
    return "home"; // 기본은 home
  };

  const [activeMenu, setActiveMenu] = useState(getInitialMenu);

  useEffect(() => {
    // 경로가 바뀔 때 메뉴 상태 업데이트 (뒤로가기 등도 반영)
    setActiveMenu(getInitialMenu());
  }, [location.pathname]);

  const handleClick = (menu) => {
    setActiveMenu(menu);
    navigate(`/${menu === "home" ? "" : menu}`);
  };

  return (
    <div className="NavMenu">
      <div
        className={activeMenu === "home" ? "action" : ""}
        onClick={() => handleClick("home")}
      >
        Home
      </div>
      <div
        className={activeMenu === "product" ? "action" : ""}
        onClick={() => handleClick("product")}
      >
        Product
      </div>
      <div
        className={activeMenu === "notice" ? "action" : ""}
        onClick={() => handleClick("notice")}
      >
        Notice
      </div>
    </div>
  );
};

export default NaviMenu;