import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import EventList from "../components/EventList";
import EventNavigation from "../layout/EventNavigation";


const Events = () => {

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8282/events');
      const jsonData = await response.json();
      setEventList(jsonData);
    })(); // 바로 실행

  }, []);

  // useEffect(() => {
  //
  //   const fetchEvents = async () => {
  //     const response = await fetch('http://localhost:8282/events');
  //     const jsonData = await response.json();
  //     setEventList(jsonData);
  //
  //   };
  //
  //   fetchEvents();
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