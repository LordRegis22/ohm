import React, { useContext } from 'react';
import { Context } from '../Context';
import Button from './Button';
import Slider from './Slider';

function Inputs() {
  const {
    breathe,
    handleBreatheClick,
    handleBreathingChange,
    breathRate,
    timeInput,
    handleTimeChange,
    bellFrequency,
    handleBellFrequencyChange,
    openDrawer,
  } = useContext(Context);
  return (
    <>
      <div
        className='buttonRow'
        style={{
          display: 'flex',
          gridRowStart: 'span 1',
          gridColumnStart: 'span 4',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Button text='Breathe.' onClick={() => handleBreatheClick()} />
        <Button text='Close Drawer' onClick={() => openDrawer()} />
      </div>

      <Slider
        className='input-slider'
        style={{
          gridColumn: '1 / span 3',
          padding: '0 1rem',
        }}
        label='Breathing'
        type='range'
        min={-15}
        max={-1}
        step={0.5}
        value={breathRate}
        onChange={handleBreathingChange}
        text='Breathing Rate'
        input={Math.abs(Math.round(60 / breathRate))}
        unit='breaths per minute'
      />
      <Slider
        className='input-slider'
        style={{
          gridColumn: '1 / span 3',
          padding: '0 1rem',
        }}
        label='Meditation Time'
        type='range'
        min={0}
        max={6000}
        step={60}
        value={timeInput}
        onChange={handleTimeChange}
        text='Meditation Time'
        breathe={breathe}
        input={timeInput / 60}
        unit='minutes'
      />
      <Slider
        className='input-slider'
        style={{
          gridColumn: '1 / span 3',
          padding: '0 1rem',
        }}
        label='Bell Frequency'
        type='range'
        min={1}
        max={20}
        step={1}
        value={bellFrequency}
        onChange={handleBellFrequencyChange}
        text='Bell Frequency'
        input={bellFrequency}
        unit='minute'
      />
    </>
  );
}

export default Inputs;
