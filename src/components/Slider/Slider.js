import React, { useRef } from "react";
import "./Slider.css";
import Navbar from "../Navbar/Navbar";
import hero1m from "../../images/mobile-image-hero-1.jpg";
import hero2m from "../../images/mobile-image-hero-2.jpg";
import hero3m from "../../images/mobile-image-hero-3.jpg";
import hero1d from "../../images/desktop-image-hero-1.jpg";
import hero2d from "../../images/desktop-image-hero-2.jpg";
import hero3d from "../../images/desktop-image-hero-3.jpg";

export default function Slider() {
  // variables

const track = useRef(null)
const prevButton = useRef(null)
const nextButton = useRef(null)
const dotNav = useRef(null)

  // const track = document.getElementById("unorderedList");
  // const slides = Array.from(track.children);
  // const prevButton = document.getElementById("prev");
  // const nextButton = document.getElementById("next");
  // const dotNav = document.getElementById("indicatorSection");
  // const dot = Array.from(dotNav.children);
  // const slideWidth = slides[0].getBoundingClientRect().width;

  
  // create the carousel
  // slides.forEach((slide, index) => {
  //   slide.style.left = slideWidth * index + "px";
  // });
  console.log(track.current);
  console.log(prevButton);
  console.log(nextButton);
  console.log(dotNav);

  // advance the carousel to the right
  // nextButton.addEventListener("click", (e) => {
    // const current = track.getElementsByClassName("currentSlide");
    // const nextSlide = current.nextElementSibling;
  // });

  return (
    <main id="carouselContainer">
      <section id="photoSection">
        <button id="prev" ref={prevButton}>
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
        </button>
        <Navbar id="nav" />
        <ul id="unorderedList" ref={track}>
          <li>
            <img src={hero1d} className="photo currentSlide" loading="lazy"  />
          </li>
          <li>
            <img src={hero2d} className="photo" loading="lazy" />
          </li>
          <li>
            <img src={hero3d} className="photo" loading="lazy" />
          </li>
        </ul>
        <button id="next" ref={nextButton}>
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
        </button>
      </section>
      <section id="indicatorSection" ref={dotNav}>
        <button className="indicator"></button>
        <button className="indicator"></button>
        <button className="indicator"></button>
      </section>
    </main>
  );
}
