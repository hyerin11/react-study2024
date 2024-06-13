import React, {useState} from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ date, title, price: exPrice }) => {

  // console.log('props: ', aaa);

  // 변수 선언
  // const expenseDate = date;
  // const expenseTitle = title;
  // const expensePrice = exPrice;

  // 함수 선언

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };

  const makeFormattedDate = () => {

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };


  //useState는 컴포넌트의 상태값을 관리하며 이 상태값은 렌더링에 영향을 미침
  /**
   * useState 훅의 리턴값은 배열이며
   * 첫 번째 요소는 관리할 상태값이 초기값이고
   * 두 번째 요소는 해당 상태값을 변경할 때 사용하는 setter함수이다.
   */
  const abc = React.useState(title);
  console.log('abc: ', abc); 

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(exPrice);

  // 이벤트 핸들러 선언
  const clickHandler = e => {

    /**
     * useState가 관리하는 상태값은 반드시 setter로만 변경해야 한다.
     */
    const setTitle = abc[1];
    //abc[0] = '하하호호';
    setTitle('하하호호호호');

    // title = "하하호호";
    // console.log('title: ', title);
  };

  console.log('렌더링 전');
  return (
      <Card className='expense-item'>
        <ExpenseDate exDate={date} />
        <div className='expense-item__description'>
          <h2>{abc[0]}</h2>
          <div className='expense-item__price'>{formattedPrice}원</div>
        </div>
        <button id='btn' onClick={clickHandler}>제목 수정</button>
      </Card>
  )
}

export default ExpenseItem