import React from 'react';
import EventList from '../components/EventList';
import { useLoaderData } from 'react-router-dom';

const Events = () => {

  // loader가 리턴한 데이터 받아오기
  const eventList = useLoaderData();
  console.log(eventList);


  console.log('event page rendering!')


  return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList} />
    </>
  );
};

export default Events;


//loader를 app.js로부터 아웃소싱
console.log('loader call!'); //렌더링 페이지보다 로더가 먼저 호출된다

export const loader = async() => {
    // 이 페이지가 열릴때 자동으로 트리거되어 호출되는 함수
    // 이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있습니다.        
    // console.log('loader call!!');
    const response = await fetch('http://localhost:8282/events');
    //const jsonData = await response.json();

    // loader가 리턴한 데이터는 loader를 선언한 컴포넌트와 그 하위 컴포넌트에서
    // 언제든 불러서 사용할 수 있다.
    //console.log(jsonData);

    //loader에서 fetch의 결과를 바로 리턴하면 알아서 json을 추출해준다.(loader에서만 가능)
    
    console.log(response.status);

    if(!response.ok){
    
        const errorText = await response.text();

      throw new Response(
        JSON.stringify({message: errorText}),
        {
            status: response.status
        }
    ); 
      //return response; //ok아닐 때 error message
    }
    
    
    return response; //ok일 때 events[]배열
};