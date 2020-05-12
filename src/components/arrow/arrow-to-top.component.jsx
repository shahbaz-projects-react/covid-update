import React from "react";
import arrowToTop from "../../assets/arrow.svg";

const ArrowToTop = () => {
  return (
    <span className="arrow-up-container" onClick={() => window.scroll(0, 0)}>
      <img src={arrowToTop} className="arrow-up" alt="arrow" />
    </span>
  );
};

export default ArrowToTop;
