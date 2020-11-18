import React from "react";
import Tab from "./Tab";
import Project from "./Project";
import { v4 as uuidv4 } from "uuid";

import { workDescription, workLinkAndTag, project } from "../../portfolio";

function Work() {
  return (
    <section class="section text-center" id="work">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center">
              <h2>
                My <span class="font-weight-bold">Works</span>
              </h2>
              <p class="text-muted mx-auto section-subtitle mt-3">
                {workDescription}
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-5 ">
          <ul
            class="col list-unstyled list-inline mb-0 text-uppercase work_menu"
            id="menu-filter"
          >
            {workLinkAndTag.map((e) => {
              return (
                <Tab
                  key={uuidv4()}
                  class={e.class}
                  link={e.link}
                  title={e.title}
                  tag={e.tag}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="row mt-4 work-filter">
          {project.map((e) => {
            return (
              <Project
                key={uuidv4()}
                tag={e.tag}
                link={e.link}
                img_src={e.img_src}
                catagory={e.catagory}
                title={e.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
