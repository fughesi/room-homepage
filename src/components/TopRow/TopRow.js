import React from 'react';
import "./TopRow.css"
import hero1m from "../../images/mobile-image-hero-1.jpg"
import hero2m from "../../images/mobile-image-hero-2.jpg"
import hero3m from "../../images/mobile-image-hero-3.jpg"
import hero1d from "../../images/desktop-image-hero-1.jpg"
import hero2d from "../../images/desktop-image-hero-2.jpg"
import hero3d from "../../images/desktop-image-hero-3.jpg"

export default function TopRow() {
  return <div id="topContainer">
      <img srcSet={`${hero1m} 375w,${hero1d} 840w`} alt="hero image"/>
  </div>;
}
