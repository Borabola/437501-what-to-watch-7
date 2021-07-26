import PropTypes from 'prop-types';

const filmProp = PropTypes.shape({
  id: PropTypes.string.isRequired,
  imgName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  backgroundImage:  PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  filmVideo: PropTypes.string,
  filmPoster: PropTypes.string,
  description:  PropTypes.string,
  genre: PropTypes.string,
  released: PropTypes.number,
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  runTime: PropTypes.number,
  isFavorite: PropTypes.bool,
});

const filmListProp = PropTypes.arrayOf(filmProp);

export {filmListProp, filmProp};

