import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { v4 as uuidv4 } from "uuid";

const dummyData = [
  {
    id: uuidv4(),
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(),
  },
  {
    id: uuidv4(),
    title: "New TV",
    amount: 799.49,
    date: new Date(),
  },
  {
    id: uuidv4(),
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(),
  },
  {
    id: uuidv4(),
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevValue) => {
      return [expense, ...prevValue];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
