import { useState } from "react";
import Squares from "../components/Squares";

const Board = () => {
  //create nine empty array
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  let status;
  const Winner = checkWinner(squares);

  if (Winner) {
    status = `Winner: ${Winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"} `;
  }

  function handleClick(i) {
    if (squares[i] || checkWinner(squares)) return;
    //create a new array for squares so as not to mutate the original array
    const newSquares = squares.slice();
    //check if xIsNext is true or false and display corresponding tic
    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }

    setXIsNext(!xIsNext);

    setSquares(newSquares);
  }
  return (
    <>
      <div className="font-extrabold text-xl text-sky-500">{status}</div>
      <div className="w-fit grid grid-cols-3 mt-3 bg-amber-200">
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
    </>
  );
};

function checkWinner(squares) {
  //possible winning position
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //iterate over winning positions
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    //return value that corresponds
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
