const Squares = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className=" w-[34px] h-[34px] float-left border-[1px] border-solid border-blue-950 p-[2px] text-lg font-semibold text-green-900 "
    >
      {value}
    </button>
  );
  s;
};

export default Squares;
