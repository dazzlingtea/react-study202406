import React, {useState} from 'react';
import {MdAdd} from "react-icons/md";

import './scss/TodoInput.scss';

const TodoInput = ({onAdd, lastId}) => {

  const [todoInput, setTodoInput] = useState('');
  // 입력창 토글링 상태값
  const [isOpen, setIsOpen] = useState(false);

  const todoChangeHandler = (e) => {
    setTodoInput(e.target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    console.log('폼 전송: ', todoInput);
    const newTodo = {
      id: lastId + 1,
      text: todoInput,
    }
    onAdd(newTodo);

    setTodoInput('');
  };
  // const inputForm = (
  //   <div className='form-wrapper'>
  //     <form className='insert-form' onSubmit={submitHandler}>
  //       <input
  //         type='text'
  //         placeholder='할 일을 입력 후, 엔터를 누르세요!'
  //         onChange={todoChangeHandler}
  //         value={todoInput}
  //       />
  //     </form>
  //   </div>
  // );

  // 버튼 토글링 함수
  const openHandler = e => {
    // if(!isOpen) {
    //   setIsOpen(true);
    // } else {
    //   setIsOpen(false);
    // }
    setIsOpen(prevOpen => !prevOpen);
  }

  return (
    <>
      {/*{ isOpen ? inputForm : '' }*/}
      { isOpen && (
        <div className='form-wrapper'>
          <form className='insert-form' onSubmit={submitHandler}>
            <input
              type='text'
              placeholder='할 일을 입력 후, 엔터를 누르세요!'
              onChange={todoChangeHandler}
              value={todoInput}
            />
          </form>
        </div>
      )}
      <button className={`insert-btn ${isOpen ? 'open' : ''}`} onClick={openHandler}>
        <MdAdd/>
      </button>
    </>
  );
};

export default TodoInput;