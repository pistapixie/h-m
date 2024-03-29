// import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import GeneralModal from "./GeneralModal";
import { useState } from "react";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
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

  const handleLogout = () => {
    setAuthenticate(false);
    navigate("/");
    handleCloseModal();
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div
        className="login-button"
        onClick={authenticate ? handleShowModal : () => navigate("/login")}
      >
        <CiUser />
        <div>{authenticate ? "로그아웃" : "로그인"}</div>
      </div>
      <GeneralModal
        show={showModal}
        onHide={handleCloseModal}
        title="로그아웃 확인"
        body="로그아웃하시겠습니까?"
        cancelButtonText="취소"
        confirmButtonText="로그아웃"
        onConfirm={handleLogout}
      />
      <div className="nav-section">
        <img
          className="logo-img"
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdodW8JgMsJXGpwo4oYCwWyHUcT_7WN688r_4G7fUpJQ&s"
          alt="h&M 로고"
          onClick={goToHome}
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="search-container">
          <IoIosSearch />
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
