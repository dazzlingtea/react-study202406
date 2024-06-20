import React, {useState} from 'react';
import {MdDelete, MdDone} from "react-icons/md";

import './scss/TodoItem.scss';

const TodoItem = ({item, onRemove, onCheck}) => {

  const { id, title, done } = item;

  // 삭제 클릭 이벤트
  const removeHandler = e => {
    onRemove(id);
  };

  // 체크 클릭 이벤트
  // (배열 안의 객체에 변경이 발생해야하고 DB PUT, PATCH 통신 필요)
  const checkHandler = e => {
    onCheck(id);
  };

  return (

    <li className='todo-list-item'>
      <div
        className={`check-circle ${done ? 'active': undefined}`}
        onClick={checkHandler}
      >
        {done && <MdDone/>}
      </div>
      <span className={`text ${done ? 'finish' : undefined}`}>{title}</span>
      <div className='remove' onClick={removeHandler}>
        <MdDelete />
      </div>
    </li>

  );
};

export default TodoItem;