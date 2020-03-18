import React, {useContext} from "react";
import Om from "./components/Om";
import Timer from "./components/Timer";
import Drawer from "./components/Drawer";
import Button from "./components/Button"
import {Context} from "./Context";
import "./App.css";

function App() {
  const {ready, openDrawer} = useContext(Context)
  return (
    <div
      className="App"
      style={{
        display: "grid",
        gridTemplateRows: "2fr 1fr 1fr",
        height: "100vh"
      }}
    >
      <Om />
      <div className="the-rest" style={{opacity: ready ? 1 : 0}}>
      {ready && 
      <>
      <Button onClick={openDrawer} text="Open Drawer">
      </Button>
      <Drawer /></>}
      </div>
    </div>
  );
}

export default App;
