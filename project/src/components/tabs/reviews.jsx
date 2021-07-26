import React, { useEffect} from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import {reviewListProp} from './review.prop';
import {ActionCreator} from '../../store/action';
import {fetchCurrentComments} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Review from './review';
import PropTypes from 'prop-types';

function ReviewsTab({comments, dispatch, isCurrentCommentsLoaded}) {
  const filmParam = useParams();
  useEffect(() => {
    const resetCommentState = () => {
      dispatch(ActionCreator.resetCurrentComments());
    };
    resetCommentState();

    dispatch(fetchCurrentComments(filmParam.id));

  }, [ dispatch, filmParam.id]);
  const renderNumber = Math.ceil(comments.length / 2);

  if (!isCurrentCommentsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.slice(0, renderNumber).map((comment) =>
          <Review key={`${comment.id} +'-'+ ${comment.date}`} review={comment}/>)}
      </div>
      <div className="film-card__reviews-col">
        {comments.slice(renderNumber).map((comment) =>
          <Review key={`${comment.id} +'-'+ ${comment.date}`} review={comment}/>)}
      </div>
    </div>
  );
}

ReviewsTab.propTypes = {
  comments: reviewListProp,
  dispatch: PropTypes.func.isRequired,
  isCurrentCommentsLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  comments: state.currentComments,
  //currentFilm: state.currentFilm,
  isCurrentCommentsLoaded: state.isCurrentCommentsLoaded,
});

export  {ReviewsTab};
export default connect(mapStateToProps)(ReviewsTab);
