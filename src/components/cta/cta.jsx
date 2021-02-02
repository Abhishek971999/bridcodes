import { ButtonPrimary } from "../../utls/button/button";
import "./cta.css";
const Cta = () => {
  return (
    <div className="cta-container container">
      <div className="cta-section">
        <div className="row">
          <div className="col-sm-12 col-lg-8">
            <h5 className="font-weight-bold">
              All-in-one platform for business
            </h5>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              ullam qui, placeat labore ducimus maxime at veritatis? Officiis ad
              consequuntur voluptates beatae quos unde similique magnam.
            </small>
          </div>
          <div className="col-sm-12 col-lg-4 text-lg-right cta-btn-div">
            <ButtonPrimary text="Get in touch" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
