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
  return (
    <main id="carouselContainer">
      <section id="photoSection">
        <button id="prev"></button>
        <ul id="unorderedList">
          <li>
            <img src={hero1d} className="photo" />
          </li>
          <li>
            <img src={hero2d} className="photo" />
          </li>
          <li>
            <img src={hero3d} className="photo" />
          </li>
        </ul>
        <button id="next"></button>
      </section>
      <section id="indicatorSection">
        <button class="indicator"></button>
        <button class="indicator"></button>
        <button class="indicator"></button>
      </section>
    </main>
  );
}
