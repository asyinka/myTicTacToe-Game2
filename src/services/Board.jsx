import { useState } from "react";
import Squares from "../components/square";

const Board = () => {
  function handleClick() {}
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div className="grid grid-cols-3 w-fit">
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
