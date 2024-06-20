import React, {forwardRef} from 'react';

const ResultModalComponent = ({ onReset, targetTime, remainingTime}, ref) => {

  // 패배조건
  const isLost = remainingTime <= 0;

  // 시간 포맷팅
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  // 점수
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return (
    <dialog ref={ref} className="result-modal">
      {isLost ? <h2>Your lost !</h2> : <h2>Your Score : {score}</h2>}
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
      <form method="dialog">
        <button onClick={onReset}>Close</button>
      </form>
    </dialog>
  );
};

const ResultModal = forwardRef(ResultModalComponent);

export default ResultModal;