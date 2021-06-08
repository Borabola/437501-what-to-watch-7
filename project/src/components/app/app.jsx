import React from 'react';
import Start from '../start/start';
import PropTypes from 'prop-types';

function App({filmList, genre, releaseDate, title}) {
  return (
    <Start filmList={filmList} genre={genre} releaseDate={releaseDate} title={title} />
  );
}

App.propTypes = {
  filmList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgName: PropTypes.string.isRequired,
    filmTitle: PropTypes.string.isRequired,
  })),
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default App;
