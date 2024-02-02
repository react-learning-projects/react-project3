import React from "react";
import "./Header.css";
import logo from "../../assets/Troll_Face.png";

export default function Header() {
  return (
    <div className="header">
      <ul className="header-nav">
        <li className="header-nav-col1">
          <img src={logo} className="header-logo" /> <span>Meme Generator</span>
        </li>
        <li>React Course - Project 3</li>
      </ul>
    </div>
  );
}
