import React, { useState, createContext, useRef } from "react";
import { useSpring, config, useChain } from "react-spring";
const Context = createContext();

function ContextProvider(props) {
  const [breathe, setBreathe] = useState(false);
  const [springTension, setSpringTension] = useState(2.5);
  const [springProps, setSpringProps] = useState(
    useSpring({
      config: {
        mass: 2,
        tension: springTension,
        friction: 0
      },
      from: { size: 0.5, opacity: 0.4, strokeDashoffset: 12 },
      size: 1,
      opacity: 0.8,
      strokeDashoffset: 12000
    })
  );
  const omDrawSpringProps = useSpring({
    config: { mass: 100, tension: 70, friction: 100, clamp: true },
    from: { strokeDashoffset: 12000 },
    strokeDashoffset: 0
  });
  const omFillSpringProps = useSpring({
    config: { mass: 600, tension: 700, friction: 400 },
    from: { o: 0, s: 0.8 },
    o: 0.5,
    s: 1,
    delay: 3000
  });
  const [drawer, setDrawer] = useState(false);

  const openDrawer = () => {
    setDrawer(!drawer);
  };

  const handleBreatheClick = () => {
    setBreathe(!breathe);
  };

  const handleBreathingChange = e => {
    setSpringTension(e.target.value);
    setSpringProps(springProps);
  };

  const [time, setTime] = useState("");

  const handleTimeChange = e => {
    setTime(e.target.value);
  };

  const [bellFrequency, setBellFrequency] = useState(0);

  const handleBellFrequencyChange = e => {
    setBellFrequency(e.target.value);
  };

  return (
    <Context.Provider
      value={{
        breathe,
        setBreathe,
        springTension,
        springProps,
        omDrawSpringProps,
        omFillSpringProps,
        openDrawer,
        drawer,
        time,
        handleBreatheClick,
        handleBreathingChange,
        handleTimeChange,
        bellFrequency,
        handleBellFrequencyChange
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
