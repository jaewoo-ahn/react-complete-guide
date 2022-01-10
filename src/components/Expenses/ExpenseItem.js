import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, settitle] = useState(props.title);

  const clickHandler = () => {
    settitle("Updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
