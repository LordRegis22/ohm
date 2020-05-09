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
          flexGrow: 2,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Button text='Breathe.' onClick={() => handleBreatheClick()} />
        <Button text='Close Drawer' onClick={() => openDrawer()} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', paddingRight: '1rem' }}>
          <Slider
            className='input-slider'
            style={{
              width: '80%',
              padding: '0 1rem',
            }}
            label='Breathing'
            type='range'
            min={-15}
            max={-1}
            step={0.5}
            value={breathRate}
            onChange={handleBreathingChange}
            input={Math.abs(Math.round(60 / breathRate))}
            unit='/minute'
          />
        </div>
        <span style={{ color: 'white', alignSelf: 'center' }}>
          Breathing Rate
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', paddingRight: '1rem' }}>
          <Slider
            className='input-slider'
            style={{
              width: '80%',
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
            unit=' minutes'
          />
        </div>
        <span style={{ color: 'white', alignSelf: 'center' }}>
          Meditation Time
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', paddingRight: '1rem' }}>
          <Slider
            className='input-slider'
            style={{
              width: '80%',
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
            unit=' minute'
          />
        </div>
        <span style={{ color: 'white', alignSelf: 'center' }}>
          Bell Frequency
        </span>
      </div>
    </>
  );
}

export default Inputs;
