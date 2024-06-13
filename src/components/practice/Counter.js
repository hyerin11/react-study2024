import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0);

  const increaseHandler = e => {
    // setCount(count + 1);
    // setCount(count + 1);
    //2씩 올리고 싶어서 한번 더 써도
    //useState의 setter는 상태값을 업데이트할 때
    //렌더링 전 까지 이전 상태값을 참조한다

    //해결방법 ) 함수형 업데이트를 사용한다

    setCount((prev)=> {
        console.log('변경 이전 값: ', prev);
        //변경 이후 값을 반환한다
        return prev+1;
    });

    setCount(count => count + 1);

    //상태값의 변경은 실시간으로 일어나지 않는다.
    //해결방안 : useEffect 훅으로 해결할 수 있다.(나중에 배움)
    console.log('변경 이후 값: ', count);
  };

  return (
    <div>
        <h1>숫자 : {count}</h1>
        <button onClick={increaseHandler}>증가</button>
        <button onClick={e => setCount(count - 1)}>감소</button>
    </div>
  )
}

export default Counter