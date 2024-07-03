import React from 'react';
import EventList from '../components/EventList';
import { useLoaderData } from 'react-router-dom';

const Events = () => {

  // loader가 리턴한 데이터 받아오기
  const eventList = useLoaderData();
  console.log(eventList);

  return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList} />
    </>
  );
};

export default Events;