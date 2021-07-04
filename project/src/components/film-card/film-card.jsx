import React, {useEffect, useState} from 'react';
import { Link, withRouter } from 'react-router-dom';

import EmbeddedVideo from '../embedded-video/embedded-video';
import PropTypes from 'prop-types';
import {filmProp} from '../film-list/film-list.prop';
import {VIDEO_DELAY} from '../../const';


function FilmCard(props) {

  const {film, isPlaying, onCardHover, onCardLeave} = props;
  const [isFilmCardPlaying, setIsFilmCardPlaying] = useState(isPlaying);

  useEffect(() => {
    let hoverTimer = 0;
    if (isPlaying) {
      hoverTimer = setTimeout(() => {
        setIsFilmCardPlaying(isPlaying);
      }, VIDEO_DELAY);
    } else {
      setIsFilmCardPlaying(isPlaying);
    }

    return () => {
      clearTimeout(hoverTimer);
    };
  }, [isPlaying]);

  return (
    <article className="small-film-card catalog__films-card" data-id={film.id} onMouseOver={onCardHover} onMouseLeave={onCardLeave}>
      <div className="small-film-card__image">
        <EmbeddedVideo filmVideo={film.filmVideo} filmPoster={film.imgName} isPlaying={isFilmCardPlaying}/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  isPlaying: PropTypes.bool,
  onCardHover: PropTypes.func,
  onCardLeave: PropTypes.func,
  film: filmProp,
};

export default withRouter(FilmCard);
