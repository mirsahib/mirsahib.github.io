import React from "react";
import Tab from "./Tab";
import Project from "./Project";
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
                  class={e.class}
                  link={e.link}
                  title={e.title}
                  tag={e.tag}
                />
              );
            })}
            {/** 
            <li class="list-inline-item">
              <a class="active" href="/#" data-filter="*">
                All
              </a>
            </li>
            <li class="list-inline-item">
              <a class="" href="/#" data-filter=".seo">
                Seo
              </a>
            </li>
            <li class="list-inline-item">
              <a class="" href="/#" data-filter=".webdesign">
                Webdesign
              </a>
            </li>
            <li class="list-inline-item">
              <a class="" href="/#" data-filter=".WORK">
                WORK
              </a>
            </li>
            <li class="list-inline-item">
              <a class="" href="/#" data-filter=".wordpress">
                Wordpress
              </a>
            </li>*/}
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="row mt-4 work-filter">
          {project.map((e) => {
            return (
              <Project
                tag={e.tag}
                link={e.link}
                img_src={e.img_src}
                catagory={e.catagory}
                title={e.title}
              />
            );
          })}
          {/**
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

          <div class="col-lg-4 work_item WORK webdesign seo">
            <a href="/images/works/2.jpg" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img
                    src="images/works/2.jpg"
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

          <div class="col-lg-4 work_item seo wordpress">
            <a href="/images/works/3.jpg" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img
                    src="images/works/3.jpg"
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

          <div class="col-lg-4 work_item wordpress WORK webdesign">
            <a href="/images/works/4.jpg" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img
                    src="images/works/4.jpg"
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

          <div class="col-lg-4 work_item seo webdesign">
            <a href="/images/works/5.jpg" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img
                    src="images/works/5.jpg"
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

          <div class="col-lg-4 work_item devlopment webdesign">
            <a href="/images/works/6.jpg" class="img-zoom">
              <div class="work_box">
                <div class="work_img">
                  <img
                    src="images/works/6.jpg"
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
  */}
        </div>
      </div>
    </section>
  );
}

export default Work;
