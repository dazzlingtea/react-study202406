import React from 'react';
import styles from './CourseItem.module.css'; // css에 대한 변수명

const CourseItem = ({ item, onDelete }) => {

  const deleteHandler = e => {
    console.log('삭제해줘')
    // 여기서 App.js에게 삭제 대상의 id를 전달
    console.log(item.id);
    onDelete(item.id);
  };

  return (
    <li className={styles['goal-item']}
      onClick={deleteHandler}>
      {item.text}
    </li>
  );
};

export default CourseItem;