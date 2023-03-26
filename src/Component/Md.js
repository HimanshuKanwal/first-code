import Meme from "./Meme";
import { memesData } from "./MemesData";
import React from "react";

function Md() {
  const data = memesData.map((item) => {
    return (
      <>
        <Meme {...item} />
      </>
    );
  });
  return <div>{data}</div>;
}

export default Md;
