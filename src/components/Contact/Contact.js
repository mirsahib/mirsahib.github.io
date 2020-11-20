import React from "react";
import Form from "./Form";
import { contact, contactMsg } from "../../portfolio";

function Contact() {
  let { cell, email, office } = contact;
  return (
    <section class="section" id="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center">
              <h2>
                <span class="font-weight-bold">Contact</span> Me
              </h2>

              <p class="text-muted mx-auto section-subtitle mt-3">
                {contactMsg ? contactMsg : ""}
              </p>
            </div>
          </div>
        </div>
        {/**
        <div class="row mt-5">
          <div class="col-lg-4">
            <div class="text-center">
              <div>
                <i class="mbri-mobile2 text-custom h1"></i>
              </div>
              <div class="mt-3">
                <h5 class="mb-0 contact_detail-title font-weight-bold">
                  Call Me On
                </h5>
                <p class="text-muted">{cell ? cell : "Not Available"}</p>
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
                <p class="text-muted">{email ? email : "Not Available"}</p>
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
                <p class="text-muted">{office ? office : "Not Available"}</p>
              </div>
            </div>
          </div>
        </div>
 */}
        <div class="row mt-5">
          <div class="col-lg-12">
            <div class="form-kerri">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
