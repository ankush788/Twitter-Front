import React from "react";
import TwitterImage from "./images/TwitterIcon.png";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        paddingTop: "20rem",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          display: "flex",
          height: "2rem",
          width: "2rem",
          padding: "auto 0",
        }}
        src={TwitterImage}
        alt="Twitter"
      />
    </div>
  );
}
