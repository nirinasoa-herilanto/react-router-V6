import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

const EditEventPage = () => {
  const data = useRouteLoaderData('event-detail');

  return (
    <section>
      <h1 style={{ textAlign: 'center' }}>Edit event</h1>
      <EventForm event={data.event} />
    </section>
  );
};

export default EditEventPage;
