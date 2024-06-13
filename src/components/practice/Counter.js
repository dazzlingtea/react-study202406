import React, {useState} from 'react';

const Counter = () => {

  const [count, setCount] = useState(0);

  const increaseHandler = e => {
    // useState의 setter는 상태값을 업데이트할 때
    // 렌더링 전까지 이전 상태값을 참조함
    // 첫번째 setCount 호출은 초기값 0을 참조
    // 두번째 setCount 호출도 초기값 0을 참조

    // 해결방법: 함수형 업데이트를 사용 -> 콜백
    setCount((prev) => {
      console.log('변경 이전값: ', prev);
      // 변경 이후값을 반환
      return prev + 1;
    });
    setCount(count => count + 1);

    // 상태값의 변경은 실시간으로 일어나지 않음
    // 해결방법: useEffect 훅으로 해결 (뒤에 배움)
    console.log('변경 이후값: ', count);
  };

  const clickHandler = e => {
    let num = count;
    // console.log(e.target);

    if(e.target.matches('button')) {
      if(e.target.textContent === '증가') {
        setCount(num+1);
      } else if(e.target.textContent === '감소') {
        setCount(num-1);
      }
    }
  }

  return (
    // <div onClick={clickHandler}>
    <div>
      <h1>숫자 : {count}</h1>
      {/*<button >증가</button>*/}
      {/*<button >감소</button>*/}
      <button onClick={increaseHandler}>증가</button>
      <button onClick={e => setCount(count-1)}>감소</button>

    </div>
  );
};

export default Counter;