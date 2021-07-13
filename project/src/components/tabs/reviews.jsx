import React from 'react';
import {reviewListProp} from './review.prop';
import Review from './review';

function ReviewsTab({comments}) {
  const renderNumber = Math.ceil(comments.length / 2);

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

};

export default ReviewsTab;
