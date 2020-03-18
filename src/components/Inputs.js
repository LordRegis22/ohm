import React, { useContext } from "react";
import { Context } from "../Context";
import Button from "./Button";
import Slider from "./Slider";

function Inputs() {
  const {
    handleBreatheClick,
    handleBreathingChange,
    springTension,
    time,
    handleTimeChange,
    bellFrequency,
    handleBellFrequencyChange,
    openDrawer
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
        <Button text="Breathe." onClick={() => handleBreatheClick()} />
        <Button text="Close Drawer" onClick={() => openDrawer()} />
      </div>

      <Slider
        className="input-slider"
        style={{
          gridColumn: "1 / span 3",
          padding: "0 1rem"
        }}
        label="Breathing"
        type="range"
        min={0.5}
        max={3.5}
        step={0.01}
        value={springTension}
        onChange={handleBreathingChange}
        text="Breathing Rate"
      />
      <Slider
        className="input-slider"
        style={{
          gridColumn: "1 / span 3",
          padding: "0 1rem"
        }}
        label="Meditation Time"
        type="range"
        min={1}
        max={60}
        step={1}
        value={time}
        onChange={handleTimeChange}
        text="Meditation Time"
      />
      <Slider
        className="input-slider"
        style={{
          gridColumn: "1 / span 3",
          padding: "0 1rem"
        }}
        label="Bell Frequency"
        type="range"
        min={1}
        max={20}
        step={1}
        value={bellFrequency}
        onChange={handleBellFrequencyChange}
        text="Bell Frequency"
      />
    </>
  );
}

export default Inputs;
