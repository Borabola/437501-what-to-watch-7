import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import PageFooter from '../../page-footer/page-footer';
import FilmList from '../../film-list/film-list';
import Tabs from '../../tabs/tabs';
import BtnShowMore from '../../btnShowMore/btnShowMore';
import {FilmsQnt} from '../../../const';
import {filmListProp} from '../../film-list/film-list.prop';
import {reviewListProp} from '../../tabs/review.prop';

const sortSimilarFilms = (films, currentFilm) => films.filter((film) => currentFilm.genre === film.genre).filter((film) => film !== currentFilm);

function Film({films, comments}) {
  const filmParam = useParams();
  const currentFilm = films.find((film) => film.id === filmParam.id);
  const [showenfilmsQnt, setShowenfilmsQnt] = useState(FilmsQnt.SIMILAR);

  const showMoreFilmsHandler = () => {
    setShowenfilmsQnt(showenfilmsQnt + FilmsQnt.SIMILAR);
  };

  const sortedFilms = sortSimilarFilms(films, currentFilm);

  return (

    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${filmParam.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327" />
            </div>
            <Tabs currentFilm={currentFilm}  comments={comments} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={sortedFilms}  filmsNumber={showenfilmsQnt} />
          {showenfilmsQnt < sortedFilms.length && <BtnShowMore onBtnClick={showMoreFilmsHandler}/>}
        </section>

        <PageFooter />
      </div>
    </>
  );
}

Film.propTypes = {
  comments: reviewListProp,
  films: filmListProp,
};


export default Film;
