import React from 'react';
import { useRouteError } from 'react-router-dom';

import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error was occurred';
  let message = 'Something went wrong!!!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found';
    message = 'Ressource not found!!!';
  }

  return (
    <React.Fragment>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </React.Fragment>
  );
};

export default ErrorPage;
