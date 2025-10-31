import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const menuList = [
    "여성",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setAuthenticate(false);
    navigate("/");
  };

  const goToMain = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      const keyword = event.target.value;
      navigate(`/?q=${encodeURIComponent(keyword)}`);
    }
  };

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const closeSideMenu = () => {
    setSideMenuOpen(false);
  };

  return (
    <div>
      <div>
        <div
          className="login-button"
          onClick={authenticate ? handleLogout : goToLogin}
        >
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
      </div>

      <div className="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/330px-H%26M-Logo.svg.png"
          alt="hm logo"
          onClick={goToMain}
          style={{ cursor: "pointer" }}
        />
        <div className="hamburger-menu" onClick={toggleSideMenu}>
          <FontAwesomeIcon icon={sideMenuOpen ? faTimes : faBars} />
        </div>
      </div>

      <div className="search-container">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="제품검색"
            className="search-input"
            onKeyDown={search}
          />
        </div>
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
      </div>
      {/* 사이드 메뉴 오버레이 숨겨숨겨*/}
      <div
        className={`side-menu-overlay ${sideMenuOpen ? "active" : ""}`}
        onClick={closeSideMenu}
      ></div>

      {/* 사이드 메뉴 */}
      <div className={`side-menu ${sideMenuOpen ? "active" : ""}`}>
        <div className="side-menu-header">
          <h3>메뉴</h3>
          <button className="side-menu-close" onClick={closeSideMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <ul className="side-menu-list">
          {menuList.map((menu) => (
            <li key={menu} onClick={closeSideMenu}>
              {menu}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
