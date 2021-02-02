import footerContent from "./footer.json";
import "./footer.css";
import footerImg from "../../images/footer-main-img.png";
function Footer() {
  return (
    <footer class="pt-5 pb-3 footer-section">
      <div className="container footer-section-container">
        <div class="row">
          <div class="col-sm-12 col-lg-6">
            <img
              src={footerImg}
              alt="Footer Image"
              className="footer-main-heading"
            />
            <small class="d-block mb-3 text-muted footer-text">
              The best design for your web studio website. Vitae nulla nunc
              euismod vel pretium tellus accumsan semper. Vitae nulla nunc
              euismod vel pretium tellus accumsan semper.
            </small>
          </div>
          {footerContent &&
            footerContent.map((f, key) => (
              <div class="col-sm-6 col-lg-2" key={key}>
                <small className="footer-link-heading footer-main-heading">
                  {f?.title}
                </small>
                <ul class="list-unstyled text-small">
                  {f.subSection.map((s, key) => (
                    <li key={key}>
                      <a class="footer-link" href={s?.url}>
                        <small>{s?.name}</small>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <hr className="hr" />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mt-3">
            <small className="footer-graveyard-link">
              © 2019-2020 All Rights Reserved.
            </small>
          </div>
          <div className="col-sm-6 text-lg-right mt-3">
            <small className="footer-graveyard-link">Terms of Service</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
