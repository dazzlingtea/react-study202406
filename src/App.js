import './App.css';
import React from "react";
import Hello from "./components/Hello";
import Bye from "./components/Bye";
import Greet from "./components/Greet";
import ExpenseItem from "./components/expenses/ExpenseItem";

const App = () => {

    return (
      <>
        <ExpenseItem />
      </>
    );
}

export default App;
