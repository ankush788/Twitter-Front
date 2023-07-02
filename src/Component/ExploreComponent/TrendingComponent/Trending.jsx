import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TrendingStyles.css";
import TrendingTweet from "./TrendingStructure";
const count = 15;
export default function Trending() {
  return (
    <div id="Trending">
      {Array(count).fill(
        <div>
          <TrendingTweet
            key={count}
            Heading={"Tiger"}
            Hastag={"#Trending"}
            Tweet={"7500 Tweets"}
          />
        </div>
      )}
    </div>
  );
}
