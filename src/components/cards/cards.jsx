import "./cards.css";
import cards from "./cards.json";
function Cards() {
  return (
    <div className="card-section container">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <h4 className="card-heading-text">
            The best web design for your home studio
          </h4>
        </div>
        <div className="col-sm-12 col-lg-6 card-section-link">
          <a href="#">
            Experienced team&nbsp;<i class="fas fa-angle-double-right"></i>
          </a>
        </div>
      </div>
      <div className="row">
        {cards &&
          cards.map((card, key) => (
            <div className="col-sm-12 col-lg-4">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title">{card?.title}</h5>
                  <p className="card-text">{card?.desc}</p>
                </div>
                <div className="card-footer-text">
                  <small>{card?.footer}</small>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cards;
