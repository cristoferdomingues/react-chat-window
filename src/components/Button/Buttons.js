import React from "react";
import "./button.css";
const Button = props => {
  switch (props.type) {
    case "web_url":
      return (
        <a href={props.url} target="_blank" className="button">
          {props.title}
        </a>
      );
    case "postback":
      return (
        <button
          className="button"
          onClick={() => {
            console.log(props.payload);
          }}
        >
          {props.title}
        </button>
      );
  }
};

export default Button;
