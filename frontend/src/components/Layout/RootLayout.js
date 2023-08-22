import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../MainNavigation';

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        {navigation.state === 'loading' ? (
          <div style={{ textAlign: 'center' }}>
            <p>Loading ...</p>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </React.Fragment>
  );
};

export default RootLayout;
