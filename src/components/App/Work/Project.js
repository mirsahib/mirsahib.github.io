import React from "react";

function Project(props) {
  return (
    <div class={`col-lg-4 work_item ${props.tag.join(" ")}`}>
      <a href={props.link} class="img-zoom">
        <div class="work_box">
          <div class="work_img">
            <img
              src={props.img_src}
              class="img-fluid mx-auto d-block rounded"
              alt="work-img"
            />
          </div>
          <div class="work_detail">
            <p class="mb-2">{props.catagory}</p>
            <h4 class="mb-0">{props.title}</h4>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Project;
