import React from "react";
import a1 from "../Images/1.jpg";

function Test(props) {
  function handleClick() {
    console.log("I was Clicked");
  }
  function mouseOver() {
    console.log("Mouse is Hovered above Image");
  }
  return (
    <div>
      <img
        src={a1}
        alt="Hotels_Image"
        className="test-img"
        onMouseOver={mouseOver}
      />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Test;
