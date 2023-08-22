import React from 'react';
import { Outlet } from 'react-router-dom';

import EventsNavigation from '../EventsNavigation';

const EventsLayout = () => {
  return (
    <React.Fragment>
      <EventsNavigation />
      <Outlet />
    </React.Fragment>
  );
};

export default EventsLayout;
