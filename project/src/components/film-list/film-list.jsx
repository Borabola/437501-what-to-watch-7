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
      {films.map((item) => <FilmCard film={item}  key={item.id} isPlaying={(activeFilm.id === item.id)} onCardHover={changeActiveFilmHandler}/>)}
    </div>
  );
}

FilmList.propTypes = {
  films: filmListProp,
};

export default FilmList;


/*
useEffect(() => {
    const hoverTimer = setTimeout(() => {
      if (isPlaying && videoRef.current) {
        videoRef.current.play();
      }
    }, VIDEO_DELAY);

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        //videoRef.current.currentTime = 0;

        videoRef.current.src=filmVideo;
      }
      clearTimeout(hoverTimer);

    }
  }, [isPlaying]);
 */
