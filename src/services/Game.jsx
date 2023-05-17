import { useState } from "react";
import Board from "./Board";
//this component tracks ALL the moves and displays them
const Game = () => {
  //tracks all the moves
  const [history, setHistory] = useState([Array(9).fill(null)]);
  //toggles xIsNext status
  const [xIsNext, setXIsNext] = useState(true);
  //replaces square; the current move
  const currentSquare = history[history.length - 1];
  //
  function handlePlay(currentSquare) {
    setHistory([...history, currentSquare]);

    setXIsNext(!xIsNext);
  }
  return (
    <div>
      <Board squares={currentSquare} xIsNext={xIsNext} onPlay={handlePlay} />
      <div></div>
    </div>
  );
};

export default Game;
