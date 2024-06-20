import React, {useRef, useState} from 'react';
import {MdAdd} from "react-icons/md";

import './scss/TodoInput.scss';

const TodoInput = ({ onAdd }) => {

  // input의 주소값을 기억하는 변수 생성 (DOM qS 할때 주로 useRef 사용)
  const $textInput = useRef();

  // 입력창 토글링 상태값
  const [isOpen, setIsOpen] = useState(false);

  const submitHandler = e => {
    e.preventDefault();
    // console.log($textInput.current.value); // 무조건 current
    onAdd($textInput.current.value);
    // form이 제출되면 입력창 비우기
    $textInput.current.value = '';
    setIsOpen(false);
  };


  // 버튼 토글링 함수
  const openHandler = () => {

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
              ref={$textInput}
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