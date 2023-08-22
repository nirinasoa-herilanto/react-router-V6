import React from 'react';
import EventsNavigation from '../EventsNavigation';
import { Outlet } from 'react-router-dom';

const EventsLayout = () => {
  return (
    <React.Fragment>
      <EventsNavigation />
      <Outlet />
    </React.Fragment>
  );
};

export default EventsLayout;
