import React from 'react';

import EventForm from '../components/EventForm';
import { json, redirect } from 'react-router-dom';

const NewEventPage = () => {
  return (
    <section>
      <EventForm method={'POST'} />
    </section>
  );
};

// like loader(), but allow to post/update data from server
export const action = async ({ request, params }) => {
  const data = await request.formData();

  const inputEvent = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const res = await fetch('http://localhost:8000/events', {
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputEvent),
  });

  if (!res.ok) {
    throw json({ message: 'Can not saved event' }, { status: 500 });
  }

  return redirect('/events');
};

export default NewEventPage;
