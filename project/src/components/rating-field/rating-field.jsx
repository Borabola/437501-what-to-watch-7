import React from 'react';
import PropTypes from 'prop-types';

function RatingField(props) {
  const {index, ratingValue, onRatingChange, isDisabled} = props;

  return (
    <>
      <input className="rating__input" id={`star-${index}`} type="radio" name="rating"  defaultValue={index} checked={ratingValue === index} onChange= {onRatingChange} disabled={isDisabled}/>
      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
    </>
  );
}

RatingField.propTypes = {
  index: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  ratingValue: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool,
};

export default RatingField;
