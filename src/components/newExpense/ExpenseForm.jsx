import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ saveExpenseData }) => {
  const [inputs, setInputs] = useState({});

  const titleHandler = (e) => {
    setInputs((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const amountHandler = (e) => {
    setInputs((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };

  const dateHandler = (e) => {
    setInputs((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    saveExpenseData(inputs);
    setInputs({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputs.title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label className="new">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputs.amount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={inputs.date} onChange={dateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
