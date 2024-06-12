import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({date, title, price: exPrice}) => {
  // console.log('props: ', aaa);

  // // 변수 선언
  // const expenseDate = date;
  // const expenseTitle = title;
  // const expensePrice = exPrice;

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };

  // 함수 선언
  const makeFormattedDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };
  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(exPrice);

  // 이벤트 핸들러 선언
  const clickHandler = e => {
    console.log('클릭함!');
    console.log(e.target.previousElementSibling.firstElementChild.textContent)
    // const $price = document.querySelectorAll('.expense-item__price')
    // console.log('클릭가격: ',$price) // nodeList
    // console.log(this) // undefined
  };

  return (
      <Card className='expense-item'>
        {/*<div>{makeFormattedDate()}</div>*/}
        <ExpenseDate exDate={date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className='expense-item__price'>{formattedPrice}원</div>
        </div>
        <button id={'btn'} onClick={clickHandler} >버튼1</button>
        <button id={'btn2'} onMouseOver={e => alert('버튼2 마우스오버')} >버튼2</button>
      </Card>
  );
};

export default ExpenseItem;