import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const pickedYearHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control expenses-filter select">
        <label>Filter by year</label>
        <select value={props.selected} onChange={pickedYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
