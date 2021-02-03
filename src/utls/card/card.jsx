import React from "react";
import "./card.css";
function Card(props) {
  return (
    <div className="card ">
      <div className="card-body">
        {props?.title && <h5 className="card-title">{props?.title}</h5>}
        {props?.desc && <p className="card-text">{props?.desc}</p>}
        {props?.descFooter && (
          <a href={props?.descFooterLink} className="card-desc-footer">
            {props?.descFooter}
          </a>
        )}
      </div>
      {props?.footer && (
        <div className="card-footer-text">
          <small>{props?.footer}</small>
        </div>
      )}
    </div>
  );
}

export default Card;
