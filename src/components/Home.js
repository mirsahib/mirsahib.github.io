import React from "react";
import { userInfo } from "../portfolio";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section class="section header-bg-img h-100vh" id="home">
      <div class="bg-overlay"></div>
      <div class="header-table">
        <div class="header-table-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <div class="text-center header-content mx-auto">
                  <h4 class="text-white first-title mb-4">Welcome</h4>
                  <h1 class="header-name text-white text-capitalize mb-0">
                    I'M
                    <Typewriter
                      options={{
                        strings: userInfo.userTag,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                  <p class="text-white mx-auto header-desc mt-4">
                    {userInfo.userShortBio}
                  </p>
                  <div class="mt-4 pt-2">
                    <a
                      href={userInfo.cvLink}
                      class="btn btn-outline-custom btn-round"
                    >
                      Download Cv
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll_down">
        <a href="/#about" class="scroll">
          <i class="text-white"></i>
        </a>
      </div>
    </section>
  );
}

export default Home;
