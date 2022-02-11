import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [visible, setVisible] = useState(false);
  const [hideButton, setHideButton] = useState(true);


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   eneteredAmount:event.target.value,
    // })
    // Use this method if the state depends on the previous state
    // setUserInput((prevState)=>{
    //   return { ...prevState,enteredAmount:event.target.value };
    // }
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
    setVisible(false);
    setHideButton(true)
  };

  const buttonHandler = () => {
    setVisible(true);
    setHideButton(false);
  };

  return (
    <>
      {hideButton && (
        <div className="new-expense__actions">
          <button onClick={buttonHandler}>Add Expense</button>
        </div>
      )}
      {visible && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                value={enteredAmount}
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={enteredDate}
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
              />
            </div>
            <div className="new-expense__actions">
              <button >Cancel</button>
            </div>
            <div className="new-expense__actions">
              <button type="submit">Add Expense</button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default ExpenseForm;
