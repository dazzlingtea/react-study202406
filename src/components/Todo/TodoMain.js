import React from 'react';

import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = ({ todos, onRemove, onCheck }) => {



  return (
    <ul className='todo-list'>
      {/*{*/}
      {/*  items.map((item) => (*/}
      {/*    <TodoItem*/}
      {/*      key={item.id}*/}
      {/*      item={item}*/}
      {/*      onDelete={onDelete}*/}
      {/*      onCheck={onCheckCount}*/}
      {/*    />*/}
      {/*  ))*/}
      {/*}*/}
      {
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            item={todo}
            onRemove={onRemove}
            onCheck={onCheck}
          />
        ))
      }
    </ul>
  );
};

export default TodoMain;