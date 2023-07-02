import React from "react";

export default function NameAndId(props) {
 let value = props.name;
  if (value && value.length > 20) {
    value = value.substr(0,20) + "...";
  }
  return (
    <div className="d-inline-flex flex-column name-and-id">
      <p className="m-0">
        {props.name != null ? props.name : "Timothee gupta"}
      </p>
      <a href="#" className="anchor">
        <span>{value ? `@${value}` : "@Timothee gupta"} </span>
      </a>
    </div>
  );
}
