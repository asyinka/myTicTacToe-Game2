import { useState } from "react";
import "./App.css";
import Squares from "./components/square";

function App() {
  return (
    <div className="p-[12px]">
      <h1 className="text-red-600 m-[10px]">TIC-TAC-TOE</h1>

      <div className="grid grid-cols-3 w-fit">
        <Squares />
        <Squares />
        <Squares />

        <Squares />
        <Squares />
        <Squares />

        <Squares />
        <Squares />
        <Squares />
      </div>
    </div>
  );
}

export default App;
