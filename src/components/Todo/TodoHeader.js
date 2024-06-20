import React, {useState} from 'react';
import './scss/TodoHeader.scss';

const TodoHeader = ({count}) => {

  // const now = new Date();
  // const weekDays
  //   = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  // const {year, month, date, day} = {
  //   year: now.getFullYear(),
  //   month: now.getMonth() +1,
  //   date: now.getDate(),
  //   day: weekDays[now.getDay()],
  // };


  const today = new Date();

  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });


  return (
    <header>
      {/*<h1>{`${year}년 ${month}월 ${date}일`}</h1>*/}
      {/*<div className='day'>{day}</div>*/}
      <h1>{dateString}</h1>
      <div className='day'>{dayName}</div>
      <div className='tasks-left'>할 일 {count}개 남음</div>
    </header>
  );
};

export default TodoHeader;