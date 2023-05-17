import { useState } from "react";
import Board from "./Board";
//this component tracks ALL the moves and displays them
const Game = () => {
  //tracks all the moves
  const [history, setHistory] = useState([Array(9).fill(null)]);

  //monitors which step the user is on
  const [currentMove, setCurrentMove] = useState(0);
  //toggles xIsNext status
  const xIsNext = currentMove % 2 === 0;
  //replaces square; the current move
  const currentSquare = history[currentMove];

  //this jumps to the move the user clicks on
  function jumpTo(nextMove) {
    //updates the user's move according to its move
    setCurrentMove(nextMove);
    //X will be true on every move that is even
    // setXIsNext(nextMove % 2 === 0);
  }

  function handlePlay(currentSquare) {
    //this goes back to the clicked square, removing unwanted squares
    const nextHistory = [...history.slice(0, currentMove + 1), currentSquare];
    //ensures the squares clicked tallies with the jumpTo function
    setHistory(nextHistory);
    //updates the users move
    setCurrentMove(nextHistory.length - 1);

    setXIsNext(!xIsNext);
  }

  const moves = history.map((squares, move) => {
    let description;

    if (move > 0) {
      description = `Game at move # ${move}`;
    } else {
      description = `Game start`;
    }

    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className="m-2 bg-emerald-600 rounded-[10px] p-2 "
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div>
      <Board squares={currentSquare} xIsNext={xIsNext} onPlay={handlePlay} />
      <div>
        <ul className="mt-2 bg-gray-400">{moves}</ul>
      </div>
    </div>
  );
};

export default Game;
