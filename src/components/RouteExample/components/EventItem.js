import React from "react";
import styles from './EventItem.module.scss';
import {Link, redirect, useNavigate} from "react-router-dom";

const EventItem = ({ event }) => {

  const {
    'event-id': id,
    title,
    desc: description,
    'img-url':image,
    'start-date':date
  } = event;

  const navigate = useNavigate();

  // const fetchDelete = async () => {
  //   const res = await fetch(`http://localhost:8282/events/${id}`, {
  //     method: 'DELETE'
  //   });
  // }

  const deleteHandler =  (e) => {
    // EventDetail(여기에 Pathvariable로 id 존재) -> EventItem
    // console.log('id: ', id)
    if(!window.confirm('정말 삭제하시겠습니까?')) return;

    // fetchDelete();

    (async() => {
      await fetch(`http://localhost:8282/events/${id}`, {
        method: 'DELETE'
      });
    })();

    setTimeout(() => {
      navigate('/events');
    }, 200);

  };

  return (
    <article className={styles.event}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <time>{date}</time>
      <p>{description}</p>
      <menu className={styles.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={deleteHandler}>Delete</button>
      </menu>
    </article>
  );
};

export default EventItem;
