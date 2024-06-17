import React, {useState} from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

const App = () => {

  const [userList, setUserList] = useState([]);

  const addUserHandler = user => {
    console.log(user);
    // 상태값 바꾸기 위해서 카피해서 새 배열로 만들고 setter에 대입

    setUserList(prev => [
      ...prev,
      {...user,
        id: Math.random().toString()
      }
    ]);
  };

  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
};

export default App;

