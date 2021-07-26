import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import PageFooter from '../../page-footer/page-footer';
import FilmList from '../../film-list/film-list';
import Tabs from '../../tabs/tabs';
import BtnShowMore from '../../btnShowMore/btnShowMore';
import LoadingScreen from '../../loading-screen/loading-screen';
import {AuthorizationStatus, FilmsQnt} from '../../../const';
import {filmProp, filmListProp} from '../../film-list/film-list.prop';
import {ActionCreator} from '../../../store/action';
import {fetchCurrentFilm, fetchSimilarFilmList} from '../../../store/api-actions';
import PropTypes from 'prop-types';


function Film({authorizationStatus, currentFilm, dispatch, isCurrentLoaded, isSimilarFilmsLoaded, similarFilms,}) {
  const filmParam = useParams();
  const [showenfilmsQnt, setShowenfilmsQnt] = useState(FilmsQnt.SIMILAR);

  useEffect(() => {
    const resetFilmState = () => {
      dispatch(ActionCreator.resetCurrentFilm());
      dispatch(ActionCreator.resetSimilarFilms());
    };
    resetFilmState();

    dispatch(fetchCurrentFilm(filmParam.id));
    dispatch(fetchSimilarFilmList(filmParam.id));

  }, [ dispatch, filmParam.id]);


  const showMoreFilmsHandler = () => {
    setShowenfilmsQnt(showenfilmsQnt + FilmsQnt.SIMILAR);
  };

  if (!isCurrentLoaded && !isSimilarFilmsLoaded) {
    return (
      <LoadingScreen />
    );
  }

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
                {authorizationStatus === AuthorizationStatus.AUTH &&
                <Link
                  to={`/films/${filmParam.id}/review`}
                  href="add-review.html"
                  className="btn film-card__button"
                >Add review
                </Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327" />
            </div>
            <Tabs currentFilm={currentFilm}  />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilms}  filmsNumber={showenfilmsQnt} />
          {showenfilmsQnt < similarFilms.length && <BtnShowMore onBtnClick={showMoreFilmsHandler}/>}
        </section>

        <PageFooter />
      </div>
    </>
  );
}

Film.defaultProps = {
  currentFilm: null,
};

Film.propTypes = {
  currentFilm: PropTypes.shape({
    id: PropTypes.string,
    imgName: PropTypes.string,
    backgroundImage: PropTypes.string,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    filmVideo: PropTypes.string,
    filmPoster: PropTypes.string,
    description:  PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    isFavorite: PropTypes.bool,
  }),
  authorizationStatus: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  isCurrentLoaded: PropTypes.bool.isRequired,
  isSimilarFilmsLoaded: PropTypes.bool.isRequired,
  similarFilms: PropTypes.arrayOf(filmProp),
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  films: state.films,
  currentFilm: state.currentFilm,
  isCurrentLoaded: state.isCurrentLoaded,
  isSimilarFilmsLoaded: state.isSimilarFilmsLoaded,
  similarFilms: state.similarFilms,
});


export  {Film};
export default connect(mapStateToProps)(Film);
