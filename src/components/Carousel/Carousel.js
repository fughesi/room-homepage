import React, { useState } from "react";
import "./Carousel.css";
import BtnSlider from "../Button/Button";
import dataSlider from "../../dataSlider";
import Navbar from "../Navbar/Navbar";
import hero1m from "../../images/mobile-image-hero-1.jpg";
import hero2m from "../../images/mobile-image-hero-2.jpg";
import hero3m from "../../images/mobile-image-hero-3.jpg";
import hero1d from "../../images/desktop-image-hero-1.jpg";
import hero2d from "../../images/desktop-image-hero-2.jpg";
import hero3d from "../../images/desktop-image-hero-3.jpg";

export default function Carousel() {
  // state variables
  const [slideIndex, setSlideIndex] = useState(1);
  const data = dataSlider.length;

  // photos in an array
  const photoArrDesktop = [hero1d, hero2d, hero3d];
  const photoArrMobile = [hero1m, hero2m, hero3m];

  // advance the slide to the right
  const nextSlide = () => {
    if (slideIndex !== data) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data) {
      setSlideIndex(1);
    }
  };

  // advance the slide to the left
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data);
    }
  };

  // make the dots on the bottom functional
  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
        {/* <Navbar /> */}
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={photoArrDesktop[index]} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: data }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
