import React from 'react';
import PropTypes from 'prop-types';

function FilmCard({imgName, filmTitle}) {
  const imgLink = `img/${imgName}`;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imgLink} alt={filmTitle} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{filmTitle}</a>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  imgName: PropTypes.string.isRequired,
  filmTitle: PropTypes.string.isRequired,
};

export default FilmCard;
