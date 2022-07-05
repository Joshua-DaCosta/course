import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "../expenseItem/ExpenseItem";

const ExpensesList = ({ year, filteredByYear, expensesData }) => {
  const expenses = year ? filteredByYear : expensesData;

  if (expenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses Available. Add an expense to start tracking.
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} date={date} title={title} amount={amount} />
      ))}
    </ul>
  );
};

export default ExpensesList;
