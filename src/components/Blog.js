import React from "react";

function Blog() {
  return (
    <section class="section bg-light" id="blog">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center">
              <h2>
                Our <span class="font-weight-bold">Blog</span>
              </h2>
              <p class="text-muted mx-auto section-subtitle mt-3">
                It is a long established fact that a reader will be of a page
                when established fact looking at its layout.
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-4 mt-3">
            <div class="rounded blog_color p-2">
              <div class="img_blog">
                <img
                  src="images/blog/blog-1.jpg"
                  alt=""
                  class="img-fluid rounded mx-auto d-block"
                />
              </div>
              <div class="content_blog pt-3 pb-3">
                <div>
                  <h5 class="font-weight-bold mb-0">
                    <a href="/#" class="text-white">
                      There are many variations
                    </a>
                  </h5>
                </div>
                <div class="mt-3">
                  <p class="h6 text-muted date_blog mb-0">
                    11 March 2018{" "}
                    <a href="/#" class="text-custom font-weight-bold">
                      By Kerri
                    </a>
                  </p>
                  <p class="mt-3 desc_blog text-muted">
                    Sit sagittis vulputate laoreet sodales tortor nulla lobortis
                    bibendum netus primis fames. Lobortis ultricies.
                  </p>
                  <p class="h6 mb-0">
                    <a href="/#" class="text-muted font-weight-bold">
                      Read More...
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mt-3">
            <div class="rounded blog_color p-2">
              <div class="img_blog">
                <img
                  src="images/blog/blog-2.jpg"
                  alt=""
                  class="img-fluid rounded mx-auto d-block"
                />
              </div>
              <div class="content_blog pt-3 pb-3">
                <div>
                  <h5 class="font-weight-bold mb-0">
                    <a href="/#" class="text-white">
                      Contrary to popular belief
                    </a>
                  </h5>
                </div>
                <div class="mt-3">
                  <p class="h6 text-muted date_blog mb-0">
                    18 March 2018{" "}
                    <a href="/#" class="text-custom font-weight-bold">
                      By Kerri
                    </a>
                  </p>
                  <p class="mt-3 desc_blog text-muted">
                    Sit sagittis vulputate laoreet sodales tortor nulla lobortis
                    bibendum netus primis fames. Lobortis ultricies.
                  </p>
                  <p class="h6 mb-0">
                    <a href="/#" class="text-muted font-weight-bold">
                      Read More...
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mt-3">
            <div class="rounded blog_color p-2">
              <div class="img_blog">
                <img
                  src="images/blog/blog-3.jpg"
                  alt=""
                  class="img-fluid rounded mx-auto d-block"
                />
              </div>
              <div class="content_blog pt-3 pb-3">
                <div>
                  <h5 class="font-weight-bold mb-0">
                    <a href="/#" class="text-white">
                      Lorem Ipsum is not simply
                    </a>
                  </h5>
                </div>
                <div class="mt-3">
                  <p class="h6 text-muted date_blog mb-0">
                    22 March 2018{" "}
                    <a href="/#" class="text-custom font-weight-bold">
                      By Kerri
                    </a>
                  </p>
                  <p class="mt-3 desc_blog text-muted">
                    Sit sagittis vulputate laoreet sodales tortor nulla lobortis
                    bibendum netus primis fames. Lobortis ultricies.
                  </p>
                  <p class="h6 mb-0">
                    <a href="/#" class="text-muted font-weight-bold">
                      Read More...
                    </a>
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

export default Blog;
