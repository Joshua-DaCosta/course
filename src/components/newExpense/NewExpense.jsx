import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = ({ onAddExpense }) => {
  const saveExpenseData = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random(),
    };
    onAddExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        saveExpenseData={saveExpenseData}
      />
    </div>
  );
};

export default NewExpense;
