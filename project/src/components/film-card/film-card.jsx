import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import EmbeddedVideo from '../embedded-video/embedded-video';
import PropTypes from 'prop-types';
import {filmProp} from '../film-list/film-list.prop';

function FilmCard(props) {
  const {film, isPlaying, onCardHover} = props;

  return (
    <article className="small-film-card catalog__films-card" data-id={film.id} onMouseOver={onCardHover} >
      <div className="small-film-card__image">

        <EmbeddedVideo filmVideo={film.filmVideo} filmPoster={film.imgName} isPlaying={isPlaying}/>
        {/*<img src={film.imgName} alt={film.name} width="280" height="175" />*/}
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
  film: filmProp,
};

export default withRouter(FilmCard);
