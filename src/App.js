import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

const App = () => {
  return (
    <div>
      <section id="goal-form">
        <CourseInput />
      </section>
      <section id="goals">
        <CourseList />
      </section>
    </div>
  );
};

export default App;


// import './App.css';
// import React, {useState} from "react";
// import ExpenseList from "./components/expenses/ExpenseList";
// import NewExpense from "./components/new-expense/NewExpense";
//
// const App = () => {
//
//   // 서버에서 지출항목 JSON 배열을 응답받음
//   const expenses = [
//     {
//       title: "치킨 주문",
//       price: 12000,
//       date : new Date(2024, 6-1, 3)
//     },
//     {
//       title: "족발 존맛",
//       price: 27000,
//       date : new Date(2023, 6-1, 7)
//     },
//     {
//       title: "헬스장 등록",
//       price: 110000,
//       date : new Date(2024, 6-1, 12)
//     },
//     {
//       title: "돼지바 빙수",
//       price: 9000,
//       date : new Date(2022, 8-1, 16)
//     },
//     {
//       title: "파파존스 페퍼로니피자",
//       price: 21000,
//       date : new Date(2023, 5-1, 4)
//     }
//   ];
//
//   // 배열을 상태변수로 관리
//   const [expenseList, setExpenseList] = useState(expenses);
//
//   // ExpenseForm 에게 내려보낼 함수
//   const onAddExpense = (userInput) => setExpenseList([...expenseList, userInput]);
//   // const onAddExpense = (userInput) => {
//   //
//   //   expenseList.push(userInput);
//   //   const newExpenseList = [...expenseList];
//   //   setExpenseList([...expenseList]);
//   //
//   // };
//
//
//   return (
//     <>
//       <NewExpense onSave={onAddExpense} />
//       <ExpenseList expenses={expenseList} />
//
//     </>
//   );
// }
//
// export default App;
