import { useState } from "react";
import { sculptureList } from "./data.js";

export default function Gallery2() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div style={{ border: "2px solid black", padding:'20px'}}>
      <h3>Example-2</h3>
       <p>two state</p>

      <button style={{marginRight:'12px'}} onClick={handleNextClick}>Next</button>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}
