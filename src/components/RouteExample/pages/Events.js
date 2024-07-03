import React from 'react';
import {Link} from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: '1',
    title: '여름맞이 이벤트',
    image: 'https://wessen.co.kr/web/upload/NNEditor/20210705/EC97ACEBA684EBA79EEC9DB4EC9DB4EBB2A4ED8AB8_EC9DB4EBB2A4ED8AB8ED8E98EC9DB4ECA780.jpg',
    date: '2024-07-02',
    description: '여름맞이 이벤트 설명'
  },
  {
    id: '2',
    title: '콘서트 이벤트',
    image: 'http://energium.kier.re.kr/attach/board/semothy/20221006/8daf7186d8295947ed8bc84873c9671c.jpg',
    date: '2024-07-15',
    description: '콘서트 이벤트입니다. 존잼'
  },

];

const Events = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {
          DUMMY_EVENTS.map(event => (
            <li key={event.id}>
                <Link to={event.id}>{event.title}</Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default Events;