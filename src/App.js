import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  //jsx문법
  // const $h2 = React.createElement('h2', null, '오늘 인사이드아웃2 보러가요!!');
  const $h2 = <h2>우리집 강아지는 복슬강아지</h2>;

  //jsx규칙
  //1. return 안에 있는 태그는 형제코드(2개)가 있을 수 없기 때문에 반드시 하나의 태그로 묶어줘야 한다
  //2. 빈태그(닫는 태그가 없는)는 />로 마감해야 한다. ex) img, br 등
  //3. 태그의 class속성은 자바스크립트 키워드 class와 겹쳐 className으로 표기한다 ex)for => htmlFor
  //                                                        안붙이면 자바코드의 for인줄 안다
  //4. 의미없는 부모는 div가 아닌 <React.Fragment>로 감싼다. 혹은 <></>로 표현할 수 있다
  //5. 변수값이나 함수를 출력할 때는 {}로 감싸면 된다.

  const hello = '안녕!' 
  return (
    <React.Fragment>
      <div className="App">

        <h1>{hello}</h1>
        {$h2}

        <div>
          <input type="text" />
          <label htmlFor=""></label>
        </div>

      </div>

    </React.Fragment>
  );
}

export default App;
