import React, { useState, createContext } from "react";
import { useSpring } from "react-spring";
const Context = createContext();

function ContextProvider(props) {
  const [ready, setReady] = useState(false);
  const [breathe, setBreathe] = useState(false);
  const [breathingSpring, setBreathingSpring] = useState(false);
  const [springTension, setSpringTension] = useState(2000);
  const springProps = useSpring({
    config: { duration: Math.abs(springTension), friction: 0 },
    t: breathe ? 1 : 0
  });
  const [omSpring, setOmSpring] = useState(false);
  const omDrawSpringProps = useSpring({
    config: { mass: 100, tension: 70, friction: 100, clamp: true },
    from: { strokeDashoffset: 12000 },
    strokeDashoffset: 0,
    onRest: () => setOmSpring(true)
  });

  const omSpringConfig = { mass: 80, tension: 110, friction: 180 };

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
    setBreathingSpring(!breathingSpring);
    if (!breathe) {
      setDrawer(!drawer);
    }
  };

  const handleBreathingChange = e => {
    setSpringTension(e.target.value);
  };

  const [time, setTime] = useState(1000);

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
        breathingSpring,
        springTension,
        springProps,
        omDrawSpringProps,
        omFillSpringProps,
        omSlideSpringProps,
        openDrawer,
        drawer,
        time,
        setTime,
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
