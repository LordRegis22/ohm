import React, { useContext } from "react";
import Inputs from "./Inputs";
import { Context } from "../Context";

function Drawer() {
  const { breathe } = useContext(Context);
  return (
    <div
      style={{
        backgroundColor: "white",
        height: breathe ? "auto" : "0px",
        overflowX: "hidden"
      }}
    >
      <Inputs />
    </div>
  );
}

export default Drawer;
