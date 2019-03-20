import React from "react";
import "./quickresponse.css";
import Button from "../../Button";
const QuickResponse = props => {
  let { text, buttons = [] } = props.data;
  return (
    <div className="card sc-message--quick-response">
      <div className="container">
        <h4>
          <b>{text}</b>
        </h4>
      </div>
      <div className="buttons">
        {buttons.map(button => (
          <Button {...button} />
        ))}
      </div>
    </div>
  );
};

export default QuickResponse;
