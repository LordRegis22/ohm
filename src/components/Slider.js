import React from 'react';

function Slider(props) {
  return (
    <>
      <input
        className='input-slider'
        style={props.style}
        label={props.label}
        type='range'
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={props.onChange}
        disabled={props.breathe}
      ></input>
      <span
        style={{ color: 'white', width: '20%' }}
      >{`${props.input}${props.unit}`}</span>

      {
        //<span style={{ color: 'white', width: '100%' }}>{props.text}</span>
      }
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
