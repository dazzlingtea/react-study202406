import React from "react";

import styles from './EventForm.module.scss';
import {useParams, useNavigate} from "react-router-dom";

const EventForm = ({method, event={}}) => {

  const {
    title,
    desc: description,
    'img-url': image,
    'start-date': date
  } = event;

  // const {eventId: id} = useParams();
  const navigate = useNavigate();

  const cancelHandler = e => {
    // window.location.href = '/events/' + id
    // navigate('/events/'+id);
    navigate('..'); // 상대경로 잘 작동
  };

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title"
               defaultValue={event ? title : ''} required/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image"
               defaultValue={event ? image : ''} required/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date"
               defaultValue={event ? date : ''} required/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5"
                  defaultValue={event ? description : ''} required/>
      </p>
      <div className={styles.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>{method === 'post' ? 'Save' : 'Modify'}</button>
      </div>
    </form>
  );
};

export default EventForm;
