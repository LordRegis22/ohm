import React, { useContext, useEffect } from "react";
import { Context } from "../Context";

function Timer(props) {
  const {
    breathe,
    timeRemaining,
    setTimeRemaining,
    minutes,
    setMinutes,
    seconds,
    setSeconds
  } = useContext(Context);

  useEffect(() => {
    if (breathe && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining => timeRemaining - 1);
        setMinutes(Math.floor(timeRemaining / 60));
        setSeconds(timeRemaining % 60);
      }, 1000);
    }
  }, [timeRemaining, breathe]);

  return (
    <h1 style={{ color: "white", ...props.style }}>
      {minutes > 0 ? minutes + " : " + seconds : seconds}
    </h1>
  );
}

export default Timer;
