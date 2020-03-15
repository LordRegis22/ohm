import React, { useState, useContext } from "react";
import { Context } from "../Context";

function Timer() {
  const { timeLeft } = useContext(Context);

  return <h1 style={{ color: "white" }}>{timeLeft}</h1>;
}

export default Timer;
