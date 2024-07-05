import React, {useEffect, useState} from 'react';
import {useLoaderData, json} from "react-router-dom";
import EventList from "../components/EventList";
import EventSkeleton from "../components/EventSkeleton";


const Events = () => {

  // loader가 리턴한 데이터 받아오기
  // const eventList = useLoaderData();

  // console.log('loader 리턴 : ', eventList);

  // 무한스크롤 - loader 대신 기존 방법대로
  // 서버에서 가져온 이벤트 목록
  const [ events, setEvents] = useState([]);

  // 로딩 상태 체크
  const [loading, setloading] = useState(false);


  // 서버로 목록 조회 요청 보내기
  const loadEvents = async()=> {

    console.log('start loading... ');
    setloading(true);

    const response = await fetch('http://localhost:8282/events/page/1?sort=date');
    const events = await response.json();

    setEvents(events); // fetch 종료시 스켈레톤 안보이게 처리
    setloading(false);
    console.log('end loading!!');
  }

  // 초기 이벤트 1페이지 목록 가져오기
  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <>
      <EventList eventList={events} />
      {loading && <EventSkeleton/>}
    </>
  );
};

export default Events;

// loader를 app.js로부터 아웃소싱
// export const loader = async () => {
//
//   const response = await fetch('http://localhost:8282/events/page/3?sort=date');
//
//   if(!response.ok) {
//     const errorText = await response.text();
//
//     // throw new Response(JSON.stringify({ message: errorText }),
//     throw json(     // router의 json 함수를 사용하면 바로 에러 객체 보낼 수 있음
//       { message: errorText },
//       {
//         status: response.status
//       }
//     );
//     // return response; // body error message ex) sort가 없습니다 가 들어있음
//   }
//
//   return response; // ok일 경우 events[]
// };