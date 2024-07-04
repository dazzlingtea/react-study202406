import React, {useEffect, useState} from 'react';
import {useLoaderData, useParams} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {

  const { eventId: id} = useParams();
  const [ev, setEv] = useState({});



  useEffect(()=>{
    (async ()=>{
      const response = await fetch(`http://localhost:8282/events/${id}`);
      // 예외처리 필요한데 생략
      const json = await response.json();
      setEv(json);

    })();
  },[]);


  return (
    <EventItem event={ev} />
  );
};

export default EventDetail;