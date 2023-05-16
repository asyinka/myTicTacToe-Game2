import Squares from "../components/Squares";

const Board = () => {
  return (
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
  );
};

export default Board;
