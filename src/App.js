import React from 'react';
import './App.css';
import ExpenseList from './components/expenses/ExpenseList';
import NewExpense from './components/new-expense/NewExpense';


const App = () => {

  // 서버에서 지출항목 JSON 배열을 응답받음
  const expenses = [
    {
      title: '치킨',
      price: 30000,
      date: new Date(2024, 6 - 1, 3)
    },
    {
      title: '족발',
      price: 40000,
      date: new Date(2023, 12 - 1, 17)
    },
    {
      title: '헬스장',
      price: 300000,
      date: new Date(2024, 6 - 1, 12)
    },
    {
      title: '피자',
      price: 10000,
      date: new Date(2022, 3 - 1, 4)
    },
    {
      title: '사탕',
      price: 500,
      date: new Date(2023, 1 - 1, 1)
    },
  ];


//ExpenseFrom에게 내려보낼 함수
const onAddExpense = (userInput) => {
  console.log('App.js가 내려보낸 함수 호출!');
  //console.log(userInput);

  expenses.push(userInput);
  console.log(expenses);
};


//ExpenseFilter에게 내려보낼 함수=================
// const onAdd = (userInput) => {
//   console.timeLog('App.js가 내려보낸 함수이다');

//   filter.push(userInput);
//   console.log(filter);
// }

  return (
    <>
      <NewExpense onSave={onAddExpense} />
      <ExpenseList expenses={expenses} />
    </>
  );
};

export default App;