import React from 'react';
import ExpenseItem from '../expenseItem/ExpenseItem'
import './Expenses.css'
import Card from '../card/Card';

const Expenses = ({expensesData}) => {
  return (
    <Card className='expenses'>
      {expensesData.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem key={id} date={date} title={title} amount={amount} />
        );
      })}
    </Card>
  );
}

export default Expenses