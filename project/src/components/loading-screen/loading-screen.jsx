import React from 'react';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';

function LoadingScreen() {
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
            <div className="loader">Loading...</div>

          </div>
        </div>
      </div>
    </section>

  );
}

export default LoadingScreen;
