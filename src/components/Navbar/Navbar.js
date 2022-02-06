import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="navContainer">
      <input type="checkbox" id="toggler" />
      <div id="hamburger">
        <div></div>
      </div>
      {/* <div id="navMenu">
    </div> */}
        <ul id="navBar">
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
  );
}
