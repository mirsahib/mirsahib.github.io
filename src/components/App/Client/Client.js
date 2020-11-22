import React from "react";

function Client() {
  return (
    <section class="section bg-light" id="client">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center">
              <h2>
                My <span class="font-weight-bold">Client</span>
              </h2>
              <p class="text-muted mx-auto section-subtitle mt-3">
                It is a long established fact that a reader will be of a page
                when established fact looking at its layout.
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-4 pt-4">
          <div class="col-lg-12">
            <div id="owl-demo" class="owl-carousel">
              <div class="text-center testi_boxes mx-auto">
                <div class="tam_testi_icon text-custom">
                  <i class="mbri-quote-left"></i>
                </div>
                <div class="mt-2">
                  <div>
                    <img
                      src="images/testi/testi-1.jpg"
                      alt=""
                      class="mx-auto img-thumbnail img-fluid d-block rounded-circle"
                    />
                  </div>
                  <p class="client_review font-italic mt-4 text-center text-muted">
                    " The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here."
                  </p>
                  <p class="client_name text-center mb-0 mt-4">
                    - Ebony verty, <span class="font-weight-bold">Envato</span>
                  </p>
                </div>
              </div>
              <div class="text-center testi_boxes mx-auto">
                <div class="tam_testi_icon text-custom">
                  <i class="mbri-quote-left"></i>
                </div>
                <div class="mt-2">
                  <div>
                    <img
                      src="images/testi/testi-2.jpg"
                      alt=""
                      class="mx-auto img-thumbnail img-fluid d-block rounded-circle"
                    />
                  </div>
                  <p class="client_review font-italic mt-4 text-center text-muted">
                    " The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here."
                  </p>
                  <p class="client_name text-center mb-0 mt-4">
                    - Ebony verty, <span class="font-weight-bold">Envato</span>
                  </p>
                </div>
              </div>
              <div class="text-center testi_boxes mx-auto">
                <div class="tam_testi_icon text-custom">
                  <i class="mbri-quote-left"></i>
                </div>
                <div class="mt-2">
                  <div>
                    <img
                      src="images/testi/testi-3.jpg"
                      alt=""
                      class="mx-auto img-thumbnail img-fluid d-block rounded-circle"
                    />
                  </div>
                  <p class="client_review font-italic mt-4 text-center text-muted">
                    " The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here."
                  </p>
                  <p class="client_name text-center mb-0 mt-4">
                    - Ebony verty, <span class="font-weight-bold">Envato</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
