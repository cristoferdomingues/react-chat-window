import React from "react";

const renderProperlyButton = button => {
  switch (button.type) {
    case "web_url":
      return <a href={button.url}>{button.title}</a>;
    case "postback":
      return (
        <button
          onClick={() => {
            console.log(button.payload);
          }}
        >
          {button.title}
        </button>
      );
  }
};

const CardMessage = props => {
  let { image_url, title, subtitle, buttons = [] } = props.data;
  return (
    <div className="sc-message--card">
      <img src={image_url} alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4>
          <b>{title}</b>
        </h4>
        <p>{subtitle}</p>
      </div>
      <div className="buttons">
        {buttons.map(button => renderProperlyButton(button))}
      </div>
    </div>
  );
};

export default CardMessage;
