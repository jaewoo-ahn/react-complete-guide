import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = new Date(2021, 2, 25);
  const expenseTitle = "Car insurance";
  const expensePrice = 294.67;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
