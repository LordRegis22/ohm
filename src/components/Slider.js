import React from "react";

function Slider(props) {
  return (
    <>
      <input
        className="input-slider"
        style={props.style}
        label={props.label}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={props.onChange}
      ></input>
      <p style={{ color: "white" }}>{props.text}</p>
    </>
  );
}

//gridColumn: "1 / span 3";

// min=".5"
// max="3.5"
// step="0.01"
// value={springTension}
// onChange={handleChange}

export default Slider;
