import React from "react";
import { profile } from "../portfolio";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky">
      <div className="container">
        <a className="navbar-brand pt-0 logo" href="/#">
          <h5 className=" img-fluid logo-light">{profile.userName}</h5>
          <h5 className=" img-fluid logo-dark">{profile.userName}</h5>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="mdi mdi-menu"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#work">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
