import React from "react";
import Button from "../../Button";
import "./list.css";
const ListMessage = props => {
  let { image_url, title, subtitle, elements = [] } = props.data;
  return (
    <div className="card sc-message--list">
      <div
        className="container"
        style={{ backgroundImage: `url(${image_url})` }}
      >
        <h4>
          <b>{title}</b>
        </h4>
        <p>{subtitle}</p>
      </div>
      <div className="list-container">
        <ul>
          {elements.map(
            ({ title, subtitle, image_url, buttons = [] }, index) => {
              return (
                <li key={index}>
                  <img src={image_url} />
                  <h3>
                    <b>{title}</b>
                  </h3>
                  <p>{subtitle}</p>
                  {buttons.map(button => (
                    <Button {...button} />
                  ))}
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default ListMessage;
