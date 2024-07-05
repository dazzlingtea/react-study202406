import React, {useEffect, useState} from 'react';
import {useLoaderData, json} from "react-router-dom";
import EventList from "../components/EventList";
import EventSkeleton from "../components/EventSkeleton";

// npm install loadsh
import {throttle} from "lodash";


const Events = () => {

  // loader가 리턴한 데이터 받아오기
  // const eventList = useLoaderData();

  // console.log('loader 리턴 : ', eventList);

  // 무한스크롤 - loader 대신 기존 방법대로
  // 서버에서 가져온 이벤트 목록
  const [ events, setEvents] = useState([]);

  // 로딩 상태 체크
  const [loading, setLoading] = useState(false);

  // 현재 페이지 번호
  const [currentPage, setCurrentPage] = useState(1);

  // 더이상 가져올 데이터가 있는지 확인
  const [isFinish, setIsFinish] = useState(false);


  // 서버로 목록 조회 요청 보내기
  const loadEvents = async()=> {

    if(isFinish) {
      console.log('loading finished!');
      return;
    }

    console.log('start loading... ');
    setLoading(true);

    const response = await fetch(`http://localhost:8282/events/page/${currentPage}?sort=date`);
    const { events:loadedEvents, totalCount } = await response.json();

    const updatedEvents = [...events, ...loadedEvents];
    setEvents(updatedEvents);
    setLoading(false); // fetch 종료시 스켈레톤 안보이게 처리

    // 로딩이 끝나면 페이지번호를 1 늘려놓는다.
    console.log('end loading!!');
    setCurrentPage(prevPage => prevPage+1);

    // 로딩이 끝나면 더 가져올 게 있는지 여부를 확인한다.
    setIsFinish(totalCount === updatedEvents.length);

  }

  // 초기 이벤트 1페이지 목록 가져오기
  useEffect(() => {
    loadEvents();
  }, []);

  // 스크롤 핸들러
  const scrollHandler = throttle(() => {
    if(loading ||
      window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeigh
    ) {
      return;
    }

  }, 2000);

  // 스크롤 이벤트 바인딩
  useEffect(() => {
    window.addEventListener('scroll', e=>scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      scrollHandler.cancel(); // 쓰로틀 취소
    }
  }, [currentPage, loading]);
  // 페이지번호나 로딩상태가 바뀌면 스크롤이벤트 취소하고 다시 걸도록 설정

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