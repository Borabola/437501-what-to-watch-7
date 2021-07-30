import React from 'react';
import {RatingToText} from '../../utils';
import {filmPropDefault} from '../film-list/film-list.prop';

function OverviewTab({currentFilm}) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{RatingToText(currentFilm.rating)}</span>
          <span className="film-rating__count">{currentFilm.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{currentFilm.description}</p>
        <p className="film-card__director"><strong>Director: {currentFilm.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {Array.isArray(currentFilm.starring) ? currentFilm.starring.map((item, index) => (index ? ', ': '') + item) : ''}</strong></p>
      </div>
    </>
  );
}

OverviewTab.propTypes = {
  currentFilm: filmPropDefault,
};

export default OverviewTab;
