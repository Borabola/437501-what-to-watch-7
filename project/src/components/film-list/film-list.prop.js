import PropTypes from 'prop-types';


export default PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    filmPoster: PropTypes.string,
    filmVideo: PropTypes.string,
  }));

