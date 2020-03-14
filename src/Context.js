import React, { useState, createContext } from "react";
const Context = createContext();

function ContextProvider(props) {
  const [breathe, setBreathe] = useState(false);
  const [springTension, setSpringTension] = useState(1);

  const handleClick = chosenMass => {
    setSpringTension(chosenMass);
  };

  const handleChange = e => {
    setSpringTension(e.target.value);
  };

  return (
    <Context.Provider
      value={{ breathe, setBreathe, springTension, handleClick, handleChange }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
