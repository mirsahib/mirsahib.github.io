import React from "react";

function Post(props) {
  return (
    <div class="col-lg-4 mt-3">
      <div class="rounded blog_color p-2">
        <div class="img_blog">
          <img
            src={props.thumbnail}
            alt=""
            class="img-fluid rounded mx-auto d-block"
          />
        </div>
        <div class="content_blog pt-3 pb-3">
          <div>
            <h5 class="font-weight-bold mb-0">
              <a href={props.link} class="text-white">
                {props.title}
              </a>
            </h5>
          </div>
          <div class="mt-3">
            <p class="h6 text-muted date_blog mb-0">
              {props.date + " "}
              <a href={props.guid} class="text-custom font-weight-bold">
                By {props.author}
              </a>
            </p>
            {/**
            <p class="mt-3 desc_blog text-muted">
              Sit sagittis vulputate laoreet sodales tortor nulla lobortis
              bibendum netus primis fames. Lobortis ultricies.
            </p> */}
            <p class="h6 mb-0">
              <a href={props.link} class="text-muted font-weight-bold">
                Read More...
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
