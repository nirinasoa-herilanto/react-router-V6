import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const isActiveLinkHandler = ({ isActive }) =>
    isActive ? classes['active'] : undefined;

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to={'/'} className={isActiveLinkHandler} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/events'} className={isActiveLinkHandler}>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
