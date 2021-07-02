import React from 'react';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
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

        <UserBlock />
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
