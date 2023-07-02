import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginStyle.css";
export default function LoginButton(props) {
  const styling = {
    ...props.style,
  };
  return (
    <button
      className="d-flex bd-highlight rounded-pill LoginButton button "
      onClick={props.onClick}
      style={styling}
    >
      {props.icon ? <img src={props.icon} alt="googleImage" /> : ""}
      <span>{props.text}</span>
    </button>
  );
}
