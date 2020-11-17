import React from "react";
import Social from "./Social";
import Paragraph from "./Paragraph";
import { profile, social, aboutMe } from "../../portfolio";
import { v4 as uuidv4 } from "uuid";

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="mt-3">
              <img
                src="images/about.jpg"
                alt=""
                className="img-fluid mx-auto d-block img-thumbnail"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mt-3">
              <h2>
                <span className="font-weight-bold">About</span> Me
              </h2>
              <h4 className="mt-4">
                Hello I'm{" "}
                <span className="text-custom font-weight-bold">
                  {profile.userName}.
                </span>
              </h4>
              {aboutMe.map((e) => {
                return <Paragraph key={uuidv4()} text={e.para} />;
              })}
              <div>
                <ul className="mb-0 about-social list-inline mt-4">
                  {social.map((e) => {
                    return (
                      <Social key={uuidv4()} link={e.link} icon={e.icon} />
                    );
                  })}
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
