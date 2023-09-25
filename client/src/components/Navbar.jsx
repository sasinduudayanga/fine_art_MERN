import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div class="container">

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>


            </ul>
            <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">
            Navbar
          </NavLink>
          <NavLink className="btn btn-outline-primary ms-auto px-4 rounded-pill" to="/login">
          <i className="fa fa-sign-in me-2"></i>Login</NavLink>
          <NavLink className="btn btn-outline-primary ms-auto px-4 rounded-pill" to= "/register">
          <i className="fa fa-user-plus me-2"></i>Register</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
