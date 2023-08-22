import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
  const params = useParams();

  return (
    <section>
      <h1>{`Event n°: ${params.eventId}`}</h1>
    </section>
  );
};

export default EventDetailPage;
