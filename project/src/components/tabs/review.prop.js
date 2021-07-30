import PropTypes from 'prop-types';

const reviewProp = PropTypes.shape({
  comment: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  rating: PropTypes.number,
});

const reviewListProp = PropTypes.arrayOf(reviewProp);

export {reviewListProp, reviewProp};
