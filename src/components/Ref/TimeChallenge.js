import React, { useRef, useState } from 'react';

const TimerChallenge = ({ title, targetTime }) => {

  // timer를 ref변수로 관리
  const timer = useRef();

  // 타이머가 시작되었는지를 확인하는 상태값
  const [timerStarted, setTimerStarted] = useState(false);

  // 타겟시간이 종료되었는지 여부
  const [timerExpired, setTimerExpired] = useState(false);

  const startHandler = e => {

    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  };

  const stopHandler = e => {
    clearTimeout(timer.current);
  };

  //전역변수로 timer 설정시 5초 -> 1초 -> 1초 -> 5초 클릭하면
  //5초짜리 timer가 정상 작동하지 않는다.
  //그 이유느, 4개의 TimerChallenge컴포넌트가 1개의 timer를 공유하기 때문에
  //처음 5초짜리 timer가 1초짜리 timer에 의해 덮어씌워지기 때문이다.
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