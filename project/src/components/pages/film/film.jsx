import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import PageFooter from '../../page-footer/page-footer';
import PlayButton from '../../play-btn/play-btn';
import MyListButton from '../../my-list-button/my-list-button';
import FilmList from '../../film-list/film-list';
import Tabs from '../../tabs/tabs';
import BtnShowMore from '../../btnShowMore/btnShowMore';
import LoadingScreen from '../../loading-screen/loading-screen';
import {AuthorizationStatus, FilmsCount} from '../../../const';
import {fetchCurrentFilm, fetchSimilarFilmList, fetchCurrentComments} from '../../../store/api-actions';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import {getCurrentFilm, getCurrentComments, getCurrentFilmLoadedStatus, getCurrentCommentsLoadedStatus, getSimilarFilmsLoadedtatus, getSimilarFilms} from '../../../store/film-data/selectors';


function Film() {
  const filmParam = useParams();

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const currentFilm = useSelector(getCurrentFilm);
  const comments = useSelector(getCurrentComments);
  const isCurrentFilmLoaded = useSelector(getCurrentFilmLoadedStatus);
  const isCurrentCommentsLoaded = useSelector(getCurrentCommentsLoadedStatus);
  const isSimilarFilmsLoaded = useSelector(getSimilarFilmsLoadedtatus);
  const similarFilms = useSelector(getSimilarFilms);

  const [showenFilmsCount, setshowenFilmsCount] = useState(FilmsCount.SIMILAR);

  const dispatch = useDispatch();

  const onLoad = (id) => {
    dispatch(fetchCurrentFilm(id));
    dispatch(fetchCurrentComments(id));
    dispatch(fetchSimilarFilmList(id));
  };

  useEffect(() => {
    onLoad(filmParam.id);
  }, [ filmParam.id ]);

  const showMoreFilmsHandler = () => {
    setshowenFilmsCount(showenFilmsCount + FilmsCount.SIMILAR);
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
                <PlayButton filmId={filmParam.id.toString()}/>
                <MyListButton film={currentFilm}/>
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

          <FilmList films={similarFilms}  filmsNumber={showenFilmsCount} />
          {showenFilmsCount < similarFilms.length && <BtnShowMore onBtnClick={showMoreFilmsHandler}/>}
        </section>

        <PageFooter />
      </div>
    </>
  );
}

export default Film;
