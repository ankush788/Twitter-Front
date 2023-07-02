import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SectionStyles.css";

export default function Section() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleChildClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="d-flex bd-highlight p-0 " id="Section">
      <div
        className={` flex-md-fill  p-3 ${activeIndex === 0 ? "active" : ""}`}
        onClick={() => handleChildClick(0)}
      
      >
        For you
      </div>
      <div
        className={` flex-md-fill  p-3 ${activeIndex === 1 ? "active" : ""}`}
        onClick={() => handleChildClick(1)}
      >
        Trending
      </div>
      <div
        className={` flex-md-fill  p-3  ${activeIndex === 2 ? "active" : ""}`}
        onClick={() => handleChildClick(2)}
      >
        News
      </div>
      <div
        className={` flex-md-fill  p-3  ${activeIndex === 3 ? "active" : ""}`}
        onClick={() => handleChildClick(3)}
      >
        Sports
      </div>
     
    </div>
  );
}
