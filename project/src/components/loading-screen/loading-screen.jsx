import React from 'react';

function LoadingScreen() {
  return (

    <section className="film-card">
      <div className="film-card__bg">
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">


      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">

          <div className="film-card__desc">
            <div className="loader">Loading...</div>

          </div>
        </div>
      </div>
    </section>

  );
}

export default LoadingScreen;
