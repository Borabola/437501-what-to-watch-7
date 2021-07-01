import React, {useState} from 'react';
import {MAX_RATING} from '../../const';
import RatingField from '../rating-field/rating-field';
const DEFAULT_RATING = 0;

function ReviewForm() {
  const [rating, setRating] = useState(DEFAULT_RATING);
  const [comment, setComment] = useState('');

  const onFormSubmit = (evt) => {
    evt.preventDefault();
  };

  const onRatingChange = (evt) => {
    if (evt.target.checked) {
      setRating(evt.target.value);
    }

  };

  const onCommentChange = (evt) => {
    setComment(evt.target.value);
  };

  return (
    <form action="#" className="add-review__form" onSubmit={onFormSubmit}>
      <div className="rating">
        <div className="rating__stars" data-rating = {rating} >
          {[...Array(MAX_RATING).keys()].map((i) => ++i).map((number, index) => <RatingField key={`${MAX_RATING}-${number}`}  index={MAX_RATING - index} ratingValue={+rating} onRatingChange={onRatingChange}/> )}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} onChange={onCommentChange}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

ReviewForm.propTypes = {

};

export default ReviewForm;
