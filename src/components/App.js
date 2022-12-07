import React, { useRef } from "react";
import "../styles/App.css";

const App = () => {
  const inupt1Ref = useRef();
  const inupt2Ref = useRef();

  const handleInput = (event) => {
    if (event.target.id === "text-input") {
      console.log(inupt1Ref.current.value);
    } else {
      console.log(inupt2Ref.current.value);
    }
  };

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor="text-input">Text Input:- </label>
      <input
        id="text-input"
        type={"text"}
        ref={inupt1Ref}
        onChange={handleInput}
      />

      <br />
      <br />

      <label htmlFor="num-input">Number input</label>
      <input
        id="num-input"
        type={"number"}
        ref={inupt2Ref}
        onChange={handleInput}
      />
      <br />
    </div>
  );
};

export default App;
