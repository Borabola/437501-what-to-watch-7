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
import {filmPropDefault} from '../../film-list/film-list.prop';
import {fetchCurrentFilm, fetchSimilarFilmList, fetchCurrentComments} from '../../../store/api-actions';
import {reviewListProp} from '../../tabs/review.prop';
import PropTypes from 'prop-types';


function Film({authorizationStatus, currentFilm, comments, onLoad, isCurrentFilmLoaded, isCurrentCommentsLoaded, isSimilarFilmsLoaded, similarFilms}) {
  const filmParam = useParams();
  const [showenFilmsQnt, setShowenFilmsQnt] = useState(FilmsQnt.SIMILAR);

  useEffect(() => {
    onLoad(filmParam.id);
  }, [ filmParam.id ]);

  const showMoreFilmsHandler = () => {
    setShowenFilmsQnt(showenFilmsQnt + FilmsQnt.SIMILAR);
  };

  if (!isCurrentFilmLoaded && !isSimilarFilmsLoaded && !isCurrentCommentsLoaded) {
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
            <Tabs currentFilm={currentFilm} comments={comments}  />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilms}  filmsNumber={showenFilmsQnt} />
          {showenFilmsQnt < similarFilms.length && <BtnShowMore onBtnClick={showMoreFilmsHandler}/>}
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
  currentFilm: filmPropDefault,
  comments: reviewListProp,
  authorizationStatus: PropTypes.string.isRequired,
  isCurrentFilmLoaded: PropTypes.bool.isRequired,
  isCurrentCommentsLoaded: PropTypes.bool.isRequired,
  isSimilarFilmsLoaded: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
  similarFilms: PropTypes.arrayOf(filmPropDefault),
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  films: state.films,
  currentFilm: state.currentFilm,
  comments: state.currentComments,
  isCurrentFilmLoaded: state.isCurrentFilmLoaded,
  isCurrentCommentsLoaded: state.isCurrentCommentsLoaded,
  isSimilarFilmsLoaded: state.isSimilarFilmsLoaded,
  similarFilms: state.similarFilms,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchCurrentFilm(id));
    dispatch(fetchSimilarFilmList(id));
    dispatch(fetchCurrentComments(id));
  },
});


export  {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
