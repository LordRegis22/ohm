import React, { useContext, useEffect } from "react";
import { Context } from "../Context";

function Timer(props) {
  const { breathe, time, setTime } = useContext(Context);

  useEffect(() => {
    if (breathe && time > 0) {
      setTimeout(() => {
        setTime(time => time - 1);
      }, 1000);
    }
  }, [time, breathe, setTime]);

  return <h1 style={{ color: "white", ...props.style }}>{time}</h1>;
}

export default Timer;
