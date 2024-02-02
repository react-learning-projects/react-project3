import React from "react";
import "./Meme.css";
import defaultImg from "../../assets/default.png";

export default function Meme(props) {
  return (
    <div className="meme">
      <span className="meme-toptext">{props.topText}</span>
      <span className="meme-bottomtext">{props.bottomText}</span>
      <img
        className="meme-img"
        src={props.img === "" ? defaultImg : props.img}
      />
    </div>
  );
}
