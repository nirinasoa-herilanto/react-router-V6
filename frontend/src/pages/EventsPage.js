import React from 'react';
import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

const EventsPage = () => {
  const data = useLoaderData();

  return (
    <section>
      <EventsList events={data.events} />
    </section>
  );
};

export const loader = async () => {
  const res = await fetch('http://localhost:8000/events');

  if (!res.ok) {
    throw new Error('Something went wrong!!!');
  }

  const data = await res.json();

  return data;
};

export default EventsPage;
