import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Sopping Cart
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse bg-black" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link nav" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link nav" to="/new-product">
              New Product
            </NavLink>
            <NavLink className="nav-link nav" to="/products">
              Product List
            </NavLink>
            <NavLink className="nav-link nav" to="/about">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
