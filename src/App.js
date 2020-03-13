import React from "react";
import Om from "./components/Om";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "grid",
        gridTemplateRows: "2fr 1fr",
        height: "100vh"
      }}
    >
      <Om />
    </div>
  );
}

export default App;
