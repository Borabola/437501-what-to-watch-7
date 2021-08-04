import React from 'react';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../../const';
import Logo from '../../logo/logo';

function NotFound() {

  return (

    <section className="film-card" style={{height: '100vh'}}>
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__desc">
            <h2 className="film-card__title">404. Page not found</h2>
            <Link className="film-card__title" to={AppRoute.ROOT} >Link to Main Page</Link>

          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
