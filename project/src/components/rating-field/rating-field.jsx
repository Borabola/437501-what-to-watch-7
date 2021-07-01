import React from 'react';
import PropTypes from 'prop-types';

function RatingField(props) {
  const {index, ratingValue, onRatingChange} = props;


  return (
    <>
      <input className="rating__input" id={`star-${index}`} type="radio" name="rating"  defaultValue={index} checked={ratingValue === index} onChange= {onRatingChange} />
      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
    </>
  );
}

RatingField.propTypes = {
  index: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  ratingValue: PropTypes.number.isRequired,
};

export default RatingField;
