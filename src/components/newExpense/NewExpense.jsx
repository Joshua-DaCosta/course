import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = ({ onAddExpense }) => {

const [isActive, setIsActive] = useState(false);



  const saveExpenseData = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random(),
    };
    onAddExpense(expense);
  };


  return (
    <div className="new-expense">
      { isActive && <ExpenseForm
        saveExpenseData={saveExpenseData}
        setIsActive={setIsActive}
      />}

      { isActive || <button type="button" onClick={() => setIsActive(true)}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
