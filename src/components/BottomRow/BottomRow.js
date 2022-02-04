import React from "react";
import "./BottomRow.css";
import LeftPic from "../../images/image-about-dark.jpg";
import RightPic from "../../images/image-about-light.jpg";

export default function BottomRow() {
  return (
    <main id="bottomContainer">
      <img src={LeftPic} alt="left pic" id="leftPic" />
      <div id="bottomText">
        <h3>ABOUT OUR FURNITURE</h3>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img src={RightPic} alt="right pic" id="rightPic" />
    </main>
  );
}
