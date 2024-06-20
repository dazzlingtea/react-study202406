import React, {useState} from 'react';
import {MdDelete, MdDone} from "react-icons/md";

import './scss/TodoItem.scss';

const TodoItem = ({item, onDelete, onCheck}) => {

  const { title, done } = item;

  const [isCheck, setIsCheck] = useState(false);
  const [countCheck, setCountCheck] = useState(0);

  const deleteItemHandler = e => {
    console.log("삭제 이벤트 실행 중")
    onDelete(item.id);
  }
  const checkItemHandler = e => {
    console.log("할일 했음 : ", e.target.closest('.todo-list-item'));
    let count = countCheck;
    if(isCheck){
      count--;
      setIsCheck(false);
      // setCountCheck(count);
      onCheck(count);
    } else {
      setIsCheck(true);
      // setCountCheck(count)
      onCheck(count);
    }
  }

  return (

    <li className='todo-list-item'>
      <div className={`check-circle ${done ? 'active': undefined}`}>
        {done && <MdDone/>}
      </div>
      <span className={`text ${done ? 'finish' : undefined}`}>{title}</span>
      <div className='remove'>
        <MdDelete/>
      </div>
    </li>

  // <li className='todo-list-item'>
  //   <div className={`check-circle ${isCheck ? 'active' : ''}`} onClick={checkItemHandler}>
  //     <MdDone/>
  //   </div>
  //   <span className={`text ${isCheck ? 'finish' : ''}`}>{item.text}</span>
  //     <div className='remove' onClick={deleteItemHandler}>
  //       <MdDelete/>
  //     </div>
  //   </li>
  );
};

export default TodoItem;