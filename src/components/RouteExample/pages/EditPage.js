import React from 'react';
import EventForm from "../components/EventForm";

const EditPage = () => {
  return (
    <EventForm method={'patch'}/>
  );
};

export default EditPage;