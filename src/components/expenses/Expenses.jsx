import React, { useState } from "react";
import "./Expenses.css";
import Card from "../card/Card";
import ExpenseFilter from "../expensesFilter/ExpenseFilter";
import ExpensesList from "../expensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expensesData }) => {
  const [year, setYear] = useState("");
  const filteredByYear = expensesData.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  const filterChangeHandler = (filteredYear) => {
    setYear(filteredYear);
  };


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          year={year}
          filterChangeHandler={filterChangeHandler}
          setYear={setYear}
        />
        <ExpensesChart expenses={filteredByYear} />
        <ExpensesList
          year={year}
          filteredByYear={filteredByYear}
          expensesData={expensesData}
        />
      </Card>
    </div>
  );
};

export default Expenses;
