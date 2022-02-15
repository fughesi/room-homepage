import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="navContainer">
      <input type="checkbox" id="toggler" />
      <div id="hamburger">
        <div id="hamburgerLines"></div>
      </div>
      {/* <div id="navMenu"> */}
      <ul id="navBar">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">shop</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
}
