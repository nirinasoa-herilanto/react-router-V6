import React, { Suspense } from 'react';
import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from 'react-router-dom';

import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

const EventDetailPage = () => {
  const { event, allEvents } = useRouteLoaderData('event-detail');

  return (
    <React.Fragment>
      <Suspense
        fallback={<div style={{ textAlign: 'center' }}>loading event ...</div>}
      >
        <Await resolve={event}>
          {({ event }) => <EventItem event={event} />}
        </Await>
      </Suspense>

      <Suspense
        fallback={<div style={{ textAlign: 'center' }}>loading events ...</div>}
      >
        <Await resolve={allEvents}>
          {({ events }) => <EventsList events={events} />}
        </Await>
      </Suspense>
    </React.Fragment>
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

const loadEventDetail = async (id) => {
  const res = await fetch(`http://localhost:8000/events/${id}`);

  if (!res.ok) {
    throw json(
      { message: 'Could not fetch event detail for selected event.' },
      { status: 400 }
    );
  }

  const data = await res.json();

  return data;
};

// dynamic loader
export const loader = async ({ request, params }) => {
  const id = params.eventId;

  return defer({
    event: await loadEventDetail(id), // wait until it's finish
    allEvents: loadEvents(),
  });
};

export const action = async ({ request, params }) => {
  const id = params.eventId;

  const res = await fetch(`http://localhost:8000/events/${id}`, {
    method: request.method,
  });

  if (!res.ok) {
    throw json({ message: 'Could not delete event.' }, { status: 400 });
  }

  return redirect('/events');
};

export default EventDetailPage;
