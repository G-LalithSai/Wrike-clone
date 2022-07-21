import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaGlobe } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  const [scrollVisible, setScrollVisible] = useState(false);
  const [navbarBackground, setNavbarBckground] = useState("#0c3245");
  window.onscroll = function () {
    handleScroll();
  };

  function handleScroll() {
    setScrollVisible(document.documentElement.scrollTop > 60 ? true : false);

    setNavbarBckground(
      document.documentElement.scrollTop > 700 ? "#181f39" : "#0c3245"
    );
  }
  return (
    <nav
      style={{
        width: "100%",
        backgroundColor: navbarBackground,
        position: "fixed",
        zIndex: "999",
      }}
      className="navbar"
    >
      <div
        style={{
          width: "1440px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ul className="nav-links-1">
          <NavLink className="logo" to="/">
            <Logo />
          </NavLink>
          <NavLink className="products" to="Product">
            Product
          </NavLink>
          <NavLink className="solutions" to="Solutions">
            Solutions
          </NavLink>
          <NavLink className="pricing" to="Pricing">
            Pricing
          </NavLink>
          <NavLink className="resources" to="Resources">
            Resources
          </NavLink>
        </ul>
        <ul className="nav-links-2">
          {!scrollVisible ? (
            <>
              <NavLink className="contact" to="Contact">
                Contact us
              </NavLink>
              <li className="Language">
                <span style={{ display: "flex" }}>
                  <span>
                    <FaGlobe fontSize="14px" />
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "5px",
                    }}
                  >
                    {" "}
                    En{" "}
                  </span>
                </span>
              </li>
              <NavLink className="login" to="Login">
                Log in
              </NavLink>
            </>
          ) : (
            <>
              <li
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  style={{
                    padding: "10px",
                    color: "#1e1e1e",
                    backgroundColor: "snow",
                    border: "none",
                    borderRadius: "5px",
                    width: "250px",
                  }}
                  type="text"
                  placeholder="Business Email"
                />
              </li>
            </>
          )}
          <li className="sign-up">
            <button
              onClick={() => setScrollVisible(true)}
              className="navbar-button"
            >
              Start for free
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
