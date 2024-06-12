import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({ exDate:date }) => {

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };
  const month = date.toLocaleString('en-US', {month: 'long'});

  return (
    <div className="expense-date">
      <div className="expense-date__year">{date.getFullYear()}</div>
      {/*<div className="expense-date__month">{make2digit(date.getMonth())}</div>*/}
      {/*<div className="expense-date__day">{make2digit(date.getDate())}</div>*/}
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{date.getDate()}</div>
    </div>
  );
};

export default ExpenseDate;