import React from 'react';
import { Link } from 'react-router-dom';

import EmbeddedVideo from '../embedded-video/embedded-video';
import PropTypes from 'prop-types';

function FilmCard(props) {
  const {filmId, filmTitle, imgName, filmVideo, filmPoster, onCardHover} = props;
  const imgLink = `img/${imgName}`;

  return (
    <article className="small-film-card catalog__films-card" data-id={filmId} onMouseOver={onCardHover} >
      <div className="small-film-card__image">
        <img src={imgLink} alt={filmTitle} width="280" height="175" />
        <EmbeddedVideo filmVideo={filmVideo} filmPoster={filmPoster} />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${filmId}`} className="small-film-card__link">{filmTitle}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  onCardHover: PropTypes.func,
  filmId: PropTypes.string.isRequired,
  filmTitle: PropTypes.string.isRequired,
  filmVideo: PropTypes.string.isRequired,
  filmPoster: PropTypes.string.isRequired,
  imgName: PropTypes.string.isRequired,

};

export default FilmCard;
