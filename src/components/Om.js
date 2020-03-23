import React, { useContext } from "react";
import { animated } from "react-spring";
import { Context } from "../Context";

const Om = () => {
  let {
    breathe,
    omDrawSpringProps,
    omSlideSpringProps,
    omFillSpringProps,
    springProps
  } = useContext(Context);

  const sizeFunc = x => {
    return `scale(${x})`;
  };

  const marginFunc = x => {
    return `${x}vh`;
  };

  return (
    <>
      <animated.svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        fill={omFillSpringProps.o
          .interpolate({ range: [0, 0.5, 1], output: [0, 1, 0.5] })
          .interpolate(o => `rgba(255, 255, 255, ${o})`)}
        className="App-logo"
        strokeDashoffset={omDrawSpringProps.strokeDashoffset}
        style={
          breathe
            ? {
                transform: springProps.t
                  .interpolate({
                    range: [0, 0.3, 0.5, 0.7, 1],
                    output: [1, 1.3, 1, 0.7, 1]
                  })
                  .interpolate(sizeFunc),
                opacity: springProps.t.interpolate({
                  range: [0, 0.3, 0.5, 0.7, 1],
                  output: [0.5, 1, 0.5, 0.4, 0.5]
                }),
                alignSelf: "center",
                justifySelf: "center",
                marginTop: "5vh"
              }
            : {
                transform: omFillSpringProps.s
                  .interpolate({ range: [0, 0.5, 1], output: [1, 1.3, 1] })
                  .interpolate(sizeFunc),
                marginTop: omSlideSpringProps.mt
                  .interpolate({
                    range: [0, 0.4, 1],
                    output: [20, 20, 5]
                  })
                  .interpolate(marginFunc),
                alignSelf: "center",
                justifySelf: "center"
              }
        }
      >
        <path
          id="path3168_1_"
          d="M 1383.34 445.992 C 1383.34 445.992 1542.287 946.961 2002.339 530.305 C 2004.771 532.69 2127.569 694.068 2130.002 694.068 C 1951.741 893.979 1407.423 1002.375 1383.34 445.992 L 1383.34 445.992 L 1383.34 445.992 Z M 1674.765 364.11 L 1532.653 513.423 L 1682.014 650.719 L 1826.511 503.79 L 1674.765 364.11 Z M 959.388 1021.641 L 848.607 821.731 C 1415.435 441.175 1722.12 990.31 1313.476 1238.434 L 1445.955 1291.416 C 1604.138 1284.931 1581.391 1096.847 1749.446 944.577 C 1812.872 868.275 2261.67 767.938 2272.114 1409.446 C 2245.885 1991.57 1560.742 1951.38 1674.765 1409.446 C 1714.895 1618.592 1869.966 1627.013 1991.579 1571.353 C 2175.676 1485.315 2172.447 1341.456 2173.186 1283.132 C 2175 1139.964 2105.967 932.868 1927.658 1060.174 C 1836.167 1125.495 1832.138 1196.659 1814.445 1231.186 C 1796.8 1265.712 1741.005 1400.385 1501.322 1358.848 C 1724.934 1821.19 1354.631 1943.94 1318.292 1951.38 C 1224.394 1998.639 652.654 1947.517 713.696 1211.919 C 762.672 1597.291 956.431 1803.163 1265.31 1724.954 C 1499.128 1665.773 1498.127 1244.825 1137.648 1382.931 L 1055.766 1127.606 C 1052.285 1116.781 1171.745 1157.984 1294.21 1125.222 C 1393.641 1098.611 1475.808 904.328 1214.713 903.612 C 1100.308 903.326 1044.512 982.298 959.387 1021.642 L 959.388 1021.641 Z"
          transform="matrix(0.063981, 0, 0, 0.0625, -45.371822, -22.756874)"
        ></path>
      </animated.svg>
    </>
  );
};

export default Om;
