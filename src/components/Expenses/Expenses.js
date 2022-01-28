import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [pickedYear, setPickedYear] = useState("2020");
  const onChangeFilterHandler = (enteredYear) => {
    setPickedYear(enteredYear);
  };
  const filteredItems = props.items.filter((item) => {
    return item.date.toString().includes(pickedYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={pickedYear}
          onChangeFilter={onChangeFilterHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
