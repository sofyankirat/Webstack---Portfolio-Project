import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();

  // Check if the current path is "/"
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    let activeLink = location.pathname.replace("/", "");

    let activeClass = document.querySelector(".navbar-nav .nav-item a.active");
    if (activeClass) {
      activeClass.classList.remove("active");
    }

    document.getElementById(activeLink || "home-link").classList.add("active");
  })


  return (
    <div className="container-xxl position-relative p-0" id="home">
      <nav
        className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 nav-click ${
          isHomePage ? "navbar-home" : "navbar-about"
        }`}
      >
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand p-0">
            <h1
              className="m-0"
              style={{
                color: isHomePage ? "#ffffff" : "#000000", // White for Home, Black for About
              }}
            >
              FitApp
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} id="home-link" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} id="about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/features"} id="features" className="nav-link">
                  Feature
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/pricing"} id="pricing" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/reviews"} id="reviews" className="nav-link">
                  Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} id="contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
          >
            Start Free Trial
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
