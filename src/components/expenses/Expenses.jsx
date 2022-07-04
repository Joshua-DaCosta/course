import React, { useState } from 'react';
import ExpenseItem from '../expenseItem/ExpenseItem'
import './Expenses.css'
import Card from '../card/Card';
import ExpenseFilter from '../expensesFilter/ExpenseFilter';

const Expenses = ({expensesData}) => {
  const [year, setYear] = useState('');
  const filteredByYear = expensesData.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  const filterChangeHandler = (filteredYear) => {
    setYear(filteredYear);
  }

  const expenses = (year) ? filteredByYear : expensesData;
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter year={year} filterChangeHandler={filterChangeHandler} />
        {expenses.map(({ id, title, amount, date }) => {
          return (
            <ExpenseItem key={id} date={date} title={title} amount={amount} />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses