import React from "react";
import Button from "../../Button";
import "./card.css";
const CardMessage = props => {
  let { image_url, title, subtitle, buttons = [] } = props.data;
  return (
    <div className="card sc-message--card">
      <img src={image_url} alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4>
          <b>{title}</b>
        </h4>
        <p>{subtitle}</p>
      </div>
      <div className="buttons">
        {buttons.map(button => (
          <Button {...button} />
        ))}
      </div>
    </div>
  );
};

export default CardMessage;
