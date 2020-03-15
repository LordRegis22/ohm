import React, { useContext } from "react";
import Inputs from "./Inputs";
import { useSpring, animated } from "react-spring";
import { Context } from "../Context";

function Drawer() {
  const { drawer } = useContext(Context);
  const drawerProps = useSpring({
    height: drawer ? "40vh" : "0vh",
    backgroundColor: "rgba(255, 255, 255, .8)",
    width: "100%",
    overflowX: "hidden",
    position: "absolute",
    bottom: 0,
    display: "grid",
    gridTemplateRows: "repeat(4, 1fr)",
    gridTemplateColumns: "repeat(4, 1fr)"
  });

  return (
    <animated.div style={drawerProps}>
      <Inputs />
    </animated.div>
  );
}

export default Drawer;
