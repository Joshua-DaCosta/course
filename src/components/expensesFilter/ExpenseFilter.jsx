import React from "react";
import "./ExpenseFilter.css";
const ExpenseFilter = ({ year, filterChangeHandler, setYear }) => {
  const dropDownChangeHandler = (e) => {
    if(e.target.value === 'recent'){
      setYear('');
      return
    }
    const year = e.target.value;
    filterChangeHandler(year);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="year">Filter by year</label>
        <select value={year} onChange={dropDownChangeHandler}>
          <option value={"recent"}>Recent</option>
          <option value={"2022"}>2022</option>
          <option value={"2021"}>2021</option>
          <option value={"2020"}>2020</option>
          <option value={"2019"}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
