import "../css/NavMenu.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const NaviMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("home"); // 초기값은 home으로 시작

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/product")) {
      setActiveMenu("product");
    } else if (path.startsWith("/notice")) {
      setActiveMenu("notice");
    } else {
      setActiveMenu("home");
    }
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