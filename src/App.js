import './App.css';
import React from "react";
import Hello from "./components/Hello";
import Bye from "./components/Bye";
import Greet from "./components/Greet";
import ExpenseItem from "./components/expenses/ExpenseItem";

const App = () => {

    return (
      <>
        <ExpenseItem title={"치킨 주문"} price={12000} date={new Date(2024, 6, 3)} />
        <ExpenseItem title="족발 존맛" price={27000} date={new Date(2024, 6, 7)} />
        <ExpenseItem title="헬스장 등록" price={110000} date={new Date(2024, 6, 12)} />
      </>
    );
}

export default App;
