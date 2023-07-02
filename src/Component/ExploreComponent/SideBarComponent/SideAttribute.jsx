import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SideBarStyles.css";
import { useNavigate } from "react-router-dom";
export default function (props) {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex Option "
      onClick={() => {
        navigate(`/${props.value === "Home" ? "" : props.value}`);
      }}
    >
      {props.Icon}
      <button
        className="Attribute"
        style={{
          fontWeight:"700"
        }}
      >
        {props.value}
      </button>
    </div>
  );
}
