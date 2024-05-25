import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";
import { CartSvg } from "../../assets/StarSvg";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const scrollToSearch = () => {
    const searchField = document.getElementById("search");
    if (searchField) {
      const yOffset = -100; // Adjust as needed to position the field correctly
      const y =
        searchField.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="Navbar" id="Navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          {" "}
          HOME
        </Link>
        <a
          href="#expole-menu"
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          MENU
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact");
          }}
          className={menu === "contact" ? "active" : ""}
        >
          CONTACT
        </a>
      </ul>
      <div className="Navbar-right">
        <a onClick={scrollToSearch}>
          <img src={assets.search_icon} alt="search_icon" />
        </a>

        <div className="Navbar-search-icon">
          <Link to="/cart">
            <CartSvg />
          </Link>

          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}> Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
