import React from "react";
import { hireMeLink } from "../portfolio";

function CTA() {
  return (
    <section class="section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <h2>I Am Available</h2>
            </div>
            <div class="text-center mt-4">
              <a href={hireMeLink} class="btn btn-custom">
                Hire Me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
