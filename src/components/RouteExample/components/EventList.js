import React from 'react'
import styles from './EventList.module.scss';
import { Link, useLoaderData } from 'react-router-dom';

const EventList = ({ eventList }) => { 

  // loader데이터는 loader를 선언한 페이지 밑 하위 컴포넌트까지도 어디든 사용 가능하다
  const data = useLoaderData();
  //console.log('loader data: ', data);

  const {events, list, item, content} = styles;

  return (
    <div className={events}>
      <h1>All Events</h1>
      <ul className={list}>
        {
          eventList.map(ev => (
            <li key={ev.id} className={item}>
              <Link to={ev.id.toString()}>
              {/* 링크에는 문자타입이 들어가야함. 숫자타입x */}
                <img src={ev['img-url']} alt={ev.title} />
                <div className={content}>
                  <h2>{ev.title}</h2>
                  <time>{ev.startDate}</time>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default EventList