import React from "react";
import "./input.css";

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = <input type="text" />;
      break;

    case "textarea":
      inputElement = <input type="text" />;
      break;

    case "select":
      inputElement = <input type="text" />;
      break;

    default:
      inputElement = <input />;
      break;
  }

  return <div className="Input">{inputElement}</div>;
};

export default input;
