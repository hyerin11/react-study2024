

import React from 'react';
import './App.css';
import ExpenseItem from './components/expenses/ExpenseItem';




  //문자열을 넣을 때는 {}중괄호를 생략할 수 있으나, 그 밖의 다른 것들은 {}중괄호를 필수로 넣어줘야 한다

    const App = () => {
      return (
        <>
        <ExpenseItem title="치킨" price={8000} date={new Date(2024, 6, 3) }/>
        <ExpenseItem title="피자" price={9000} date={new Date(2024, 6, 7) } />
        <ExpenseItem title="햄버거" price={8000} date={new Date(2024, 6, 12) } />
        </>
      );
    };
  
  

export default App;
