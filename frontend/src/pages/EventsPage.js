import React from 'react';
import EventsList from '../components/EventsList';

const eventsData = [
  {
    id: 'e-1',
    title: 'Learning React Router V6',
    content: 'Content of React Router V6 and his features ...',
  },
];

const EventsPage = () => {
  return (
    <section>
      <EventsList events={eventsData} />
    </section>
  );
};

export default EventsPage;
