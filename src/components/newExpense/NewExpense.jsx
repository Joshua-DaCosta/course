import React from 'react';
import './NewExpense.css';
import expenses from '../../data/expenses';
import ExpenseForm from './ExpenseForm';
const NewExpense = () => {
   
const saveExpenseData = (expenseData) => {
  expenses.push({...expenseData, id: Math.random()});
}

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseData}/>
    </div>
  )
}


export default NewExpense