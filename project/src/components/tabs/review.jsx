import React from 'react';
import {format} from 'date-fns';
import {reviewProp} from './review.prop';

function Review({review}) {
  const {comment, name, rating, date} = review;
  const innerDateTime = format(new Date(date), 'yyyy-MM-dd');
  const textDateTime = format(new Date(date), 'MMMM dd, yyyy');

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={innerDateTime}>{textDateTime}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

Review.propTypes = {
  review: reviewProp,
};

export default Review;
