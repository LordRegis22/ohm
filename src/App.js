import React from "react";
import Om from "./components/Om";
import Timer from "./components/Timer";
import Drawer from "./components/Drawer";
import "./App.css";

function App() {
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
      {/* <Timer /> */}
      <Drawer />
    </div>
  );
}

export default App;
