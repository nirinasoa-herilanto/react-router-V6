import React from 'react';
import { json, redirect, useRouteLoaderData } from 'react-router-dom';

import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');

  return (
    <section>
      <EventItem event={data.event} />
    </section>
  );
};

// dynamic loader
export const loader = async ({ request, params }) => {
  const id = params.eventId;

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
