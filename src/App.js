import "./App.css";
import React from "react";
import Students from "./components/students";
import { useDispatch, useSelector } from "react-redux";
import { AddOne, SubOne } from "./redux/tynCounterSlice.ts";

function App() {
  const dispath = useDispatch();
  const startNumber = useSelector((state) => state.counter.startNuber);

  const handleUpNumber = () => {
    dispath(AddOne());
  };

  const handleDowNumber = () => {
    dispath(SubOne());
  };

  return (
    <div className="App">
      <h1>How to install</h1>

      <button type="button" onClick={handleUpNumber}>
        Add number
      </button>

      <div>
        <span>{startNumber}</span>
      </div>

      <button type="button" onClick={handleDowNumber}>
        Sub number
      </button>
    </div>
  );
}

export default App;
