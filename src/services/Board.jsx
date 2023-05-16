import { useState } from "react";
import Squares from "../components/Squares";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  //   const [value, setValue] = useState(null);

  function handleClick() {
    console.log("clicked");
  }
  return (
    <div className="w-fit grid grid-cols-3 mt-3 bg-amber-200">
      <Squares value={squares[0]} onSquareClick={handleClick} />
      <Squares value={squares[1]} />
      <Squares value={squares[2]} />
      <Squares value={squares[3]} />
      <Squares value={squares[4]} />
      <Squares value={squares[5]} />
      <Squares value={squares[6]} />
      <Squares value={squares[7]} />
      <Squares value={squares[8]} />
    </div>
  );
};

export default Board;
