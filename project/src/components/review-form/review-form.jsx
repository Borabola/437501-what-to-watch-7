import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
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
const errorServerMessage = ': Please try to sent your comment again later';


function ReviewForm({onSendFormComment, serverSendError}) {
  const filmParam = useParams();

  const [formData, setFormDate] = useState({
    comment: '',
    isFormValide: true,
    isCommentDirty: false,
    isCommentValide: false,
    isRating: false,
    isSending: false,
    rating: DEFAULT_RATING,
    serverError: null,
  });

  const {rating, comment, isCommentDirty, isCommentValide, isRating, isFormValide, isSending, serverError} = formData;

  useEffect(() => {
    if (!isCommentDirty && !isRating) {
      setFormDate({
        ...formData,
        isFormValide: false,
      });
    }
    setFormDate({
      ...formData,
      isFormValide: validateForm(),
    });
  }, [isRating, isCommentValide, isCommentDirty]);

  useEffect(() => {

    setFormDate({
      ...formData,
      serverError: serverSendError,
      isSending: false,
    });

  }, [serverSendError]);


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
      isSending: true,
      serverError: null,
    });

    if (isFormValide) {
      onSendFormComment(comment, filmParam.id, rating);
    }
  };

  const onRatingChange = (evt) => {
    if (evt.target.checked) {
      setFormDate({
        ...formData,
        rating: (evt.target.value),
        isRating: true,
      });
    }
  };

  const onCommentChange = (evt) => {
    const currentComment = evt.target.value;

    setFormDate({
      ...formData,
      comment: currentComment,
      isCommentDirty: true,
      isCommentValide: validateComment(),
    });

  };

  return (
    <form action="#" className="add-review__form" onSubmit={onFormSubmit}>
      <div className="rating">
        <div className="rating__stars" data-rating = {rating} >
          {[...Array(MAX_RATING).keys()].map((i) => ++i).map((number, index) => <RatingField key={`${MAX_RATING}-${number}`}  index={MAX_RATING - index} ratingValue={+rating} onRatingChange={onRatingChange} isDisabled={isSending}/> )}
        </div>
      </div>

      {((isCommentDirty && !isFormValide) || (isRating && !isCommentDirty)) && <div style={{ fontSize: '14px', color: 'tomato', marginBottom: '15px' }}>{errorMessage}</div>}
      {(serverSendError !== null) && <div style={{ fontSize: '14px', color: 'tomato', marginBottom: '15px' }}>{`${serverError} ${errorServerMessage}`}</div>}


      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} onChange={onCommentChange} maxLength="400" minLength="50" disabled={isSending}></textarea>
        <div className="add-review__submit">
          <button disabled={!isFormValide || isSending} className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

ReviewForm.defaultProps = {
  serverSendError: null,
};

ReviewForm.propTypes = {
  onSendFormComment: PropTypes.func.isRequired,
  serverSendError: PropTypes.string,
};

const mapStateToProps = (state) => ({
  serverSendError: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSendFormComment(comment, id, rating){
    dispatch(sendComments(comment, id, rating));
  },
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
