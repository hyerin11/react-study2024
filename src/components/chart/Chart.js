import React from 'react';
import ChartBar from './ChartBar';
import './ChartBar.css';
import './Chart.css';

const Chart = ({dataPoints}) => {
    console.log('dataPoints: ', dataPoints);

    /**
     * dataPoints배열에서 12개 요소의 value를 합산하여 연도 지출 총액을 계산한다
     * 그리고 각 chartBar에 (해당 월 지출 총액 / 연도지출 총액) 비율을 전달한다
     */


    

  return (
    <div className="chart">

        {
            dataPoints
                .map((dp) => (<ChartBar key={dp.label} label={dp.label} />))
        }      
    </div>
  );
};

export default Chart;