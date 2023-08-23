import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

import NewsletterSignup from './NewsletterSignup';

const MainNavigation = () => {
  const isActiveLinkHandler = ({ isActive }) =>
    isActive ? classes['active'] : undefined;

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={isActiveLinkHandler} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={isActiveLinkHandler}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/newsletter" className={isActiveLinkHandler}>
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
};

export default MainNavigation;
