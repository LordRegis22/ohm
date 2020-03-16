import React, { useContext } from "react";
import Inputs from "./Inputs";
import { useSpring, animated } from "react-spring";
import { Context } from "../Context";

function Drawer() {
  const { drawer } = useContext(Context);

  let springProps = useSpring({
    height: drawer ? "33vh" : "4vh",
    borderRadius: "5px",
    border: "1px solid white",
    backgroundColor: "transparent",
    width: "100%",
    overflowX: "hidden",
    position: "absolute",
    bottom: 0,
    display: "grid",
    gridTemplateRows: "repeat(4, 1fr)",
    gridTemplateColumns: "repeat(4, 1fr)"
  });

  return (
    <animated.div style={springProps}>
      <Inputs />
    </animated.div>
  );
}

export default Drawer;
