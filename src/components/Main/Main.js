import React from "react";
import './Main.css';
//import {newMeme} from '../App/App';

export default function Main(props) {



    return (
        <div className="main">
            <div className="main-input">
                <input onChange={props.changeTopText} type="text" placeholder="Top text"/>
                <input onChange={props.changeBottomText} type="text" placeholder="Bottom text"/>
            </div>
            <button onClick={props.newMeme} className="main-button">Get a new meme image</button>
        </div>
    );
}