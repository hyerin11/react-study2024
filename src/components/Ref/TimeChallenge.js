import React, { useState } from 'react';

const TimerChallenge = ({ title, targetTime }) => {

  // 타이머가 시작되었는지를 확인하는 상태값
  const [timerStarted, setTimerStarted] = useState(false);

  // 타겟시간이 종료되었는지 여부
  const [timerExpired, setTimerExpired] = useState(false);

  let timer;
  const startHandler = e => {

    timer = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000); //초로 보내지만 밀리초로 받았기 때문에 *1000

    setTimerStarted(true);
  };

// stop이 작동하지 않는 이유는
// start할 때 timer변수가 지역변수이기 때문에
// 상태변수의 setter호출시 리렌더링 되면서 새로운 지역변수로 바뀐다.
// stop시 timer와 start시 timer는 다른 변수이다.

const stopHandler = e => { //버튼은 하나인데, start와 stop 핸들러가 2개일 때
    console.log('stop!')
    clearTimeout(timer);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? stopHandler : startHandler}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
};

export default TimerChallenge;