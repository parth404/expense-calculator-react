import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date(2022, 0, 16),
    title: "Utilities",
    amount: 494.32,
  },
  {
    id: "e2",
    date: new Date(2022, 0, 6),
    title: "Rent",
    amount: 432.0,
  },
  {
    id: "e3",
    date: new Date(2022, 1, 11),
    title: "Food",
    amount: 737.0,
  },
  {
    id: "e4",
    date: new Date(2022, 0, 16),
    title: "Car Insurance",
    amount: 294.67,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
