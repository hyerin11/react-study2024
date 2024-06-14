import React from 'react';
import Chart from './Chart';

const ExpenseChart = () => {
  
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  /**
   * 해당 연도의 모든 지출데이터배열에서 월 별로 지출액을 합산하여
   * chartDataPoints배열에 value값에 누적 저장한다
   */


  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;