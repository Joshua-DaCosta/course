import React from "react";
import './ExpenseItem.css';

const ExpenseItem = ({date, title, amount}) => {



  return (
    <div className="expense-item">
      <div>
        <div>{date}</div>
      </div>
      <h2 className="expense-item__description">Title</h2>
      <div className="expense-item__price">Amount</div>
    </div>
  );
};

export default ExpenseItem;
