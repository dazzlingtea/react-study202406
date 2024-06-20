import React, {useState} from "react";
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";


const TodoTemplate = () => {

  const todoList = [
    {
      id: 1,
      text: '장보기',
      check: false
    },
    {
      id: 2,
      text: '리액트 공부',
      check: false
    }
  ];

  const [todos, setTodos] = useState(todoList);
  const [checks, setChecks] = useState(0)

  const addHandler = (newTodo) => {

    setTodos(()=> [...todos, newTodo]);

  }
  const checkCountHandler = (newCount) => {
    setChecks(newCount);
  }

  const deleteHandler = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  }


  return (

    <div className='TodoTemplate'>
      <TodoHeader count={todos.length} />
      <TodoMain items={todos} onCheckCount={checkCountHandler} onDelete={deleteHandler} />
      <TodoInput onAdd={addHandler} lastId={todos[todos.length - 1].id} />
    </div>
  );
};

export default TodoTemplate;