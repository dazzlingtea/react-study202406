import React from 'react';
import styles from './EventList.module.scss'

const EventList = ({ eventList }) => {

  const { events, list, item, content } = styles;

  return (
    <div className={events}>
      <h1>All Events</h1>
      <ul className={list}>
        {
          eventList.map(ev => (
            <li key={ev.id} className={item}>
              <a href="#">
                <img src={ev.image} alt={ev.title}/>
                <div className={content}>
                  <h2>{ev.title}</h2>
                  <time>{ev.date}</time>
                </div>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default EventList;