import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Meme from "../Meme/Meme";
import memeData from "../../memeData";

export default function App() {
  const [memeUrl, setMemeUrl] = React.useState("");
  const [topText, setTopText] = React.useState("");
  const [bottomText, setBottomText] = React.useState("");

  function newMeme() {
    const memeArr = [...memeData.data.memes];
    const rnd = Math.floor(Math.random() * memeArr.length);
    setMemeUrl(prev => memeArr[rnd].url);
  }

  function changeTopText(event) {
    setTopText(prev => event.target.value);
  }
  function changeBottomText(event) {
    setBottomText(prev => event.target.value);
    console.log(bottomText);
  }

  return (
    <div className="App">
      <Header />
      <Main newMeme={newMeme} changeTopText={changeTopText} changeBottomText={changeBottomText} />
      <Meme img={memeUrl} topText={topText} bottomText={bottomText} />
    </div>
  );
}
