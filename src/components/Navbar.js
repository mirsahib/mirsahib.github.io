import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top custom-nav sticky">
      <div class="container">
        <a class="navbar-brand pt-0 logo" href="/#">
          <h5 class=" img-fluid logo-light">Mir Habib Ul Latif</h5>
          <h5 class=" img-fluid logo-dark">Mir Habib Ul Latif</h5>
          {/**
                    <img src="images/logo.png" alt="" class="img-fluid logo-light"/>
                    <img src="images/logo-dark.png" alt="" class="img-fluid logo-dark"/> */}
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="mdi mdi-menu"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#about">
                About
              </a>
            </li>
            {/** 
            <li class="nav-item">
              <a class="nav-link" href="/#services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#client">
                Client
              </a>
            </li>*/}
            <li class="nav-item">
              <a class="nav-link" href="/#work">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#blog">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#contact">
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
