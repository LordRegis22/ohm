import React from "react";
//import { Context } from "../Context";

function Button(props) {
  //const { breathe, setbreathe, handleClick } = useContext(Context);
  return (
    <button
      onClick={props.onClick}
      style={{
        height: "auto",
        width: "auto",
        padding: ".5rem 1rem",
        borderRadius: "1rem",
        color: "white",
        backgroundColor: "transparent",
        opacity: ".8"
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;
