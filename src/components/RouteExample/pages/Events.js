import React, {useEffect, useState} from 'react';
import {Link, useLoaderData} from "react-router-dom";
import EventList from "../components/EventList";
import EventNavigation from "../layout/EventNavigation";


const Events = () => {

  // loader가 리턴한 데이터 받아오기
  const eventList = useLoaderData();
  // console.log(aaa);

  // const [eventList, setEventList] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch('http://localhost:8282/events');
  //     const jsonData = await response.json();
  //     setEventList(jsonData);
  //   })(); // 바로 실행
  //
  // }, []);


  return (
    <>
      <h1>Events Page</h1>
      {/*<EventNavigation />*/}
      <EventList eventList={eventList} />
    </>
  );
};

export default Events;