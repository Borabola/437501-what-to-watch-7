import React from 'react';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../../const';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';

function NotFound() {

  return (

    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />

        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">404 Not Found</h2>
            <Link className="film-card__title" to={AppRoute.ROOT} >Link to Main Page</Link>

          </div>
        </div>
      </div>
    </section>

  );
}

export default NotFound;
