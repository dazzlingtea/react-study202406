import React from 'react';

import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = ({items, onDelete, onCheckCount}) => {
  return (
    <ul className='todo-list'>
      {
        items.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            onCheck={onCheckCount}
          />
        ))
      }
    </ul>
  );
};

export default TodoMain;