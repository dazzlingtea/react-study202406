import React, {useState} from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

// 기본 더미 데이터
const DUMMY_DATA = [
  {
    id: 'g1',
    text: '리액트 컴포넌트 스타일링 마스터하기'
  },
  {
    id: 'g2',
    text: 'UI/UX 프로그래밍 쌉고수되기'
  },
];

const App = () => {


  return (
    <>
      <AddUsers />
      <UserList />
    </>
  );
};

export default App;

