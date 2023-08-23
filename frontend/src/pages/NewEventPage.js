import React from 'react';

import EventForm from '../components/EventForm';

const NewEventPage = () => {
  return (
    <section>
      <EventForm method={'POST'} />
    </section>
  );
};

export default NewEventPage;
