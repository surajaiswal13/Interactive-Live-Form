import React, { useState } from "react";

function App() {
  const [heading, setHeadingText] = useState("Hello");

  const [isMouseOver, setIsMouseOver] = useState(false);

  const [name, setName] = useState("");

  function updateHeading() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  function handleOnChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        {heading} {name}
      </h1>
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={updateHeading}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
