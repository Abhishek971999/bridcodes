import React from "react";
import "./info.css";
import info from "./info.json";
import exc from "../../images/exclamation.png";
import clock from "../../images/clock.png";
function Info() {
  return (
    <div className="info-section container">
      <div className="info-div">
        <p className="info-para">DESIGN CONCEPT</p>
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <h3 className="info-heading-text">
              The best design for your studio website
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <p className="info-subheading-text">
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
              auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat
              tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum
              malesuada a, duis volutpat.
            </p>
          </div>
        </div>
        <div className="row">
          {info &&
            info.map((i, key) => {
              let img;
              if (key == 0 || key == 3) img = exc;
              else img = clock;
              return (
                <div className="col-sm-12 col-lg-6 info-card">
                  <img src={img} alt="" className="info-card-img" />
                  <div>
                    <h5 className="info-card-title">{i?.title}</h5>
                    <p>{i?.desc}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Info;
