import React, {useState} from 'react';
import {connect} from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import {MAX_RATING} from '../../const';
import RatingField from '../rating-field/rating-field';
import {sendComments} from '../../store/api-actions';
import PropTypes from 'prop-types';


const DEFAULT_RATING = 0;
const ValidComment = {
  MIN_LENGHT: 50,
  MAX_LENGTH: 400,
};
const errorMessage = 'Please mark the rating of the movie and write a comment from 40 to 400 letters';

function ReviewForm() {
  const filmParam = useParams();
  const history = useHistory();

  const [formData, setFormDate] = useState({
    comment: '',
    isFormValide: false,
    isCommentValide: false,
    isRating: false,
    rating: DEFAULT_RATING,
  });

  const {rating, comment, isCommentValide, isRating, isFormValide, onSendFormComment} = formData;

  const validateComment = () => {
    if ((comment.length > ValidComment.MIN_LENGHT) && (comment.length < ValidComment.MAX_LENGTH)) {
      return true;
    } else {
      return false;
    }
  };
  const validateForm = () => {
    if (isCommentValide && isRating) {
      return true;
    } else {
      return false;
    }
  };


  const onFormSubmit = (evt) => {
    evt.preventDefault();

    setFormDate({
      ...formData,
    });

    if (isFormValide) {
      onSendFormComment(comment, filmParam.id, rating, history);
    }
  };

  const onRatingChange = (evt) => {
    if (evt.target.checked) {
      setFormDate({
        ...formData,
        isRating: true,
        rating: (evt.target.value),
        isFormValide: validateForm(),
      });
    }
  };

  const onCommentChange = (evt) => {
    const currentComment = evt.target.value;

    setFormDate({
      ...formData,
      comment: currentComment,
      isCommentValide: validateComment(),
      isFormValide: validateForm(),
    });

  };

  return (
    <form action="#" className="add-review__form" onSubmit={onFormSubmit}>
      <div className="rating">
        <div className="rating__stars" data-rating = {rating} >
          {[...Array(MAX_RATING).keys()].map((i) => ++i).map((number, index) => <RatingField key={`${MAX_RATING}-${number}`}  index={MAX_RATING - index} ratingValue={+rating} onRatingChange={onRatingChange}/> )}
        </div>
      </div>

      {!isFormValide && <div style={{ fontSize: '14px', color: 'tomato', marginBottom: '15px' }}>{errorMessage}</div>}


      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} onChange={onCommentChange} maxLength="400" minLength="50" ></textarea>
        <div className="add-review__submit">
          <button disabled={!isFormValide} className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

const mapStateToProps = (state) => ({
  currentFilm: state.currentFilm,
  isCurrentLoaded: state.isCurrentLoaded,
  onSendFormComment: PropTypes.func.isRequired,
});

const mapDispatchToProps = (dispatch) => ({
  onSendFormComment(comment, id, rating, history){
    dispatch(sendComments(comment, id, rating, history));
  },
});


export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
