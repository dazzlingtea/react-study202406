import React, {useEffect, useState} from 'react';
import {useLoaderData, useParams} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {

  // const { eventId: id} = useParams();
  // const [ev, setEv] = useState({});
  //
  // useEffect(()=>{
  //   (async ()=>{
  //     const response = await fetch(`http://localhost:8282/events/${id}`);
  //     // 예외처리 필요한데 생략
  //     const json = await response.json();
  //     setEv(json);
  //
  //   })();
  // },[]);

  const ev = useLoaderData();

  return (
    <EventItem event={ev} />
  );
};

export default EventDetail;

export const loader = async ({ params }) => {
  // console.log('abc: ', abc.params.eventId);
  const {eventId: id} = params;

  // use 로 시작하는 함수인 리액트훅은 컴포넌트 내부에서만 사용가능 ->  id, setEv 사용 불가
  const response = await fetch(`http://localhost:8282/events/${id}`);

  if(!response.ok) {
    // 예외처리
  }

  return await response.json();

};