import React from "react";

function Project() {
  return (
    <div class="col-lg-4 work_item webdesign wordpress">
      <a href="images/works/1.jpg" class="img-zoom">
        <div class="work_box">
          <div class="work_img">
            <img
              src="images/works/1.jpg"
              class="img-fluid mx-auto d-block rounded"
              alt="work-img"
            />
          </div>
          <div class="work_detail">
            <p class="mb-2">Category</p>
            <h4 class="mb-0">Project Title</h4>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Project;
