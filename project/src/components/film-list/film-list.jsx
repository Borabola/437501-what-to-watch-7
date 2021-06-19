import React, { useState } from 'react';
import FilmCard from '../film-card/film-card';
import filmListProp from './film-list.prop';

function FilmList({filmList}) {
  const [activeFilm, setActiveFilm] = useState({id: null});

  const changeActiveFilmHandler = (filmId) => {
    setActiveFilm({...activeFilm, id: filmId});
  };

  return (
    <div className="catalog__films-list">
      {filmList.map((item) => <FilmCard filmTitle={item.filmTitle} imgName={item.imgName} key={item.id} onMouseOver={changeActiveFilmHandler}/>)}
    </div>
  );
}

FilmList.propTypes = {
  filmList: filmListProp,
};

export default FilmList;
