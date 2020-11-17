import React from "react";
import { userInfo } from "../portfolio";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section className="section header-bg-img h-100vh" id="home">
      <div className="bg-overlay"></div>
      <div className="header-table">
        <div className="header-table-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="text-center header-content mx-auto">
                  <h4 className="text-white first-title mb-4">Welcome</h4>
                  <h1 className="header-name text-white text-capitalize mb-0">
                    I'M
                    <Typewriter
                      options={{
                        strings: userInfo.userTag,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                  <p className="text-white mx-auto header-desc mt-4">
                    {userInfo.userShortBio}
                  </p>
                  <div className="mt-4 pt-2">
                    <a
                      href={userInfo.cvLink}
                      className="btn btn-outline-custom btn-round"
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
      <div className="scroll_down">
        <a href="/#about" className="scroll">
          <i className="text-white"></i>
        </a>
      </div>
    </section>
  );
}

export default Home;
