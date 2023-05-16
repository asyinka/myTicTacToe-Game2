import Squares from "./components/squares";

const App = () => {
  return (
    <div className="text-center flex flex-col items-center p-6">
      <h1 className="text-red-700 font-bold ">TIC- TAC-TOE GAME</h1>
      <div className="w-fit grid grid-cols-3 mt-3 bg-amber-200">
        <Squares />
        <Squares />
        <Squares />
        <Squares />
        <Squares />
        <Squares />
        <Squares />
        <Squares />
        <Squares />
      </div>
    </div>
  );
};

export default App;
