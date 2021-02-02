import "./team.css";
import team1 from "../../images/team1.png";
import team2 from "../../images/team2.png";
import team3 from "../../images/team3.png";
import team4 from "../../images/team4.png";
const Team = () => {
  return (
    <div className="team-section container">
      <h3 className="text-center team-heading-text">Our leadership</h3>
      <p className="text-center team-subheading-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum
        repellat, incidunt iusto, alias rem ab voluptate iste magni iure
        similique provident.
      </p>
      <div className="row justify-content-center team-row">
        <div className="col-sm-12 col-lg-3">
          <img src={team1} alt="Team member 1" className="team-member-img" />
          <div className="team-member-name">
            <p>Andry Ford</p>
            <small>CEO at Whatever</small>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3">
          <img src={team2} alt="Team member 2" className="team-member-img" />
          <div className="team-member-name">
            <p>Andry Ford</p>
            <small>CEO at Whatever</small>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3">
          <img src={team3} alt="Team member 3" className="team-member-img" />
          <div className="team-member-name">
            <p>Andry Ford</p>
            <small>CEO at Whatever</small>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3">
          <img src={team4} alt="Team member 4" className="team-member-img" />
          <div className="team-member-name">
            <p>Andry Ford</p>
            <small>CEO at Whatever</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
