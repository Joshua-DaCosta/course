import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ saveExpenseData, setIsActive }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const amountHandler = (e) => {
    const { value } = e.target;
    setAmount(value);
  };

  const dateHandler = (e) => {
    const { value } = e.target;
    setDate(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      title,
      amount: +amount,
      date: new Date(date.replace(/-/g, "/")),
    };
    console.log(typeof formData.amount);
    saveExpenseData(formData);
    setTitle("");
    setAmount("");
    setDate("");
    setIsActive(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input required type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label className="new">Amount</label>
          <input
            required
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            value={date.toString()}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => setIsActive(false)}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
