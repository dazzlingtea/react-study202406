import React from 'react';
import {useLoaderData} from "react-router-dom";
import EventList from "../components/EventList";


const Events = () => {

  // loader가 리턴한 데이터 받아오기
  const eventList = useLoaderData();

  console.log('loader 리턴 : ', eventList);

  return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList} />
    </>
  );
};

export default Events;

// loader를 app.js로부터 아웃소싱
export const loader = async () => {

  const response = await fetch('http://localhost:8282/events?');

  if(!response.ok) {
    const errorText = await response.text();

    throw new Response(JSON.stringify({ message: errorText }),
      {
        status: response.status
      }
    );
    // return response; // body error message ex) sort가 없습니다 가 들어있음
  }

  return response; // ok일 경우 events[]
};