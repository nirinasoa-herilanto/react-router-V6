import React from 'react';

import PageContent from '../components/PageContent';

const HomePage = () => {
  const title = 'Welcome!';
  const message = 'Discover all amazing events';

  return (
    <section>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </section>
  );
};

export default HomePage;
