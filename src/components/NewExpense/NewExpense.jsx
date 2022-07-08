import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuidv4 } from "uuid";

function NewExpense(props) {
  const [reveal, setReveal] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    props.onAddExpense(expenseData);
    setReveal(false);
  };

  const revealHandler = () => {
    setReveal(true);
  };

  const cancelReveal = () => {
    setReveal(false);
  };

  return (
    <div className="new-expense">
      {!reveal && <button onClick={revealHandler}>Add New Expense</button>}
      {reveal && (
        <ExpenseForm
          onCancelReveal={cancelReveal}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
