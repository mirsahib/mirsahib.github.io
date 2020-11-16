import React from "react";

function Footer() {
  return (
    <footer class="footer bg-light">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-12">
            <div class="text-center text-white footer-alt">
              <ul class="list-unstyled list-inline mb-3">
                <li class="list-inline-item">
                  <a href="/#">
                    <i class="mdi mdi-facebook text-muted"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="/#">
                    <i class="mdi mdi-linkedin text-muted"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="/#">
                    <i class="mdi mdi-pinterest text-muted"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="/#">
                    <i class="mdi mdi-twitter text-muted"></i>
                  </a>
                </li>
              </ul>
              <p class="text-muted mb-0">
                {" "}
                2018 - 2020 &copy; MirSahib. Design by MirSahib.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
