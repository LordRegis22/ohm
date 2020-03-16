import React, { useState, createContext } from "react";
import { useSpring } from "react-spring";
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
      from: { size: 0.5, opacity: 0.4 },
      size: 1,
      opacity: 0.8
    })
  );
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

  //const [timeLeft, setTimeLeft] = useState(60 * 5);
  //const startTimer = timeLeft => {
  //var timer = timeLeft,
  //minutes,
  //seconds;
  //     setInterval(function() {
  //       minutes = parseInt(timer / 60, 10);
  //       seconds = parseInt(timer % 60, 10);

  //       console.log(minutes);
  //       console.log(seconds);

  //       minutes = minutes < 10 ? "0" + minutes : minutes;
  //       seconds = seconds < 10 ? "0" + seconds : seconds;

  //       setTimeLeft(minutes + ":" + seconds);

  //       if (--timer < 0) {
  //         timer = timeLeft;
  //       }
  //     }, 1000);
  //};

  //   window.onload = function() {
  //     var fiveMinutes = 60 * 5,
  //       display = document.querySelector("#time");
  //     startTimer(fiveMinutes, display);

  return (
    <Context.Provider
      value={{
        breathe,
        setBreathe,
        springTension,
        springProps,
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
