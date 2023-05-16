import { useState } from "react";
import Squares from "../components/square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    //to avoid mutating our array we call .slice() to create another array
    const nextSquare = squares.slice();
    //check if the square is already filled and return if filled
    if (nextSquare[i]) {
      return;
    }
    //check if xISNext is true or false
    if (xIsNext) {
      //change the value of item at index 'i' from 'null' to 'X' when clicked
      nextSquare[i] = "X";
    } else {
      //change the value of item at index 'i' from 'null' to 'X' when clicked
      nextSquare[i] = "O";
    }
    //invert the value of xIsNext
    setXIsNext(!xIsNext);

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

function checkWinner() {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i > lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
