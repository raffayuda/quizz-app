import React from "react";

const Score = ({ score, setDisplay, setIndex }) => {
    const handleClick = () => {
        setDisplay('review')
        setIndex(0)
    }
  return (
    <div className="h-full p-[15px] flex flex-col gap-1 items-center justify-center">
      <div className="text-amber-700 text-[48px] text-center">YOUR SCORE</div>
      <div className="rounded-[280px] w-[200px] h-[200px] border-[6px] border-amber-700 flex items-center justify-center text-amber-700 text-[100px]">
        {Math.floor(score.score)}%
      </div>
      <div className="flex gap-[100px] text-white text-[32px]">
        <div>True : {score.true}</div>
        <div>False : {score.false}</div>
      </div>
      <div className="flex mt-4 text-[32px] bg-amber-700 text-white p-2 border-amber-700 border-[6px] rounded-[12px] cursor-pointer hover:bg-slate-500 hover:text-amber-700" onClick={handleClick}>Review Answer</div>
    </div>
  );
};

export default Score;
