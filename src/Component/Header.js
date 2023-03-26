import React from "react";
import Troll_Face from "../Images/Troll_Face.png";

function Header() {
  return (
    <div>
      <header className="header">
        <img src={Troll_Face} alt="Troll_Face" className="header-img" />
        <h2 className="header-title">Meme Generator</h2>
        <h3 className="header-heading">React Project Course 3</h3>
      </header>
    </div>
  );
}

export default Header;
