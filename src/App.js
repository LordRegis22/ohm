import React, { useContext } from "react";
import Om from "./components/Om";
import Drawer from "./components/Drawer";
import Timer from "./components/Timer";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Context } from "./Context";
import "./App.css";

function App() {
  const { ready, openDrawer, drawer, breathe } = useContext(Context);
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
      <div className="the-rest" style={{ opacity: ready ? 1 : 0 }}>
        {ready && (
          <>
            {!drawer && (
              <AiOutlineArrowUp
                onClick={openDrawer}
                style={{
                  position: "absolute",
                  bottom: "0",
                  color: "white",
                  fontSize: "1.75rem",
                  marginBottom: ".5rem",
                  opacity: ".8",
                  cursor: "pointer"
                }}
              />
            )}
            {breathe && <Timer style={{ alignSelf: "center" }} />}

            <Drawer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
