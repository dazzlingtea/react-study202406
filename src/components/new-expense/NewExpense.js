import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onSave}) => {

  const [isFormOpen, setIsFormOpen] = useState(false);

  const formHandler = (e) => {
    setIsFormOpen(!isFormOpen);
  }

  const newExpenseContent = <ExpenseForm onAdd={onSave} formHandler={formHandler}/>;
  const noContent = <button onClick={formHandler}>새로운 지출 추가하기</button>;
  return (
    <div className="new-expense">
      {isFormOpen ? newExpenseContent : noContent}
    </div>
  )


  // return (
  //   <div className="new-expense">
  //     <ExpenseForm onAdd={onSave} />
  //   </div>
  // );
};

export default NewExpense;
