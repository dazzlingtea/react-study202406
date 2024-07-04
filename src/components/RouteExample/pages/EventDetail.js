import React, {useEffect, useState} from 'react';
import {useLoaderData, useParams} from "react-router-dom";

const EventDetail = () => {

  const { eventId: id} = useParams();
  const [ev, setEv] = useState({});



  useEffect(()=>{
    (async ()=>{
      const response = await fetch(`http://localhost:8282/events/${id}`);

      const json = await response.json();
      setEv(json);

    })();
  },[]);


  return (
    <>
      <h1>EventDetail Page</h1>
      <p>{ev.title}</p>
      <p>{ev.desc}</p>
      <p>{ev['start-date']}</p>
      }
    </>
  );
};

export default EventDetail;