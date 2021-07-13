import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import PageFooter from '../../page-footer/page-footer';
import FilmList from '../../film-list/film-list';
import Tabs from '../../tabs/tabs';
import OverviewTab from '../../tabs/overview';
import ReviewsTab from '../../tabs/reviews';
import DetailsTab from '../../tabs/details';
//import {RatingToText} from '../../../utils';
import {filmListProp} from '../../film-list/film-list.prop';
import {reviewListProp} from '../../tabs/review.prop';

function Film({films, comments}) {
  //const url = '#';
  const filmParam = useParams();
  const currentFilm = films.find((film) => film.id === filmParam.id);

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
            <Tabs >
              <OverviewTab label="tab1" currentFilm={currentFilm} />
              <DetailsTab label="tab2" />
              <ReviewsTab label="tab3" comments={comments}  />
            </Tabs>


            {/*<div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href={url} className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href={url} className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href={url} className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{currentFilm.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{RatingToText(currentFilm.rating)}</span>
                  <span className="film-rating__count">{currentFilm.scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{currentFilm.description}</p>
                <p className="film-card__director"><strong>Director: {currentFilm.director}</strong></p>
                <p className="film-card__starring"><strong>Starring: {currentFilm.starring.map((item, index) => (index ? ', ': '') + item)}</strong></p>
              </div>

            </div>*/}
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={films} />
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
