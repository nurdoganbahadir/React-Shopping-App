import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="bg-danger navbar navbar-expand-lg bg-body-tertiary">
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
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NavLink class="nav-link" to="/">
              Home
            </NavLink>
            <NavLink class="nav-link" to="/new-product">
              New Product
            </NavLink>
            <NavLink class="nav-link" to="/products">
              Product List
            </NavLink>
            <NavLink class="nav-link" to="/about">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
