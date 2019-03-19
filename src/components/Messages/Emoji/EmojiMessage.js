import React, { Component } from "react";
import "./emoji.css";

const EmojiMessage = props => {
  return <div className="sc-message--emoji">{props.data.emoji}</div>;
};

export default EmojiMessage;
