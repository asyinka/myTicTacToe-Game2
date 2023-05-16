import { useState } from "react";
import Squares from "../components/square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    //to avoid mutating our array we call .slice() to create another array
    const nextSquare = squares.slice();
    //change the value of item at index 'i' from 'null' to 'X' when clicked
    nextSquare[i] = "X";
    //update the state of squares, since the values changed. This also re-renders the component
    setSquares(nextSquare);
  }

  return (
    <div className="grid grid-cols-3 w-fit">
      <Squares value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Squares value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Squares value={squares[2]} onSquareClick={() => handleClick(2)} />

      <Squares value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Squares value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Squares value={squares[5]} onSquareClick={() => handleClick(5)} />

      <Squares value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Squares value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Squares value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
  );
};

export default Board;
