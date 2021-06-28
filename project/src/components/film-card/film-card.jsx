import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import EmbeddedVideo from '../embedded-video/embedded-video';
import PropTypes from 'prop-types';
import {filmProp} from '../film-list/film-list.prop';

function FilmCard(props) {
  const {film, onCardHover} = props;
  const imgLink = `${film.imgName}`;

  return (
    <article className="small-film-card catalog__films-card" data-id={film.id} onMouseOver={onCardHover} >
      <div className="small-film-card__image">
        <img src={imgLink} alt={film.name} width="280" height="175" />
        <EmbeddedVideo filmVideo={film.filmVideo} filmPoster={film.filmPoster} />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  onCardHover: PropTypes.func,
  film: filmProp,
};

export default withRouter(FilmCard);
