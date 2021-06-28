import React from 'react';
import Logo from '../../logo/logo';
import PageFooter from '../../page-footer/page-footer';
import FilmList from '../../film-list/film-list';
import {filmListProp} from '../../film-list/film-list.prop';


function MyList({films}) {
  const url = '#';

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" href={url}>Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={films} />
      </section>

      <PageFooter />
    </div>
  );
}

MyList.propTypes = {
  films: filmListProp,
};


export default MyList;
