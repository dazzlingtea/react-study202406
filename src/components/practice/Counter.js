import React, {useState} from 'react';

const Counter = () => {

  const [currentNum, setNum] = useState(0);

  const clickHandlerIncrease = e => {
    let num = currentNum + 1;
    setNum(num);
  }
  const clickHandlerDecrease = e => {
    let num = currentNum - 1;
    setNum(num);
  }

  return (
    <div>
      <h1>숫자 : {currentNum}</h1>
      <button onClick={clickHandlerIncrease}>증가</button>
      <button onClick={clickHandlerDecrease}>감소</button>

    </div>
  );
};

export default Counter;