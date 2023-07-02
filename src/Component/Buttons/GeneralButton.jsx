import React from "react";
import "./Buttons.css";

export default function FollowButton(props) {
  return (
    <div className="d-flex align-items-center">
      <button
        className={`general-button  ${props.buttonColor}`}
        type={props.type}
        style={{ backgroundColor: `${props.bgc}` ,...props.style}}
        onClick={props.onClick}
      >
        <p
          style={{ color: `${props.color}`, textDecoration: "none" }}
        >
          {props.text}
        </p>
      </button>
    </div>
  );
}
