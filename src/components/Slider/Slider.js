import React from "react";
import "./Slider.css";
import Navbar from "../Navbar/Navbar";
import hero1m from "../../images/mobile-image-hero-1.jpg";
import hero2m from "../../images/mobile-image-hero-2.jpg";
import hero3m from "../../images/mobile-image-hero-3.jpg";
import hero1d from "../../images/desktop-image-hero-1.jpg";
import hero2d from "../../images/desktop-image-hero-2.jpg";
import hero3d from "../../images/desktop-image-hero-3.jpg";

// export default function Slider() {
//   const [size, setSize] = React.useState(window.innerWidth);
//   React.useEffect(() => {
//     const handleResize = () => {
//       setSize(window.innerWidth);
//       console.log(size);
//     };
//     window.addEventListener("resize", handleResize());
//   }, []);

//   console.log(size);
//   return size < 375 ? (
//     <main id="carousel">
//       <Navbar />
//       <div className="carouselItem photoVisible one">
//         <img src={hero1m} className="photo" />
//       </div>
//       <div className="carouselItem">
//         <img src={hero2m} className="photo" />
//       </div>
//       <div className="carouselItem">
//         <img src={hero3m} className="photo" />
//       </div>
//     </main>
//   ) : (
//     <main id="carousel">
//       <Navbar />
//       <div className="carouselItem photoVisible">
//         <img src={hero1d} className="photo" />
//       </div>
//       <div className="carouselItem">
//         <img src={hero2d} className="photo" />
//       </div>
//       <div className="carouselItem">
//         <img src={hero3d} className="photo" />
//       </div>
//     </main>
//   );
// }

export default function Slider() {
  // variables
  const track = document.getElementById("unorderedList");
  const slides = Array.from(track.children);
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const dotNav = document.getElementById("indicatorSection")
  const dot = Array.from(dotNav.children)
  const slideWidth = slides[0].getBoundingClientRect().width

  console.log(slideWidth);

  // create the carousel
  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px"
  })

  nextButton.addEventListener("click", (e) => {
    const currentSlide = track
  })

  return (
    <main id="carouselContainer">
      <section id="photoSection">
        <button id="prev">
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
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <Navbar id="nav" />
        <ul id="unorderedList">
          <li>
            <img src={hero1d} className="photo" loading="lazy" />
          </li>
          <li>
            <img src={hero2d} className="photo" loading="lazy" />
          </li>
          <li>
            <img src={hero3d} className="photo" loading="lazy" />
          </li>
        </ul>
        <button id="next">
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
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </section>
      <section id="indicatorSection">
        <button class="indicator"></button>
        <button class="indicator"></button>
        <button class="indicator"></button>
      </section>
    </main>
  );
}
