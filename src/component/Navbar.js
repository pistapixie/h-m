// import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const [searchTerm, setSearchTerm] = useState("드레스");
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
        <CiUser />
        <div>로그인</div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdodW8JgMsJXGpwo4oYCwWyHUcT_7WN688r_4G7fUpJQ&s"
          alt=""
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="input-container">
          <IoIosSearch />
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
