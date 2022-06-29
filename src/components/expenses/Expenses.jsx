import React from 'react';
import ExpenseItem from '../expenseItem/ExpenseItem'
import './Expenses.css'

const Expenses = ({expensesData}) => {
  return (
    <div className='expenses'>
      {expensesData.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem key={id} date={date} title={title} amount={amount} />
        );
      })}
    </div>
  );
}

export default Expenses