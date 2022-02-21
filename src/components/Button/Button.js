import React from "react";
import "../Carousel/Carousel.css";
import leftArrow from "../../images/icon-left.svg";
import rightArrow from "../../images/icon-right.svg";

export default function BtnSlider({ direction, moveSlide }) {
//   console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}