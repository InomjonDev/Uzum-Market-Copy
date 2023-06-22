import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineHome,
} from "react-icons/ai";
import Logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

function NavbarMain() {
  const [show, setShow] = useState(false);
  document.body.style.overflow = show ? "hidden" : "auto";

  return (
    <>
      <div className="container navbar__main">
        <div className="nav__logo">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <button className="nav__btn" onClick={() => setShow(true)}>
          <AiOutlineMenu />
          <span>Katalog</span>
        </button>
        <div className="nav__search">
          <input type="text" placeholder="Qidirish..." />
          <button>
            <AiOutlineSearch />
          </button>
        </div>
        <ul className="nav__collection">
          <li className="nav__item">
            <AiOutlineHome />
            <Link to={"/"}>Bosh sahifa</Link>
          </li>
          <li className="nav__item">
            <AiOutlineUser />
            <Link to={"/admin"}>Kirish</Link>
          </li>
          <li className="nav__item">
            <AiOutlineHeart />
            <Link to={"/wishlist"}>Saralangan</Link>
          </li>
          <li className="nav__item">
            <AiOutlineShoppingCart />
            <Link to={"/cart"}>Savatcha</Link>
          </li>
        </ul>
      </div>
      <Sidebar show={show} setShow={setShow} />
    </>
  );
}

export default NavbarMain;
