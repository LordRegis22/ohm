// import React, { useState, useContext } from "react";
// import { useSpring, animated } from "react-spring";
// import { useDrag } from "react-use-gesture";
// import { Context } from "../Context";

// function Timer() {
//   const [{ x }, set] = useSpring(() => ({ x: 0 }));
//   const bind = useDrag(
//     ({ down, movement: [mx] }) => set({ x: down ? mx : 0 }),
//     { axis: "x" }
//   );
//   return (
//     <animated.div
//       {...bind()}
//       style={{
//         marginLeft: x,
//         height: "100px",
//         backgroundColor: "white",
//         width: "50px"
//       }}
//     />
//   );
// }

// export default Timer;
