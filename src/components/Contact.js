import React from "react";

function Contact() {
  return (
    <section class="section" id="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center">
              <h2>
                <span class="font-weight-bold">Contact</span> Us
              </h2>
              <p class="text-muted mx-auto section-subtitle mt-3">
                It is a long established fact that a reader will be of a page
                when established fact looking at its layout.
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-4">
            <div class="text-center">
              <div>
                <i class="mbri-mobile2 text-custom h1"></i>
              </div>
              <div class="mt-3">
                <h5 class="mb-0 contact_detail-title font-weight-bold">
                  Call Us On
                </h5>
                <p class="text-muted">+985 123 7856</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="text-center">
              <div>
                <i class="mbri-letter text-custom h1"></i>
              </div>
              <div class="mt-3">
                <h5 class="mb-0 contact_detail-title font-weight-bold">
                  Email Me At
                </h5>
                <p class="text-muted">mirsahib24@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="text-center">
              <div>
                <i class="mbri-pin text-custom h1"></i>
              </div>
              <div class="mt-3">
                <h5 class="mb-0 contact_detail-title font-weight-bold">
                  Visit Office
                </h5>
                <p class="text-muted">202, Grasselli Street , Conway.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-12">
            <div class="form-kerri">
              <form>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mt-2">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        class="form-control"
                        placeholder="Your Name*"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mt-2">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        class="form-control"
                        placeholder="Your Email*"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mt-2">
                      <input
                        type="text"
                        class="form-control"
                        id="subject"
                        placeholder="Your Subject.."
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mt-2">
                      <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        class="form-control"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 text-right">
                    <input
                      type="submit"
                      class="btn btn-custom"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
