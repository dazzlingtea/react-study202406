import './App.css';
import React from "react";
// import Hello from "./components/Hello";
// import Bye from "./components/Bye";
// import Greet from "./components/Greet";
import ExpenseItem from "./components/expenses/ExpenseItem";

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

  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />

    </>
  );
}

export default App;
