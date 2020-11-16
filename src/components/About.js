import React from "react";

function About() {
  return (
    <section class="section" id="about">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="mt-3">
              <img
                src="images/about.jpg"
                alt=""
                class="img-fluid mx-auto d-block img-thumbnail"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mt-3">
              <h2>
                <span class="font-weight-bold">About</span> Me
              </h2>
              <h4 class="mt-4">
                Hello I'm{" "}
                <span class="text-custom font-weight-bold">
                  Mir Habib Ul Latif.
                </span>
              </h4>
              <p class="text-muted mt-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
              <p class="text-muted mt-2">
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p class="text-muted mt-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div>
                <ul class="mb-0 about-social list-inline mt-4">
                  <li class="list-inline-item">
                    <a href="/#">
                      <i class="mdi mdi-dribbble"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/#">
                      <i class="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/#">
                      <i class="mdi mdi-linkedin"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/#">
                      <i class="mdi mdi-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
