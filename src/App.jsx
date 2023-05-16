import Board from "./services/Board";

const App = () => {
  return (
    <div className="text-center flex flex-col items-center p-6">
      <h1 className="text-red-700 font-extrabold font-serif">
        TIC-TAC-TOE GAME
      </h1>
      <Board />
    </div>
  );
};

export default App;
