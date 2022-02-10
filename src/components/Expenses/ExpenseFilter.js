import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

  const onClickHandler = (event) => {
    console.log('clicked',event.target.value)
  props.onSelect(event.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={onClickHandler}>
          <option value='2022' >2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;