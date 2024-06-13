import './App.css';
import React from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/new-expense/NewExpense";

const App = () => {

  // 서버에서 지출항목 JSON 배열을 응답받음
  const expenses = [
    {
      title: "치킨 주문",
      price: 12000,
      date : new Date(2024, 6-1, 3)
    },
    {
      title: "족발 존맛",
      price: 27000,
      date : new Date(2024, 6-1, 7)
    },
    {
      title: "헬스장 등록",
      price: 110000,
      date : new Date(2024, 6-1, 12)
    }
  ];
  // ExpenseForm 에게 내려보낼 함수
  const onAddExpense = (userInput) => {
    console.log('App.js가 내려보낸 함수 호출!')
    // console.log(userInput);
    expenses.push(userInput);
    console.log(expenses);
  };

  return (
    <>
      <NewExpense onSave={onAddExpense} />
      <ExpenseList expenses={expenses} />

    </>
  );
}

export default App;
