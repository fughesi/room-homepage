import React from "react";
import Navbar from "../Navbar/Navbar";
import hero1m from "../../images/mobile-image-hero-1.jpg";
import hero2m from "../../images/mobile-image-hero-2.jpg";
import hero3m from "../../images/mobile-image-hero-3.jpg";
import hero1d from "../../images/desktop-image-hero-1.jpg";
import hero2d from "../../images/desktop-image-hero-2.jpg";
import hero3d from "../../images/desktop-image-hero-3.jpg";

export default function Slider() {
  const [size, setSize] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
      console.log(size);
    };
    window.addEventListener("resize", handleResize());
  }, []);

  console.log(size);
  return size < 375 ? (
    <main id="carousel">
      <Navbar />
      <div className="carouselItem">
        <img src={hero1m} />
      </div>
      <div className="carouselItem">
        <img src={hero2m} />
      </div>
      <div className="carouselItem">
        <img src={hero3m} />
      </div>
    </main>
  ) : (
    <main id="carousel">
      <Navbar />
      <div className="carouselItem">
        <img src={hero1d} />
      </div>
      <div className="carouselItem">
        <img src={hero2d} />
      </div>
      <div className="carouselItem">
        <img src={hero3d} />
      </div>
    </main>
  );
}
