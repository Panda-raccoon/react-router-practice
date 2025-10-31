import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
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
    </div>
  );
};

export default Navbar;
