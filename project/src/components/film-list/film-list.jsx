import React, { useState } from 'react';
import FilmCard from '../film-card/film-card';
import {filmListProp} from './film-list.prop';
import PropTypes from 'prop-types';

function FilmList({films, filmsNumber}) {
  const [activeFilm, setActiveFilm] = useState({id: null});

  const changeActiveFilmHandler = (evt) => {
    setActiveFilm({...activeFilm, id: evt.currentTarget.dataset.id});
  };

  const removeActiveFilmHandler = () => {
    setActiveFilm({id: null});
  };

  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsNumber).map((item) => <FilmCard film={item}  key={item.id} isPlaying={(activeFilm.id === item.id)} onCardHover={changeActiveFilmHandler} onCardLeave={removeActiveFilmHandler}/>)}
    </div>
  );
}

FilmList.defaultProps = {
  filmsNumber: PropTypes.number,
};

FilmList.propTypes = {
  films: filmListProp,
  filmsNumber: PropTypes.number.isRequired,
};

export default FilmList;
