import React from "react";
import Carousel from "../Carousel/Carousel";
// import Slider from "../Slider/Slider";
import "./TopRow.css";
import hero1m from "../../images/mobile-image-hero-1.jpg";
import hero2m from "../../images/mobile-image-hero-2.jpg";
import hero3m from "../../images/mobile-image-hero-3.jpg";
import hero1d from "../../images/desktop-image-hero-1.jpg";
import hero2d from "../../images/desktop-image-hero-2.jpg";
import hero3d from "../../images/desktop-image-hero-3.jpg";

export default function TopRow() {
  return (
    <div id="topContainer">
      <section id="topPhotoContainer">
        <div id="mainPhoto">
          {/* {(
          <img
            id="photoDiv"
            srcSet={`${hero1m} 375w,${hero1d} 840w`}
            alt="hero image"
            height="100%"
            width="100%"
          />
        ) || <img src={hero1m} alt="hero image" />} */}
          <Carousel />
        </div>
        <div id="arrowButtons">
          <div id="leftButton">
            <svg
              width="14"
              height="24"
              id="leftArrow"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 0L1 12l12 12"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>

          <div id="rightButton">
            <svg
              width="14"
              height="24"
              id="rightArrow"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1  0l12 12L1 24"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </section>
      <section id="descriptiveText">
        <h3>Discover innovative ways to decorate</h3>
        <p>
          We provide unmatched quality, comfort, and style for the property
          owners across the country. Our experts combine form and function in
          bringing your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <a href="#">SHOP NOW</a>
        <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
            id="shopNowArrow"
            fill="#454545"
            fillRule="nonzero"
          />
        </svg>
      </section>
    </div>
  );
}
