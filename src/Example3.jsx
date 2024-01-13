import { useState } from "react";
import { sculptureList } from "./data.js";

export default function Gallery3() {
  const [state, setState] = useState({
    index: 0,
    showMore: false
  });

  const { index, showMore } = state;

  function handleNextClick() {
    setState((prevState) => ({
      ...prevState,
      index: prevState.index + 1
    }));
  }

  function handleMoreClick() {
    setState((prevState) => ({
      ...prevState,
      showMore: !prevState.showMore
    }));
  }

  let sculpture = sculptureList[index];
  return (
    <div style={{ border: "2px solid red", padding:'20px'}}>
      <h3>Example-3 </h3>
      <p>Handle multiple state in single use state</p>
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
