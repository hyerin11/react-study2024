import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {

  // 선택된 연도로 재 렌더링하기 위해 연도를 상태값으로 관리
  const [filteredYear, setFilteredYear] 
          = useState(new Date().getFullYear());

  const onFilterChange = (filteredYear) => {
    // ExpenseFilter에 있는 선택된 연도값을 여기서 출력!
    console.log('ExpenseList: ', filteredYear);
    setFilteredYear(filteredYear);
  };

  // 연도로 필터링한 배열
  const filteredExpenses = expenses
  .filter(ex => ex.date.getFullYear().toString() === filteredYear);

  //지출데이터가 있을 때 보여주는 태그
  const expenseContent = filteredExpenses
  .map(({ title, price, date }) => (
  <ExpenseItem
    key={Math.random().toString()}
    title={title}
    price={price}
    date={date}
  />
));

  //지출데이터가 없을 때 보여주는 태그
  const noContent = <p>지출 항복이 없습니다</p>


  return (
    <div className="expenses">
      <ExpenseFilter onChangeFilter={onFilterChange} />

      {filteredExpenses.length > 0 ? expenseContent : noContent}
    </div>
  );
};

export default ExpenseList;
