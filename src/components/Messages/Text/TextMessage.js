import React, { Component } from "react";
import Linkify from "react-linkify";
import "./text.css";

const TextMessage = props => {
  return (
    <div className="sc-message--text">
      {<Linkify properties={{ target: "_blank" }}>{props.data.text}</Linkify>}
    </div>
  );
};

export default TextMessage;
