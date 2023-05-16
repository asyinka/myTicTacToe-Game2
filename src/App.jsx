import "./App.css";
import Board from "./services/Board";

function App() {
  return (
    <div className="p-[12px] flex flex-col text-center items-center">
      <h1 className="text-red-600 m-[10px]">TIC-TAC-TOE</h1>
      <Board />
    </div>
  );
}

export default App;
