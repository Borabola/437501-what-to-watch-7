import React from 'react';
import {RatingToText} from '../../utils';
//import PropTypes from 'prop-types';

function OverviewTab(currentFilm) {
  //const {index, ratingValue, onRatingChange} = props;


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
        <p className="film-card__starring"><strong>Starring: {currentFilm.starring.map((item, index) => (index ? ', ': '') + item)}</strong></p>
      </div>
    </>
  );
}

OverviewTab.propTypes = {

};

export default OverviewTab;
