import React, { useState } from 'react';
import FilmCard from '../film-card/film-card';
import {filmListProp} from './film-list.prop';

function FilmList({films}) {
  const [activeFilm, setActiveFilm] = useState({id: null});

  const changeActiveFilmHandler = (evt) => {
    setActiveFilm({...activeFilm, id: evt.currentTarget.dataset.id});
  };

  return (
    <div className="catalog__films-list">
      {films.map((item) => <FilmCard film={item}  key={item.id}  onCardHover={changeActiveFilmHandler}/>)}
    </div>
  );
}

FilmList.propTypes = {
  films: filmListProp,
};

export default FilmList;
