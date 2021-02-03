import React from "react";
import about1 from "../../images/about1.png";
import about2 from "../../images/about2.png";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-section container">
        <div className="row justify-content-center about-row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src={about1} alt="About picture" className="about-img" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 about-text-section">
            <div className="about-text-div">
              <h4 className="about-text-header">
                The best design for your studio website
              </h4>
              <p className="about-text-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
                placeat! Doloribus vitae vero explicabo dolorum minus, voluptas
                placeat error corrupti.
              </p>
              <a href="#" className="about-text-link">
                Experienced Team
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center about-row">
          <div className="col-sm-12 col-md-6 col-lg-6 about-text-section">
            <div className="about-text-div">
              <h4 className="about-text-header">
                The best design for your studio website
              </h4>
              <p className="about-text-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
                placeat! Doloribus vitae vero explicabo dolorum minus, voluptas
                placeat error corrupti.
              </p>
              <a href="#" className="about-text-link">
                Experienced Team
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 ">
            <img src={about2} alt="About picture" className="about-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
