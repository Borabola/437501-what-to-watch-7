import React from 'react';
import PropTypes from 'prop-types';

function ReviewBlock({reviewAuthor, reviewDate, reviewRating, reviewText}) {


  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{reviewText}</p>

        <footer className="review__details">
          <cite className="review__author">{reviewAuthor}</cite>
          <time className="review__date" dateTime="2016-12-24">{reviewDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{reviewRating}</div>
    </div>
  );
}

ReviewBlock.propTypes = {
  reviewAuthor: PropTypes.string.isRequired,
  reviewDate: PropTypes.string.isRequired,
  reviewRating: PropTypes.number.isRequired,
  reviewText: PropTypes.string.isRequired,
};

export default ReviewBlock;
