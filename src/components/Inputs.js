import React, { useContext } from "react";
import { Context } from "../Context";
import Button from "./Button";
import { findByLabelText } from "@testing-library/react";

function Inputs() {
  const {
    handleClick,
    breathe,
    setBreathe,
    handleChange,
    springTension,
    startTimer
  } = useContext(Context);
  return (
    <>
      <div
        className="buttonRow"
        style={{
          display: "flex",
          gridRowStart: "span 1",
          gridColumnStart: "span 4",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Button
          color="blue"
          text="Slow Breath"
          onClick={() => handleClick(500)}
        />
        <Button
          color="purple"
          text="Breathe."
          onClick={() => setBreathe(!breathe)}
        />
        <Button
          color="light blue"
          text="Fast Breath"
          onClick={() => handleClick(50)}
        />
        <Button color="blue" text="Start Timer" onClick={() => startTimer(5)} />
      </div>
      <input
        className="input-slider"
        style={{
          gridColumn: "1 / span 3"
        }}
        label="Breath speed"
        type="range"
        min=".5"
        max="3.5"
        step="0.01"
        value={springTension}
        onChange={handleChange}
      ></input>
      <p>Breath Speed: {springTension}</p>
    </>
  );
}

export default Inputs;
