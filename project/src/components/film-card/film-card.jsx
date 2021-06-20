import React from 'react';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import EmbeddedVideo from '../embedded-video/embedded-video';
import PropTypes from 'prop-types';

function FilmCard({filmTitle, imgName, filmVideo, filmPoster}) {
  const imgLink = `img/${imgName}`;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imgLink} alt={filmTitle} width="280" height="175" />
        <EmbeddedVideo filmVideo={filmVideo} filmPoster={filmPoster} />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.FILM} className="small-film-card__link">{filmTitle}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  imgName: PropTypes.string.isRequired,
  filmVideo: PropTypes.string.isRequired,
  filmPoster: PropTypes.string.isRequired,
};

export default FilmCard;
