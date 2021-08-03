import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import PageFooter from '../../page-footer/page-footer';
import FilmList from '../../film-list/film-list';
import GenreList from '../../genre-list/genre-list';
import BtnShowMore from '../../btnShowMore/btnShowMore';
import PlayButton from '../../play-btn/play-btn';
import MyListButton from '../../my-list-button/my-list-button';
import {getFilteredFilms} from '../../../utils';
import {FilmsCount} from '../../../const';
import {getGenre, getFilms, getPromoFilm} from '../../../store/film-data/selectors';

function Main() {
  const currentGenre = useSelector(getGenre);
  const films = useSelector(getFilms);
  const promoFilm = useSelector(getPromoFilm);

  const [showenFilmsCount, setShowenFilmsCount] = useState(FilmsCount.MAIN);
  const filteredFilms = getFilteredFilms(films, currentGenre);
  const showMoreFilmsHandler = () => {
    setShowenFilmsCount(showenFilmsCount + FilmsCount.MAIN);
  };

  const onChangeGenreClick = () => {
    setShowenFilmsCount(FilmsCount.MAIN);
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton filmId={promoFilm.id.toString()}/>
                <MyListButton film={promoFilm} isPromo />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList films={films} onChangeGenreClick={onChangeGenreClick}/>
          <FilmList films={filteredFilms} filmsNumber={showenFilmsCount} />
          {showenFilmsCount < filteredFilms.length && <BtnShowMore onBtnClick={showMoreFilmsHandler}/>}
        </section>

        <PageFooter />
      </div>
    </>
  );
}

export default Main;
