import React, { useState } from "react";
import "./App.css";
import expensesData from "./data/expenses";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  const [expensesArr, setExpensesArr] = useState(expensesData);

  const addExpenseHandler = (expense) => {
setExpensesArr((prevState) => {
  return [expense, ...prevState];
});
  };

  return (
    <div className="app">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesData={expensesArr} />
    </div>
  );
}

export default App;
