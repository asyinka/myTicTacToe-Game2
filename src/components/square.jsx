import { useState } from "react";

const Squares = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="border-[1px] border-solid border-black w-[34px] h-[34px] font-bold text-center text-[24px] float-left mr-[-1px] ml-[-1px] "
    >
      {value}
    </button>
  );
};

export default Squares;
