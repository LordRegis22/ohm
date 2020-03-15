import React, { useContext } from "react";
import { Context } from "../Context";
import Button from "./Button";

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
    <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
      <div
        className="buttonRow"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row-reverse",
          width: "100vw",
          alignSelf: "center"
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
      <div>
        <input
          className="input-slider"
          style={{
            width: "80%"
          }}
          label="Breath speed"
          type="range"
          min=".5"
          max="3.5"
          step="0.01"
          value={springTension}
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
}

export default Inputs;
