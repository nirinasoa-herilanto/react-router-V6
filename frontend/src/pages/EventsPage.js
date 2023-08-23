import React, { Suspense } from 'react';
import { Await, defer, json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <Suspense
      fallback={<div style={{ textAlign: 'center' }}>loading events ...</div>}
    >
      <Await resolve={events}>
        {({ events }) => <EventsList events={events} />}
      </Await>
    </Suspense>
  );
};

const loadEvents = async () => {
  const res = await fetch('http://localhost:8000/events');

  if (!res.ok) {
    throw json({ message: 'Could not fetch events !!!' }, { status: 500 });
  }

  const data = await res.json();

  return data;
};

// - always executed on the client side, not on the server, happen on the browser
// - we can use browser API inside
// Not allowed: uses of React Hook
export const loader = async () => {
  // we can bundle more data fetching by setting a key
  return defer({
    events: loadEvents(),
  });
};

export default EventsPage;
