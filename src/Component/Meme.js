import React from "react";
import { memesData } from "./MemesData";

function Meme(props) {
  let url;
  function getMemeImage() {
    const memesArray = memesData;
    const random = Math.floor(Math.random() * memesArray.length);
    url = memesArray[random].url;
    console.log(url);
    // return (

    //   );
  }
  return (
    <main>
      <div className="form">
        <input className="form-input" type="text" placeholder="Top Text" />
        <input className="form-input" type="text" placeholder="Bottom Text" />
        <button className="form-button" value="submit" onClick={getMemeImage}>
          Get a new Meme Image
        </button>
      </div>
      <p>{url}</p>
      {/* <img
        src={`${props.url}`}
        alt={`${props.url}_image`}
        className="form-img"
      />
      <h4>{props.name}</h4> */}
    </main>
  );
}

export default Meme;
