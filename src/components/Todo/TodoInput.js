import React, {useState} from 'react';
import {MdAdd} from "react-icons/md";

import './scss/TodoInput.scss';

const TodoInput = ({onAdd, lastId}) => {

  const [todoInput, setTodoInput] = useState('');
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
  const inputForm = (
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
  );

  const openHandler = e => {
    if(!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <>
      { isOpen ? inputForm : '' }
      <button className={`insert-btn ${isOpen ? 'open' : ''}`} onClick={openHandler}>
        <MdAdd/>
      </button>
    </>
  );
};

export default TodoInput;