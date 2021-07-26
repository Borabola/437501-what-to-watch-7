import PropTypes from 'prop-types';

const reviewProp = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
});

const reviewListProp = PropTypes.arrayOf(reviewProp);

export {reviewListProp, reviewProp};
