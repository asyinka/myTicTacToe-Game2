import { useState } from "react";
import "./App.css";
import Squares from "./components/square";

function App() {
  return (
    <div>
      <h1 className="text-red-600">Building a Tic-Tac-Toe game</h1>
      <Squares />
    </div>
  );
}

export default App;
