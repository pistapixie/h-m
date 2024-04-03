import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import GeneralModal from "../component/GeneralModal";
import { authenciateAction } from "../redux/actions/authenciateAction";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const authenticate = useSelector((state) => state.auth.authenticate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const confirmLogout = () => {
    dispatch(authenciateAction.logout());
    setShowModal(false);
    navigate("/");
  };

  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  let [width, setWidth] = useState(0);

  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div onClick={() => setShowModal(true)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>

      <div className="nav-logo">
        <Link to="/">
          <img
            width={100}
            alt="H&M 로고"
            src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          />
        </Link>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li key={index}>
              <Link to="#">{menu}</Link>
            </li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="search..." onKeyDown={onCheckEnter} />
        </div>
      </div>
      <GeneralModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="로그아웃"
        body="정말로 로그아웃 하시겠습니까?"
        confirmButtonText="확인"
        cancelButtonText="취소"
        onConfirm={confirmLogout}
      />
    </div>
  );
};

export default Navbar;
