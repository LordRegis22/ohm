import React, { useState, createContext, useRef } from "react";
import { useSpring, config, useChain } from "react-spring";
const Context = createContext();

function ContextProvider(props) {
  const [ready, setReady] = useState(false);
  const [breathe, setBreathe] = useState(false);
  const [springTension, setSpringTension] = useState(2.5);
  const [springProps, setSpringProps] = useState(
    useSpring({
      config: {
        mass: 2,
        tension: springTension,
        friction: 0
      },
      from: { size: 0.5, opacity: 0.4, strokeDashoffset: 0 },
      size: 1,
      opacity: 0.8,
      strokeDashoffset: 12000
    })
  );
  const [omSpring, setOmSpring] = useState(false);
  const omDrawSpringProps = useSpring({
    config: { mass: 100, tension: 70, friction: 100, clamp: true },
    from: { strokeDashoffset: 12000 },
    strokeDashoffset: 0,
    onRest: () => setOmSpring(true)
  });

  const omSpringConfig = { mass: 90, tension: 120, friction: 200 };

  const omFillSpringProps = useSpring({
    config: omSpringConfig,
    from: { o: 0, s: 0 },
    o: 1,
    s: 1,
    delay: 3000,
    onRest: () => {
      return setReady(true);
    }
  });

  const omSlideSpringProps = useSpring({
    config: omSpringConfig,
    mt: omSpring ? 1 : 0
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
        ready,
        breathe,
        setBreathe,
        springTension,
        springProps,
        omDrawSpringProps,
        omFillSpringProps,
        omSlideSpringProps,
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
