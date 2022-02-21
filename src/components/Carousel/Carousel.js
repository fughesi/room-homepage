import React, { useState } from "react";
import "./Carousel.css";
import BtnSlider from "../Button/Button";
import dataSlider from "../../dataSlider";
// import Navbar from "../Navbar/Navbar";
// import hero1m from "../../images/mobile-image-hero-1.jpg";
// import hero2m from "../../images/mobile-image-hero-2.jpg";
// import hero3m from "../../images/mobile-image-hero-3.jpg";
// import hero1d from "../../images/desktop-image-hero-1.jpg";
// import hero2d from "../../images/desktop-image-hero-2.jpg";
// import hero3d from "../../images/desktop-image-hero-3.jpg";


export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState(1);


  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
console.log(moveDot)
  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            {/* <img src={`hero${index + 1}d`} /> */}
            <img src={`../../images/mobile-image-hero-${index + 1}.jpg`} />
            {/* <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} /> */}
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
