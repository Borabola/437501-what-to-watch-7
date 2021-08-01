import React, { useState } from 'react';
import {connect} from 'react-redux';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import PageFooter from '../../page-footer/page-footer';
import FilmList from '../../film-list/film-list';
import GenreList from '../../genre-list/genre-list';
import BtnShowMore from '../../btnShowMore/btnShowMore';
import {getFilteredFilms} from '../../../utils';
import {FilmsCount} from '../../../const';
import PropTypes from 'prop-types';
import {filmProp, filmListProp} from '../../film-list/film-list.prop';
import {getGenre, getFilms, getPromoFilm} from '../../../store/film-data/selectors';

function Main({films, currentGenre, promoFilm}) {
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
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
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

Main.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  films: filmListProp,
  promoFilm: filmProp,
};

const mapStateToProps = (state) => ({
  currentGenre: getGenre(state),
  films: getFilms(state),
  promoFilm: getPromoFilm(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
