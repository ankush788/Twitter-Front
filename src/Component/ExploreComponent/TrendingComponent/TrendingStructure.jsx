import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TrendingStyles.css";
export default function TrendingTweet(props) {
  return (
    <div>
      <p className="Heading">{props.Heading}</p>
      <div className="Hastag-div">
        <p className="Hastag"> {props.Hastag}</p>
        <button className="Setting">...</button>
      </div>
      <p className="Tweets">{props.Tweet}</p>
    </div>
  );
}
