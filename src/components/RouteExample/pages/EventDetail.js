import React from 'react';
import {useLoaderData, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {

  // 사용범위가 본인컴포넌트와 그 하위 컴포넌트(children은 하위가 아님)
  // const ev = useLoaderData(); // 자신의 loader를 불러옴
  const ev = useRouteLoaderData('event-detail'); // 부모의 loader를 불러오는 훅 (지정 ID)

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